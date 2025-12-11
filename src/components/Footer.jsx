import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 DV. All rights reserved.</p>
      <div>
        <a href="/about">About</a> | 
        {/* <a href="/contact">Contact</a> | */}
        <Link to="/contact">Contact</Link> |
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
