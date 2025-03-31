import '../css/whatsappButton.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+543815996586" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;