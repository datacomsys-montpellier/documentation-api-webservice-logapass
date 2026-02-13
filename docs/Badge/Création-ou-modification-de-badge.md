---
slug: Creation-ou-modification-de-badge
---

# Résultat : Création ou modification d'un badge

## POST - /badge

Création ou modification d'un badge

Anciens codes actions : KA / KC

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

Exemple de création d'un badge avec demande d'encodage via Logapass Light

```json
{
  "numbutton": "",
  "UID": "",
  "logapassLightOuvrePourEncodage": true,
  "idPlaisanc": 22,
  "dateValidite": "20251231",
  "compteurEau": 1,
  "compteurElec": 2,
  "jeton1": 3,
  "JETON2": 4,
  "JETON3": 0,
  "JETON4": 0,
  "zones": "1;1;1;0;0;1;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1",
  "jours": "1;1;1;1;1;1;0",
  "utilisateur": "J\u00e9r\u00e9mie"
}
```

Exemple de modification d'un badge sans demande d'encodage

```json
{
  "numbutton": "05112",
  "UID": "02BC1734",
  "idPlaisanc": 22,
  "dateValidite": "20251231",
  "compteurEau": 1,
  "compteurElec": 2,
  "jeton1": 3,
  "JETON2": 4,
  "JETON3": 0,
  "JETON4": 0,
  "zones": "1;1;1;0;0;1;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1",
  "jours": "1;1;1;1;1;1;0"
}
```

| Syntaxe                        | Description                                                                                                                                                                                                                                                          |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| numbutton                      | ""=Nouveau badge, Sinon numéro de badge à modifier                                                                                                                                                                                                                   |
| UID                            | UID du badge. Si `numbutton`="" et `logapassLightOuvrePourEncodage`=true alors ce paramètre doit être inexistant ou vide car l'UID sera connu lors de l'encodage du badge (et afficher une fois la transaction terminée)                                             |
| idPlaisanc                     | ID du plaisancier propriétaire du badge                                                                                                                                                                                                                              |
| logapassLightOuvrePourEncodage | Si vrai Logapass light ouvrira une fenêtre pour encoder le badge. Si faux, seules certaines données sont mises à jour (utile pour les ports onLine uniquement)                                                                                                       |
| dateValidite                   | Date de validité du badge                                                                                                                                                                                                                                            |
| compteurEau                    | Crédit en eau du badge qui sera affiché dans LogapassLight (le crédit sera ajouté depuis Logapass Light lors de l'encodage). Si logapassLightOuvrePourEncodage=false => ce paramètre n'est pas utilisé.                                                              |
| compteurElec                   | Crédit en électricité du badge qui sera affiché dans LogapassLight (le crédit sera ajouté depuis Logapass Light lors de l'encodage). Si logapassLightOuvrePourEncodage=false => ce paramètre n'est pas utilisé.                                                      |
| jeton1                         | Nombre de jeton 1 (Ex : Douche) qui sera affiché dans LogapassLight (le crédit sera ajouté depuis Logapass Light lors de l'encodage). Si logapassLightOuvrePourEncodage=false => ce paramètre n'est pas utilisé.                                                     |
| jeton2                         | Nombre de jeton 2 (Ex : Machine à laver) qui sera affiché dans LogapassLight (le crédit sera ajouté depuis Logapass Light lors de l'encodage). Si logapassLightOuvrePourEncodage=false => ce paramètre n'est pas utilisé                                             |
| jeton3                         | Nombre de jeton 3 (Ex : Mise à l'eau) qui sera affiché dans LogapassLight (le crédit sera ajouté depuis Logapass Light lors de l'encodage). Si logapassLightOuvrePourEncodage=false => ce paramètre n'est pas utilisé                                                |
| jeton4                         | Nombre de jeton 4 qui sera affiché dans LogapassLight (le crédit sera ajouté depuis Logapass Light lors de l'encodage). Si logapassLightOuvrePourEncodage=false => ce paramètre n'est pas utilisé                                                                    |
| zones                          | Liste de 32 ou 48 zones (en fonction du paramétrage du port). 1 pour autoriser. 0 pour interdire. Zones affichées dans LogapassLight et enregistrées sur le badge au moment de l'encodage. Si logapassLightOuvrePourEncodage=false => ce paramètre n'est pas utilisé |
| jours                          | Liste des 7 jours de la semaine. (1=Lundi, 2=Mardi, etc...). 1 pour autoriser. 0 pour interdire. Jours affichés dans LogapassLight et enregistrés sur le badge au moment de l'encodage. Si logapassLightOuvrePourEncodage=false => ce paramètre n'est pas utilisé.   |
| utilisateur                    | Utilisateur Windows qui demande la création du badge (En WinDev, utiliser la fonction RéseauUtilisateur()). Ce paramètre permet de savoir sur quelle session Logapass Light va afficher la fenêtre d'encodage.                                                       |

### Retour de la requête

#### Succès - Code 200

Avec encodage :

```json
{
  "status": 200,
  "msg": "OK : transaction créée pour demande d'encodage",
  "data": {
    "transaction": {
      "idTransaction": 19
    }
  }
}
```

| Syntaxe | Description                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statuts | Code HTTP de retour                                                                                                                                                      |
| msg     | Information de retour                                                                                                                                                    |
| data    | `transaction.idTransaction` : ID de la transaction à suivre pour savoir quand l'encodage (réalisé sur Logapass Light) est terminé (Voir API /transaction/:idTransaction) |

Sans encodage :

```json
{
  "status": 200,
  "msg": "Ajout OK",
  "data": {
    "numbutton": "05063",
    "UID": "00005063"
  }
}
```

| Syntaxe | Description                                                                                |
| ------- | ------------------------------------------------------------------------------------------ |
| statuts | Code HTTP de retour                                                                        |
| msg     | Information de retour                                                                      |
| data    | `numbutton` : numéro du badge (Utile lors de la création d'un badge) `UID` : UID du badge. |

#### Erreur - Code 422

La cause de l'erreur sera indiquée dans le membre `msg`

Même format de réponse JSON que le code 200

#### Erreur - Code 404

Si `numbutton` != inexistant.
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200
