let head = document.querySelector('h1');
	head.textContent = 'Hello World !';

let blimg = document.querySelector('img');

blimg.addEventListener('click', function() {
	let blsrc = blimg.getAttribute('src');

	if (blsrc === 'https://static.cardmarket.com/img/23892f4ee632610adc9885f809150a3b/items/5/YGLD/286152.jpg') {
		blimg.setAttribute('src', 'https://static.cardmarket.com/img/ab9c65d1defa6b5d3f070f78d2a12605/items/5/MVP1/291356.jpg');
	}
	else {
		blimg.setAttribute('src', 'https://static.cardmarket.com/img/23892f4ee632610adc9885f809150a3b/items/5/YGLD/286152.jpg');
	}	
});