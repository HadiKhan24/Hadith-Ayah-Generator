const hadiths = [
    "The best of you are those who are best to their families, and I am the best of you to my family.",
    "A believer does not taunt others, he does not curse others, he does not use profanity, and he does not abuse others.",
    "Do not become angry.",
    "The strong man is not the one who can wrestle others; rather, the strong man is the one who controls himself at times of anger.",
    "Allah will not be merciful to those who are not merciful to mankind.",
    "The most beloved of deeds to Allah are those that are most consistent, even if it is small.",
    "Take benefit of five before five: your youth before your old age, your health before your illness, your wealth before your poverty, your free-time before your preoccupation, and your life before your death.",
    "The world, compared to the Hereafter, is like what one of you would dip his finger into the sea; let him see what it brings back.",
    "None of you truly believes until he loves for his brother what he loves for himself.",
    "The believer is not the one who eats his fill when the neighbor beside him is hungry.",
    "A man asked the Prophet (peace be upon him), 'What is Islam?' He replied, 'To feed the hungry and to say the greeting of peace to those you know and those you do not know.'",
    "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
    "The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.",
    "A person will not be considered to have truly believed until he loves for his brother what he loves for himself.",
    "The best of people are those with the most excellent character.",
    "The most beloved of places to Allah is the mosque, and the most hated places to Allah are the markets.",
    "The best of you are those who are best to their families.",
    "The best of you are those who are best in paying off debts.",
    "The best of you are those who are best in character.",
    "The best of you are those who are best in fulfilling their trusts.",
];

const hadithElement = document.getElementById('hadith');
const generateBtn = document.getElementById('generate-btn');

function generateRandomHadith() {
    const randomIndex = Math.floor(Math.random() * hadiths.length);
    const randomHadith = hadiths[randomIndex];
    hadithElement.textContent = randomHadith;
}

generateBtn.addEventListener('click', generateRandomHadith);

// Generate a hadith when the page loads
generateRandomHadith();
