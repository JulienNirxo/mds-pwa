# Installation PWA sur angular
-> Les commandes CMD à faire sont "npm i @angular/pwa" & "npm i http-server" & "npm install web-push"  

# Configuration
-> Une bonne partie ce fait automatiquement avec @angular/pwa (balise link manifest, creation de manifest.webmanifest, ngsw-config.json)  
-> Ajouter dans package.json la ligne "startPWA": "http-server -p 8080 -c-1 dist/pwa" dans "script"  
-> Pour les web push, un exemple est dans app.component.ts  

# Run le projet web
-> Bien penser à faire la commande ng build  
-> Pour lancer le projet, faire la commabde "npm run startPWA" et aller à l'url "http://127.0.0.1:8080/"  

# Run on mobile phone

-> Votre téléphone et le pc qui démarre le projet doivent être sur le même réseau wifi  
-> Récupérer l'ip de votre ordinateur  
-> Faire la commande dans le cmd "ng serve --host 0.0.0.0" pour démarrer le projet  
-> Aller sur le navigateur web de votre téléphone et taper dans la barre de recherche l'IP de votre machine + 4200 (le port)  


