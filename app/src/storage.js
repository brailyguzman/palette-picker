import initialPalettes from './palettes.json';

export const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageKey = (key) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue);
};

export const setPalettes = (palettes) => {
    setLocalStorageKey('palettes', palettes);
};

export const getPalettes = () => {
    return getLocalStorageKey('palettes');
};

export const removePalette = (paletteID) => {
    const palettes = getPalettes();

    if (!palettes) {
        return;
    }

    delete palettes[paletteID];
    setPalettes(palettes);
};

export const initPalettes = () => {
    let palettes = getPalettes();

    if (!palettes || Object.keys(palettes).length === 0) {
        setPalettes(initialPalettes);
        palettes = initialPalettes;
    }

    return palettes;
};
