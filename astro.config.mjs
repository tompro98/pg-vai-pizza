import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vai-pizza.de',
  build: {
    // CSS direkt ins HTML inlinen statt als separate render-blocking Datei.
    // Bei dieser kleinen Seite eliminiert das einen Request im kritischen
    // Pfad und senkt die (simulierte) LCP auf Mobile deutlich.
    inlineStylesheets: 'always',
  },
});
