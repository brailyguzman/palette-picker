import { getPalettes, setPalettes, removePalette } from './storage.js';

const temperatures = {
    neutral: 'grey',
    warm: 'red',
    cool: 'blue',
};

export const deletePaletteHandler = (id) => {
    const palette = document.getElementById(id);
    palette.remove();
    removePalette(id);
};

export const displayPalette = (id, title, colors, temperature) => {
    // Palette Container
    const paletteContainer = document.getElementById('palette-container');

    // Palette
    const palette = document.createElement('li');
    palette.id = id;
    palette.className = 'palette';
    paletteContainer.appendChild(palette);

    // Palette -> Title
    const paletteTitle = document.createElement('h3');
    paletteTitle.className = 'palette-title';
    paletteTitle.textContent = title;
    palette.appendChild(paletteTitle);

    // Palette -> Content
    const paletteContent = document.createElement('div');
    paletteContent.className = 'palette-content';
    palette.appendChild(paletteContent);

    // Palette -> Content -> Color Container
    const paletteColorContainer = document.createElement('div');
    paletteColorContainer.className = 'palette-color-container';
    paletteContent.appendChild(paletteColorContainer);

    // Displaying Each Color
    colors.forEach((color) => {
        // Palette -> Content -> Color Container -> Palette Color
        const paletteColor = document.createElement('div');
        paletteColor.className = 'palette-color';
        paletteColorContainer.appendChild(paletteColor);

        // Palette -> Content -> Color Container -> Palette Color -> Box
        const paletteColorBox = document.createElement('div');
        paletteColorBox.className = 'palette-color-box';
        paletteColorBox.style.backgroundColor = color;
        // Palette -> Content -> Color Container -> Palette Color -> Box -> Span
        paletteColorBox.innerHTML = `
            <span class="palette-color-text">Text</span>
            <span class="palette-color-text">Example</span>
        `;
        paletteColor.appendChild(paletteColorBox);

        // Palette -> Content -> Color Container -> Palette Color -> Copy
        const copyButton = document.createElement('button');
        copyButton.className = 'palette-color-copy';
        copyButton.textContent = `Copy ${color}`;

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            const oldTextContent = copyButton.textContent;
            copyButton.textContent = 'Copied hex!';

            setTimeout(() => {
                copyButton.textContent = oldTextContent;
            }, 1000);
        });

        paletteColor.appendChild(copyButton);
    });

    // Palette -> Content -> Delete Palette
    const deletePalette = document.createElement('button');

    deletePalette.className = 'palette-delete';
    deletePalette.textContent = 'Delete Palette';

    deletePalette.addEventListener('click', () => {
        deletePaletteHandler(id);
    });
    paletteContent.appendChild(deletePalette);

    // Palette -> Temperature
    const paletteTemperature = document.createElement('p');
    paletteTemperature.className = 'palette-temperature';
    paletteTemperature.textContent = temperature;
    paletteTemperature.style.backgroundColor = temperatures[temperature];
    palette.appendChild(paletteTemperature);
};

export const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const {
        paletteTitle: title,
        firstColor,
        secondColor,
        thirdColor,
        temperature,
    } = Object.fromEntries(data);

    // Get palettes, and if empty, initialize an empty object.
    const palettes = getPalettes() || {};
    const id = crypto.randomUUID();
    const colors = [firstColor, secondColor, thirdColor];

    palettes[id] = {
        uuid: id,
        title,
        colors,
        temperature,
    };

    setPalettes(palettes);
    displayPalette(id, title, colors, temperature);

    // Clear the form
    e.target.reset();
};
