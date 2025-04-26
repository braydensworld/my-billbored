const monthYear = document.getElementById("month-year");
const daysContainer = document.getElementById("days");

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Get today's date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDay = today.getDate();

// Set the title
monthYear.textContent = `${months[currentMonth]} ${currentYear}`;

// Figure out how many days in this month
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

const firstDayIndex = firstDayOfMonth.getDay();
const totalDays = lastDayOfMonth.getDate();

// Fill in blank spaces for the first week
for (let i = 0; i < firstDayIndex; i++) {
  const blankDiv = document.createElement("div");
  daysContainer.appendChild(blankDiv);
}

// Add the days
for (let day = 1; day <= totalDays; day++) {
  const dayDiv = document.createElement("div");
  dayDiv.textContent = day;

  // ✨ Highlight today
  if (day === currentDay) {
    dayDiv.classList.add("today");
  }

  // Click to add a note
  dayDiv.addEventListener("click", function() {
    let note = prompt(`Add a note for ${months[currentMonth]} ${day}, ${currentYear}:`);
    if (note) {
      const noteElement = document.createElement("div");
      noteElement.classList.add("note");
      noteElement.textContent = note;
      dayDiv.appendChild(noteElement);
    }
  });

  daysContainer.appendChild(dayDiv);
}
