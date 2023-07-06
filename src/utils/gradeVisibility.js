const gradeVisibility = (visibility) => {
  // Assumes miles
  let grade;

  switch (visibility) {
    case visibility < 1:
      grade = "Very poor";
      break;
    case visibility > 1 && visibility < 3:
      grade = "Moderate";
      break;
    case visibility >= 3 && visibility <= 6:
      grade = "Good";
      break;
    case visibility > 6:
      grade = "Excellent";
      break;
    default:
      grade = "Good";
      break;
  }

  return grade;
};

export { gradeVisibility };
