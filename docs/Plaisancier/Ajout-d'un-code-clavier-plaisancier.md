---
slug: Ajout-code-clavier-plaisancier
---

# Ajout d'un code clavier plaisancier

## POST - /plaisancier/ajoutCodeClavierPlaisancier

Création d'un code plaisancier à 6 chiffres, valide pour une période donnée, pour un plaisancier et dans une ou plusieurs zones du port.

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

```json
{
  "idPlaisanc": 1400,
  "dateDebut": "20251202",
  "dateFin": "20251231",
  "zones": [1, 2, 3, 4, 5]
}
```

| Syntaxe    | Description                                                                               |
| ---------- | ----------------------------------------------------------------------------------------- |
| idPlaisanc | (obligatoire) ID du plaisancier                                                           |
| dateDebut  | (obligatoire) Date de début de validité du code clavier                                   |
| dateFin    | (obligatoire) Date de fin de validité du code clavier                                     |
| zones      | (obligatoire, au moins une zone) (Tableau d'entier) Liste des numéros de zones autorisées |

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Création du code plaisancier OK",
  "data": {
    "codeGenere": "822983"
  }
}
```

| Syntaxe | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| statuts | Code HTTP de retour                                              |
| msg     | Information de retour                                            |
| data    | `codeGenere` : Code à 6 chiffres utilisables pour le plaisancier |

#### Erreur - Code 422

Si paramètre obligatoire manquant

Si format de date invalide

Si période incorrecte (date de fin antérieure à la date de début ou période passée)

Si tableau de zone vide

Même format de réponse JSON que le code 200

#### Erreur - Code 404

Si `idPlaisanc` inexistant.
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200
