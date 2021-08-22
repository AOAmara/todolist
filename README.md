##Installation

Cloner le projet

- Avec SSH: git@github.com:AOAmara/todolist.git
- Avec https://github.com/AOAmara/todolist.git
- cd todolist

## Préparer la fichier .env

- Créez un fichier .env à partir de .env-example sous le dossier racine du projet.
- Remplir les configurations manquantes dans le fichier .env. Suivez les instructions de la
section configuration.
- php artisan key:generate

## Configuration

- Toutes les variables d'environnement suivantes seront définies dans ce fichier .env.
    #### Paramètres de configuration pour URL :
- APP_URL nom de domaine
    #### Paramètres de configuration pour la connexion à une base de données :
- DB_CONNECTION le type de connection à la BDD, exemple mysql
- DB_HOST l'ip de l'hôte, exemple 127.0.0.1 ou mysql pour docker
- DB_PORT le port, exemple 3306
- DB_DATABASE nom de la BDD
- DB_USERNAME nom d'utilisateur de la BDD
- DB_PASSWORD mot de passe de la BDD

## Installer les dépendances du projet

- composer install
- npm install
- npm run dev

## Créer les tables de la base de données

- php artisan migrate
