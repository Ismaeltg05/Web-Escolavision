import React from "react";
import "./Downloads.css";
import { FaGooglePlay, FaWindows, FaLinux, FaApple } from "react-icons/fa";

function Downloads() {
  return (
    <div className="download-links">
      <div className="download-section">
        <label>Descarga nuestra app para Android:</label>
        <button className="download-button">
          <a
            href="https://play.google.com/store/apps/details?id=com.escolavision.testescolavision&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay className="icon" />
            <span className="lblButton">Descargar desde PlayStore</span>
          </a>
        </button>
        <button className="download-button">
          <a
            href="/src/downloads/app-release.apk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay className="icon" />
            <span className="lblButton">Descargar el APK</span>
          </a>
        </button>
      </div>
      <div className="download-section">
        <label>Descarga nuestra app para Windows, Linux y Mac:</label>
        
          <button className="download-button">
          <a href="/path/to/your/file.exe" download>
            <FaWindows className="icon" />
            <FaLinux className="icon" />
            <FaApple className="icon" />
            <span className="lblButton">Descargar app</span>
            </a>
          </button>
      </div>
    </div>
  );
}

export default Downloads;
