import {createBox, createText, createTheme} from '@shopify/restyle';
import {colors} from './colors';

const theme = createTheme({
  colors: colors,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
});

export const Box = createBox();
export const Text = createText();
export default theme;
