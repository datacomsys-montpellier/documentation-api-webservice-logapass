---
sidebar_position: 1
---

## POST - /plaisancier

Création ou modification d'un plaisancier

Anciens codes actions : CM / CC

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

```json
{
  "idPlaisanc": 0,
  "matricule": "101",
  "nom": "Nom1",
  "prenom": "Pr\u00e9nom",
  "email": "mail@datacomsys.fr",
  "telephone": "0467010203",
  "adresse1": "ZAC du port",
  "adresse2": "Rue des champs",
  "codePostal": "34000",
  "ville": "Montpellier",
  "pays": "France",
  "nomBateau": "ZEF",
  "emplacement": "A1"
}
```

| Syntaxe     | Description                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPlaisanc  | 0=Nouveau plaisancier, Sinon ID du plaisancier à modifier                                                                                                                                                    |
| matricule   | Si idPlaisanc=0 : il est possible d'attribuer un matricule ou de laisser ce paramètre vide (Un numéro de matricule libre sera affecté) <br/> Si idPlaisanc>0 : le matricule passé en paramètre sera attribué |
| nom         | Nom du plaisancier (30 caractères MAX)                                                                                                                                                                       |
| prenom      | Prénom du plaisancier (20 caractères MAX)                                                                                                                                                                    |
| email       | Email du plaisancier                                                                                                                                                                                         |
| telephone   | Téléphone du plaisancier                                                                                                                                                                                     |
| adresse1    | Adresse1 du plaisancier (30 caractères MAX)                                                                                                                                                                  |
| adresse2    | Adresse2 du plaisancier (30 caractères MAX)                                                                                                                                                                  |
| codePostal  | Code postal                                                                                                                                                                                                  |
| ville       | Ville (30 caractères MAX)                                                                                                                                                                                    |
| pays        | Pays (20 caractères MAX)                                                                                                                                                                                     |
| nomBateau   | Nom du bateau (50 caractères MAX)                                                                                                                                                                            |
| emplacement | Emplacement du bateau (30 caractères MAX)                                                                                                                                                                    |

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Ajout OK",
  "data": {
    "idPlaisanc": 37,
    "Matricule": "3"
  }
}
```

| Syntaxe | Description                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------ |
| statuts | Code HTTP de retour                                                                                          |
| msg     | Information de retour                                                                                        |
| data    | `idPlaisanc` : ID du plaisancier créé ou modifié<br/> `Matricule` : Matricule du plaisancier créé ou modifié |

#### Erreur - Code 422

Si `matricule` déjà utilisé par un autre plaisancier.

Si `matricule` vide en mode modification de plaisancier.

Si `email` déjà utilisé par un autre plaisancier.

Même format de réponse JSON que le code 200

#### Erreur - Code 404

Si `idPlaisanc`>0 inexistant.
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200
