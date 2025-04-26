import { theme } from '#themes';
import { color } from '#tokens';

type ColorName = keyof typeof color;
type ColorScale<C extends ColorName> = keyof (typeof color)[C];
type Color = Record<`${ColorName}-${ColorScale<ColorName>}`, string>;
type SemanticColor = Record<keyof typeof theme.color, string>;

export const typographyColor = Object.assign(
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
