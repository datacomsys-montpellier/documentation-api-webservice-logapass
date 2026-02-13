---
slug: Transaction-Resultat-Activation-de-voie
---

# Résultat : Activation d'une voie

Résultat de la transaction d'une activation de voie

#### Succès - Code 200

Activation réussie

```json
{
  "msg": "Transaction trouvée",
  "code": 200,
  "data": {
    "idTransaction": 250,
    "poste": "Jeremie",
    "codeOperation": "DA",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-10-02T15:44:18.424",
    "commentaireSynchro": "",
    "transactionResult": {
      "isSuccess": true,
      "idVoie": 15,
      "numVoie": "5",
      "numCentrale": "011",
      "errorCode": null,
      "errorMsg": null
    }
  }
}
```

Echec de l'activation

```json
{
  "msg": "Transaction trouvée",
  "code": 200,
  "data": {
    "idTransaction": 249,
    "poste": "Jeremie",
    "codeOperation": "DA",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-10-02T15:42:52.216",
    "commentaireSynchro": "",
    "transactionResult": {
      "isSuccess": false,
      "idVoie": 19,
      "numVoie": "1",
      "numCentrale": "011",
      "errorCode": "E0082",
      "errorMsg": "prise1 non branchée "
    }
  }
}
```
