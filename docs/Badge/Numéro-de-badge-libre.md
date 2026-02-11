---
slug: Numero-de-badge-libre
---

## GET - /badge/nouveaunumero

Donne un numéro de badge unique non utilisé

### Paramètres

Aucun

### Header

Authorization: string (token)

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "OK",
  "data": {
    "numBadge": "05070"
  }
}
```

| Syntaxe | Description                             |
| ------- | --------------------------------------- |
| statuts | Code HTTP de retour                     |
| msg     | Information de retour                   |
| data    | `numBadge` : Numéro de badge disponible |

#### Erreur - Code 500

Plus de numéro disponible OU Erreur interne au WebService
Même format de réponse JSON que le code 200.
