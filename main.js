// 버튼콜
const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.menuSide');

btnCall.onclick = function (e) {
	e.preventDefault();

	btnCall.classList.toggle('on');

	menuMo.classList.toggle('on');
};