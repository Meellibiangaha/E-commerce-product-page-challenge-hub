// Счётчик добавления товара

let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let count = document.querySelector('.count');
count = count.textContent - 0;
minus.addEventListener('click', function(){
	let current_count = document.querySelector('.count');
	count--;
	if(count < 0){
		count = 0;
	}
	current_count.textContent = count;
});
plus.addEventListener("click", function(){
	let current_count = document.querySelector('.count');
	count++;
	if(count >= 99){count = 99}
	current_count.textContent = count;
});

// Слайдер 1-й

let image = document.querySelectorAll('.slides');
let image_thumbail = document.querySelectorAll('.slides_thumbnail');
let i = 0;

let slide_1 = image_thumbail[0];
let slide_2 = image_thumbail[1];
let slide_3 = image_thumbail[2];
let slide_4 = image_thumbail[3];

slide_1.addEventListener("click", function (){
	let current = i;
	image_thumbail[i].classList.remove('sl_th_active');
	image[i].classList.remove('block');
	i = 0;
	image_thumbail[i].classList.add('sl_th_active');
	image[i].classList.add('block');
});
slide_2.addEventListener("click", function (){
	let current = i;
	image_thumbail[i].classList.remove('sl_th_active');
	image[i].classList.remove('block');
	i = 1;
	image_thumbail[i].classList.add('sl_th_active');
	image[i].classList.add('block');
});
slide_3.addEventListener("click", function (){
	let current = i;
	image_thumbail[i].classList.remove('sl_th_active');
	image[i].classList.remove('block');
	i = 2;
	image_thumbail[i].classList.add('sl_th_active');
	image[i].classList.add('block');
});
slide_4.addEventListener("click", function (){
	let current = i;
	image_thumbail[i].classList.remove('sl_th_active');
	image[i].classList.remove('block');
	i = 3;
	image_thumbail[i].classList.add('sl_th_active');
	image[i].classList.add('block');
});

// Корзина
let cart_board = document.querySelector('.shopping-cart');
let cart = document.querySelector('.cart');

cart.addEventListener('click', function() {
	if(cart_board.classList[1] == 'box_block'){
		cart_board.classList.remove('box_block');
	}
	else{
		cart_board.classList.add('box_block');
	}
});

// Add to cart
let grid = document.querySelector('.grid_container');
let add_to_cart = document.querySelector('.add_to_cart');

add_to_cart.addEventListener('click', function() {
	if(document.querySelector('.count').textContent != 0){
		let number = document.querySelector('.count_product');
		let intnumber = parseInt(number.textContent);

		intnumber += count;
		number.textContent = intnumber;

		let price = document.querySelector('.max_price');
		let intPrice = parseInt(price.textContent.match(/[\d\.]/g).join(''));

		intPrice = intnumber * 125;
		price.textContent = "$"+intPrice+".00";

		if(grid.classList[1] == 'grid_display'){
			grid.classList.remove('grid_display');
		}
		if(document.querySelector('.empty_cart').classList[1] != 'grid_display'){
			document.querySelector('.empty_cart').classList.add('grid_display');
		}
		count = 0;
		document.querySelector('.count').textContent = 0;
	}
	
});

// delete_button

let delete_button = document.querySelector('.delete_btn');
delete_button.addEventListener('click', function() {
	document.querySelector('.grid_container').classList.add('grid_display');
	document.querySelector('.empty_cart').classList.remove('grid_display');
	document.querySelector('.count_product').textContent = 0;
	document.querySelector('.max_price').textContent = 0;
});

// avatar

document.querySelector('.avatar').addEventListener('click',function() {
	document.body.style.background = 'seagreen';
});

// модальное окно со 2-м слайдером

var modal = $modal({
  title: 'Текст заголовка'
}); 
modal.show();