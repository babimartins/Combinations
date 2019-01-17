let generateButton = document.querySelector('button[name="generateButton"]'),
    firstNumber,
    lastNumber,
    groupNumber;

generateButton.addEventListener('click', function(){
  firstNumber = document.querySelector('input[name="firstNumber"]').value;
  lastNumber = document.querySelector('input[name="lastNumber"]').value;
  groupNumber = document.querySelector('input[name="groupNumber"]').value;

  let array = createArray(firstNumber, lastNumber);
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
