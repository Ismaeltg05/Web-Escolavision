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
      </div>

      <div className="download-section">
        <label>Descarga el apk de nuestra app:</label>
          <button className="download-button">
          <a
            href="https://drive.google.com/file/d/11jAIOyFpoGKVwlo1Jz5rHHxYCqpz3lhj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
	          <FaGooglePlay className="icon" />
            <span className="lblButton">Descargar APK</span>
            </a>
          </button>
      </div>

      <div className="download-section">
        <label>Descarga nuestra app para Windows:</label>
        
          <button className="download-button">
          <a
            href="https://drive.google.com/file/d/1tKJSCZ8HfE2EXtT-7cFFplCI-aCGfWbb/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWindows className="icon" />
            <span className="lblButton">Descargar app</span>
            </a>
          </button>
      </div>
    </div>
  );
}

export default Downloads;
