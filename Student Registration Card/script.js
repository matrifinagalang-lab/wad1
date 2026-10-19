console.log('JavaScript is connected');

//DOM

const nameInput = document.getElementById ('nameInput');
const welcomeMessage = document.getElementById ('welcomeMessage');
const studentForm = document.getElementById ('studentForm');
const courseSelect = document.getElementById ('courseSelect');
const registrationResult = document.getElementById ('registrationResult');

// Live Name Preview (change ng name sa message kapag enter ng name)
nameInput.addEventListener('input', (event) => {
      const name = event.target.value.trim();
      welcomeMessage.textContent = name ? `Welcome, ${name}!` : 'Welcome, La Verdarian!';
});

// Handle Form Submission (listener, )
studentForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevents page refresh
      const name = nameInput.value.trim();
      const course = courseSelect.value;

      registrationResult.textContent = `Success, La Verdarian ${name}! You have been registered for ${course}. `;

});


