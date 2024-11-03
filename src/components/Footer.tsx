import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="z-10 bg-base-100 p-4 text-center">
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/aliir74"
          className="text-xl hover:opacity-80"
          style={{ color: "#333" }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/aliirani"
          className="text-xl hover:opacity-80"
          style={{ color: "#0A66C2" }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://t.me/@notesfromadeveloper"
          className="text-xl hover:opacity-80"
          style={{ color: "#229ED9" }}
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          href="https://youtube.com/@aliirani74"
          className="text-xl hover:opacity-80"
          style={{ color: "#FF0000" }}
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="mailto:aliirani74@gmail.com"
          className="text-xl hover:opacity-80"
          style={{ color: "#EA4335" }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://aliirani.com"
          className="text-xl hover:opacity-80"
          style={{ color: "#2962FF" }}
        >
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
