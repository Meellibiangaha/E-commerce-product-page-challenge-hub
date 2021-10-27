//микро-библиотека closest
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


//Модальное окно + слайдер
//Я, как честный начинающий разработчик,
//Позаимствовал этот код с интернета

document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
   Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
   overlay      = document.querySelector('.js-overlay-modal'),
   closeButtons = document.querySelectorAll('.js-modal-close');
   console.log(closeButtons);

   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

   	/* Назначаем каждой кнопке обработчик клика */
   	item.addEventListener('click', function(e) {
   		e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
         и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
         modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

         modalElem.classList.add('active');
         overlay.classList.add('active');
     });
   });


   closeButtons.forEach(function(item){

   	item.addEventListener('click', function(e) {
   		var parentModal = this.closest('.modal');

   		parentModal.classList.remove('active');
   		overlay.classList.remove('active');
   	});
   });


   document.body.addEventListener('keyup', function (e) {
   	var key = e.keyCode;

   	if (key == 27) {

   		document.querySelector('.modal.active').classList.remove('active');
   		document.querySelector('.overlay').classList.remove('active');
   	};
   }, false);


   overlay.addEventListener('click', function() {
   	document.querySelector('.modal.active').classList.remove('active');
   	this.classList.remove('active');
   });
});

//Теперь мой "код" 2-й слайдер (считай копия 1-го)

let modal_image = document.querySelectorAll('.modal_img');
let modal_image_thumbail = document.querySelectorAll('.modal_slides_thumbnail');
let j = 0;

let modal_slide_1 = modal_image_thumbail[0];
let modal_slide_2 = modal_image_thumbail[1];
let modal_slide_3 = modal_image_thumbail[2];
let modal_slide_4 = modal_image_thumbail[3];

modal_slide_1.addEventListener("click", function (){
	modal_image_thumbail[j].classList.remove('modal_slides_thumbnail_active');
	modal_image[j].classList.remove('modal_block');
	j = 0;
	modal_image_thumbail[j].classList.add('modal_slides_thumbnail_active');
	modal_image[j].classList.add('modal_block');
	
});
modal_slide_2.addEventListener("click", function (){
	modal_image_thumbail[j].classList.remove('modal_slides_thumbnail_active');
	modal_image[j].classList.remove('modal_block');
	j = 1;
	modal_image_thumbail[j].classList.add('modal_slides_thumbnail_active');
	modal_image[j].classList.add('modal_block');
	
});
modal_slide_3.addEventListener("click", function (){
	modal_image_thumbail[j].classList.remove('modal_slides_thumbnail_active');
	modal_image[j].classList.remove('modal_block');
	j = 2;
	modal_image_thumbail[j].classList.add('modal_slides_thumbnail_active');
	modal_image[j].classList.add('modal_block');
	
});
modal_slide_4.addEventListener("click", function (){
	modal_image_thumbail[j].classList.remove('modal_slides_thumbnail_active');
	modal_image[j].classList.remove('modal_block');
	j = 3;
	modal_image_thumbail[j].classList.add('modal_slides_thumbnail_active');
	modal_image[j].classList.add('modal_block');
	
});

// кнопки previos/next

let previos = document.querySelector('.modal_btn_previos');
let next = document.querySelector('.modal_btn_next');

previos.addEventListener('click', function() {
	--j;
	if (j < 0) {
		modal_image[j+1].classList.remove("modal_block");
		modal_image_thumbail[j+1].classList.remove('modal_slides_thumbnail_active');
		j = 3;
		modal_image[j].classList.add("modal_block");
		modal_image_thumbail[j].classList.add('modal_slides_thumbnail_active');
	} else {
		modal_image[j+1].classList.remove("modal_block");
		modal_image_thumbail[j+1].classList.remove('modal_slides_thumbnail_active');
		modal_image[j].classList.add("modal_block");
		modal_image_thumbail[j].classList.add('modal_slides_thumbnail_active');
	}
});

next.addEventListener('click', function() {
	++j;	
	if (j >= modal_image.length) {
		modal_image[j-1].classList.remove("modal_block");
		modal_image_thumbail[j-1].classList.remove('modal_slides_thumbnail_active');
		j = 0;
		modal_image[j].classList.add("modal_block");
		modal_image_thumbail[j].classList.add('modal_slides_thumbnail_active');
	} else {
		modal_image[j-1].classList.remove("modal_block");
		modal_image_thumbail[j-1].classList.remove('modal_slides_thumbnail_active');
		modal_image[j].classList.add("modal_block");
		modal_image_thumbail[j].classList.add('modal_slides_thumbnail_active');
	}
});