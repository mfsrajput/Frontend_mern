import { Github, Linkedin } from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      Created by <strong>Farhan Rajput</strong> —{' '}
      <a href="https://github.com/mfsrajput" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <Github size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-farhan-rajput-78b5062b9/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-2"
      >
        <Linkedin size={20} />
      </a>
    </footer>
  );
}
