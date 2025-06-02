const greetingEl = document.querySelector('.greeting');
greetingEl.innerHTML = 'Welcome to <i>QDOM</i> store!';
greetingEl.style.color = 'green';

const bookButton = document.querySelector('button[data-id="book"]');
const penButton = document.querySelector('button[data-id="pen"]');
const notebookButton = document.querySelector('button[data-id="notebook"]');

const cart = document.querySelector('#cart');

bookButton.addEventListener('click', () => {
	cart.innerHTML += '<div>📘 Book - $<span>30</span></div>';
});
penButton.addEventListener('click', () => {
	cart.innerHTML += '<div>🖊️ Pen - $<span>3</span></div>';
});
notebookButton.addEventListener('click', () => {
	cart.innerHTML += '<div>📒 Notebook - $<span>7</span></div>';
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const totalSpan = document.querySelector('#total span');
		const itemsSpan = document.querySelector('#items span');
		const cartItems = cart.querySelectorAll('div span');

		let total = 0;
		cartItems.forEach((item) => {
			total += parseFloat(item.textContent);
		});

		totalSpan.textContent = total;
		itemsSpan.textContent = cart.querySelectorAll('div').length;
	});
});

const clearCartButton = document.querySelector('#clear-cart');

clearCartButton.addEventListener('click', () => {
	cart.innerHTML = '';
	document.querySelector('#total span').textContent = 0;
	document.querySelector('#items span').textContent = 0;
});
