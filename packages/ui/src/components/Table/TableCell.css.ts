import { style } from '@vanilla-extract/css';

import { theme } from '#themes';

import { striped } from './Table.css';
import { interactive } from './TableRow.css';

export const tableCell = style({
  padding: '0.5rem',

  transition: 'all 0.1s ease',

  selectors: {
    [`${interactive} > &`]: {
      cursor: 'pointer',
    },

    'tr > &:first-child': {
      borderTopLeftRadius: theme.borderRadius,
      borderBottomLeftRadius: theme.borderRadius,
    },

    'tr > &:last-child': {
      borderTopRightRadius: theme.borderRadius,
      borderBottomRightRadius: theme.borderRadius,
    },

    'tbody > tr:hover > &': {
      backgroundColor: `rgb(${theme.color.accent})`,

      color: `rgb(${theme.color['accent-foreground']})`,
    },

    [`${striped} > tbody > tr:nth-of-type(odd) > &`]: {
      backgroundColor: `rgba(${theme.color.accent}, 0.33)`,

      color: `rgb(${theme.color['accent-foreground']})`,
    },

    [`${striped} > tbody > tr:nth-of-type(odd):hover > &`]: {
      backgroundColor: `rgb(${theme.color.accent})`,
    },
  },
});
