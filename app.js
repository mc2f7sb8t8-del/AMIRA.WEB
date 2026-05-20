window.addEventListener('scroll',()=>{

const nav=document.querySelector('.navbar');

if(window.scrollY>10){
nav.style.boxShadow='0 10px 30px rgba(0,0,0,.04)';
}else{
nav.style.boxShadow='none';
}

});

const modal=document.getElementById('modal');
const title=document.getElementById('modal-title');
const text=document.getElementById('modal-text');

const content={
faq:{
title:'Preguntas frecuentes',
text:'Nuestros desayunos premium pueden personalizarse y programarse con anticipación. Trabajamos con entregas elegantes y productos frescos.'
},
shipping:{
title:'Envíos y entregas',
text:'Realizamos entregas puntuales en Lima Metropolitana con coordinación previa para garantizar una experiencia premium.'
},
policies:{
title:'Políticas',
text:'Todos nuestros pedidos son preparados artesanalmente. Las modificaciones deben realizarse con anticipación.'
},
terms:{
title:'Términos y condiciones',
text:'El uso de nuestro servicio implica aceptación de nuestros tiempos de entrega, disponibilidad y políticas de personalización.'
}
};

function openModal(type){

modal.style.display='flex';
title.innerText=content[type].title;
text.innerText=content[type].text;

}

function closeModal(){
modal.style.display='none';
}

window.onclick=function(e){
if(e.target==modal){
modal.style.display='none';
}
}

// SCROLL REVEAL
const fadeElements=document.querySelectorAll('.fade-in');

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add('show');
}else{
entry.target.classList.remove('show');
}

});

},{
threshold:0.12
});

fadeElements.forEach(el=>observer.observe(el));


// HERO PREMIUM LOOP
const heroContent=[
{
title:'Amor en<br>cada mañana.',
text:'Desayunos premium diseñados para emocionar, sorprender y convertir momentos en recuerdos.'
},
{
title:'Detalles que<br>se sienten.',
text:'Experiencias elegantes creadas para transformar un simple desayuno en un momento inolvidable.'
},
{
title:'Regala emociones.',
text:'pensado para enamorar, celebrar y sorprender con estilo.'
}
];

const heroTitle=document.getElementById('hero-title');
const heroDescription=document.getElementById('hero-description');

let currentHero=0;

function changeHeroContent(){

heroTitle.style.opacity='0';
heroTitle.style.transform='translateY(10px)';

heroDescription.style.opacity='0';
heroDescription.style.transform='translateY(10px)';

setTimeout(()=>{

currentHero=(currentHero+1)%heroContent.length;

heroTitle.innerHTML=heroContent[currentHero].title;
heroDescription.innerHTML=heroContent[currentHero].text;

heroTitle.style.opacity='1';
heroTitle.style.transform='translateY(0)';

heroDescription.style.opacity='1';
heroDescription.style.transform='translateY(0)';

},700);

}

setInterval(changeHeroContent,6500);
