let deadline = new Date("oct 25,  2022 10:59:59").getTime()
let btnFile = document.querySelector('.btn-file')
let butSubmit = document.querySelector('.btn-submit')
let btnSelectFile = document.querySelector('.btn-select-file')
let cardInscription = document.querySelector('.card-inscription')
let cardSelection = document.querySelector('.card-selection')
let cardPublication = document.querySelector('.card-publication')
let cardImagesInscription = document.querySelector('.card-images-inscription') 
let cardImagesSelection = document.querySelector('.card-images-selection') 
let cardImagesPublication = document.querySelector('.card-images-publication') 
let imagesIllustration = 'images/illustration.png'
let motif2 = 'images/motif2.png'

let x = setInterval(function(){
    let now = new Date().getTime()
    let difference = deadline - now
    let days = Math.floor(difference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((difference %(1000 * 60 *60 * 24)) / (1000 * 60 *60))
    let minutes = Math.floor((difference % (1000 * 60 * 60))/(1000 *60))
    let seconds = Math.floor((difference % (1000 * 60)) / 1000)
    document.querySelector('#day').innerHTML = days + ' :'
    document.querySelector('#hour').innerHTML = hours + ' :'
    document.querySelector('#minutes').innerHTML = minutes + ' :'
    document.querySelector('#second').innerHTML = seconds
   
    if (difference < 0){
       clearInterval(x)
       
    }
},1000)

btnSelectFile.addEventListener('click', e =>{
   e.preventDefault()
   btnFile.click()
})

//  cardInscription.addEventListener('mouseover', e =>{
  
//    cardImagesInscription.innerHTML = 'maman'
//  })
//  cardImagesInscription.addEventListener('mouseout', e => {
//    e.preventDefault()
//   document.querySelector('.img-inscription').src = 'images/illustration.png'
//    console.log('lzelds');
//  })
const langue ={
 Francais:{
    boost:"Boostez ",
    startup:"votre start-up",
    with: "avec",
    start : " une solution numérique offerte",
    publish:"Vous êtes une Start-up, participez à Talent Startups challenge by DigitalAfrica et bénéficiez d'un accompagnement gratuit pour la réalisation de vos projets numériques(Website, Application mobile, logiciel de gestion...) par les apprenants de Kinshasa Digital Academy ",
    textFooter:"Développé par Digital Africa en partenariat avec Make-IT in  Africa, La Deutsche Gesellschaft fur Internationale Zusammenabeit (GIz) GmbH, et le Ministère pour la Coopération Economique et le Développement (BMZ), Talent 4 Startups est un programme pilote de bourses d'études pour les métiers du numérique."
 },
 English:{
     boost:"Boost",
     startup:"your startup ",
     with: "with",
     start: " a digital solution offered",
     publish: "You are a Start-up, participate in the Talent Startups challenge by DigitalAfrica and benefit from free support for the realization of your digital projects (Website, Mobile application, management software...) by Kinshasa Digital learners Academy",
     textFooter:"Developed by Digital Africa in partnership with Make-IT in Africa, Deutsche Gesellschaft fur Internationale Zusammenabeit (GIz) GmbH, and the Ministry for Economic Cooperation and Development (BMZ), Talent 4 Startups is a pilot scholarship program studies for digital professions."
 }
 }
 
 const titreBoost = document.querySelector('.boostData');
 const startUp= document.querySelector('.start');
 const digital= document.querySelector('.start2');
 const solution=document.querySelector('.solution-num');
 const publication=document.querySelector('.publish');
 const paragraphe = document.querySelector('.paterns');

 const btnlanguage = document.querySelector('.btn-language');
 const boutons=document.querySelectorAll('.active')
 const btnEng = document.querySelector('.btn-l')
 const btnFr = document.querySelector('.btn-l-1')





 btnFr.addEventListener("click", () => {
     
     titreBoost.textContent = langue.Francais.boost;
     startUp.textContent=langue.Francais.startup;

     digital.innerHTML = `
         ${langue.Francais.with} <span class="solution-num" >
         ${langue.Francais.start} <span>
     `
     publication.textContent = langue.Francais.publish;
     paragraphe.textContent= langue.Francais.textFooter

 });
 btnEng.addEventListener("click", () => {
      titreBoost.textContent = langue.English.boost;
      startUp.textContent=langue.English.startup;
     digital.innerHTML = `
     ${langue.English.with} <span class="solution-num" >
     ${langue.English.start} <span>
     `
      publication.textContent = langue.English.publish ;
      paragraphe.textContent= langue.English.textFooter 
     
 });

