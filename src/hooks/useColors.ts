import { useMemo } from 'react';
import { colors, ColorSystem } from '../assets/colors';

interface ColorUtils {
    getColor: (name: string, shade: number, mode?: 'light' | 'dark') => string;
    getGradient: (index: number, mode?: 'light' | 'dark') => string;
    getAlpha: (name: string, level: number, mode?: 'light' | 'dark') => string;
    getEffect: (type: string, mode?: 'light' | 'dark') => string;
    getPalette: (name: string) => ColorSystem;
    mix: (color1: string, color2: string, weight?: number) => string;
    isDark: (color: string) => boolean;
    adjustBrightness: (color: string, amount: number) => string;
}

export const useColors = (): ColorUtils => {
    return useMemo(() => ({
        // Get specific color shade
        getColor: (name: string, shade: number, mode: 'light' | 'dark' = 'light'): string => {
            const colorSet = colors[name]?.[mode];
            if (!colorSet) throw new Error(`Color ${name} not found`);

            // Map shade (0-1000) to array index
            const index = Math.floor(shade / 100);
            return colorSet[index] || colorSet[5]; // Default to 500 if shade not found
        },

        // Get gradient by index
        getGradient: (index: number, mode: 'light' | 'dark' = 'light'): string => {
            return colors.gradient[mode][index] || colors.gradient[mode][0];
        },

        // Get alpha color
        getAlpha: (name: string, level: number, mode: 'light' | 'dark' = 'light'): string => {
            const alphaSet = colors[name]?.alpha[mode];
            if (!alphaSet) throw new Error(`Alpha color ${name} not found`);

            // Map level (0-100) to array index
            const index = Math.floor(level / 10);
            return alphaSet[index] || alphaSet[5];
        },

        // Get special effect
        getEffect: (type: string, mode: 'light' | 'dark' = 'light'): string => {
            return colors.effects[mode][type] || '';
        },

        // Get entire color palette
        getPalette: (name: string): ColorSystem => {
            const palette = colors[name];
            if (!palette) throw new Error(`Palette ${name} not found`);
            return palette;
        },

        // Mix two colors with weight
        mix: (color1: string, color2: string, weight: number = 0.5): string => {
            const hexToRgb = (hex: string) => {
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            };

            const rgbToHex = (r: number, g: number, b: number) => {
                return '#' + [r, g, b].map(x => {
                    const hex = Math.round(x).toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                }).join('');
            };

            const c1 = hexToRgb(color1);
            const c2 = hexToRgb(color2);

            if (!c1 || !c2) return color1;

            return rgbToHex(
                c1.r * (1 - weight) + c2.r * weight,
                c1.g * (1 - weight) + c2.g * weight,
                c1.b * (1 - weight) + c2.b * weight
            );
        },

        // Check if color is dark
        isDark: (color: string): boolean => {
            const rgb = parseInt(color.replace('#', ''), 16);
            const r = (rgb >> 16) & 0xff;
            const g = (rgb >> 8) & 0xff;
            const b = (rgb >> 0) & 0xff;

            const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            return luma < 128;
        },

        // Adjust color brightness
        adjustBrightness: (color: string, amount: number): string => {
            const hexToRgb = (hex: string) => {
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            };

            const clamp = (num: number) => Math.min(255, Math.max(0, num));
            const rgb = hexToRgb(color);
            if (!rgb) return color;

            return `#${[rgb.r, rgb.g, rgb.b].map(c => {
                const hex = clamp(c + amount).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('')}`;
        }
    }), []);
};