documentation tuto gitHub
## bash initialisation du projet
git init
## commit initialisation -m permet de donner un titre
git commit -m "initial commit"
## faire remonter le projet sur github
git remote add origin git@github.com:tataLulu/tutogit.git
## git add ajouter un fichier . pour ajouter une arborescence
git add nomdefichier
## display d'information 
git log 
git show
## pour valider une version 
git commit -a pour acceder à l'éditeur
première ligne titre du commit
deuxième ligne expliquations du commit
## restaurer une version avant commit
git restaure --staged nomdefichier 
## ajout d'une branche 
git checkout- b nomdelabranche 
## bonne pratique nomdelabranche =develop
## mettre le résultat d'une branche dans une autre
se positionner dans la branche
git checkout nondelabranche
faire un merge
git merge nondelabranche à jointer
puis on fait un git push origin main
## introduction de la notion de review de code (revue).

