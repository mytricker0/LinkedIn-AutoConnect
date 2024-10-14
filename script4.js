// Define the text that should be in the 'aria-label' attribute
var buttonTextPart = 'Inviter'; // Part of the aria-label to match

// Function to find, scroll, and click all buttons that match the aria-label text
function findAndClickInviteButtons() {
    // Find all buttons with the 'aria-label' attribute
    var buttons = document.querySelectorAll('button[aria-label]');
    var clickIndex = 0;

    // Function to scroll to the button and click it with a delay of 500 ms
    function clickNextButton() {
        if (clickIndex < buttons.length) {
            var button = buttons[clickIndex];
            var ariaLabel = button.getAttribute('aria-label');
            
            if (ariaLabel && ariaLabel.includes(buttonTextPart)) {
                button.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the button smoothly
                setTimeout(function() {
                    button.click(); // Click the button after scrolling
                    console.log('Clicked button:', button);
                    clickIndex++; // Move to the next button
                    clickNextButton(); // Schedule the next click
                }, 500); // 500 ms delay before clicking
            } else {
                clickIndex++; // Skip if aria-label doesn't match and continue
                clickNextButton();
            }
        }
    }

    // Start clicking the buttons
    clickNextButton();
}

// Run the function initially and then every 5 seconds
findAndClickInviteButtons();
setInterval(findAndClickInviteButtons, 5000); // Refresh every 5 seconds
