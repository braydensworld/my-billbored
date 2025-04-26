// Daily Challenge list
const challenges = [
    "Smile at 3 people today! 😁",
    "Do fifteen curles! 💪",
    "DO 20 push ups! 💪",
    "Do 10 jumping jacks! 🤸‍♂️",
    "Write down one goal for today! 📝",
    "Take a 5-minute stretch break! 🧘‍♀️",
    "Tell someone thank you! 🙏"
  ];
  
  // Pick a random daily challenge
  function showDailyChallenge() {
    const challengeBox = document.getElementById('daily-challenge');
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    challengeBox.innerHTML = "🎯 Today's Challenge: " + randomChallenge;
  }
  
  // Achievement system
  let projectsOpened = 0;
  
  function openProject() {
    projectsOpened++;
    if (projectsOpened === 3) {
      unlockAchievement("Project Explorer 🚀");
    }
  }
  
  function unlockAchievement(name) {
    const achievement = document.getElementById('achievement-popup');
    achievement.innerText = "🏆 Achievement Unlocked: " + name;
    achievement.classList.add('show');
    achievement.style.display = 'block';
  
    setTimeout(() => {
      achievement.classList.remove('show');
      achievement.style.display = 'none';
    }, 3000); // Hide after 3 seconds
  }
  
  