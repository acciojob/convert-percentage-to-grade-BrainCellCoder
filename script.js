function calculateGrade(percentage) {
  // Check if the input is a number
  if (isNaN(percentage)) {
    return 'F';
  }

  // Round the percentage to the nearest integer
  percentage = Math.round(percentage);

  // Handle negative percentages and percentages below 60
  if (percentage < 60) {
    return 'F';
  }

  // Determine the grade based on the percentage
  if (percentage >= 90) {
    return 'A';
  } else if (percentage >= 80) {
    return 'B';
  } else if (percentage >= 70) {
    return 'C';
  } else if (percentage >= 60) {
    return 'D';
  }
}

// Example usage:
const percentage = parseFloat(prompt("Enter Percentage:"));
alert(calculateGrade(percentage));
