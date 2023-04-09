const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const latinText = [
  "bardus ",
  "brevis ",
  "comminus ",
  "electus ",
  "extremus ",
  "gravatus ",
  "gravis ",
  "hodiernus ",
  "honorabilis ",
  "idoneus ",
  "ignarus ",
  "ignavus ",
  "ignotus ",
  "immortalis ",
  "incorruptus ",
  "liquidus ",
  "prudens ",
  "regius ",
  "rusticus ",
  "salvus ",
  "serius ",
  "simplex ",
  "tersus ",
  "tutis ",
  "vetus "
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to create Thoughts Data
const getRandomText = (len) => {
  const thtLen = Math.floor(Math.random() * len * latinText.length);
  let fullString = "";
  for (let i = 0; i < thtLen; i++) {
    const word = getRandomArrItem(latinText);
    fullString += word;
  }
  return `${fullString.trim()}.`
}

const getRandomThought = () => getRandomText(4);

// Function to generate reactions for users/thoughts
const getRandomReaction = () => getRandomText(1);

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThought, getRandomReaction };
