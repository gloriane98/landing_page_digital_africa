let deadline = new Date("oct 25,  2022 20:59:59").getTime()
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
    textFooter:"Développé par Digital Africa en partenariat avec Make-IT in  Africa, La Deutsche Gesellschaft fur Internationale Zusammenabeit (GIz) GmbH, et le Ministère pour la Coopération Economique et le Développement (BMZ), Talent 4 Startups est un programme pilote de bourses d'études pour les métiers du numérique.",
    title:"Programme ",
    program:"Voici quelques étapes à suivre pour procéder à l'inscription du challenge Talent 4 startup.",
    inscription: "Inscriptions",
    selection : " Sélections",
    publication:"Publication",
    dowload:"Télécharge Les conditions ",
    description:"le document ci-dessus reprend de manière intégrale les différents critères de sélection qui pourront déterminer si vous êtes éligibles ou non au programme Talent4startups challenge ",
    end:"Fin des inscriptions dans ",
    day:"JOURS",
    end:"Fin des inscriptions dans ",
    time:"HEURES",
    minute:"MINUTES",
    second:"SECONDES",
    titleForm:"REMPLISSEZ LE FORMULAIRE",
    textDesc:"Décrivez votre concept en quelques lignes *",
    piece:"Pièces jointes * :",
    select:"Sélectionner un fichier pdf *",
    submit:"Soumettre ma candidature"
 },
 English:{
     boost:"Boost",
     startup:"your startup ",
     with: "with",
     start: " a digital solution offered",
     publish: "You are a Start-up, participate in the Talent Startups challenge by DigitalAfrica and benefit from free support for the realization of your digital projects (Website, Mobile application, management software...) by Kinshasa Digital learners Academy",
     textFooter:"Developed by Digital Africa in partnership with Make-IT in Africa, Deutsche Gesellschaft fur Internationale Zusammenabeit (GIz) GmbH, and the Ministry for Economic Cooperation and Development (BMZ), Talent 4 Startups is a pilot scholarship program studies for digital professions.",
     title: "Program ",
    program: "Here are some steps to follow to register for the Talent 4 startup challenge",
    inscription: "Registration",
    selection: "Selections",
    publication: "Publication",
    dowload: "Download the conditions ",
    description:"le document ci-dessus reprend de manière intégrale les différents critères de sélection qui pourront déterminer si vous êtes éligibles ou non au programme Talent4startups challenge ",
    end: "End of registration in ",
    day: "DAYS",
    time: "HOURS",
    minute: "MINUTES",
    second: "SECONDS",
    titleForm: "FILL IN THE FORM",
    textDesc: "Describe your concept in a few lines *",
    piece: "Attachments *:",
    select: "Select a pdf file *",
    submit: "Submit my application"


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

 const program = document.querySelector('.title-pgm');
 const text= document.querySelector('.text-pgm');
 const registration= document.querySelector('.inscription');
 const selection=document.querySelector('.select');
 const annonce=document.querySelector('.public');
 const Download = document.querySelector('.dowload');
 const description = document.querySelector('.description');
 console.log(description)
 const End= document.querySelector('.end');
 const Day= document.querySelector('.day');
 const Time=document.querySelector('.time');
 const Minute=document.querySelector('.minute');
 const Seconde = document.querySelector('.second');
 const Forms = document.querySelector('.form-text')
 const TextDescription = document.querySelector('.text-desc');
 const Piece = document.querySelector('.btn-file-p');
 const Selected = document.querySelector('.btn-select-file');
 const Soumission = document.querySelector('.btn-submit');








 btnFr.addEventListener("click", () => {
     
     titreBoost.textContent = langue.Francais.boost;
     startUp.textContent=langue.Francais.startup;

     digital.innerHTML = `
         ${langue.Francais.with} <span class="solution-num" >
         ${langue.Francais.start} <span>
     `
     publication.textContent = langue.Francais.publish;
     paragraphe.textContent= langue.Francais.textFooter;

     program.textContent= langue.Francais.title;
     text.textContent= langue.Francais.program;
     registration.textContent= langue.Francais.inscription;
     selection.textContent= langue.Francais.selection;
     annonce.textContent= langue.Francais.publication;
     Download.textContent= langue.Francais.dowload;
     description.textContent= langue.Francais.description;
     End.textContent= langue.Francais.end;
     Day.textContent= langue.Francais.day;
     Time.textContent= langue.Francais.time;
     Minute.textContent= langue.Francais.minute;
     Seconde.textContent= langue.Francais.second;
     Forms.textContent= langue.Francais.titleForm;
     TextDescription.textContent= langue.Francais.textDesc;
     Piece.textContent= langue.Francais.piece;
     Selected.textContent= langue.Francais.select;
     Soumission.textContent= langue.Francais.submit;


 });
 btnEng.addEventListener("click", () => {
      titreBoost.textContent = langue.English.boost;
      startUp.textContent=langue.English.startup;
     digital.innerHTML = `
     ${langue.English.with} <span class="solution-num" >
     ${langue.English.start} <span>
     `
      publication.textContent = langue.English.publish ;
      paragraphe.textContent= langue.English.textFooter; 
     
     program.textContent= langue.English.title;
     text.textContent= langue.English.program;
     registration.textContent= langue.English.inscription;
     selection.textContent= langue.English.selection;
     annonce.textContent= langue.English.publication;
     Download.textContent= langue.English.dowload;
     description.innerHTML = `
     ${langue.English.description} <p class="solution-num" >
     `
     End.textContent= langue.English.end;
     Day.textContent= langue.English.day;
     Time.textContent= langue.English.time;
     Minute.textContent= langue.English.minute;
     Seconde.textContent= langue.English.second;
     Forms.textContent= langue.English.titleForm;
     TextDescription.textContent= langue.English.textDesc;
     Piece.textContent= langue.English.piece;
     Selected.textContent= langue.English.select;
     Soumission.textContent= langue.English.submit;
 });

