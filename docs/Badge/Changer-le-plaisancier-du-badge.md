---
+slug: Changer-le-plaisancier-du-badge
---

# Résultat : Change le plaisancier d'un badge

## PUT - /badge/changePlaisancier/:numBadge_OU_UID/:idPlaisanc/:NouvelIDPlaisancier

Permet de changer le plaisancier associé à un badge (via son UID)

### Paramètres

`:numBadge_OU_UID` : Numéro de badge (5 caractères) ou UID du badge (8 caractères) à modifier
`:idPlaisanc` : ID du nouveau plaisancier à affecter au badge

### Header

Authorization: string (token)

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "OK: Le badge est déjà associé à ce plaisancier",
  "data": null
}
```

| Syntaxe | Description           |
| ------- | --------------------- |
| statuts | Code HTTP de retour   |
| msg     | Information de retour |
| data    | Toujours null ici     |

#### Erreur - Code 422

La cause de l'erreur sera indiquée dans le membre `msg`.
Même format de réponse JSON que le code 200.

#### Erreur - Code 404

`:numBadge_OU_UID` : numéro de badge OU UID non trouvé

`:idPlaisanc` : ID du plaisancier inexistant
Même format de réponse JSON que le code 200.

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200.
