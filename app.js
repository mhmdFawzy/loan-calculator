
 // get ui variables
 const formLoan = document.getElementById('loan-form').addEventListener('submit', calculateResults)

 function calculateResults(e) {
    table[0].style.display = "none";
     const loan = parseFloat(document.getElementById('loan').value);
     const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
     const years = parseFloat(document.getElementById('years').value * 12);
     const month = document.getElementById('monthly-pay');
     const total = document.getElementById('total-pay');
     const totalInterest = document.getElementById('total-interest');
     
    //  get Monthly payment
      const x = Math.pow(1 + interest, years);
      const monthly = (loan * x * interest) / (x - 1);
      if (isFinite(monthly)) {
        month.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * years).toFixed(2);
        totalInterest.innerHTML = ((monthly * years) - loan).toFixed(2);
        loader[0].style.display = "block";
        setTimeout(()=>{
            table[0].style.display = "table";
            loader[0].style.display = "none";
        },
    2000)
      } else {
          showError('Please Check your numbers')
      }
      


     e.preventDefault();
 }
const errDiv = document.querySelector('.error');
const table = document.getElementsByTagName('table');
const loader = document.getElementsByClassName('loader')
loader[0].style.display = "none";
table[0].style.display = "none";
errDiv.style.display = "none";
//  show error function
function showError(err){

  errDiv.style.display = "block";


}