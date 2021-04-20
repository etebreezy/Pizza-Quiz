const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

// Pseudo code:
// Event listener
// Get values from the radio buttons
// Logic to get the results
// Display the results


// Vanila JavaScript

// Return a random item from a given array
function randomResult(array) {

	// use the length of the array to get a random number:
	const randomNumber = Math.floor(Math.random() * array.length)

	// give back the item from array at the randomNumber index
	return array[randomNumber]
}

// Create my init function
function init() {
	console.log('are we good')

	// Event listener on the form (submit):
	// $("form").on('submit', function() {}) --> Jquery equivalent
	const form = document.querySelector('form');
	form.addEventListener('submit', function(event) {

		// prevent page from refreshing:
		event.preventDefault();

		// Get values from the radio buttons
		// select an input whose name attribute is 'size' and has been clicked on by the user
		// const sizeValue = $('input[name=size]:checked').val()
		const sizeValue = document.querySelector('input[name=size]:checked').value;
		const priceValue = document.querySelector('input[name=price]:checked').value;

		// Logic to get the results
		// Narrow down our HUGE Pizza object
		const sizeOptions = pizza[sizeValue]

		// const finalPizzaOptions = []

		// Loop through the array
		// sizeOptions.forEach((pizzaPlace) => {
			
		// 	// compare pizzaPlace.price to priceValue from the above:
		// 	if (pizzaPlace.price === priceValue) {
		// 		finalPizzaOptions.push(pizzaPlace)
		// 	}
		// })

		// Other Options:
		// const mapVersion = sizeOptions.map((pizzaPlace) => {
		// 	if (pizzaPlace.price === priceValue) {
				
		// 		// take my pizzaPlace and push it into mapVersion
		// 		return pizzaPlace;
				
		// 	}
		// })
		// console.log(mapVersion)

		const finalPizzaOptions = sizeOptions.filter((pizzaPlace) => {
				
			// take my pizzaPlace and push it into mapVersion
			return pizzaPlace.price === priceValue;
		})
		// Use the random result function to get one item from the finalPizzaOptions
		const theOne = randomResult(finalPizzaOptions);
		
		// Display reults
		const resultHTML = `<h2>You should go to <span class='restaurant'>${theOne.title}</span></h2>`

		// Append to document
		document.querySelector('.results').innerHTML = resultHTML; 
		
	})
}


// Document Ready

// $('document') --> Jquery equivalent
if (document.readyState === 'complete') {
	init();
} else {
	// .on() --> Jquery equivalent
	document.addEventListener('DOMContentLoaded', init);
}