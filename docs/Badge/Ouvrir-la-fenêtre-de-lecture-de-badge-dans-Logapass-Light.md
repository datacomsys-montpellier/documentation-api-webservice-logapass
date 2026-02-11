---
slug: Ouvrir-la-fenetre-de-lecture-de-badge-dans-Logapass-Light
---

## POST - /badge/lectureDansLogapassLight

Permet d'ouvrir la fenêtre de lecture de badge dans Logapass Light.
Il sera possible de récupérer les informations lues dans le résultat de la transaction.

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

Rendu

```json
{
  "utilisateur": "J\u00e9r\u00e9mie"
}
```

| Syntaxe     | Description                                                                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| utilisateur | Utilisateur Windows qui demande la création du badge (En WinDev, utiliser la fonction RéseauUtilisateur()). Ce paramètre permet de savoir sur quelle session Logapass Light va afficher la fenêtre d'encodage. |

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Transaction créée",
  "data": {
    "transaction": {
      "idTransaction": 69
    }
  }
}
```

| Syntaxe | Description                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statuts | Code HTTP de retour                                                                                                                                    |
| msg     | Information de retour                                                                                                                                  |
| data    | `transaction.idTransaction` : ID de la transaction à suivre pour récupérer les données lues (sur Logapass Light). Voir API /transaction/:idTransaction |

#### Erreur - Code 422

`utilisateur` non renseigné
Même format de réponse JSON que le code 200.

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200.
