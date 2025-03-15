import { useMemo } from 'react';
import { colors } from '../assets/colors';
import { ColorSystem } from '../lib/colorUtils';

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
            return colorSet[Math.floor(shade / 100)] || '';
        },

        // Get gradient by index
        getGradient: (index: number, mode: 'light' | 'dark' = 'light'): string => {
            const gradients = {
                light: [
                    'linear-gradient(to right, #0EA5E9, #22D3EE)',
                    'linear-gradient(to right, #8B5CF6, #D946EF)',
                    'linear-gradient(to right, #F59E0B, #F97316)',
                    'linear-gradient(to right, #10B981, #34D399)',
                ],
                dark: [
                    'linear-gradient(to right, #0284C7, #0891B2)',
                    'linear-gradient(to right, #7C3AED, #C026D3)',
                    'linear-gradient(to right, #D97706, #EA580C)',
                    'linear-gradient(to right, #059669, #10B981)',
                ]
            };
            return gradients[mode][index % gradients[mode].length] || '';
        },

        // Get alpha color
        getAlpha: (name: string, level: number, mode: 'light' | 'dark' = 'light'): string => {
            const alphaSet = colors[name]?.alpha?.[mode];
            if (!alphaSet) throw new Error(`Alpha color ${name} not found`);
            return alphaSet[Math.floor(level / 10)] || '';
        },

        // Get effect color
        getEffect: (type: string, mode: 'light' | 'dark' = 'light'): string => {
            const effects: Record<string, Record<string, string>> = {
                light: {
                    glow: 'rgba(14, 165, 233, 0.5)',
                    shadow: 'rgba(0, 0, 0, 0.1)',
                    highlight: 'rgba(255, 255, 255, 0.8)',
                },
                dark: {
                    glow: 'rgba(56, 189, 248, 0.5)',
                    shadow: 'rgba(0, 0, 0, 0.3)',
                    highlight: 'rgba(255, 255, 255, 0.1)',
                }
            };
            return effects[mode][type] || '';
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