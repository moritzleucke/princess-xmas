const RIDDLES = [
    'Zwei Mütter und zwei Töchter treffen sich zum Backen. Jede backt einen Kuchen. Zusammen haben sie aber nur drei Kuchen gebacken. Wie ist das möglich?',
    'Von einem Schiff hängt eine Strickleiter herab. Von der Wasseroberfläche bis zur Reling des Schiffes kann man 22 Sprossen zählen. Die Reling befindet sich 11 Meter über der Wasseroberfläche. Nun kommt die Flut. Der Wasserspiegel steigt um 2 Meter und 50 cm. Wie viele Sprossen kann man nun noch über dem Wasser herausragen sehen?',
    'Weiß wie Kreide, Leicht wie Flaum, Weich wie Seide, Feucht wie Schaum.',
    'Ich saß bei einem Glase Wein, da fiel ein kleines Tier hinein. In was für Wein sagt dir das Tier allein!',
    'Rudolf ist 24 Jahre alt. Er ist heute doppelt so alt wie Lene war, als Rudolf so alt war, wie Lene jetzt ist. Wissen Sie, wie alt Lene heute ist?',
]

// Get the element with the ID "riddle"
let riddleElement = document.getElementById("riddle");

// Create a new paragraph element
let paragraphElement = document.createElement("p");

// Set the text content of the paragraph
paragraphElement.textContent = RIDDLES[0];

// Append the paragraph element to the "riddle" element
riddleElement.appendChild(paragraphElement);

