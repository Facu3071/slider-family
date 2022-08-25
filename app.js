const family = [
  {
    id: 1,
    name: "Ismael Cwielong",
    relationship: "Nephew",
    img: "/assets/isma.jpg",
    info: "He is my nephew, the only babe at the family(although he says isn't babe anymore, all the family know he will be the baby for ever). he is like his mom,crazy (less than his mom), cute (like me), beatiful and luckily so good person",
  },
  {
    id: 2,
    name: "Nancy Bochio",
    relationship: "Mother",
    img: "/assets/nancy.jpg",
    info: "Mother of uncountable sons, she is the most important at the family, without she wouldn't born anybody. She is so stronge and good person. She will be always the `mami`",
  },
  {
    id: 3,
    name: "Antonella Quiroga",
    relationship: "Sister",
    img: "/assets/anto.jpg",
    info: "She is my unique sister and isma's mother. Like his son, she is a crazy but so much than isma. at the first time that you meet her, it would be weird if you like her because she have a strong personality, but she is so cute (deep inside, far away).",
  },
  {
    id: 4,
    name: "Damian quiroga",
    relationship: "Brother",
    img: "/assets/dami.jpg",
    info: "He is my unique brother too. he have a introvert personality but it's only when he is sober because when he is drunk, talking so much and never stop to talk (drink too)",
  },
  {
    id: 5,
    name: "Facundo rubio",
    relationship: "Me",
    img: "/assets/facu.jpg",
    info: "Me, the smarter and nicer. Good person, good health, good body. Am i better than dami? sure.",
  },
];

const d = document,
  $img = d.getElementById("img"),
  $people = d.getElementById("people"),
  $relationship = d.getElementById("relationship"),
  $info = d.querySelector(".info"),
  $prevBtn = d.querySelector(".prev-btn"),
  $nextBtn = d.querySelector(".next-btn"),
  $randomBtn = d.querySelector(".random-btn");

let currentItem = 0;

d.addEventListener("DOMContentLoaded", (e) => {
  showPerson();
});
const showPerson = () => {
  const item = family[currentItem];
  $img.src = item.img;
  $people.textContent = item.name;
  $relationship.textContent = item.relationship;
  $info.textContent = item.info;
};
$nextBtn.addEventListener("click", (e) => {
  currentItem++;
  if (currentItem > family.length - 1) currentItem = 0;

  showPerson();
});

$prevBtn.addEventListener("click", (e) => {
  currentItem--;
  if (currentItem < 0) currentItem = family.length - 1;
  showPerson();
});

$randomBtn.addEventListener("click", (e) => {
  currentItem = Math.floor(Math.random() * family.length - 1);
  showPerson();
});
