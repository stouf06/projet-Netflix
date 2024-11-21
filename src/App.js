
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const socialLinks = [
    { href: '#', icon: 'fab fa-facebook', label: 'Facebook' },
    { href: '#', icon: 'fab fa-instagram', label: 'Instagram' },
    { href: '#', icon: 'fab fa-twitter', label: 'Twitter' },
    { href: '#', icon: 'fab fa-youtube', label: 'YouTube' }
  ];

  const footerLinks = [
    [
        { href: '#', label: 'Audio et sous-titre' },
        { href: '#', label: 'Presse' },
        { href: '#', label: 'Confidentialité' },
        { href: '#', label: 'Nous contacter' }
    ],
    [
        { href: '#', label: 'Autodescription' },
        { href: '#', label: 'Relations Investisseur' },
        { href: '#', label: 'Informations légales' }
    ],
    [
        { href: '#', label: 'Centre d\'aide' },
        { href: '#', label: 'Recrutement' },
        { href: '#', label: 'Préférences de cookies' }
    ],
    [
        { href: '#', label: 'Cartes cadeaux' },
        { href: '#', label: 'Conditions d\'utilisation' },
        { href: '#', label: 'Mentions légales' }
    ]
  ];
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Carrousel/>
      <Footer
                socialLinks={socialLinks}
                footerLinks={footerLinks}
                serviceCodeText="Service Code"
                copyright="© 1997-2024 Netflix, Inc."
            />
      
    </div>
  );
}

export default App;