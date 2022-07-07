import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { NAMESPACE } from "./constants";

i18n
  .use(
    new Backend({
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      allowMultiLoading: true,
    })
  )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["navigator"],
      caches: [],
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    ns: Object.values(NAMESPACE),
    defaultNS: NAMESPACE.GLOBAL,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
