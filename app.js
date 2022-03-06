const advBtn = document.getElementById('get-advice');
const advOutput = document.getElementById('advice');
const advId = document.getElementById('advice-id');

advBtn.addEventListener('click', getAdvice);


function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json()
  .then(data => {
      advOutput.innerText = `"${data.slip.advice}"`;
      advId.innerText = `ADVICE #${data.slip.id}`;
      console.log(data.slip);
  })
)}



