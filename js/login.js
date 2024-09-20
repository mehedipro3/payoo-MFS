document.getElementById('btn-login').addEventListener('click', function (event) {
  event.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  ///////// this system is temporary ///////
  if (phoneNumber == '01312415417' && pinNumber === '1234') {
    console.log('Yor are login');
    window.location.href = '/home.html';
  }
  else {
    alert('Wrong number or pin');

  }
})
