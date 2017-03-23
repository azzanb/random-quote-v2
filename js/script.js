// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

var quotes = [
	{
		quote: "You forget what you want to remember and you remember what you want to forget.",
		author: 'Cormac McCarthy',
		source: 'The Road',
		category: 'Novel',
		genre: 'Post-Apocalyptic Fiction',
		year: 2006
	},
	{
		quote: "Memories warm you up from the inside. But they also tear you apart.",
		author: 'Haruki Murakami',
		source: 'Kafka on the Shore',
		category: 'Novel',
		genre: "Magical Realism",
		year: 2002
	},
	{
		quote: "And meanwhile time goes about its immorial work making everyone look and feel like shit.",
		author: 'Martin Amis',
		source: 'London Fields',
		category: 'Novel',
		genre: 'Black Comedy',
		year: 1989
	},
	{
		quote: "We can experience nothing but the present moment, live in no other second of time, and to understand this is as close we can get to eternal life.",
		author: 'P.D. James',
		source: 'The Children of Men',
		category: 'Novel',
		genre: 'Dystopian Fiction',
		year: 1992
	},
	{
		quote: "It doesn't matter who you are or what you look like, so long as somebody loves you.",
		author: 'Roald Dahl',
		source: 'The Witches',
		category: 'Novel',
		genre: "Children's fantasy",
		year: 1983
	},
	{
		quote: "Why can't people have what they want? The things are all there to content everybody; yet everybody has the wrong thing.",
		author: 'Ford Madox Ford',
		source: 'The Good Soldier: A Tale of Passion',
		category: 'Novel',
		genre: 'Pre-Modernist',
		year: 1915
	}
];


//this will store what's sliced
var storeQuote = quotes.slice(); 


//create function that returns a random object
function getRandomQuote(){
	var num = Math.floor(Math.random() * quotes.length);
	return quotes[num];
}

//create function to create a random rgb()
function color(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//create printQuote() to store getRandomQuote() and return random object
function printQuote(){
	// 1)store returned object of getRandomObject function in a variable
	var readQuote = getRandomQuote(); 

	// 2)store the index number
	var quoteDisplay = quotes.indexOf(readQuote); 
	
	// 3)remove object from quotes[], then replace quotes[] once it's empty
	quotes.splice(quoteDisplay, 1);
	if(quotes.length === 0){
		quotes = storeQuote.slice(0);
	}

	// 4)create the object string
	var quoteInfo = '<p class="quote">' + readQuote.quote + '</p>';
	quoteInfo += '<p class = "source">' + readQuote.source;
	quoteInfo += '<span class = "citation">' + readQuote.author + ', ' + readQuote.category + ', ' + readQuote.genre + '</span>';
	quoteInfo += '<span class = "year">' + readQuote.year + '</span>';
	quoteInfo += '</p>';

	// 5)manipulate string if author and year are unknown
	if(readQuote.author === null){
		quoteInfo += '<span class = "citation">' + 'Anonymous' + ', ' + readQuote.category + ', ' + readQuote.genre + '</span>';
	}
	if(readQuote.year === null){
		quoteInfo += '<span class = "year">' + 'Year Unknown' + '</span>';
	}

	// 6)set string to be printed to screen 
	document.getElementById('quote-box').innerHTML = quoteInfo;

	// 7)manipulate the background color: set color() equal to the tagged body
	document.body.style.backgroundColor = color();

	// 8)log the quote to the conso
	console.log(readQuote);
}

//use the printQuote function to set a timer for quotes
window.setInterval(printQuote, 3000); 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
printQuote();