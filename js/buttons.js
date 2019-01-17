let sendButton = document.querySelector('button[name="sendButton"]'),
    firstNumber,
    lastNumber,
    groupNumber;

sendButton.addEventListener('click', function(){
  firstNumber = document.querySelector('input[name="firstNumber"]').value;
  lastNumber = document.querySelector('input[name="lastNumber"]').value;
  groupNumber = document.querySelector('input[name="groupNumber"]').value;
});
