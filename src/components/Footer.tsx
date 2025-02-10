import React from 'react';
import { FooterProps } from '../types/FooterTypes';
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  RssIcon 
} from './icon/index';

const Footer: React.FC<FooterProps> = ({ contactInfo, sections }) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white uppercase font-semibold mb-6">CONTACTS</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">{contactInfo.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>{contactInfo.phone1}</p>
                  <p>{contactInfo.phone2}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm text-gray-300">{contactInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Produit Section */}
          <div>
            <h3 className="text-white uppercase font-semibold mb-6">{sections.produit.title}</h3>
            <ul className="space-y-2">
              {sections.produit.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sombateka Section */}
          <div>
            <h3 className="text-white uppercase font-semibold mb-6">{sections.sombateka.title}</h3>
            <ul className="space-y-2">
              {sections.sombateka.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-white uppercase font-semibold mb-6">{sections.categories.title}</h3>
            <ul className="space-y-2">
              {sections.categories.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">Tekasomba ©2025, tous droit réservés</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <RssIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;