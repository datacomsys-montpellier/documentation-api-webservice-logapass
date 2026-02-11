---
slug: Transaction-Resultat-Desactivation-de-voie
---

Résultat de la transaction d'une déactivation de voie

#### Succès - Code 200

Désactivation réussie

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 254,
    "poste": "WSLogapassClient",
    "codeOperation": "DA",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-10-08T15:57:17.722",
    "commentaireSynchro": "",
    "transactionResult": {
      "isSuccess": true,
      "idVoie": 22,
      "numVoie": "2",
      "numCentrale": "012",
      "errorCode": null,
      "errorMsg": null
    }
  }
}
```

Echec de la désactivation

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 253,
    "poste": "WSLogapassClient",
    "codeOperation": "DA",
    "etatCode": 99,
    "etatDescription": "Erreur",
    "synchro": true,
    "dateSynchro": "2025-10-08T15:53:01.880",
    "commentaireSynchro": "",
    "transactionResult": {
      "isSuccess": false,
      "idVoie": 22,
      "numVoie": "2",
      "numCentrale": "012",
      "errorCode": "E0083",
      "errorMsg": "Impossible d'arrêter la voie car elle n'est pas en cours de distribution avec le badge 00012 mais avec le badge 00021"
    }
  }
}
```
