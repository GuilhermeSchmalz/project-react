import React from 'react';
import { Button } from '../Button/Button.js'; // Importe diretamente do arquivo Button.js
import '../../App.js';
import './style.css';

function MapSection() {
  return (
    <body>
      <div className = 'map-container'>
        <h1>
          Prepare-se! Mapcife ta chegando...
        </h1>
        <div className = 'map-btn'>
          <Button linkTo = '/about' className = 'bts-about' buttonStyle = 'btn--primary' buttonSize = 'btn--large'>
              Saiba mais!
          </Button>
        </div>
      </div>
    </body>
  )
}

export default MapSection
