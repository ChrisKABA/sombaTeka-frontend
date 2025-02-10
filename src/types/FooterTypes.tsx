export interface ContactInfo {
    address: string;
    phone1: string;
    phone2: string;
    email: string;
  }
  
  export interface FooterSection {
    title: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  }
  
  export interface FooterProps {
    contactInfo: ContactInfo;
    sections: {
      produit: FooterSection;
      sombateka: FooterSection;
      categories: FooterSection;
    };
  }