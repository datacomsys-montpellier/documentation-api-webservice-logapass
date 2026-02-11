---
slug: Badge-Rendu
---

## PATCH - /badge/:numBadge/rendu

Permet d'indiquer qu'un badge a été rendu (ou non)

Anciens codes actions : F

### Paramètres

`:numBadge` : Numéro de badge

### Header

Authorization: string (token)

### Body

Rendu

```json
{
  "rendu": true
}
```

Remis en non-rendu

```json
{
  "rendu": false
}
```

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
| data    | Toujours null         |

#### Erreur - Code 422

La cause de l'erreur sera indiquée dans le membre `msg`.
Même format de réponse JSON que le code 200.

#### Erreur - Code 404

Si `numBadge` != inexistant.
Même format de réponse JSON que le code 200.

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200.
