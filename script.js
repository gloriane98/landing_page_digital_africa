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
    