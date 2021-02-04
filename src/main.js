window.onload = () => {
  document.querySelector(".excuse-button").addEventListener("click", () => {
    document.querySelector(".excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let adjective = [
    "fat",
    "lazy",
    "scary",
    "tiny",
    "funny",
    "intimidating",
    "stupid",
    "huge",
    "crazy",
    "wild",
    "insane",
    "hilarious",
    "dumb"
  ];
  let who = [
    "dog",
    "cat",
    "brother",
    "sister",
    "cousin",
    "principal",
    "bus driver",
    "mom",
    "dad",
    "grandma",
    "grandpa",
    "uncle",
    "aunt",
    "teacher",
    "friend",
    "buddy",
    "classmate"
  ];
  let action = [
    "ate",
    "threw away",
    "burned",
    "kicked",
    "punched",
    "washed",
    "pissed on",
    "sat on",
    "spilled water on"
  ];
  let what = [
    "homework",
    "laptop",
    "books",
    "car",
    "backpack",
    "dignity",
    "pants",
    "computer",
    "notebook",
    "pencil case",
    "paper",
    "pen",
    "bike"
  ];
  let when = [
    "this morning",
    "this afternoon",
    "yesterday",
    "last week",
    "last month",
    "last year",
    "last night",
    "in first period",
    "in second period",
    "in third period",
    "in fourth period",
    "at lunch",
    "on Monday",
    "on Tuesday",
    "on Wednesday",
    "on Thursday",
    "on Friday",
    "on Saturday",
    "on Sunday"
  ];

  let adjIndx = Math.floor(Math.random() * adjective.length);
  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);
  return (
    "My " +
    adjective[adjIndx] +
    " " +
    who[whoIndx] +
    " " +
    action[actIndx] +
    " my " +
    what[whatIndx] +
    " " +
    when[whenIndx] +
    "!"
  );
};
