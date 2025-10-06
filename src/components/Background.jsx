// src/components/common/Background.jsx

import React from 'react';

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <style>{`
        .glowing-orb {
          filter: blur(80px);
          animation: glow-animation 15s infinite ease-in-out;
        }

        .glowing-orb.one {
          background-color: #8a2be2;
          width: 250px;
          height: 250px;
          top: 5%;
          left: 5%;
          animation-delay: 0s;
        }

        .glowing-orb.two {
          background-color: #00ffff;
          width: 200px;
          height: 200px;
          top: 40%;
          left: 80%;
          animation-delay: 5s;
        }

        .glowing-orb.three {
          background-color: #8B5CF6;
          width: 300px;
          height: 300px;
          top: 70%;
          left: 20%;
          animation-delay: 10s;
        }

        @keyframes glow-animation {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          25% { transform: scale(1.1) translate(50px, -20px); opacity: 0.7; }
          50% { transform: scale(0.9) translate(-50px, 30px); opacity: 0.6; }
          75% { transform: scale(1.2) translate(20px, 40px); opacity: 0.8; }
        }
      `}</style>
      <div className="glowing-orb one absolute rounded-full opacity-50"></div>
      <div className="glowing-orb two absolute rounded-full opacity-50"></div>
      <div className="glowing-orb three absolute rounded-full opacity-50"></div>
    </div>
  );
};

export default Background;