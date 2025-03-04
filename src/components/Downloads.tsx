import React from 'react';
import "./Downloads.css";
import { FaGooglePlay, FaWindows, FaLinux, FaApple } from 'react-icons/fa';

function Downloads() {
  return (
    <div className="download-links">
      <div className="download-section">
        <label>Descarga nuestra app para Movil:</label>
        <a href="https://play.google.com/store/apps/details?id=com.escolavision.testescolavision&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
          <button className="download-button">
            <FaGooglePlay className="icon" /> Descargar desde PlayStore
          </button>
        </a>
      </div>
      <div className="download-section">
        <label>Descarga nuestra app para Windows, Linux y Mac:</label>
        <a href="/path/to/your/file.exe" download>
          <button className="download-button">
            <FaWindows className="icon" /> <FaLinux className="icon" /> <FaApple className="icon" /> Descargar app de Escritorio
          </button>
        </a>
      </div>
    </div>
  );
}

export default Downloads;