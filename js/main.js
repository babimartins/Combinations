let generateButton = document.querySelector('button[name="generateButton"]'),
    array = [],
    data = [],
    firstNumber,
    lastNumber,
    groupNumber;

generateButton.addEventListener('click', function(){
  firstNumber = document.querySelector('input[name="firstNumber"]').value;
  lastNumber = document.querySelector('input[name="lastNumber"]').value;
  groupNumber = document.querySelector('input[name="groupNumber"]').value;

  array = createArray(firstNumber, lastNumber);
  console.log(array);
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
  if (index === r){
    for (let j = 0; j < r; j++)
      console.log(data);
    return;
  }

  for (let i = start; (i <= end) && (end - i + 1) >= (r - index); i++) {
    data[index] = array[i];
    combinate(array, data, i+1, end, index+1, r);
  }
}
