---
slug: Transaction-Resultat-Encodage-de-badge
---

Pour la création d'un badge avec encodage (Opération 2B), transactionResult contient l'UID du badge encodé.

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Transaction trouvée",
  "data": {
    "idTransaction": 27,
    "poste": "Jérémie",
    "codeOperation": "2B",
    "etatCode": 90,
    "etatDescription": "Succès",
    "synchro": true,
    "dateSynchro": "2025-08-11T15:36:26.857",
    "commentaireSynchro": "OK",
    "transactionResult": {
      "numbutton": "00010",
      "UID": "7A5E1793"
    }
  }
}
```

| Syntaxe                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| statuts                | Code HTTP de retour                              |
| msg                    | Information de retour                            |
| data.transactionResult | `transactResult`: numéro et UID du badge encodé. |
