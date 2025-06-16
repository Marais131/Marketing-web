
import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  image = '/lovable-uploads/5a68349a-be9d-4fe6-854f-9314ed8de50b.png',
  url,
  type = 'website'
}: SEOHeadProps) => {
  useEffect(() => {
    // 設定頁面標題
    document.title = title;
    
    // 設定或更新meta標籤
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 基本meta標籤
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }
    
    // Open Graph標籤
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:image', image, true);
    if (url) {
      setMetaTag('og:url', url, true);
    }
    
    // Twitter Card標籤
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    
    // 教育機構Schema標記
    const addSchemaMarkup = () => {
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }
      
      const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "中國文化大學行銷學系",
        "alternateName": "文化大學行銷所",
        "url": window.location.origin,
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "TW",
          "addressRegion": "台北市"
        },
        "foundingDate": "1962",
        "educationalCredentialAwarded": "碩士學位",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "行銷學碩士"
        }
      };
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };
    
    addSchemaMarkup();
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;
