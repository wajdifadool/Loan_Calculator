//Consts
const form = document.getElementById('loan-form');
const amount = document.getElementById('amount');
const interset = document.getElementById('interset');
const years = document.getElementById('years');




const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterset = document.getElementById('total-interst');



loadEventListners();

function loadEventListners() {
  form.addEventListener('submit', function(e) {

    //Hide result
    document.getElementById('loading').style.display = 'block';

    //SHowLoader
    document.getElementById('results').style.display = 'none'

    //Hide loader
    setTimeout(calculateResults, 2000);

    e.preventDefault();
  });
}

function calculateResults() {

  const creatPrincple = parseFloat(amount.value);
  const calculatedIntrest = parseFloat(interset.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //compute monthly Paymnet
  const x = Math.pow(1 + calculatedIntrest, calculatedPayments);
  const monthley = (creatPrincple * x * calculatedIntrest) / (x - 1);

  if (isFinite(monthley)) {
    monthlyPayment.value = monthley.toFixed(2);
    totalPayment.value = (monthley * calculatedPayments).toFixed(2);
    totalInterset.value = ((monthley * calculatedPayments) - creatPrincple).toFixed(2);


    //Hide Loader
    document.getElementById('loading').style.display = 'none';

    //Show Results
    document.getElementById('results').style.display = 'block'

  } else {
    showError();
  }


}

function showError() {

  //Hide Loader
  document.getElementById('loading').style.display = 'none';

  //HIde Results
  document.getElementById('results').style.display = 'none'

  //create Div
  const erDiv = document.createElement('div');
  //in bootstrap  alert div  need class of alert  and alert-danger
  erDiv.className = 'alert alert-danger';
  erDiv.append(document.createTextNode('please check your numbers'));

  //get Dom Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //inert error above heading

  card.insertBefore(erDiv, heading);

  //clear error after 3 seconds

  setTimeout(function() {
    //clear error
    document.querySelector('.alert').remove()
  }, 3000)
}
