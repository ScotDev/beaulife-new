const gradeVisibility = (visibility) => {
  // Assumes miles
  let grade;

  switch (visibility) {
    case visibility <= 0.1:
      grade = "Near zero";
      break;
    case visibility > 0.2 && visibility < 0.5:
      grade = "Very poor";
      break;
    case visibility >= 0.5 && visibility <= 1:
      grade = "Poor";
      break;
    case visibility > 1 && visibility < 3:
      grade = "Moderate";
      break;
    case visibility >= 3 && visibility < 6:
      grade = "Good";
      break;
    case visibility >= 6:
      grade = "Excellent";
      break;
    default:
      grade = "Good";
      break;
  }

  return grade;
};

export { gradeVisibility };
