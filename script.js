function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var creditCard = document.getElementById('credit-card').value;
    var password = document.getElementById('credit-card-password').value;

    if (name === '' || email === '' || creditCard === '' || password === '') {
        alert('fill in all fields yo mothafo*** to get the million dollar.');
        return false;
    }
}