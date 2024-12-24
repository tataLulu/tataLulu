documentation tuto gitHub open classroom et cours youtunbe nicodev GIT et GITHUB

##préalable installation de clé ssh sur le poste

ssh -keygen -t rsa -b 4096 -C 'adresse.mail"
si pas de nom de fichier installé par défaut dans le répertoire configuré à l'installation de git
users/utilisateur/.ssh
id_rsa : clé privé
id_rsa.pub : clé public

creation d'un repository sur github
##pour cloner un repository de github 
git nomdurepository github nomdudossier

##1- creation d'un dépot sur git hub
##2- se positionner dans le répertoire racine du projet en local
    

    ## bash initialisation du projet
    git init
    git add .
    git add nomdefichier
    ajouter les fichiers du projet
##3 commit initialisation -m permet de donner un titre

    git commit -m "initial commit"
    la création en local (sans clonage d'un repository github) créé une branche master (au lieu de main)
    git branch -M main pour renomer la branche en main

4 ## lié le projet avec github
    git remote add origin nom du projet récupérer sur github
5 ## faire un push vers github
git push origin main

## display d'information 
    git log 
    git show
    git status
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

