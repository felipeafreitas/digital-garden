import { createStitches } from '@stitches/react';

export const { styled, css, createTheme } = createStitches({
  theme: {
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '3rem',
      2: '2rem',
      3: '1.5rem',
      4: '1.25rem',
    },
    fonts: {
      primary: 'Open Sans',
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    }
  },
});

export const lightTheme = createTheme({
  colors: {
    hiContrast: '#000000',
    loContrast: '#EEEEEE',

    gray400: '#171717',
    gray350: '#444444',
    gray300: '#3F4E4F',
    
    blue: '#150050',
    purple: '#3F0071',
    pink: '#FB2576',
    red: '#DA0037',
  },
})

export const darkTheme = createTheme({
  colors: {
    hiContrast: '#EEEEEE',
    loContrast: '#000000',

    gray400: '#171717',
    gray350: '#444444',
    gray300: '#3F4E4F',

    blue: '#150050',
    purple: '#3F0071',
    pink: '#FB2576',
    red: '#DA0037',
  },
})


