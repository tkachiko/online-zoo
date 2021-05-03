const coverElem = document.getElementById('cover');
const formFeedbackElem = document.getElementById('form-feedback');
const textDonateField = document.getElementById('text-donate');
const amountField = document.getElementById('amount');
const donateButton = document.getElementById('button-donate');
const donateButtonRight = document.getElementById('button-donate-right');
const nextButton = document.getElementById('next');
const crossElem = document.querySelectorAll('.form-feedback--cross');
const formDonateElem = document.getElementById('form-donate');
const formPayElem = document.getElementById('form-pay');
const payButton = document.getElementById('pay');
const cardNumberField = document.getElementById('card-number');
const cardMonthField = document.getElementById('card-month');
const cardYearField = document.getElementById('card-year');
const cardHolder = document.getElementById('cadholder-name');
const cvc = document.getElementById('cvc');
  
  const validateAmount = () => {
    if (amountField.validity.valid) {
      nextButton.classList.remove('invalid');
    } else {
      nextButton.classList.add('invalid');
    }
  }

coverElem.addEventListener('click', () => {
  document.body.classList.remove('notScrollable');
  coverElem.classList.add('hidden');
  formDonateElem.classList.add('hidden');
  formPayElem.classList.add('hidden');
});

donateButton.addEventListener('click', () => {
  document.body.classList.add('notScrollable');
  coverElem.classList.remove('hidden');
  formDonateElem.classList.remove('hidden');
})

donateButtonRight.addEventListener('click', () => {
  document.body.classList.add('notScrollable');
  coverElem.classList.remove('hidden');
  formDonateElem.classList.remove('hidden');
})

nextButton.addEventListener('click', () => {
  if (nextButton.classList.contains('invalid')) return;
  document.body.classList.add('notScrollable');
  coverElem.classList.remove('hidden');
  formPayElem.classList.remove('hidden');
  formDonateElem.classList.add('hidden');
});

crossElem.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.remove('notScrollable');
    coverElem.classList.add('hidden');
    formDonateElem.classList.add('hidden');
    formPayElem.classList.add('hidden');
  })
})

amountField.addEventListener('input', () => {
  validateAmount();
});