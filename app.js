document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const seats = document.getElementById('seats').value;
    
    if (seats > 60) {
        document.getElementById('message').textContent = 'You cannot book more than 60 seats!';
    } else {
        document.getElementById('message').textContent = `Thank you ${name}, you have successfully booked ${seats} seats!`;
    }
});
