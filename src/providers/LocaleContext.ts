import { createContext } from "react";
import { Locales } from "../config/locales";

export const LocaleContext = createContext({
    languages: Locales,
    locale: getCurrentLocale(),
    setLocale: setCurrentLocale
});

export function getCurrentLocale() {
    return localStorage.getItem("locale") || "en";
}

export function setCurrentLocale(newLocale: string) {
    localStorage.setItem("locale", newLocale);
    document.querySelector("html")?.setAttribute("lang", newLocale);
    document.querySelector("html")?.setAttribute("dir", Locales.find(item => item.code === newLocale)?.dir || "");
}