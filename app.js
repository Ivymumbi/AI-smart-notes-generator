function generateNotes(response) {
  new Typewriter("#output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4,
    cursor: null,
  });
}

function simplify() {
  let notesInputElement = document.querySelector("#notes-input");
  let apiKey = "f1fc0cc94o4ea1c9e211223ba7t05bc1";
  let prompt = `generate simplified notes about${notesInputElement.value}`;
  let context =
    "You are a good notes simplifier, make sure you generate nicely simplified notes for the user making it easier for them to understand avoid alot of eplanations, keep it short simple and clean. Also make sure you use html format of <br/> ie each simplified point is in its own line and avoid using stars";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let notesOutputElement = document.querySelector("#output");
  axios.get(apiUrl).then(generateNotes);
}

let simplifyButton = document.querySelector("#simplify-btn");
simplifyButton.addEventListener("click", simplify);

function generatePoints(response) {
  new Typewriter("#output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4,
    cursor: null,
  });
}

function highlight() {
  let notesInputElement = document.querySelector("#notes-input");
  let apiKey = "f1fc0cc94o4ea1c9e211223ba7t05bc1";
  let prompt = `generate bullet points about${notesInputElement.value}`;
  let context =
    "you are good at highlighting information into points.Generate bullet points of users notes and make sure they are short clear and neatly outlined each on its own sentence like please make sure you  you are using html format like <li> line one on its own line two below it like that .";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let notesOutputElement = document.querySelector("#output");
  axios.get(apiUrl).then(generatePoints);
}

let bulletButton = document.querySelector("#bullet-btn");
bulletButton.addEventListener("click", highlight);

function generateMotivation(response) {
  new Typewriter("#motivation-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4,
    cursor: null,
  });
}

function displayMotivation() {
  let motivationInputElement = document.querySelector("#motivation-type");
  let apiKey = "f1fc0cc94o4ea1c9e211223ba7t05bc1";
  let prompt = `generate encouraging motivation about ${motivationInputElement.value}`;
  let context =
    "you are good at giving the best and encouraging motivations to people.Generate a good short heartwarming,encouraging motivation to the user for them to keep going,please avoid alot of explanations make it short.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let motivationOutputElement = document.querySelector("#motivation-output");
  motivationOutputElement.innerHTML =
    "<div class='blink'>Motivation will appear here..</div>";
  axios.get(apiUrl).then(generateMotivation);
}

let motivationButton = document.querySelector("#motivation-btn");
motivationButton.addEventListener("click", displayMotivation);
