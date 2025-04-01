import React, { useEffect, useState, useRef, useMemo, useCallback, memo } from 'react';
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import { colrs } from '../constant/colors';

// Types
type TabProps = {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
};


type CellProps = {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
    colorName?: string;
    type: 'light' | 'dark';
    selected: string;
    setSelected: (color: string) => void;
    handleCopy: (color: string) => void;
    copied: boolean;
};

type ColorGridProps = {
    type: 'light' | 'dark';
    selected: string;
    setSelected: (color: string) => void;
    handleCopy: (color: string) => void;
    copied: boolean;
};

type ColorState = {
    selected: string;
    copied: boolean;
};

// CSS styles (ควรย้ายไปไฟล์แยก .css หรือใช้ styled-components ถ้าเหมาะสม)
const styles = `
  .color-cell {
    width: 70px;
    height: 64px;
    transition: transform 0.3s ease, border 0.2s ease;
    border-radius: 0.375rem;
  }
  .color-cell:hover {
    transform: scale(1.05);
  }
  .color-cell.selected {
    border: 2px solid rgba(59, 130, 246, 0.4);
    border-radius: 0.5rem;
  }
`;

// Memoized Tab component
const Tab = memo(({ active, onClick, children }: TabProps) => (
    <button
        onClick={onClick}
        className={`
      relative p-2 rounded-full transition-colors duration-300
      font-medium text-sm tracking-wide
      ${active
                ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/5'
                : 'text-blue-300/60 hover:text-blue-200/80 hover:bg-blue-900/30'
            }
      group
    `}
    >
        {active && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        )}
        <div className="relative flex items-center gap-2">
            <span
                className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-cyan-400' : 'bg-blue-300/40 group-hover:bg-blue-300/60'
                    } transition-colors`}
            />
            {children}
        </div>
    </button>
));

// Cell component
const Cell = ({ columnIndex, rowIndex, style, colorName, type, selected, setSelected, handleCopy, copied }: CellProps) => {
    if (rowIndex === 0) {
        if (columnIndex === 0) return <div style={style} className="h-12 bg-transparent" />;
        return (
            <div style={style} className="h-12 flex items-center justify-center text-xs font-semibold text-blue-300/60">
                {columnIndex}
            </div>
        );
    }

    if (columnIndex === 0) {
        return (
            <div style={style} className="h-16 flex items-center text-xs font-bold text-blue-100/80">
                {colorName ? colorName.charAt(0).toUpperCase() + colorName.slice(1) : ''}
            </div>
        );
    }

    const color = colrs[colorName!][type][columnIndex - 1];
    return (
        <div style={style} className="relative group">
            <div className="flex flex-col items-center">
                <button
                    onClick={() => handleCopy(color)}
                    className={`color-cell ${color === selected ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm  rounded-t-md  rounded-b-lg">
                    <span className="text-xs text-gray-100/80 b">  {color}</span>
                </div>
            </div>
        </div>
    );
};

