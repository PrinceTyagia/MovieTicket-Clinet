import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTran from "./locales/en/translation.json";
import hiTran from "./locales/hi/translation.json";
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  resources: {
    en: enTran,
    hi: hiTran,
  },

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
