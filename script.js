const candles = document.querySelectorAll('.candle');
const successMessage = document.getElementById('success-message');

let order = 0;

candles.forEach((candle, index) => {
  candle.addEventListener('click', () => {
    if (index === order) {
      candle.classList.add('lit');
      order++;
    } else {
      alert('טעות! יש להדליק את הנרות בסדר הנכון.');
      resetGame();
    }

    if (order === candles.length) {
      successMessage.style.display = 'block';
      setTimeout(resetGame, 5000); // Reset the game after 5 seconds
    }
  });
});

function resetGame() {
  candles.forEach(candle => candle.classList.remove('lit'));
  successMessage.style.display = 'none';
  order = 0;
}