// Memoized ColorGrid component
const ColorGrid = memo(({ type, selected, setSelected, handleCopy, copied }: ColorGridProps) => {
    const colorNames = Object.keys(colrs);
    const COLUMN_COUNT = 13;
    const ROW_COUNT = colorNames.length + 1;
    const CELL_WIDTH = 74;
    const CELL_HEIGHT = 68;
    const GAP_X = 4;
    const GAP_Y = 4;

    const containerRef = useRef<HTMLDivElement>(null);
    const [gridWidth, setGridWidth] = useState(0);
    const [gridHeight, setGridHeight] = useState(0);

    const categories = useMemo(() => [
        { id: 'backgrounds', title: 'Backgrounds', range: [1, 2] },
        { id: 'interactive', title: 'Interactive components', range: [3, 4, 5] },
        { id: 'borders', title: 'Borders and separators', range: [6, 7, 8] },
        { id: 'solid', title: 'Solid colors', range: [9, 10] },
        { id: 'text', title: 'Accessible text', range: [11, 12] },
    ], []);

    const updateDimensions = useCallback(() => {
        if (containerRef.current) {
            setGridWidth(containerRef.current.offsetWidth);
            setGridHeight(window.innerHeight);
        }
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [updateDimensions]);

    const gridStyle = useMemo(() => ({
        overflow: 'auto',
        willChange: 'transform',
        padding: `${GAP_Y}px ${GAP_X}px`,
    }), []);

    const cellRenderer = useCallback(
        ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
            // Render category labels in the first row
            if (rowIndex === 0) {
                const cellStyle = {
                    ...style,
                };

                if (columnIndex === 0) {
                    return <div style={cellStyle} className="h-12 bg-transparent" />;
                }

                const category = categories.find((cat) => cat.range[0] === columnIndex);
                if (category) {
                    const spanWidth = category.range.length * (CELL_WIDTH);
                    return (
                        <div
                            style={{
                                ...cellStyle,
                                width: `${spanWidth}px`,
                            }}
                            className="h-12 w-full flex items-center justify-center text-xs font-semibold text-blue-300/60 border-b border-gray-800"
                        >
                            {category.title}
                        </div>
                    );
                }

                // Skip rendering for columns that are part of a category (except the first column)
                const isPartOfCategory = categories.some(cat =>
                    cat.range.includes(columnIndex) && cat.range[0] !== columnIndex
                );
                if (isPartOfCategory) {
                    return null;
                }

                return <div style={cellStyle} className="h-12 bg-transparent" />;
            }

            const colorName = rowIndex > 0 ? colorNames[rowIndex - 1] : undefined;
            const currentCategory = categories.find((cat) => cat.range.includes(columnIndex));
            const cellStyle = {
                ...style,
                width: `${CELL_WIDTH - GAP_X}px`,
                height: `${CELL_HEIGHT - GAP_Y}px`,
                marginBottom: `${GAP_Y}px`,
                marginRight: `${GAP_X}px`,
                borderLeft:
                    currentCategory && columnIndex === Math.min(...currentCategory.range)
                        ? '1px solid rgba(59, 130, 246, 0.1)'
                        : 'none',
            };

            return (
                <Cell
                    columnIndex={columnIndex}
                    rowIndex={rowIndex}
                    style={cellStyle}
                    colorName={colorName}
                    type={type}
                    selected={selected}
                    setSelected={setSelected}
                    handleCopy={handleCopy}
                    copied={copied}
                />
            );
        },
        [type, selected, setSelected, handleCopy, copied, colorNames, categories]
    );

    return (
        <div className="space-y-4 h-full">
            <div ref={containerRef} className="w-full h-full overflow-x-auto">
                <Grid
                    className="Scrollbars"
                    columnCount={COLUMN_COUNT}
                    columnWidth={CELL_WIDTH}
                    height={gridHeight}
                    rowCount={ROW_COUNT}
                    rowHeight={CELL_HEIGHT}
                    width={gridWidth}
                    style={gridStyle}
                    overscanRowCount={2}
                    overscanColumnCount={2}
                >
                    {cellRenderer}
                </Grid>
            </div>
        </div>
    );
});

// Main Colors component
const Colors = () => {
    const [activeTab, setActiveTab] = useState<'light' | 'dark'>('light');
    const [colorState, setColorState] = useState<ColorState>({
        selected: '',
        copied: false
    });

    const handleCopy = useCallback((color: string) => {
        navigator.clipboard.writeText(color);
    }, []);

    useEffect(() => {
        if (colorState.copied) {
            const timeout = setTimeout(() => setColorState((prev) => ({ ...prev, copied: false })), 2000);
            return () => clearTimeout(timeout);
        }
    }, [colorState.copied]);

    return (
        <>
            <style>{`
                ${styles}
                @keyframes popoverFadeIn {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -10px);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, 0);
                    }
                }
                    
            `}</style>

            <div className="bg-blue-950/80 backdrop-blur-md rounded-xl p-6 border border-blue-900/50 shadow-xl h-full flex flex-col w-full">
                <div className="flex flex-col items-center text-center p-4 relative">
                    <h2 className="text-2xl font-medium text-cyan-100 tracking-wide relative z-10">
                        <span className="relative">
                            Colors of the Abyss
                            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-80 animate-shimmer" />
                        </span>
                    </h2>
                    <span className="text-sm text-blue-100/80 mt-2 font-light tracking-wider relative z-10">
                        Comprehensive color system for designing beautiful, accessible websites and apps.
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-cyan-900/10 rounded-full blur-xl opacity-70 animate-pulse-slow pointer-events-none" />
                </div>
                <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center gap-3 bg-blue-900/20 p-1 rounded-full">
                        <Tab active={activeTab === 'light'} onClick={() => setActiveTab('light')}>
                            Light Mode
                        </Tab>
                        <Tab active={activeTab === 'dark'} onClick={() => setActiveTab('dark')}>
                            Dark Mode
                        </Tab>
                    </div>
                </div>
                <div className="flex-1">
                    <ColorGrid
                        type={activeTab}
                        selected={colorState.selected}
                        setSelected={(color) => setColorState({ selected: color, copied: false })}
                        handleCopy={handleCopy}
                        copied={colorState.copied}
                    />
                </div>

            </div>
        </>
    );
};

export default memo(Colors);