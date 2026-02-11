---
sidebar_position: 1
---

Points d'entrée pour activer / désactiver des voies.

Note importante : l'activation / désactivation des voies est réalisée par le service Windows (pas par Logapass Light). Inutile donc de passer un utilisateur en paramètre dans le contenu du body, mais il faut bien s'assurer que le service Windows soit bien installé sur le port.

## POST - /distribution/activate

Permet d'activer une voie

Ancien code action : D

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

```json
{
  "numCentr": "004",
  "numVoie": "6",
  "numBadge": "05010",
  "raz": false
}
```

| Nom      | Description                                                                                                                               |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| numCentr | Numéro de la centrale (borne)                                                                                                             |
| numVoie  | Numéro de la voie (de 1 à 8)                                                                                                              |
| numBadge | Numéro du badge à utiliser (sur 5 caractères)                                                                                             |
| raz      | Faire un RAZ (remise à zéro des compteurs) avant d'activer la voie. Paramètre optionnel (Faux par défaut). Inutile pour la désactivation. |

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "Transaction créée",
  "data": {
    "transaction": {
      "idTransaction": 67
    }
  }
}
```

| Syntaxe | Description                                                                                                                                              |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statuts | Code HTTP de retour                                                                                                                                      |
| msg     | Information de retour                                                                                                                                    |
| data    | `transaction.idTransaction` : ID de la transaction à suivre pour voir le résultat de l'activation ou désactivation. Voir API /transaction/:idTransaction |

#### Erreur - Code 422

Exemple 1 - Le plaisancier est déjà en cours de distribution sur une autre voie :

```json
{
  "status": 422,
  "msg": "En mode OnLine, le plaisancier ne peut pas se servir de l'\u00e9lectricit\u00e9 sur plusieurs voies en m\u00eame temps.\r\nLe plaisancier Blanc est d\u00e9j\u00e0 branch\u00e9 sur la voie 2 de la centrale 012-BORNE BAS DROITE ONLINE",
  "data": {
    "errorCode": "E003",
    "errorMsg": "En mode OnLine, le plaisancier ne peut pas se servir de l'\u00e9lectricit\u00e9 sur plusieurs voies en m\u00eame temps.\r\nLe plaisancier Blanc est d\u00e9j\u00e0 branch\u00e9 sur la voie 2 de la centrale 012-BORNE BAS DROITE ONLINE"
  }
}
```

Exemple 2 - Problème de l'environnement Logapass :

```json
{
  "status": 422,
  "msg": "Erreur \u00e0 la cr\u00e9ation de la transaction",
  "data": {
    "transaction": {
      "idTransaction": 0,
      "errorCode": "E019",
      "errorMsg": "La transaction n'a pas \u00e9t\u00e9 lanc\u00e9e car le Service Windows d\u00e9di\u00e9 \u00e0 son ex\u00e9cution ne tourne pas."
    }
  }
}
```

Exemple 3 - Badge non valide :

```json
{
  "msg": "Date de validit\u00e9 du badge d\u00e9pass\u00e9e",
  "code": 422,
  "data": {
    "errorCode": "E001",
    "errorMsg": "Date de validit\u00e9 du badge d\u00e9pass\u00e9e"
  }
}
```

Si `numCentr` n'est pas renseigné

Si `numVoie` n'est pas renseigné

Si `numBadge` n'est pas renseigné

Les règles de gestion de Logapass non respectées peuvent entrainer ce code erreur. Par exemple, l'utilisation d'un badge interdit ou périmé. Le détail de l'erreur sera dans `data` sou la forme de 2 données : `errorCode` et `errorMsg`. Exemple :

E001 - Date de validité du badge dépassée

E002 - Badge interdit

E003 - OnLine : Plaisancier déjà en cours de distribution sur une autre voie

E004 - OffLine : Pas d'activation distante en prépaiement

E005 - Impossible de communiquer avec le serveur ON LINE

E006 - Socket utilisée pour piloter la voie introuvable ou déjà utilisée par un autre programme

E007 - Centrale : pas d'adresse ip paramétrée

E008 - Erreur renvoyée par la commande d'activation/désactivation

E0081 - Erreur renvoyée par la commande d'activation/désactivation : Voie déjà en distribution

E0082 - Erreur renvoyée par la commande d'activation/désactivation : Prise non branchée (OnLine)

E0083 - Erreur renvoyée par la commande d'activation/désactivation : Mauvais badge utilisé

E0085 - Tentative de désactivation d'une voie déjà désactivée

E009 - Erreur dans la ligne de commande de la transaction : Numéro de centrale OU Numéro de voie non rensignée

E010 - Voie inexistante

E011 - Badge sans UID (pour borne onLine uniquement)

E012 - Le plaisancier n'a plus de crédit (pour borne onLine uniquement)

E013 - Activation de voie non autorisée en Mode prépaiement (pour borne offLine uniquement)

E016 - Code opération (transaction) inconnu

E018 - Time Out : La transaction n'a pas été exécutée dans le temps imparti

E019 - La transaction n'a pas été lancée car le Service Windows dédié à son exécution ne tourne pas.

E021 - Erreur lors de l'ajout de la transaction dans la base de données

Même format de réponse JSON que le code 200

#### Erreur - Code 404

Centrale, voie, badge inexistant
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200

## POST - /distribution/deactivate

Permet de désactiver une voie

Ancien code action : D

Même comportement que l'API ci-dessus : /distribution/activate
