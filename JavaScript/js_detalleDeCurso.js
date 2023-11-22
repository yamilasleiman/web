const accordion = document.getElementsByClassName('contentBx');
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
};

const openModal = document.querySelector('.boton-inscribirse');
const modal= document.querySelector('.modal');
const closeModal= document.querySelector('.modal_cerrar');

openModal.addEventListener('click', (e)=>{
e.preventDefault();
modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    });
