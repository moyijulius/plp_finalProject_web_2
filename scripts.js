
// Function to predict symptoms
function predictSymptoms() {
    const symptoms = document.getElementById('symptoms').value;
    if (symptoms) {
        document.getElementById('prediction-result').innerText = `The AI system has analyzed your symptoms: "${symptoms}" and suggests further evaluation.`;
    } else {
        alert('Please enter your symptoms!');
    }
}

// Form validation (Example for the contact form)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault();
    }
});