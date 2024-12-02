import { displayPalette, handleSubmit } from './helpers.js';
import { initPalettes } from './storage.js';
import './style.css';

document
    .getElementById('add-palette-form')
    .addEventListener('submit', handleSubmit);

const palettes = initPalettes();

for (const palette in palettes) {
    const { colors, temperature, title, uuid: id } = palettes[palette];

    displayPalette(id, title, colors, temperature);
}
