---
slug: Obtention-du-token
---

# Obtention du token

## POST - /Auth/Login

Permet l'obtention d'un token, pour un port et un ERP (Ex: Alizée, Port Logic).
Ce token est permanent (sans durée de validité).

### Paramètres

Aucun

### Header

Aucun

### Body

```json
{
  "codePort": "XXX",
  "idERP": 15,
  "password": "FourniParDataComSys"
}
```

| Syntaxe  | Description                                       |
| -------- | ------------------------------------------------- |
| codePort | Code port (3 caractères)                          |
| idERP    | ID de votre ERP (entier) (fourni par DataComSys)  |
| password | Mot de passe de votre ERP (fourni par DataComSys) |

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Authentification OK",
  "data": {
    "token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }
}
```

| Syntaxe | Description                                                                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statuts | Code HTTP de retour                                                                                                                                                           |
| msg     | Information de retour                                                                                                                                                         |
| data    | `token` : C'est la valeur 'token' qu'il faudra passer dans le header 'Authorization' lors des prochains appels API. Il s'agit d'un token permanent (pas de date de validité). |

#### Erreur - Code 401 - Authenfication failed

Message d'erreur volontairement non explicite pour raison de sécurité :

Causes possibles : `codePort` incorrect OU `idERP` invalide OU `password` invalide

Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService.
Même format de réponse JSON que le code 200
