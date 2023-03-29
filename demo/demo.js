function calculateDeduplicationRatio(arr) {
    const unique = [...new Set(arr)]; // Remove duplicates from array
    const ratio = (unique.length / arr.length) * 100; // Calculate deduplication ratio as a percentage
    return ratio.toFixed(2) + '%'; // Return the deduplication ratio as a formatted string with 2 decimal places and a percentage symbol
  }
  
  // Example usage
  const array = [1, 2, 2, 3, 4, 4, 4, 5];
  const deduplicationRatio = calculateDeduplicationRatio(array);
  console.log(deduplicationRatio); // Output: "62.50%"

  