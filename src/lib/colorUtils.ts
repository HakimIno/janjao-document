import { colors } from "../assets/colors";

// types/colors.ts
export interface ColorSystem {
    light: string[];
    dark: string[];
    alpha: {
        light: string[];
        dark: string[];
    };
}

export interface ColorPalette {
    [key: string]: ColorSystem;
}

type ColorSchemeType = 'analogous' | 'complementary' | 'triadic';
type ThemeType = 'light' | 'dark';

class ColorUtils {
    private colors: ColorPalette;

    constructor(colorPalette: ColorPalette) {
        this.colors = colorPalette;
    }

    // Convert hex to RGB
    hexToRGB(hex: string, alpha?: number): string {
        // Remove # if present
        const cleanHex = hex.replace('#', '');

        // Parse RGB values
        const r = parseInt(cleanHex.slice(0, 2), 16);
        const g = parseInt(cleanHex.slice(2, 4), 16);
        const b = parseInt(cleanHex.slice(4, 6), 16);

        // Return RGB or RGBA string
        return alpha !== undefined
            ? `rgba(${r}, ${g}, ${b}, ${alpha})`
            : `rgb(${r}, ${g}, ${b})`;
    }

    // Generate color scheme
    generateScheme(baseColor: string, type: ColorSchemeType = 'analogous'): string[] {
        // Convert hex to HSL for easier color manipulation
        const hex2hsl = (hex: string): [number, number, number] => {
            let r = parseInt(hex.slice(1, 3), 16) / 255;
            let g = parseInt(hex.slice(3, 5), 16) / 255;
            let b = parseInt(hex.slice(5, 7), 16) / 255;

            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h = 0;
            let s = 0;
            const l = (max + min) / 2;

            if (max !== min) {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }

            return [h * 360, s * 100, l * 100];
        };

        // Convert HSL to hex
        const hsl2hex = (h: number, s: number, l: number): string => {
            h /= 360;
            s /= 100;
            l /= 100;
            let r, g, b;

            if (s === 0) {
                r = g = b = l;
            } else {
                const hue2rgb = (p: number, q: number, t: number): number => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            const toHex = (x: number): string => {
                const hex = Math.round(x * 255).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            };

            return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        };

        const [h, s, l] = hex2hsl(baseColor);

        switch (type) {
            case 'analogous':
                return [
                    baseColor,
                    hsl2hex((h + 30) % 360, s, l),
                    hsl2hex((h - 30 + 360) % 360, s, l),
                ];
            case 'complementary':
                return [
                    baseColor,
                    hsl2hex((h + 180) % 360, s, l),
                ];
            case 'triadic':
                return [
                    baseColor,
                    hsl2hex((h + 120) % 360, s, l),
                    hsl2hex((h + 240) % 360, s, l),
                ];
            default:
                return [baseColor];
        }
    }

    // Get contrasting text color
    getContrastText(bgColor: string): string {
        const hex = bgColor.replace('#', '');
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        // Calculate relative luminance
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? '#000000' : '#FFFFFF';
    }

    // Generate CSS Custom Properties
    generateCSSVariables(theme: ThemeType = 'light'): Record<string, string> {
        const variables: Record<string, string> = {};

        Object.entries(this.colors).forEach(([name, colorSet]) => {
            if (colorSet[theme]) {
                colorSet[theme].forEach((color, index) => {
                    variables[`--color-${name}-${index * 100}`] = color;
                });
            }

            // Add alpha colors if they exist
            if (colorSet.alpha?.[theme]) {
                colorSet.alpha[theme].forEach((color, index) => {
                    variables[`--color-${name}-alpha-${index * 10}`] = color;
                });
            }
        });

        return variables;
    }

    // Apply CSS variables to document root
    applyTheme(theme: ThemeType = 'light'): void {
        const variables = this.generateCSSVariables(theme);
        const root = document.documentElement;

        Object.entries(variables).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
    }
}

// Create and export instance
export const colorUtils = new ColorUtils(colors);

// Export type for use in other files
export type { ColorSchemeType, ThemeType };