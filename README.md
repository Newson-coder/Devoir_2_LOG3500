# Devoir_2_LOG3500

# 🌍 Atlas Mondial Interactif

## Description

Atlas Mondial Interactif est une application web développée dans le cadre du cours **LOG3500**. Elle permet à l'utilisateur de rechercher un pays et d'afficher différentes informations grâce à l'API **REST Countries**.

## Fonctionnalités

* Recherche d'un pays par son nom
* Affichage du drapeau
* Affichage du nom du pays
* Affichage de la capitale
* Affichage de la population
* Affichage de la région
* Affichage de la monnaie
* Affichage des langues parlées
* Gestion des erreurs de saisie
* Affichage d'un indicateur de chargement pendant la requête

## Technologies utilisées

* HTML5
* CSS3
* JavaScript (ES6)
* API REST Countries
* Git
* GitHub

## Structure du projet

```text
Atlas-Mondial/
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── structure.html
└── README.md
```

## Installation

1. Cloner le dépôt GitHub :

```bash
git clone <URL_DU_DEPOT>
```

2. Ouvrir le projet dans Visual Studio Code.

3. Installer l'extension **Live Server** (si elle n'est pas déjà installée).

4. Ouvrir le fichier `structure.html` avec **Live Server**.

## Utilisation

1. Saisir le nom d'un pays.
2. Cliquer sur **Rechercher**.
3. Les informations du pays sont affichées automatiquement.

## API utilisée

Le projet utilise l'API REST Countries afin de récupérer les informations sur les pays.

Les données affichées comprennent notamment :

* le drapeau ;
* la capitale ;
* la population ;
* la région ;
* les langues ;
* la monnaie.

## Gestion des erreurs

L'application gère les situations suivantes :

* champ de recherche vide ;
* pays inexistant ;
* erreur de connexion réseau ;
* erreur d'accès à l'API.

## Auteur

Développé par **Newson LAURANE** dans le cadre du cours **LOG3500** au programme de DUT-TIC.

## Licence

Projet réalisé à des fins pédagogiques.
