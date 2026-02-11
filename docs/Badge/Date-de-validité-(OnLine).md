---
slug: Date-de-validite-OnLine
---

## POST - /badge/dateValidite

Modification de la date de validité d'un badge.
ATTENTION : Valable uniquement en mode onLine. Si le port en offLine, il faut passer par l'encodage du badge.

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

```json
{
  "numbutton": "05112",
  "dateValidite": "20251231"
}
```

| Syntaxe      | Description                              |
| ------------ | ---------------------------------------- |
| numbutton    | numéro de badge à modifier (Obligatoire) |
| dateValidite | Date de validité du badge (Obligatoire)  |

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "OK",
  "data": null
}
```

| Syntaxe | Description           |
| ------- | --------------------- |
| statuts | Code HTTP de retour   |
| msg     | Information de retour |
| data    | Toujours null ici     |

#### Erreur - Code 422

La cause de l'erreur sera indiquée dans le membre `msg`
(Même format de réponse JSON que le code 200)

#### Erreur - Code 404

Si `numbutton` inexistant.
(Même format de réponse JSON que le code 200)

#### Erreur - Code 500

Erreur interne au WebService
(Même format de réponse JSON que le code 200)
