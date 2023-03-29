function calculateDeduplicationRatio(arr) {
  const unique = [...new Set(arr)];
  const ratio = (unique.length / arr.length) * 100;
  return ratio.toFixed(2) + '%';
}

const array = [1, 2, 2, 3, 4, 4, 4, 5];
const deduplicationRatio = calculateDeduplicationRatio(array);

document.getElementById('deduplication-ratio').textContent = deduplicationRatio;
