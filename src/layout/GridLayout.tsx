import React, { FC } from 'react';

interface GridLayoutProps {
    children: React.ReactNode;
    col: number;
    gapX?: number;
    gapY?: number;
}

const GridLayout: FC<GridLayoutProps> = ({ children, col, gapX, gapY }) => {
    return (
        <div
            className={`grid grid-cols-1 ${
                col === 6
                    ? 'xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4'
                    : col === 3
                    ? 'xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2'
                    : 'xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4'
            }`}
            style={{
                columnGap: gapX ? `${gapX}px` : '4px',
                rowGap: gapY ? `${gapY}px` : '4px',
            }}
        >
            {children}
        </div>
    );
};

export default GridLayout;
