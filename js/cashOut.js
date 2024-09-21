document.getElementById('btn-cash-out')
  .addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    if(cashOutPin === '1234'){
      const accountBalance = document.getElementById('account-balance').innerText;
      const Balance = parseFloat(accountBalance);
      const newBalance = accountBalance - cashOutNumber ;
      document.getElementById('account-balance').innerText = newBalance;
    }
    else{
      alert('failed to cash out Please try again');
    }
  });