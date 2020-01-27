import React, { useState } from 'react';

interface SvgContainerProps {
  children?: React.ReactNode;
  size: number;
  gridColor?: string;
  gridRules?: number[];
  gridMode?: 'always' | 'never' | 'hover';
}
export default function SvgContainer({
  children,
  size,
  gridColor = '#999',
  gridRules = [25, 50, 75],
  gridMode = 'hover'
}: SvgContainerProps) {
  let [showGrid, setShowGrid] = useState(gridMode === 'always');

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidyMid"
      style={{ width: size, height: size, margin: '0 auto' }}
      onMouseOver={() =>
        setShowGrid(gridMode === 'always' || gridMode === 'hover')
      }
      onMouseOut={() => setShowGrid(gridMode === 'always')}
    >
      {children}
      {showGrid && (
        <>
          {gridRules.map(rule => (
            <line
              x1={rule}
              x2={rule}
              y1={0}
              y2={100}
              stroke={gridColor}
              strokeWidth={1}
            />
          ))}
          {gridRules.map(rule => (
            <line
              x1={0}
              x2={100}
              y1={rule}
              y2={rule}
              stroke={gridColor}
              strokeWidth={1}
            />
          ))}
        </>
      )}
    </svg>
  );
}
