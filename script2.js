// Select all buttons with the specified class
var span = document.querySelectorAll('._12p2gmq9._12p2gmq2._12p2gmqj._29kmc3a._29kmc3b._29kmc3g._29kmc3l._1s9oaxg6._139m7k1gx.yyosflo');

// Function to click each button with a delay
var clickWithDelay = (buttons, delay) => {
  span.forEach((button, index) => {
    

      setTimeout(() => {
        button.scrollIntoView(); // Scroll to the button
        button.click(); // Click the button
      }, index * delay); // Delay for each button
  });
};

// Call the function with a 0.1-second delay (100 miliseconds)
clickWithDelay(buttons, 100);
