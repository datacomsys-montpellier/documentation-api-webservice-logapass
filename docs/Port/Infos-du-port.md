---
sidebar_position: 1
---

# Port

## GET - /account

Informations du port relatif au token utilisé.

### Paramètres

Aucun

### Header

Authorization: string (token)

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "ok",
  "data": {
    "portCode": "MTP",
    "portName": "Port de Montpellier"
  }
}
```

| Syntaxe | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| statuts | Code HTTP de retour                                                  |
| msg     | Information de retour                                                |
| data    | `portCode` : Code port sur 3 caractères<br/>`portName` : Nom du port |
