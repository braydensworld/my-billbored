// Daily Challenge list
const challenges = [
    "Smile at 3 people today! 😁",
    "Do fifteen curls! 💪",
    "Do 20 push ups! 💪",
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
let unlockedAchievements = new Set(); // 🧠 Keeps track of unlocked ones

function openProject() {
    projectsOpened++;

    if (projectsOpened === 3 && !unlockedAchievements.has("Explorer")) {
        unlockAchievement("Explorer 🧭");
        unlockedAchievements.add("Explorer");
    }
    else if (projectsOpened === 5 && !unlockedAchievements.has("Hard Worker")) {
        unlockAchievement("Hard Worker 💼");
        unlockedAchievements.add("Hard Worker");
    }
    else if (projectsOpened === 10 && !unlockedAchievements.has("Legendary User")) {
        unlockAchievement("Legendary User 🏆");
        unlockedAchievements.add("Legendary User");
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

// Show the daily challenge when page loads
window.onload = function() {
    showDailyChallenge();
};

// Attach openProject() to your project buttons!
const projectButtons = document.querySelectorAll('.open-project-btn');
projectButtons.forEach(button => {
    button.addEventListener('click', openProject);
});
