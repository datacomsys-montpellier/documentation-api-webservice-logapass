---
sidebar_position: 1
---

# Lecture des données d'un plaisancier

## GET - /plaisancier/:matriculePlaisancier

Lecture des informations basiques d'un plaisancier à partir de son matricule. Utile pour récupérer l'ID du plaisancier qui est utilisé dans le reste de l'API.

### Paramètres

Matricule du plaisancier

### Header

Authorization: string (token)

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Ajout OK",
  "data": {
    "idPlaisancier": 7,
    "matricule": "14",
    "nom": "Dupont",
    "prenom": "Bernard",
    "nomBateau": "Titanic"
  }
}
```

| Syntaxe | Description             |
| ------- | ----------------------- |
| statuts | Code HTTP de retour     |
| msg     | Information de retour   |
| data    | Données du plaisanciers |

#### Erreur - Code 404

Si `matricule` inexistant.
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200
