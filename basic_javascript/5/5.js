function bmi(weight = 0, height = 0) {
  if (!+weight || !+height) return console.log("wrong params"); // добвыляй проверки
  bmi = weight / height ** 2;
  if (bmi <= 18.5) return "Underweight";
  else if (bmi <= 25.0) return "Normal";
  else if (bmi <= 30.0) return "Overweight";
  else if (bmi > 30) return "Obese";
}
