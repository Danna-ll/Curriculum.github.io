let text = document.querySelectorAll(".text");

function mostrarScroll(){

    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i <text.length; i++ ){
        let alturaAnimado = text[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){

            text[i].style.opacity =1;
        }
    }
}
window.addEventListener('scroll',mostrarScroll)