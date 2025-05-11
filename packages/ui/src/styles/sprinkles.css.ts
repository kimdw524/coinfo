import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { theme } from '#themes';
import { color, spacing, typography } from '#tokens';

type ColorName = keyof typeof color;
type ColorScale<C extends ColorName> = keyof (typeof color)[C];
type Color = Record<`${ColorName}-${ColorScale<ColorName>}`, string>;
type SemanticColor = Record<keyof typeof theme.color, string>;

const colors = Object.assign(
  {},
  ...[
    ...Object.entries(color).reduce(
      (prev, [name, scales]) => [
        ...prev,
        ...Object.entries(scales).map(([scale, value]) => ({ [`${name}-${scale}`]: `rgb(${value})` }) as Color),
      ],
      [] as Color[],
    ),
    ...Object.entries(theme.color).map(([name, value]) => ({ [name]: `rgb(${value})` }) as SemanticColor),
  ],
) as Record<keyof Color | keyof SemanticColor, string>;

export const colorProperties = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
  },
});

export const boxProperties = defineProperties({
  properties: {
    flexDirection: ['row', 'column'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse', 'revert', 'revert-layer'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    gap: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

export const typographyProperties = defineProperties({
  properties: {
    lineHeight: typography.lineHeight,
  },
});

export const sprinkles = createSprinkles(boxProperties, colorProperties, typographyProperties);

export type SprinklesProps = Parameters<typeof sprinkles>[0];
