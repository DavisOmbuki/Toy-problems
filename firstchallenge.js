function calculateGrade(marks) {
    if (marks < 0 || marks > 100) {
      return "Error: Marks should be between 0 and 100.";
    }
  
    let grade;
    if (marks >= 80) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    return "Grade: " + grade;
  }
  
  // Example usage:
  let studentMarks = 890;
  console.log(calculateGrade(studentMarks)); // Output: Grade: B


