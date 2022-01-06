/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/

var viewedQuotes =[];
var red;
var green;
var blue;
let quotes= [ 
{
  quote: "That's one small step for man, one giant leap for mankind.",
  source: "Neil Armstrong",
  citation: "The moon",
  year: 1969,
  tags: "Space Travel",
},
{
  quote: "It always seems impossible until it is done.",
  source: "Nelson Mandela",
  citation: "",
  year: "1918 - 2013",
  tags: "Politics",
},
{
  quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
  source: "Albert Einstein",
  citation: "",
  year: "1879 - 1955",
  tags: "Engineering",
},
{
  quote: "What we think, we become",
  source: "Buddha",
  citation: "",
  year: "",
  tags: "Faith",
},
{
  quote: "Dream big and dare to fail",
  source: "Norman Vaughan",
  citation: "",
  year: "1905 - 2005",
  tags: "Business",
},
];

console.log(quotes);



/***
 * `getRandomQuote` function
***/
function getRandomQuote(){

  var randomnum = Math.floor(Math.random() * quotes.length);

  var splicedQuote = quotes[randomnum];
  viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}


/***
 * `printQuote` function
***/
function printQuote(){
  var quotes =getRandomQuote();

  message ='<p class="quote">' + quotes.quote + '</p>';
  message  += '<p class="source">' + quotes.source;
  if(quotes.citation){
    message += '<span class="citation">'+ quotes.citation+ '</span>';
  }
  if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
  }
  if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
  }
  
var outputDiv = document.getElementById('quote-box');
outputDiv.innerHTML = message;
document.body.style.backgroundColor  = randomColorGenerator();

}

function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);