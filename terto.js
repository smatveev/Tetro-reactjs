export const TETRO = {
    0 : { shape: [[0]], color: '0,0,0' },
    I : { 
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ], 
        color: '80,227,200', 
    },
    J : { 
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ], 
        color: '43,54,245', 
    },
    L : { 
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ], 
        color: '43,243,55', 
    },
    O : { 
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ], 
        color: '245,98,4',
    },
    S : { 
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ], 
        color: '8,54,244',
    },
    T : { 
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ], 
        color: '132,52,28',
    },
    Z : { 
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ], 
        color: '227,79,78',
    },
};

export const rndTetros = () => {
    const Tetros = 'IJLOSTZ';
    const rndTetros = Tetros[Math.floor(Math.random() * Tetros.length)];
    return TETRO[rndTetros];
}