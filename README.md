# hundguiden
En app för hundvänliga upplevelser.


## Frontend
#### React Native (med Expo)
→ Bygg mobilappen med ett stort community, lätt att testa och distribuera.

#### React Navigation
→ För att hantera skärmar och navigering i appen.

#### React Native Maps
→ Visar hundvänliga platser på en karta med interaktiva ikoner.

#### Expo Location
→ För att hämta användarens plats smidigt.

### Formulär och datahantering
#### React Hook Form
→ Smidigt och lätt sätt att hantera formulärinmatning (t.ex. lämna recension).

#### Zod eller Yup
→ Validera formulärdata (t.ex. att betyg är 1–5).

### State Management
#### Zustand (enkel och lätt)
→ Hålla reda på inloggning, användarens plats, favoriter m.m.

## Backend
### Supabase
→ Allt-i-ett-lösning för:

Autentisering (Google, Apple, e‑post)

PostgreSQL-databas för alla platsdata, recensioner, användare

Lagring för bilder (butiker, kaféer, användaruppladdningar)

Edge Functions om du vill skapa t.ex. notiser, mailutskick

##  Kartor
Google Maps API
→ För att hämta platsnamn eller visa vägbeskrivningar.
Alternativ: Mapbox – om du vill ha snyggare, mer anpassningsbar karta.

## Push-notiser
Expo Push Notifications
→ Påminna om att recensera en plats eller visa ny hundvänlig plats i närheten.

## Boilerplate
/sniffa-app/
├── App.tsx
├── navigation/
│   └── AppNavigator.tsx
├── screens/
│   ├── MapScreen.tsx
│   ├── PlaceDetailScreen.tsx
│   ├── AddPlaceScreen.tsx
│   ├── LoginScreen.tsx
├── components/
│   ├── PlaceCard.tsx
│   ├── SearchBar.tsx
│   ├── ReviewForm.tsx
│   └── FilterBar.tsx
├── supabase/
│   ├── client.ts          ← Supabase init
│   ├── auth.ts            ← login/signup/logout helpers
├── utils/
│   ├── location.ts        ← getCurrentLocation etc
│   └── format.ts          ← format hours, distance etc
├── assets/
│   ├── logo.png
│   └── paw-icons/
├── constants/
│   └── colors.ts
├── .env                   ← Google Maps & Supabase keys
└── README.md

## Supabase databasmodell (PostgreSQL)
### Users
id UUID PRIMARY KEY REFERENCES auth.users
username TEXT
avatar_url TEXT
created_at TIMESTAMP DEFAULT now()

### places
id UUID PRIMARY KEY
name TEXT NOT NULL
description TEXT
category TEXT CHECK (category IN ('cafe', 'bar', 'hotel', 'store', 'park'))
location GEOGRAPHY(POINT, 4326)
address TEXT
city TEXT
has_indoor_access BOOLEAN
has_water_bowl BOOLEAN
accepts_big_dogs BOOLEAN
image_urls TEXT[]
created_by UUID REFERENCES users(id)
created_at TIMESTAMP DEFAULT now()

### reviews
id UUID PRIMARY KEY
user_id UUID REFERENCES users(id)
place_id UUID REFERENCES places(id)
rating INTEGER CHECK (rating BETWEEN 1 AND 5)
comment TEXT
created_at TIMESTAMP DEFAULT now()

### favourites
user_id UUID REFERENCES users(id)
place_id UUID REFERENCES places(id)
PRIMARY KEY (user_id, place_id)

### business_registrations
id UUID PRIMARY KEY
place_id UUID REFERENCES places(id)
email TEXT
phone TEXT
is_verified BOOLEAN DEFAULT FALSE
submitted_at TIMESTAMP DEFAULT now()


