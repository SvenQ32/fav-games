import { motion } from 'motion/react';

interface FrontPageProps {
  profilePicture: string;
  title: string;
  description: string;
}

export function FrontPage({ profilePicture, title, description }: FrontPageProps) {
  const isGif = profilePicture.toLowerCase().endsWith('.gif');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 max-w-2xl text-center"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
        >
          <img 
            src={profilePicture} 
            alt="Profile" 
            className="w-full h-full object-cover"
            style={isGif ? { transform: 'scale(1.2)' } : {}}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-white"
          style={{
            fontFamily: '"Old English Text MT", serif',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)',
          }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg md:text-xl text-white/70 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Navigation Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 flex items-center gap-2 text-white/50 text-sm"
        >
          <span>Press</span>
          <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20">→</kbd>
          <span>or</span>
          <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20">D</kbd>
          <span>to continue</span>
        </motion.div>
      </motion.div>
    </div>
  );
}