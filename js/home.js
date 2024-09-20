document.getElementById('btn-add-money')
  .addEventListener('click',function(event){
    event.preventDefault();
    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    if(inputPinNumber == '1234'){
      const accountBalance = document.getElementById('account-balance').innerText;
      const Balance = parseFloat(accountBalance);
      const account = parseFloat(inputAddMoney);
      const newBalance = account + Balance ;
      document.getElementById('account-balance').innerText = newBalance;
      
    }
    else{
      alert('please try again');
    }
  })