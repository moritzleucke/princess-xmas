const RIDDLES = [
    'Zwei Mütter und zwei Töchter treffen sich zum Backen. Jede backt einen Kuchen. Zusammen haben sie aber nur drei Kuchen gebacken. Wie ist das möglich?',
    'Von einem Schiff hängt eine Strickleiter herab. Von der Wasseroberfläche bis zur Reling des Schiffes kann man 22 Sprossen zählen. Die Reling befindet sich 11 Meter über der Wasseroberfläche. Nun kommt die Flut. Der Wasserspiegel steigt um 2 Meter und 50 cm. Wie viele Sprossen kann man nun noch über dem Wasser herausragen sehen?',
    'Weiß wie Kreide, Leicht wie Flaum, Weich wie Seide, Feucht wie Schaum.',
    'Ich saß bei einem Glase Wein, da fiel ein kleines Tier hinein. In was für Wein sagt dir das Tier allein!',
    'Rudolf ist 24 Jahre alt. Er ist heute doppelt so alt wie Lene war, als Rudolf so alt war, wie Lene jetzt ist. Wissen Sie, wie alt Lene heute ist?',
    'Wenn Lauras Tochter die Mutter meiner Tochter ist, was bin ich dann für Laura?',
    'Du lebst in einem Haus, dessen Wände alle nach Süden ausgerichtet sind. Wo befindest du dich?',
    'Mit nur noch einem Streichholz in der Schachtel betrittst du mitten in der Nacht eine Hütte. In der Hütte findest du eine Petroleumlampe, eine Kerze und einen offenen Kamin mit etwas Holz. Was solltest du zuerst anzünden?',
    'Sechs Trinkgläser stehen in einer Reihe. Die drei links sind gefüllt, die drei rechts sind leer. Kannst du erreichen, dass immer abwechselnd ein leeres und ein volles Glas in der Reihe stehen? Du darfst dafür aber nur ein einziges Glas bewegen!',
    'Welche der fünf Zahlen gehört da nicht hin?:  2, 4, 6, 8, 10',
    'Sieben Kinder sitzen in einer Klasse vor der Lehrerin. Jedes Kind hat einen Rucksack. In jedem Rucksack sind drei kleine Kätzchen. Jedes Kätzchen hat vier Beine. Frage: Wie viele Beine gibt es in dieser Klasse?',
    'Ein Schmuus war 1990 zwanzig Jahre alt, 2000 war er zehn. Wie ist das möglich?',
    'In einem Mehrfamilienhaus wohnt im 1. Stock eine dreiköpfige Familie, im 2. Stock eine Familie ohne Kinder, im 3. Stock zwei Rentner und im 4. Stock eine Wahrsagerin. Welcher Aufzugsknopf wird am häufigsten gedrückt?',
    'Wenn du alle Zahlen auf der Tastatur deines Handys multiplizierst, welche Zahl erhältst du?',
    'Was kommt als nächstes?: 77, 49, 36, 18, ...',
    '',
    '',
    '',
    '',
    'I am an odd number. Take away a letter and I become even. What number am I?',
    'Who has married many women but was never married?',
    'A tree doubled in height each year until it reached its maximum height over the course of ten years. How many years did it take for the tree to reach half its maximum height?',
    'What kind of room has no walls, door or windows?',
    'Where is the only place where today comes before yesterday?',
]
function getTodayDate() {
    // Create a new Date object
    const today = new Date();
  
    // Get the day of the month
    const dayOfMonth = today.getDate();
  
    // Return the day of the month as an integer
    return dayOfMonth;
  }

const todayDate = getTodayDate();

// Get the element with the ID "riddle"
let riddleElement = document.getElementById("riddle");

// Create a new paragraph element
let paragraphElement = document.createElement("p");

// Set the text content of the paragraph
paragraphElement.textContent = RIDDLES[todayDate-1];

// Append the paragraph element to the "riddle" element
riddleElement.appendChild(paragraphElement);


// Get the element with the ID "riddle"
let picElement = document.getElementById("pic-container");

// Create a new image element
let imageElement = document.createElement("img");

// Set the src attribute to the path of your image file
imageElement.src = `pictures/cal/cal-${todayDate}.jpeg`; // Replace with the actual path

// Set alternative text for accessibility
imageElement.alt = "wow";
imageElement.width = "300";

// Append the image element to the "riddle" element
picElement.appendChild(imageElement);

