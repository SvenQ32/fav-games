import { useState, useEffect } from 'react';
import { GameCard, Game } from './components/GameCard';
import { FrontPage } from './components/FrontPage';
import { CategoryFilter } from './components/CategoryFilter';
import { Search, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { pagesConfig, PageConfig, FrontPageConfig } from './config';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = pagesConfig.length;
  const currentPageItem = pagesConfig[currentPage];

  // Preload all images on mount
  useEffect(() => {
    const imagesToPreload: string[] = [];
    
    // Collect all game icon paths and profile pictures
    pagesConfig.forEach(page => {
      if (page.type === 'frontpage') {
        imagesToPreload.push(page.profilePicture);
      } else {
        page.games.forEach(game => {
          if (game.iconPath) {
            imagesToPreload.push(game.iconPath);
          }
        });
      }
    });

    // Preload images
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        goToNextPage();
      } else if (event.key === 'ArrowLeft' || event.key === 'q' || event.key === 'Q') {
        goToPreviousPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  // Calculate grid columns based on tiles per page
  const getGridCols = (tilesPerPage: number) => {
    if (tilesPerPage === 1) return 'grid-cols-1 place-items-center';
    if (tilesPerPage <= 2) return 'grid-cols-1 md:grid-cols-2';
    if (tilesPerPage === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (tilesPerPage <= 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2';
    if (tilesPerPage === 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  // Check if current page is front page
  const isFrontPage = currentPageItem.type === 'frontpage';
  
  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: currentPageItem.background }}
    >
      {/* Main Content */}
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isFrontPage ? 'py-8' : 'py-16 flex flex-col justify-center min-h-screen'}`}>
        {isFrontPage ? (
          // Render Front Page
          <motion.div
            key={`frontpage-${currentPage}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <FrontPage
              profilePicture={(currentPageItem as FrontPageConfig).profilePicture}
              title={(currentPageItem as FrontPageConfig).title}
              description={(currentPageItem as FrontPageConfig).description}
            />
          </motion.div>
        ) : (
          // Render Game Page
          <>
            {/* Page Title */}
            <motion.h1 
              key={`title-${currentPage}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-5xl font-bold text-white text-center mb-16"
            >
              {(currentPageItem as PageConfig).title}
            </motion.h1>

            {/* Games Grid */}
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`grid ${getGridCols((currentPageItem as PageConfig).tilesPerPage)} gap-10 mb-16 justify-items-center`}
            >
              {(currentPageItem as PageConfig).games.slice(0, (currentPageItem as PageConfig).tilesPerPage).map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </motion.div>
          </>
        )}

        {/* Pagination Controls */}
        <div className="flex flex-col items-center gap-6">
          {/* Page Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentPage 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
