const main = document.querySelector('.main');
const order = document.querySelector('.order');
const admin = document.querySelector('.admin');
const blockOrder = document.querySelector('#title');
const blockMain = document.querySelector('#menu');
const blockAdmin = document.querySelector('#asd');

const inputUrl = document.querySelector('.url');
const inputName = document.querySelector('.name');
const inputPrice = document.querySelector('.price');
const inputs = document.querySelectorAll('.asd-text input');
const createBtn = document.querySelector('.createblock');

const Cards = document.querySelector('.cards_content');

blockOrder.style.display = 'none';
blockAdmin.style.display = 'none';

getAll();

createBtn.addEventListener('click', () => {
	let obj = {
		url: inputUrl.value,
		name: inputName.value,
		price: inputPrice.value,
	};

	let data = JSON.parse(localStorage.getItem('card')) || [];
	data.push(obj);
	localStorage.setItem('card', JSON.stringify(data));
	inputs.forEach((el) => (el.value = ''));
	getAll();
});

main.addEventListener('click', () => {
	blockMain.style.display = 'block';
	blockOrder.style.display = 'none';
	blockAdmin.style.display = 'none';
});

order.addEventListener('click', () => {
	blockMain.style.display = 'none';
	blockOrder.style.display = 'block';
	blockAdmin.style.display = 'none';
});

admin.addEventListener('click', () => {
	blockMain.style.display = 'none';
	blockOrder.style.display = 'none';
	blockAdmin.style.display = 'block';
});

function getAll() {
	Cards.innerHTML = '';
	let data = JSON.parse(localStorage.getItem('card')) || [];
	data.forEach((el, idx) => {
		const card = document.createElement('div');
		card.setAttribute('class', 'card');
		card.setAttribute('id', idx);
		const cardImage = document.createElement('img');
		cardImage.setAttribute('class', 'heade_img');
		cardImage.src = el.url;
		// cardImage.alt = 'No order';
		const name = document.createElement('h1');
		name.setAttribute('class', 'sha');
		name.innerHTML = el.name;
		const moneys = document.createElement('moneys');
		moneys.setAttribute('class', 'moneys');
		const money = document.createElement('h1');
		money.innerHTML = el.price;
		money.setAttribute('class', 'money');
		const btnOrder = document.createElement('button');
		btnOrder.setAttribute('class', 'btn');
		btnOrder.innerText = 'to order';

		btnOrder.addEventListener('click', () => {
			let newData = JSON.parse(localStorage.getItem('order')) || [];
			newData.push(el);
			localStorage.setItem('order', JSON.stringify(newData));
		});

		moneys.append(money, btnOrder);
		card.append(cardImage, name, moneys);
		Cards.append(card);
	});
}

// order();

// function order() {
// 	let orderLocal = JSON.parse(localStorage.getItem('order')) || [];
// 	orderLocal.forEach((el) => {
// 		const block = document.createElement('div');
// 		block.setAttribute('class', 'title-1');
// 		const blockImage = document.createElement('img');
// 		blockImage.setAttribute('class', 'heade_img');
// 		blockImage.src = el.url;
// 		const titleTwo = document.createElement('div');
// 		titleTwo.setAttribute('class', 'title-2');
// 		const h2 = document.createElement('h2');
// 		h2.innerHTML = el.name;
// 		const price = document.createElement('p');
//      price.innerHTML =
// 	});
// }
