import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useBookGenre } from './BookGenreContext';

type WaveBorderOptions = {
    inset: number;
    amplitude: number;
    cycles: number;
    color: string;
    strokeWidth: number;
};

function createWaveBorder({ inset, amplitude, cycles, color, strokeWidth }: WaveBorderOptions) {
    const left = inset;
    const top = inset / 2;
    const right = 1000 - inset;
    const bottom = 500 - top;
    const longEdgeCycles = cycles / 3;
    const shortEdgeCycles = cycles / 6;
    const samplesPerCycle = 64;
    const edges = [
        { start: [left, top], end: [right, top], normal: [0, -1], cycles: longEdgeCycles },
        { start: [right, top], end: [right, bottom], normal: [1, 0], cycles: shortEdgeCycles },
        { start: [right, bottom], end: [left, bottom], normal: [0, 1], cycles: longEdgeCycles },
        { start: [left, bottom], end: [left, top], normal: [-1, 0], cycles: shortEdgeCycles },
    ];
    const points: string[] = [];

    edges.forEach(({ start, end, normal, cycles: edgeCycles }) => {
        const sampleCount = edgeCycles * samplesPerCycle;
        for (let i = 0; i <= sampleCount; i += 1) {
            const progress = i / sampleCount;
            const offset = amplitude * Math.sin(Math.PI * 2 * edgeCycles * progress);
            const x = start[0] + (end[0] - start[0]) * progress + normal[0] * offset;
            const y = start[1] + (end[1] - start[1]) * progress + normal[1] * offset;
            points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
        }
    });

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" preserveAspectRatio="none"><path d="M${points.join(' L')} Z" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linejoin="miter"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// Each line has one consistent wavelength around the full perimeter; only their frequencies differ.
const innerWaveBorder = [
    createWaveBorder({ inset: 13, amplitude: 4, cycles: 24, color: '#e1c995', strokeWidth: 3 }),
    createWaveBorder({ inset: 20, amplitude: 4, cycles: 30, color: '#b87879', strokeWidth: 2 }),
].join(', ');
const outerWaveBorder = createWaveBorder({
    inset: 6,
    amplitude: 4,
    cycles: 18,
    color: '#d5b978',
    strokeWidth: 3,
});

const StyledBooks = styled.div<{ $romantasy: boolean }>`
    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 12px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    max-width: 75%;
    padding: 28px 24px;
    padding-left: 39px;
    margin: 20px auto 0;
    color: #191716;
    border: ${({ $romantasy }) => $romantasy ? 'none' : '1px solid rgba(190, 163, 112, 0.9)'};
    border-radius: ${({ $romantasy }) => $romantasy ? '0' : '6px'};
    background: ${({ $romantasy }) => $romantasy
        ? 'radial-gradient(ellipse at 12% 50%, rgba(200, 137, 145, 0.22), transparent 58%), linear-gradient(125deg, #5b2635, #743846 52%, #4a202d)'
        : 'linear-gradient(135deg, #d0c2a5, #b9a985 55%, #c9b894)'};
    box-shadow: ${({ $romantasy }) => $romantasy
        ? '0 12px 28px rgba(0, 0, 0, 0.4)'
        : '0 12px 28px rgba(0, 0, 0, 0.35), inset 0 0 0 4px rgba(8, 13, 14, 0.38)'};

    &::before {
        content: '';
        position: absolute;
        inset: ${({ $romantasy }) => $romantasy ? '0' : '7px'};
        z-index: 0;
        border: ${({ $romantasy }) => $romantasy ? 'none' : '1px solid rgba(218, 194, 149, 0.5)'};
        border-radius: ${({ $romantasy }) => $romantasy ? '0' : '3px'};
        background-image: ${({ $romantasy }) => $romantasy ? innerWaveBorder : 'none'};
        background-size: 100% 100%;
        background-position: 0 0;
        background-repeat: no-repeat;
        pointer-events: none;
    }

    &::after {
        content: '';
        display: ${({ $romantasy }) => $romantasy ? 'block' : 'none'};
        position: absolute;
        inset: 0;
        z-index: -1;
        background-image: ${outerWaveBorder};
        background-size: 100% 100%;
        background-repeat: no-repeat;
        pointer-events: none;
    }

    @media (max-width: 700px) {
        max-width: 92%;
        padding: 22px 18px;
        padding-left: 33px;
        gap: 10px;
    }
`;

const Image = styled.img`
    position: relative;
    z-index: 1;
    display: block;
    width: 233px;
    height: 333px;
    object-fit: cover;
    border: 1px solid rgba(224, 207, 172, 0.75);
    border-radius: 2px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.38);
`;

function Books({books}: {books: {id: string, title: string, coverImage: string}[]}) {
        const { genre } = useBookGenre();

    return (
                <StyledBooks $romantasy={genre === 'romantasy'}>
            {books.map((book) => (
                <Link
                to={`/books#${book.id}`}
                key={book.id}
                style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                    <Image src={book.coverImage} />
                </Link>
            )
            )}
        </StyledBooks>
    )
}

export default Books;