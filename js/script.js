// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

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

var used = [];

function getRandomQuote(){
	for(var i = 0; i < quotes.length; i += 1){
	Math.floor(Math.random() * quotes.length) + 1;
		if(used.indexOf(i) === -1){
			quotes.push(used);
	}	else if(used.indexOf(i) === quotes.indexOf(i)){
		quotes.slice(i);
	}
	return quotes[i];
}