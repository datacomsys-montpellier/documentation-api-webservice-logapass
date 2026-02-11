---
slug: Badge-Interdit
---

# Badge en interdit

## PATCH - /badge/:numBadge/interdit

Mettre un badge en interdit ou lever l'interdit.

Attention : En mode offLine, l'interdit doit être chargé sur les bornes manuellement depuis Logapass pour être pris en compte.

Anciens codes actions : S / N

### Paramètres

`:numBadge` : Numéro de badge

### Header

Authorization: string (token)

### Body

Mise en interdit

```json
{
  "interdit": true
}
```

Levée de l'interdit

```json
{
  "interdit": false
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
