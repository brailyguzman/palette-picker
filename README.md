# Palette Picker

### Layout: Structure
- [x] There is a single `main` element on the page
- [x] There is a single `h1` element on the page
- [x] There is a `form`
- [x] The form has an `h2` label
- [x] The form has an `text` input and label for the palette title
- [x] The form has 3 `color` type inputs and labels for the color inputs
- [x] The form has a `fieldset` with a `legend` for the temperature setting
- [x] The form has 3 `radio` inputs and `labels` for the temperature setting
- [x] The form has `neutral` as the default temperature setting
- [x] The form has a `button` to submit the form
- [x] There is a `section` for the palettes
- [x] There is an `h2` showing the palettes section
- [x] The page has a `ul` and `li` items that show each palette
- [x] Each palette has the 3 colors clearly visible somehow
- [x] Each palette has white and black text overlaid on each of the colors
- [x] Each palette *somehow* has white and black border on each of the colors
- [x] Each palette has 3 copy buttons that show the name of the color they *would* copy
- [x] Each palette has a delete button
- [x] Each palette has a banner along the bottom with the name of the temperature
- [x] Each palette has a banner along the bottom that is colored by the temperature
  - (gray = neutral, red = warm, blue = cool)
- [x] Palettes appear next to each other in an organized, responsive, well-spaced layout (flex or grid presentations fine)

### layout: Accessibility
- [x] The form has an `aria-label` or `aria-labelledby` attribute that describes the form
- [x] The section has an `aria-label` or `aria-labelledby` attribute that describes the section
- [x] There are no instances of recreating any semantic elements

### Functionality
- [x] The title is a `required` field, and the form cannot be submitted without it
- [x] Clicking the form submit button does not reload the page because the default behavior is prevented
- [x] Clicking the form submit button creates a new palette in the palettes section
- [x] Clicking the form submit button clears the form
- [x] Clicking one of the copy buttons copies the hex code of the color to the clipboard
- [x] Clicking the copy button copies the selected color to the user's clipboard
- [x] Clicking the copy button alters the text for a second to say "Copied hex!" for 1 second before switching back
- [x] Clicking the delete button removes the palette from the page
- [x] Clicking the delete button removes the palette from localStorage (does not come back upon reload of page)
- [x] On first visit to the page, there are 3 default palettes
- [x] If a user deletes all their palettes, on next reload, the default palettes appear again
- [x] A user's palettes are saved to localStorage

### Meta
- [x] The project is created using Vite
- [x] The code exists in more than one JS file
- [x] The project is deployed via GitHub Pages properly
- [x] The `palettes.json` file is read properly
- [x] css flexbox or grid was used
- [x] The code does not render unescaped text directly to the DOM (createElement or other escape method used)
- [x] `.innerHTML` or `createElement/.append` is used properly at some point in the project
- [x] `.innerHTML` or `.remove()` is used to delete elements from the DOM.
- [x] The `setTimeout` method is used to rewrite the copy button text