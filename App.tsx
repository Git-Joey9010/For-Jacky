import React from 'react';
import { Scene } from './components/Scene';
import { UI } from './components/UI';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen relative bg-black">
        {/* 3D Scene Layer */}
        <div className="absolute inset-0 z-0">
            <Scene />
        </div>
        
        {/* UI Overlay Layer */}
        <UI />
    </div>
  );
};

export default App;