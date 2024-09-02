// Select all buttons with the specified class
const buttons = document.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width');

// Function to click each button with a delay
const clickWithDelay = (buttons, delay) => {
  buttons.forEach((button, index) => {
    const span = button.querySelector('.artdeco-button__text'); // Select the span inside the button

    if (span && span.innerText.trim() === "Se connecter") { // Check if the span text matches "Se connecter"
      setTimeout(() => {
        button.scrollIntoView(); // Scroll to the button
        button.click(); // Click the button
      }, index * delay); // Delay for each button
    }
  });
};

// Call the function with a 5-second delay (5000 milliseconds)
clickWithDelay(buttons, 100);
