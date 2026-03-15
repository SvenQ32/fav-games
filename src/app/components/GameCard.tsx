import { Star } from 'lucide-react';
import svgPaths from "../../imports/svg-l0jzsesfwx";
import { ImageWithFallback } from './figma/ImageWithFallback';
import './GameCard.css';

export interface Game {
  id: number;
  title: string;
  category: string;
  rating: number;
  iconPath?: string;
}

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const renderIcon = () => {
    // If custom icon path is provided and not empty, use it
    if (game.iconPath && game.iconPath.trim() !== '') {
      return (
        <ImageWithFallback 
          src={game.iconPath} 
          alt={game.title}
          className="card-img"
        />
      );
    }
    
    // Otherwise use default Ethereum SVG
    return (
      <svg className="card-img" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39">
        <g id="Layer_x0020_1">
          <g id="_1421394342400">
            <g>
              <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" />
              <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
              <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" />
              <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
              <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
              <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
            </g>
          </g>
        </g>
      </svg>
    );
  };

  return (
    <div className="card-wrapper">
      <div className="game-card">
        {renderIcon()}
        <div className="textBox">
          <p className="text head">{game.title}</p>
          <span>{game.category}</span>
          <p className="text price">{game.rating}/10</p>
        </div>
      </div>
    </div>
  );
}