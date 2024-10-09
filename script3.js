// Store failed attempts for buttons using a WeakMap (it won't prevent garbage collection)
const failedAttempts = new WeakMap();

// Function to click each button with a delay
const clickWithDelay = (buttons, delay) => {
  buttons.forEach((button, index) => {
    const span = button.querySelector('._12p2gmq9'); // Select the span inside the button

    if (span && span.innerText.trim() === "Se connecter") {
      setTimeout(() => {
        button.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll smoothly to the button

        // Track failed attempts
        const attempts = failedAttempts.get(button) || 0;

        // Skip the button if it has failed 2 times already
        if (attempts < 2) {
          button.click(); // Click the button
          
          // Increase the count of failed attempts
          failedAttempts.set(button, attempts + 1);

          // Optional: Log the click attempt for debugging purposes
          console.log(`Clicked button with text "${span.innerText}" - Attempt ${attempts + 1}`);
        } else {
          // Skip further attempts for this button after 2 failures
          console.log(`Skipping button with text "${span.innerText}" after ${attempts} failed attempts`);
        }
      }, index * delay); // Delay for each button
    }
  });
};

// Function to observe changes in the page and apply the clickWithDelay function
const observeButtons = () => {
  // Select the target node (e.g., the container where buttons are being added)
  const targetNode = document.body;

  // Create a mutation observer
  const observer = new MutationObserver(() => {
    // Re-select the buttons as new ones might have been added
    const buttons = document.querySelectorAll('._139m7k19w.yyosfla');
    clickWithDelay(buttons, 100);
  });

  // Start observing the target node for added or removed child elements
  observer.observe(targetNode, { childList: true, subtree: true });

  // Run initially to handle buttons that are already available
  const initialButtons = document.querySelectorAll('._139m7k19w.yyosfla');
  clickWithDelay(initialButtons, 100);
};

// Call the observer function to start the process
observeButtons();
