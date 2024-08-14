document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('chess-board');

    // Create the board
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        board.appendChild(square);

        // Set initial pieces (just an example with pawns)
        if (i >= 48) {
            square.textContent = '♟'; // Black pawns
            square.style.color = 'black';
        } else if (i < 16) {
            square.textContent = '♙'; // White pawns
            square.style.color = 'white';
        }
    }

    // Add more logic for piece movement and game rules
});
