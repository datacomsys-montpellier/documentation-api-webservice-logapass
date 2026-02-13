---
slug: Changer-le-matricule-d-un-plaisancier
---

# Changer le matricule d'un plaisancier

## PUT - /plaisancier/changeMatricule/:idPlaisancier/:nouveauMatricule

Change le matricule d'un plaisancier.

Ancienne route : ./Enregistre_Matricule_Plaisancier/nIdPlaisancier/sValMatricule

Ancien code action : CM

### Paramètres

- `idPlaisancier` : ID du plsaincier (entier sur 8 octets)
- `nouveauMatricule` : Nouveau matricule (7 caractères max)

### Header

Authorization: string (token)

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "ok",
  "data": null
}
```

| Syntaxe | Description           |
| ------- | --------------------- |
| statuts | Code HTTP de retour   |
| msg     | Information de retour |
| data    | Non utilisé ici       |

#### Erreur - Code 422

Si `nouveauMatricule` déjà utilisé par un autre plaisancier.
Même format de réponse JSON que le code 200

#### Erreur - Code 404

Si `idPlaisancier` inexistant.
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200
