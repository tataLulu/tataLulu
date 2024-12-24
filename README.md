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
## supprimer une branche

    git branch -D nomdelabranche ou
    git branch -d nomdelabranche
## organiser une remise
    dans le cas ou on a travaillé sur la mauvaise branche et pas encore fait de commit
    git stash //met les operations en attente
    se mettre dans la bonne branche
    git branch brancheok
    git stash apply (s'applique au dernier stash )
    git stash list
## cas ou l'on a fait un commit sur la mauvaise branche
    git log donne l'identifiant du dernier commit
    git reset --hard HEAD^ 
    ou git reset --hard identifiant du commit
## cas ou l'on a donné un mauvais titre au commit
     git commit --amend -m "je me suis trompé dans le message du commit"
## cas ou l'on a oublier un fichier
    git add fichieroublié
    git commit --amend --no-edit
## cas ou le commit a été poussé sur github
    git revert à utiliser sur branche public
    git reset pour une branche privé (non pushée)
    !! possibilité d'écrasement des fichiers avec git revert

    reset--hard affecte le working directory
    git reset commitcible --hard revient à l'état avant le commit cible
    git reset --mixed ne supprime pas les modifications en cours
    git reset --soft permet de se placer sur un commit
    git revert HEAD annule le commit
## historique des commits
    git reflog 
    ensuite pour revenir en arriere 
    git checkout identifiant
    puis creation d'une nouvelle branche
    git checkout -b nouvellebranche
## explorer les changements dans un fichier
    git blame nomdefichier
## importer des commits spécifiques
    cherry-pick identifiant pour appliquer un commit sur la branche actuelle
