let generateButton = document.querySelector('button[name="generateButton"]'),
    resultsSection = document.querySelector('#resultsSection'),
    array = [],
    data = [],
    firstNumber,
    lastNumber,
    groupNumber;

generateButton.addEventListener('click', function(){
  if (resultsSection.innerHTML != '') 
    resultsSection.innerHTML = '';

  firstNumber = document.querySelector('input[name="firstNumber"]').value;
  lastNumber = document.querySelector('input[name="lastNumber"]').value;
  groupNumber = document.querySelector('input[name="groupNumber"]').value;

  array = createArray(firstNumber, lastNumber);
  console.log(array);

  let h2El = document.createElement('h2'),
      ulEl = document.createElement('ul');
  h2El.innerHTML = 'Resultados';
  ulEl.id = 'resultsUl';
  resultsSection.appendChild(h2El);
  resultsSection.appendChild(ulEl);

  combinate(array, data, 0, (array.length - 1), 0, groupNumber);
});

function createArray(firstNumber, lastNumber){
  let j = parseInt(firstNumber),
      array = [];
  for (let i = 0; i <= (lastNumber - firstNumber); i++) {
    array[i] = j;
    j++;
  }
  return array;
}

function combinate(array, data, start, end, index, r){
  if (index == r){
    showResults(data);
    return;
  }
  for (let i = start; (i <= end) && (end - i + 1) >= (r - index); i++) {
    data[index] = array[i];
    combinate(array, data, i+1, end, index+1, r);
  }
}

function showResults(array){
  let resultsUlEl = document.querySelector('#resultsUl');
      liEl = document.createElement('li');
  liEl.innerHTML = '';
  for (let i = 0; i < array.length; i++)
    liEl.innerHTML += array[i] + ' ';
  resultsUlEl.appendChild(liEl);
}
