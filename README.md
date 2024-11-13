## Setup
- `npm init -y`, creates the package.json
- `npm i fastify`
- `npx tsc --init`, creates a TypeScript configuration file
  -  change "target": "es2016" to "es2020"
- `npm i tsx -D`, allows running a Node.js file in TypeScript without converting the file
- `npx tsx <file>`, to run the file once
- `npx tsx watch <file>`, watches the file

## Database
We can use a native driver, like mysql2 in Node.js, which allows writing queries directly.

Another option is Knex, which converts JavaScript code to SQL.

Alternatively, an ORM (a layer in between) allows database modifications. The most popular one is Prisma, especially when using TypeScript.
- `npm i -D prisma`
- `npx prisma init --datasource-provider SQLite`, use a local SQLite file
- `npx prisma migrate dev`
- `npx prisma studio`, opens a DB explorer
- `npx prisma generate`

#### CORS Configuration
- Defines which applications can access the backend.
- `npm i @fastify/cors`

## Frontend

### Vitejs
 - A template that sets up common needs for frontend applications, such as esbuild.
 
### Radix
Accessible UI components using ARIA label rules. Radix automatically handles component states but does not include built-in styling.

### CLSX
Allows conditional Tailwind CSS classes.

## React Native
- Compiles JavaScript into Android/iOS.
- flexbox is enabled by default.
- adb devices

### Nativewind
- Similar to Tailwind for web, this library allows using the same classes.
- `npx tailwindcss init` 

### Expo
- Automates bundling for Android and iOS.
- Makes each mobile component available, with GitHub examples for equivalent Android and iOS code.
- `npx create-expo-app mobile --template`
- `npx expo start`

### Rendering with SVGs
- `npx expo install react-native-svg`

### React Navigation
- Existem várias estratégias de navegação
npx expo install:
- react-native-screens
- react-native-safe-area-context

npm install
@react-navigation/native-stack

### Web Notifications

- Native "window" functions exist only within the frontend.
- Google's notification trigger API doesn't work when the app is closed.
- To address this, "service workers" run scripts while the browser is open.
- Experimental API: Mozilla's PushManager.

### Mobile Notifications
- `npx expo install expo-notifications`

## Others
- JavaScript uses the Chrome V8 Engine to run on the front end, while Node.js utilizes this V8 engine externally.
- Fastify is a backend framework gaining strong support and is more performant than Express
