// Select all buttons with the specified class
var buttons = document.querySelectorAll('._139m7k19w.yyosfla');

// Function to click each button with a delay
var clickWithDelay = (buttons, delay) => {
  buttons.forEach((button, index) => {
    var span = button.querySelector('._12p2gmq9'); // Select the span inside the button

    if (span && span.innerText.trim() === "Se connecter") { // Check if the span text matches "Se connecter"
      setTimeout(() => {
        button.scrollIntoView(); // Scroll to the button
        button.click(); // Click the button
      }, index * delay); // Delay for each button
    }
  });
};

// Call the function with a 0.1-second delay (100 miliseconds)
clickWithDelay(buttons, 100);
