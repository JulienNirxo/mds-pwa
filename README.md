# Installation PWA sur angular
-> Les commandes CMD à faire sont "npm i @angular/pwa" & "npm i http-server" & "npm install web-push".  

# Configuration
-> Une bonne partie ce fait automatiquement avec @angular/pwa (balise link manifest, creation de manifest.webmanifest, ngsw-config.json).  
-> Ajouter dans package.json la ligne "startPWA": "http-server -p 8080 -c-1 dist/pwa" dans "script".  
-> Pour les web push, un exemple est dans app.component.ts.  

# Démarrer le projet en web
-> Bien penser à faire la commande ng build.  
-> Pour lancer le projet, faire la commande "npm run startPWA" et aller à l'url "http://127.0.0.1:8080/".  

# Démarrer le projet en version mobile
-> Votre téléphone et le pc qui démarre le projet doivent être sur le même réseau wifi.  
-> Récupérer l'ip de votre ordinateur.  
-> Faire la commande dans le cmd "ng serve --host 0.0.0.0" pour démarrer le projet.  
-> Aller sur le navigateur web de votre téléphone et taper dans la barre de recherche l'IP de votre machine + 4200 (le port).  
-> Possibilité de télécharger dans chrome l'application dans trois petits points > Ajouter à l'écran d'accueil.  

# Test service worker
-> Aller dans inspecter > Application.  
-> On peut voir dans le Manifest que l'on a du contenu.  
-> On peut voir dans Service Workers que c'est activé.  
-> Dans le Cache Storage, on vois le contenu du cache.  
-> Quand on va dans Newtwork et qu'on se met en offline et que l'on recharge, la page est toujours là.  

# Test run APK 
-> Pré-recquis : avoir android studio.  
-> Sur android studio, se placer sur le dossier "android" OU faire la commande "npx cap open android" dans le cmd à la racine du projet.  
-> Run le projet dans android studio en branchant son téléphone en USB.  