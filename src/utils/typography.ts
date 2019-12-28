import Typography from 'typography';

const typography = new Typography({
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'IBM Plex Sans',
      styles: ['400', '500', '600'],
    },
    {
      name: 'IBM Plex Serif',
      styles: ['400', '500', '600'],
    },
  ],
  headerFontFamily: ['IBM Plex Sans', 'Helvetica'],
  bodyFontFamily: ['IBM Plex Serif', 'serif'],
});

typography.injectStyles();

export default typography;
