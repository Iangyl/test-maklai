import dataRequest from './data-req.js';

function submitHandler () {
  const form = document.getElementById('date-time');

  form.addEventListener('submit', dataRequest)
}

submitHandler();
