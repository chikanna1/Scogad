//Listen for Submit

document.getElementById("loan-form").addEventListener("submit", function(e) {
  //Hide Results
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults(e) {
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalInterest = document.getElementById("total-interest");
  const totalPayment = document.getElementById("total-payment");

  const principal = parseFloat(amount.value);

  const calculatedIntest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment

  const x = Math.pow(1 + calculatedIntest, calculatedPayments);

  const monthly = (principal * x * calculatedIntest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    document.getElementById("results").style.display = "block";

    //Hide Results
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
  console.log("Calculate");
}

function showError(error) {
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";
  //Create a div

  const errorDiv = document.createElement("div");

  //Add class

  errorDiv.className = "alert alert-danger";

  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //Insert error above heading

  card.insertBefore(errorDiv, heading);

  //Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
