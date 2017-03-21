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

var usedQuotes = [];


function getRandomQuote(){
	var num = Math.floor(Math.random() * quotes.length) + 1;
	return quotes[num];
}

function color(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb("r + ', ' + g + ', ' + b")';
}

function printQuote(){
	//store returned object of getRandomObject function in a variable
	var chosenQuote = getRandomQuote(); //this is the index number of the array quotes
	var quoteDisplay = quotes[chosenQuote];

	//create object string
	var quoteInfo = '<p class="quote">' + quoteDisplay.quote + '</p>';
	quoteInfo += '<p class = "source">' + quoteDisplay.source;
	quoteInfo += '<span class = "citation">' + quoteDisplay.author + ', ' + ', ' + quoteDisplay.category + ', ' + quoteDisplay.genre + '</span>';
	quoteInfo += '<span class = "year">' + quoteDisplay.year + '</span>';
	quoteInfo += '</p>';
	document.getElementById('quote-box').innerHTML = quoteInfo;
//When the quote displays, push quote into usedQuotes
	console.log(chosenQuote.quote);
	document.body.style.backgroundColor = color();
	var quoteIndex = quotes.indexOf(chosenQuote);
		usedQuotes = quotes.splice(quoteIndex, 1);
	if(quotes.length === 0){
		quotes = usedQuotes.splice(usedQuotes.length);
		usedQuotes = [];
	}
	return quoteInfo;
}



printQuote();
document.getElementById('loadQuote').addEventListener("click", printQuote, false);