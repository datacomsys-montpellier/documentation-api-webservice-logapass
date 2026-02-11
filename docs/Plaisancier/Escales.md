---
sidebar_position: 1
---

## POST - /plaisancier/escale/debut

Ouvre la fenêtre de début d'escale dans Logapass Light.

Ancien code action : E

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

```json
{
  "idPlaisanc": 19,
  "utilisateur": "J\u00e9r\u00e9mie"
}
```

| Nom         | Description                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPlaisanc  | ID du plaisancier                                                                                                                                                                          |
| utilisateur | Utilisateur Windows qui demande la création du badge (En WinDev, utiliser la fonction RéseauUtilisateur()). Ce paramètre permet de savoir sur quelle session Logapass Light va s'afficher. |

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Transaction créée",
  "data": {
    "transaction": {
      "idTransaction": 33
    }
  }
}
```

| Syntaxe | Description                           |
| ------- | ------------------------------------- |
| statuts | Code HTTP de retour                   |
| msg     | Information de retour                 |
| data    | Contient l'ID de la transaction créée |

#### Erreur - Code 422

Si `idPlaisanc` n'est pas renseigné
Si `utilisateur` n'est pas renseigné
Même format de réponse JSON que le code 200

#### Erreur - Code 404

Si `idPlaisanc` inexistant.
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200

## POST - /plaisancier/escale/fin

Ouvre la fenêtre de début d'escale dans Lopass Light.

Ancien code action : Q
Même fonctionnement que pour /plaisancier/escale/debut (doc ci-dessus)
