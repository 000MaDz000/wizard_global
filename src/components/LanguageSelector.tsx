import React, { useContext } from 'react';
import { LocaleContext } from '../providers/LocaleContext';
import './LanguageSelector.css';

function LanguageSelector() {
    const { languages, locale, setLocale } = useContext(LocaleContext);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;
        setLocale(newLocale);
        window.location.reload(); // optional: reload to apply new locale immediately
    };

    return (
        <div className="language-selector">
            <select className="language-dropdown" value={locale} onChange={handleChange}>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageSelector;
