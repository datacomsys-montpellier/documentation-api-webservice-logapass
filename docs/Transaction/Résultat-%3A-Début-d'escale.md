---
slug: Transaction-Resultat-Debut-escale
---

# Résultat : Début d'escale

Résultat de la transaction de début d'escale

#### Succès - Code 200 - Annulation dans Logapass light

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 255,
    "poste": "Jérémie",
    "codeOperation": "2E",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-10-08T16:04:25.305",
    "commentaireSynchro": "",
    "transactionResult": "NOK : Annulé par l'utilisateur"
  }
}
```

#### Succès - Code 200 - Voie(s) activée(s) dans Logapass light depuis la fenêtre d'escale

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 260,
    "poste": "Jérémie",
    "codeOperation": "2E",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-10-08T16:38:40.943",
    "commentaireSynchro": "",
    "transactionResult": "OK - Numéro de badge utilisé pour l'escale : 00025"
  }
}
```
