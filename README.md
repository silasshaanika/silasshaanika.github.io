# Portfolio (book style)

A plain HTML, CSS and JavaScript site. No build step, no dependencies.

## Run it
- Quick: double-click `index.html` to open it in your browser.
- Better: open the folder in VS Code, install the "Live Server" extension, right-click `index.html` and choose "Open with Live Server". The page reloads when you save.
- Or, if you have Node.js: `npx serve` in this folder.

The Google Fonts need an internet connection; without one, fallback fonts are used.

## Make it yours
1. Open `content.js` and replace every [PLACEHOLDER] with your own text.
2. Put your photos in the `images/` folder and point to them in `content.js`
   (`photo: 'images/me.jpg'`, a project's `image`, or an interest's `image`).
3. Change the accent color in `style.css` (`--accent` and `--cover` at the top).

## Files
- `index.html`: page skeleton
- `content.js`: all your words and image paths
- `style.css`: design and animation
- `script.js`: page rendering and interactions

## Controls
Click or use Prev/Next, the dots, or the left/right arrow keys. Hover the photo card, click it to flip it, and click anywhere for the ring effect.

## Publish for free
Push the folder to a GitHub repository, then enable GitHub Pages in the repository settings (or drag the folder into Netlify).
