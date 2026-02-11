---
sidebar_position: 1
---

## GET - /plaisancier/:idPlaisanc/consommation/:dateDebut/:dateFin

Renvoie les consommations d'eau et d'électricité du plaisancier sur la période (totaux et détails par jour).
Note : Ces consommations se basent sur des statistiques calculées quotidiennement.

### Paramètres

`idPlaisanc` : Identifiant du plaisancier
`dateDebut` : Date de début de la période format YYYYMMDD
`dateFin` : Date de fin de la période format YYYYMMDD

### Header

Authorization: string (token)

### Retour de la requête

#### Succès - Code 200

```json
{
  "status": 200,
  "msg": "OK",
  "data": {
    "idPlaisancier": 12,
    "matricule": "19",
    "nom": "Blanc",
    "prenom": "Laurent",
    "dateDebutPeriode": "2025-11-01",
    "dateFinPeriode": "2025-11-30",
    "totalEauPeriode": 20,
    "uniteEau": "L",
    "totalElecPeriode": 48,
    "uniteElec": "L",
    "detailConsommations": [
      {
        "date": "2025-11-26",
        "eau": 0,
        "electricite": 16
      },
      {
        "date": "2025-11-21",
        "eau": 0,
        "electricite": 8
      },
      {
        "date": "2025-11-20",
        "eau": 18,
        "electricite": 23
      },
      {
        "date": "2025-11-18",
        "eau": 2,
        "electricite": 0
      },
      {
        "date": "2025-11-07",
        "eau": 0,
        "electricite": 1
      }
    ]
  }
}
```

| Syntaxe                              | Description                                                 |
| ------------------------------------ | ----------------------------------------------------------- |
| statuts                              | Code HTTP de retour                                         |
| msg                                  | Information de retour                                       |
| data                                 | Données retour                                              |
| data.idPlaisancier                   | Identifiant du plaisancier                                  |
| data.matricule                       | Matricule du plaisancier                                    |
| data.nom                             | Nom du plaisancier                                          |
| data.prenom                          | Prénom du plaisancier                                       |
| data.dateDebutPeriode                | Rappel de la date de début de période passée en paramètre   |
| data.dateFinPeriode                  | Rappel de la date de fin de période passée en paramètre     |
| data.totalEauPeriode                 | Total d'eau consommée sur la période                        |
| data.uniteEau                        | Unité d'eau                                                 |
| data.totalElecPeriode                | Total d'électricité consommée sur la période                |
| data.uniteElec                       | Unité d'électricité                                         |
| data.detailConsommations             | Consommation jour par jour (plus plus récent au plus vieux) |
| data.detailConsommations.date        | Date de la consommation                                     |
| data.detailConsommations.eau         | Consommation d'eau de la journée                            |
| data.detailConsommations.electricite | Consommation d'electricite de la journée                    |

#### Erreur - Code 404

Si `idPlaisanc` inexistant.
Même format de réponse JSON que le code 200

#### Erreur - Code 422

Période incorrecte : format de date incorrecte ou date début antérieure à date de fin.
Même format de réponse JSON que le code 200

#### Erreur - Code 500

Erreur interne au WebService
Même format de réponse JSON que le code 200
