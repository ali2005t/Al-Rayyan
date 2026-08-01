import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "أعمالنا",
      contact: "اتصل بنا",
      factory: "المصنع",
      estimator: "حاسبة المواصفات",
      faq: "الأسئلة الشائعة",
      hero_title_1: "نصنع الجودة...",
      hero_title_2: "ونبني الثقة",
      // ... more can be added
    }
  },
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
      factory: "Factory",
      estimator: "Estimator",
      faq: "FAQ",
      hero_title_1: "We Craft Quality...",
      hero_title_2: "And Build Trust",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // default language
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
