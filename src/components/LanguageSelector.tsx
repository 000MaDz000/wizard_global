import React, { useContext, useState, useRef, useEffect } from 'react';
import { LocaleContext } from '../providers/LocaleContext';
import './LanguageSelector.css';

function LanguageSelector() {
    const { languages, locale, setLocale } = useContext(LocaleContext);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = languages.find(l => l.code === locale);

    const handleSelect = (code: string) => {
        setLocale(code);
        window.location.reload();
        setOpen(false);
    };

    // ✅ يقفل لو دوست برّه
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="language-selector" ref={dropdownRef}>
            <div className="dropdown-selected" onClick={() => setOpen(!open)}>
                <img src={currentLang?.flag} alt={currentLang?.code}  />
                {/* <span>{currentLang?.name}</span> */}
            </div>
            {open && (
                <div className="dropdown-options">
                    {languages.map(lang => (
                        <div
                            key={lang.code}
                            className="dropdown-option"
                            onClick={() => handleSelect(lang.code)}
                        >
                            <span style={{color:"black"}}>{lang.name}</span>
                            <img src={lang.flag} alt={lang.code}  />
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;

