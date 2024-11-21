
import React from 'react';
import "../assets/Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer({ socialLinks, footerLinks, serviceCodeText, copyright }) {
    return (
        <footer className="footer">
            {/* Section des réseaux sociaux */}
            <div className="footer-social">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} aria-label={link.label}>
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>

            {/* Section des liens */}
            <div className="footer-links">
                {footerLinks.map((column, columnIndex) => (
                    <ul key={columnIndex}>
                        {column.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

            {/* Bouton Service Code */}
            <button className="service-code-btn">{serviceCodeText}</button>

            {/* Copyright */}
            <p className="footer-copyright">{copyright}</p>
        </footer>
    );
}

export default Footer;