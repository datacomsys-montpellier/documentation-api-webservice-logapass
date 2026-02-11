---
slug: Transaction
---

# Transaction

Points d'entrée relatifs aux transactions.
Une transaction est une action réalisable uniquement via Logapass pour laquelle l'ERP peut attendre une réponse ou non. Chaque transaction peut avoir un retour différent en fonction de son action :

- un encodage de badge
- activation / désactivation de voie

L'appel lui est toujours le même.

## GET - /transaction/:idTransaction

Suivi d'une transaction (suite au lancement d'une opération qui nécessite une action utilisateur sur logapassLight)

### Paramètres

`idTransaction` : ID de la transaction à suivre (renvoyé par les divers points d'entrées)

### Header

Authorization: string (token)

#### Succès - Code 200

Transaction en cours dans un premier temps

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 255,
    "poste": "Jérémie",
    "codeOperation": "2E",
    "etatCode": 10,
    "etatDescription": "En cours de traitement",
    "synchro": false,
    "dateSynchro": null,
    "commentaireSynchro": "",
    "transactionResult": ""
  }
}
```

Transaction terminée

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 27,
    "poste": "Jeremie",
    "codeOperation": "2B",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-08-11T15:36:26.857",
    "commentaireSynchro": "OK",
    "transactionResult": {
      le contenu peut varier selon le type de transaction
    }
  }
}
```

| Syntaxe | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statuts | Code HTTP de retour                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| msg     | Information de retour                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| data    | Données de la transaction <br/> `etatCode`: Explication du code dans `etatDescription` <br/> `transactResult`: le contenu peut varier en fonction de la transaction : <br/> - Pour la création d'un badge avec encodage (Opération 2B), on pourra récupérer ici l'UID du badge encodé.<br/>- Pour le début ou la fin d'une escale, le résultat sera une chaine indiquant si l'activation ou la désactivation des bornes a bien été réalisée via Logapass Light <br/>- Pour la lecture de badge (2L), toutes les informations lues sur le badges (Date de validité, crédits eau et électricité, jetons...) <br/> - Pour le reste, juste une chaine indiquant le résultat |
