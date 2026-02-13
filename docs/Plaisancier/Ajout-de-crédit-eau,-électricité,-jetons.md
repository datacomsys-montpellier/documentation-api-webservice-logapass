---
slug: Ajout-de-credit-eau-electricite-jetons
---

# Ajout de crédit (eau, électricité, jetons) - OnLine

POST - /plaisancier/ajoutCredit

---

Ajout de crédit d'eau, électricité à un plaisancier.
L'ajout de jeton est en cours de développement.

### Paramètres

Aucun

### Header

Authorization: string (token)

### Body

```json
{
  "idPlaisanc": 14,
  "UID": "7A779D63",
  "product": "electricity",
  "credit": 10
}
```

OU

```json
{
  "emailPlaisanc": "plaisancier@datacomsys.fr",
  "UID": "7A779D63",
  "product": "electricity",
  "credit": 10
}
```

| Syntaxe       | Description                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| idPlaisanc    | (obligatoire si pas `emailPlaisanc`) ID du plaisancier                                                    |
| emailPlaisanc | (obligatoire si pas `idPlaisanc` ) email du plaisancier                                                   |
| UID           | UID du badge (8 caractères hexadécimaux)                                                                  |
| product       | "electricity","water" . En cours de développement "token1", "token2", "token3", "token4" pour les jetons. |
| credit        | nombre de crédit à ajouter (entier positif)                                                               |

### Retour de la requête

#### Succès - Code 200

```
{
      "status": 200,
      "msg": "Ajout de crédit OK",
      "data": {
        "creditAjoute": 10,
        "nouveauCreditTotal": 100
      }
    }
```

| Syntaxe | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statuts | Code HTTP de retour                                                                                                                                                                                                                                                                                                                                                                             |
| msg     | Information de retour                                                                                                                                                                                                                                                                                                                                                                           |
| data    | `creditAjoute` : Crédit ajuoté `nouveauCreditTotal` : nouveau crédit pour le plaisancier (ne tenant pas compte d'une éventuelle distribution en cours). Le crédit d'un plaisancier en post-paiement peut-être négatif.`avertissement` : si plaisancier est en post-paiement : "Le plaisancier id=31 est en post-paiement. Son crédit est illimité. Il n'est pas utile de lui ajouter du crédit" |

#### Erreur - Code 422

Paramètres obligatoires non spécifiés
Si `product` n'est pas dans la liste spécifiée
Si `creditAjoute` est négatif ou nulll
Le port est offLine. Dans ce cas, le fonctionnement est différent, il faut encoder les crédits sur le badge.
Le badge n'appartient pas au plaisancier.

Même format de réponse JSON que le code 200

#### Erreur - Code 404

Si `idPlaisanc` ou `emailPlaisanc` non trouvé
Si aucun badge n'existe avec `UID` 

Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService  
Même format de réponse JSON que le code 200
