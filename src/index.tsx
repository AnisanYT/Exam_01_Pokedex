import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ComponentBox from './components/box';
import App from './App';
import GetPokemon from './components/getPokemon';
import reportWebVitals from './reportWebVitals';

const AppWrapper: React.FC = () => {
    const [selectedGeneration, setSelectedGeneration] = useState<number | null>(null);

    const handleGenerationSelect = (generation: number) => {
        setSelectedGeneration(generation);
    };

    return (
        <React.StrictMode>
            <App />
            <ComponentBox onGenerationSelect={handleGenerationSelect} />
            <GetPokemon selectedGeneration={selectedGeneration} />
        </React.StrictMode>
    );
};
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<AppWrapper />);
  } else {
    console.error("Elemento 'root' no encontrado en el DOM.");
  }

reportWebVitals();
