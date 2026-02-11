---
slug: Transaction-Resultat-Fin-escale
---

Résultat de la transaction de fin d'escale

#### Succès - Code 200 - Annulation dans Logapass light

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 261,
    "poste": "Jérémie",
    "codeOperation": "2F",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-10-08T16:41:29.900",
    "commentaireSynchro": "",
    "transactionResult": "NOK : Annulé par l'utilisateur"
  }
}
```

#### Succès - Code 200 - Voie(s) désactivée(s) dans Logapass light depuis la fenêtre de fin d'escale

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 262,
    "poste": "Jérémie",
    "codeOperation": "2F",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-10-08T16:44:08.191",
    "commentaireSynchro": "",
    "transactionResult": "OK - Fin d'escale effectuée"
  }
}
```
