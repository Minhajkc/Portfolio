import React from 'react';

const CodingBackground = () => {
  return (
    <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-blue-900 to-blue-900 animate-pulse overflow-hidden">
      {/* Code lines */}
      {[...Array(10)].map((_, i) => (
        <div 
          key={i}
          className="absolute left-0 right-0 h-px bg-white opacity-20"
          style={{
            top: `${10 * i}%`,
            animation: `slide-right ${5 + i}s linear infinite`
          }}
        ></div>
      ))}

      {/* Floating symbols */}
      {['<>', '/>', '{}', '[]', '()', '&&', '||', '=>', '===', '!='].map((symbol, i) => (
        <div
          key={i}
          className="absolute text-white text-opacity-30 text-2xl"
          style={{
            left: `${10 * i}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + i}s ease-in-out infinite alternate`
          }}
        >
          {symbol}
        </div>
      ))}

      {/* Binary background */}
      <div className="absolute inset-0 text-white text-opacity-5 text-xs overflow-hidden whitespace-nowrap animate-scroll">
        {'01'.repeat(1000)}
      </div>

      <style jsx>{`
        @keyframes slide-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-20px); }
        }
        @keyframes scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CodingBackground;