# Système de Gestion de Concession Automobile

Application Angular avec NgRx pour la gestion des voitures d'une concession automobile.

## 🚀 Fonctionnalités

### Authentification
- ✅ Login/Logout sécurisé avec JWT
- ✅ Protection des routes avec AuthGuard
- ✅ Stockage du token

### Gestion des Voitures
- ✅ Liste des voitures (vue tableau et grille)
- ✅ Détails d'une voiture
- ✅ Ajout d'une voiture (authentification requise)
- ✅ Modification d'une voiture (authentification requise)
- ✅ Suppression d'une voiture (authentification requise)
- ✅ Filtrage par disponibilité
- ✅ Recherche par modèle

### Interface
- ✅ Design moderne et responsive
- ✅ Layout avec sidebar pour les marques
- ✅ Animations et transitions fluides
- ✅ Messages de notification

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Installer JSON Server globalement
npm install -g json-server
```

## 🔧 Configuration

### Démarrer JSON Server

```bash
# Dans un terminal
json-server --watch db.json --port 3000
```

Les données seront disponibles sur:
- Voitures: http://localhost:3000/voitures
- Marques: http://localhost:3000/marques

### Démarrer l'application Angular

```bash
# Dans un autre terminal
npm start
```

L'application sera disponible sur: http://localhost:4200

## 🔐 Connexion

Utiliser les identifiants de test de DummyJSON:
- Username: `emilys`
- Password: `emilyspass`

## 📂 Structure du Projet

```
src/app/
├── components/
│   └── layout/              # Layout avec sidebar
├── guards/
│   └── auth.guard.ts        # Protection des routes
├── models/
│   ├── car.model.ts         # Interface Car
│   ├── brand.model.ts       # Interface Brand
│   └── user.model.ts        # Interface User
├── pages/
│   ├── cars-list/          # Liste des voitures
│   ├── car-detail/         # Détails d'une voiture
│   ├── car-form/           # Formulaire ajout/modification
│   ├── logi/               # Page de connexion
│   └── dashboard/          # Dashboard
├── services/
│   ├── auth.service.ts     # Service d'authentification
│   ├── car.service.ts      # Service des voitures
│   └── brand.service.ts    # Service des marques
└── store/
    ├── auth/               # Store NgRx pour l'authentification
    ├── car/                # Store NgRx pour les voitures
    └── brand/              # Store NgRx pour les marques
```

## 🎨 Technologies Utilisées

- **Angular 19** - Framework front-end
- **NgRx** - State management
- **TypeScript** - Langage de programmation
- **RxJS** - Programmation réactive
- **JSON Server** - API REST mock
- **DummyJSON** - API d'authentification

## 📱 Routes

- `/` - Redirection vers la liste des voitures
- `/login` - Page de connexion
- `/cars` - Liste des voitures
- `/cars/:id` - Détails d'une voiture
- `/cars/add` - Ajouter une voiture (protégé)
- `/cars/edit/:id` - Modifier une voiture (protégé)
- `/dashboard` - Dashboard (protégé)

## ✨ Features Techniques

### NgRx Store
- **Actions**: Définition des actions pour chaque feature
- **Reducers**: Gestion de l'état immutable
- **Effects**: Gestion des effets de bord (HTTP)
- **Selectors**: Sélection optimisée des données

### Forms
- **Reactive Forms**: Validation en temps réel
- **Validation**: Champs obligatoires, min/max values
- **Error Messages**: Messages d'erreur personnalisés

### Styling
- **CSS Moderne**: Flexbox, Grid, Variables CSS
- **Responsive**: Mobile-first design
- **Animations**: Transitions fluides
- **Dark Mode Ready**: Structure préparée

## 🔄 Prochaines Étapes

- [ ] Tests unitaires (Jasmine/Karma)
- [ ] Tests E2E (Cypress + Cucumber)
- [ ] Dockerisation
- [ ] CI/CD avec GitHub Actions
- [ ] Notifications toast
- [ ] Pagination
- [ ] Dark mode

## 👨‍💻 Développement

```bash
# Lancer les tests
npm test

# Build production
npm run build

# Linter
npm run lint
```

---

Développé avec ❤️ pour la gestion de concession automobile
