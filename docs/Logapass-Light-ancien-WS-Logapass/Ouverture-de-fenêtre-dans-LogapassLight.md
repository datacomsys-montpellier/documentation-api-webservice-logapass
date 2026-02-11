---
slug: Ouverture-de-fenetre-dans-LogapassLight
---

## POST - /logapassLight/ouvreFenetre

Permet d'ouvrir certaines fenêtres dans Logapass Light

Anciens codes actions : V, I, T

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

Ouverture de la fenêtre de création de code temporaire

```json
{
  "nomFenetre": "codeTemporaire",
  "utilisateur": "J\u00e9r\u00e9mie"
}
```

Ouverture de la fiche d'un plaisancier

```json
{
  "nomFenetre": "fichePlaisancier",
  "utilisateur": "J\u00e9r\u00e9mie",
  "idPlaisanc": "12"
}
```

Ouverture de la fenêtre d'une centrale (Pannel8)

```json
{
  "nomFenetre": "consulterBorne",
  "utilisateur": "J\u00e9r\u00e9mie",
  "numCentrale": "004"
}
```

| Nom                        | Description                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nomFenetre                 | Voir exemples ci-dessus                                                                                                                                                                    |
| utilisateur                | Utilisateur Windows qui demande la création du badge (En WinDev, utiliser la fonction RéseauUtilisateur()). Ce paramètre permet de savoir sur quelle session Logapass Light va s'afficher. |
| paramètres supplémentaires | Voir exemples                                                                                                                                                                              |

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Transaction créée",
  "data": {
    "transaction": {
      "idTransaction": 70
    }
  }
}
```

| Syntaxe | Description                           |
| ------- | ------------------------------------- |
| statuts | Code HTTP de retour                   |
| msg     | Information de retour                 |
| data    | Contient l'ID de la transaction créée |

#### Erreur - Codes 404, 422

Détails de l'erreur dans `msg`.
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200
