

const menuItens = document.querySelectorAll('nav a')


menuItens.forEach(item =>{
	item.addEventListener('click',ScrollSuave)
})


function ScrollSuave(event){
	event.preventDefault();
	const elemento = event.target;
	const id = elemento.getAttribute('href');
	const Tela = document.querySelector(id).offsetTop;

	console.log(Tela)

	window.scroll({
		top: Tela,
		behavior: "smooth",
	});
}