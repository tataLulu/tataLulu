let bDegug=true;
let BlocageBouton=false;


main();

function main(){

    MessageDatedujour()
    EcouteBouton();

}
/* fonction MessageduJour
/* affiche la date 
/* si mois <12 bloque l'utilisation des boutons avec la variable blocageBouton
/* et affiche un message
*/
function MessageDatedujour(){
  
        let now = new Date();
        let formattedDate = now.toLocaleDateString();
        let message=`Aujourd'hui nous sommes le ${formattedDate}`;
        let dateNoel=new Date(now.getFullYear(),11,25,0,0);
        let diffMs=dateNoel.getTime()-Date.now();
        let diffJours=Math.floor(diffMs/(1000*3600*24),0)+1;
         message+=" et il reste "+ diffJours+ " jours avant Noël";
        if(bDegug){console.log(message);}
        const MonId=document.getElementById("message")
        MonId.textContent=message;
        if(now.getMonth()<11){
            BlocageBouton=true;
           

        }
       

}
/**
* function ecouteBouton
/* 
*/
function EcouteBouton(){
    if(bDegug){BlocageBouton=false;}
    if(BlocageBouton){return false;}
    let now=new Date();
    let jour=now.getDate();
    if(bDegug){jour=25;}
    for(let i=1;i<=jour;i++){
        listenBouton("B"+i)
    }
    listenBouton('agrandir');
    return true;

}



/*---------------------------------------------------------
* met les boutons à l'écoute d'un click
* en fonction du jour.
*/

function listenBouton(idRange){
try{
    const monBouton = document.getElementById(idRange);
    monBouton.addEventListener("click", () => {
          
        ActionFenetre(idRange);
       
          if(bDegug){console.log(idRange)};
        });
}catch{
        console.log("Erreur Module listenRange")
}
}
/*-------------------------------------------------
* action Fenetre a définir 
*/
function ActionFenetre(idRange){
    if(idRange==='agrandir'){
        let iframe=document.getElementById('animation');
        let url=iframe.src;
        window.open(url,'_blanck')
    }
    else{
    if(bDegug){console.log("Click sur le bouton"+idRange);}
    let iframe = document.getElementById('animation');
    let monSrc="../html/animation-"+idRange+".html"
    iframe.src = monSrc
    iframe=document.getElementById('exterieur');
    let s=idRange;

    if(s.length===2){s=s.slice(-1);}else{s=s.slice(-2)}
    monSrc="../images/animate"+s+".gif"
    iframe.src=monSrc;
    
    iframe=document.getElementsByTagName('audio');
    monSrc="../sons/musique"+s+".mp3"
    iframe[0].src=monSrc;

    }

}


/**
 * Cette fonction passe un message à l'IFRAME
 * @param {string} message : message 
 * attend que le contenu du document soit completement chargé
  */
function MessageIframDomLoad(message){
    try{
        const monIframe = document.getElementById('animation');
         monIframe.document.addEventListener('DOMContentLoaded', () => {
        if(bDegug){console.log('Le DOM est prêt !');}
      
       const docIframe = monIframe.contentWindow.document;
       const monMessage = docIframe.getElementById('message');
       monMessage.innerHTML = message;
           
    

    })
    }catch{
        console.log("Erreur module MessageIframDomLoad");
    }

}