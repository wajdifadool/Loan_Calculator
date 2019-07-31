//Consts
const form = document.getElementById('loan-form');
const amount  = document.getElementById('amount');
const interset  = document.getElementById('interset');
const years = document.getElementById('years');


const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterset = document.getElementById('total-interset');

const creatPrincple = parseFloat(amount.value) ;

loadEventListners();

function loadEventListners() {
  form.addEventListener('submit' , calculateResults)
  console.log(creatPrincple);
}

function calculateResults(e){
    e.preventDefault()
}
