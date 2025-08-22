import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Restaurant. All Rights Reserved.</p>
    </footer>
  );
}
