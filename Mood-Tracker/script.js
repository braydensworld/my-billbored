const addMoodButton = document.getElementById("add-mood");
const clearMoodsButton = document.getElementById("clear-moods");
const moodInput = document.getElementById("mood-input");
const moodList = document.getElementById("mood-list");

// Get today's date
function getTodayDate() {
  const today = new Date();
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return today.toLocaleDateString(undefined, options);
}

// Add mood to the list
function addMood(moodText) {
  const li = document.createElement("li");
  const lowerMood = moodText.toLowerCase(); // 🔥 Force lowercase for the class

  li.innerHTML = `<span>${getTodayDate()}: ${moodText}</span>`;

  // 🔥 Now match moods lowercase to CSS class names
  if ([
    "happy", "sad", "excited", "tired", "angry",
    "anxiety", "stress", "nervous", "relaxed",
    "proud", "bored", "confident", "overwhelmed"
  ].includes(lowerMood)) {
    li.classList.add(lowerMood);
  }
  

  moodList.appendChild(li);
}

// When clicking "Add Mood"
addMoodButton.addEventListener("click", function() {
  const moodText = moodInput.value.trim();
  if (moodText !== "") {
    addMood(moodText);
    moodInput.value = "";
    moodInput.focus();
  }
});

// Also allow pressing Enter key
moodInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addMoodButton.click();
  }
});

// When clicking "Clear Moods"
clearMoodsButton.addEventListener("click", function() {
  const confirmClear = confirm("Are you sure you want to clear all moods?");
  if (confirmClear) {
    moodList.innerHTML = "";
  }
});
