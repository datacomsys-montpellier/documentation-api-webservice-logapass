---
sidebar_position: 60
---

# Commande

Points d'entrée relatifs aux commandes

## GET - /commandes/:numCommandeDebut

Récupère toutes les commandes depuis `numCommandeDebut`

### Paramètres

`numCommandeDebut` : Numéro de commande à partir duquel les commandes seront récupérées

### Header

Authorization: string (token)

#### Succès - Code 200

```json
{
  "msg": "",
  "code": "",
  "data": []
}
```

Doc à compléter avec les données issues du Kiosque
