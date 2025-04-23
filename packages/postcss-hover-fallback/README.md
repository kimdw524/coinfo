# postcss-hover-fallback

A **PostCSS plugin** that adds touch-friendly fallbacks for `:hover` styles.

- Automatically maps :hover styles to :active on mobile (coarse pointer) devices.
- No need to manually write media queries every time.

## Example

### Before:

```css
.button:hover {
  background: blue;
}
```

### After:

```css
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background: blue;
  }
}

@media (pointer: coarse) {
  .button:active {
    background: blue;
  }
}
```

## Installation (not published yet)

```bash
pnpm add -D postcss-hover-fallback
```

## Usage

```json
// postcss.config.json
{
  "plugins": ["postcss-hover-fallback"]
}
```
