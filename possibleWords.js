const { FloatingActionButton } = require("material-ui")
const { red100 } = require("material-ui/styles/colors")
const { appendFile } = require("original-fs")

let countries =
[
  "Afghanistan",  "Albania",  "Algeria",  "Andorra",  "Angola",  "Argentina",  "Armenia",
  "Australia",  "Austria",  "Azerbaijan",  "Bahamas",  "Bahrain",  "Bangladesh",
  "Barbados",  "Belarus",  "Belgium",  "Belize",  "Benin",  "Bhutan",  "Bolivia",
  "Botswana",  "Brazil",  "Brunei",  "Bulgaria",  "Burkina Faso",  "Burundi",  "Cambodia",
  "Cameroon",  "Canada",  "Chad",  "Chile",  "China",  "Colombia",  "Comoros",  "Costa Rica",
  "Croatia",  "Cuba",  "Cyprus",  "Denmark",  "Ecuador",  "Egypt",  "El Salvador",  "Estonia",
  "Eswatini",  "Ethiopia",  "Fiji",  "Finland",  "France",  "Georgia",  "Germany",  "Ghana",
  "Greece",  "Grenada",  "Guatemala",  "Guinea",  "Guyana",  "Haiti",  "Honduras",  "Hungary",
  "Iceland",  "India",  "Indonesia",  "Iran",  "Iraq",  "Ireland",  "Israel",  "Italy",
  "Jamaica",  "Japan",  "Jordan",  "Kenya",  "Kiribati",  "Kosovo",  "Kuwait",  "Laos",
  "Latvia",  "Lebanon",  "Lesotho",  "Liberia",  "Libya",  "Lithuania",  "Luxembourg",
  "Madagascar",  "Malawi",  "Malaysia",  "Maldives",  "Mali",  "Malta",  "Marshall Islands",
  "Mauritania",  "Mauritius",  "Mexico",  "Micronesia",  "Moldova",  "Monaco",  "Mongolia",
  "Montenegro",  "Morocco",  "Mozambique",  "Myanmar",  "Namibia",  "Nauru",  "Nepal",
  "Netherlands",  "New Zealand",  "Nicaragua",  "Niger",  "Nigeria",  "North Korea",
  "North Macedonia",  "Norway",  "Oman",  "Pakistan",  "Palau",  "Palestine",  "Panama",
  "Paraguay",  "Peru",  "Philippines",  "Poland",  "Portugal",  "Qatar",  "Romania",
  "Russia",  "Rwanda",  "Saint Lucia",  "Samoa",  "San Marino",  "Saudi Arabia",  "Senegal",
  "Serbia",  "Seychelles",  "Sierra Leone",  "Singapore",  "Slovakia",  "Slovenia",
  "Solomon Islands",  "Somalia",  "South Africa",  "South Korea",  "South Sudan",  "Spain",
  "Sri Lanka",  "Sudan",  "Suriname",  "Sweden",  "Switzerland",  "Syria",  "Taiwan",
  "Tajikistan",  "Tanzania",  "Thailand",  "Timor-Leste",  "Togo",  "Tonga",
  "Trinidad and Tobago",  "Tunisia",  "Turkey",  "Turkmenistan",  "Tuvalu",  "Uganda",
  "Ukraine",  "UAE",  "United Kingdom",  "United States",  "Uruguay",  "Vanuatu",
  "Vatican City",  "Venezuela",  "Vietnam",  "Yemen",
]

let animals =
[
  "alligator",  "alpaca",  "ant",  "antelope",  "ape",  "armadillo",  "baboon",  "bass",
  "bat",  "bee",  "bird",  "bison",  "camel",  "cat",  "cheetah",  "chicken",  "chipmunk",
  "deer",  "dog",  "dolphin",  "donkey",  "duck",  "eagle",  "elephant",  "emu",  "falcon",
  "Fish",  "Flamingo",  "Flea",  "Fly",  "Fox",  "Goat",  "Goose",  "Gopher",  "Gorilla",
  "Hamster",  "Hare",  "Iguana",  "Kangaroo",  "Lemur",  "Leopard",  "Lion",  "Lizard",
  "Monkey",  "Moose",  "Mosquito",  "Moth",  "Octopus",  "Orca",  "Ostrich",  "Otter",
  "Panda",  "Parrot",  "Peacock",  "Pelican",  "Penguin",  "Rabbit",  "Raccoon",  "Rat",
  "Rattlesnake",  "Sloth",  "Snail",  "Snake",  "Spider",  "Tiger",  "Turkey",  "Wolf",
]

let colors = 
[
  "red"

]