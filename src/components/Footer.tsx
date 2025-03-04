import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© EscolaVision. Designed by: Ismael Torres & Adrian Ruiz</p>
      <div className="download-links">
        <a href="https://play.google.com/store/apps/details?id=com.escolavision.testescolavision&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
          <button className="download-button">Descargar desde PlayStore</button>
        </a>
        <a href="/path/to/your/file.exe" download>
          <button className="download-button">Descargar archivo .exe</button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;