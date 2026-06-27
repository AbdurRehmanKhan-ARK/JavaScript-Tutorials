const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#result");
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));

    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are Underweight</span>`;
    } else if (bmi >= 18.6 && bmi < 25) {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are Normal-Weight</span>`;
    } else if (bmi >= 25 && bmi < 30) {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are Overweight</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are Obese</span>`;
    }
  }
});
