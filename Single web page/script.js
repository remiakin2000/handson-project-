// JavaScript function to add a new recommendation
function addRecommendation() {
  // Get the value from the textarea
  let recommendation = document.getElementById("new_recommendation").value.trim();
  
  // Ensure recommendation is not empty
  if (recommendation !== "") {
      console.log("New recommendation added:", recommendation);

      // Create a new 'recommendation' element
      var element = document.createElement("div");
      element.classList.add("recommendation");
      element.innerHTML = `<span>&#8220;</span>${recommendation}<span>&#8221;</span>`;

      // Add the new recommendation to the container
      var recommendationsContainer = document.getElementById("all_recommendations");
      recommendationsContainer.appendChild(element);

      // Optionally, show a popup or message indicating success
      showPopup("Recommendation submitted successfully.");

      // Reset the value of the textarea
      document.getElementById("new_recommendation").value = "";
  } else {
      // Optionally handle case when recommendation is empty
      console.log("Please enter a recommendation.");
  }
}

// Function to show/hide popup
// Function to show popup
function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.visibility = 'visible';

  // Hide popup after 2 seconds
  setTimeout(function() {
      popup.style.visibility = 'hidden';
  }, 2000);
}

// Function to hide popup
function hidePopup() {
  var popup = document.getElementById('popup');
  popup.style.visibility = 'hidden';
}
