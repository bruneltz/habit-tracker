### Interesting
- O Javascript utiliza a V8 Engine do Chrome para  rodar no frontend. O Nodescript utiliza essa V8 externamente
- Typescript é um superset do Javascript. Ajuda a evitar erros de tipagem

### Begin
- npm init -y = criação do package.json
- npm i fastify
- npx tsc --init = cria arquivo de configuração typescript
	- mudar "target": "es2016", para es2020    
	
- npm i tsx -D = permite executar um arquivo do node em ts, sem coversão do arqvuio
	- npx tsx <file> = para rodar o arquivo uma única vez
	- npx tsx watch <file> = fica observando o arquivo

- fastify é um framework de backend que está recebendo um suporte bom e é mais performático que express

#### Banco de Dados
podemos usar um driver nativo. no node é mysql2. que permite escrita de queries diretamente.

outra opção é o knex, que converte o código escrito em javascript para SQL

outra opção é o ORM (um intermédio), que permite modificações de banco. o mais famoso é o Prisma. ainda mais se é utilizado o typescript
	- npm i -D prisma
	- 
	- npx prisma init --datasource-provider SQLite = usar um arquivo local SQLite
	- npx prisma migrate dev
	- npx prisma studio = abrir DB explorer
	- npx prisma generate

Seed: código para popular o banco para testes

#### Configuração do CORS
 - Define quais aplicações podem acessar o backend
 - npm i @fastify/cors



## Frontend

React: criamos componentes para reutilizar ou isolar 

### Vitejs
 - Um template que traz pronto coisas que toda aplicação Frontend utiliza, como o esbuild. traz suporte ao typescrit,

### Radix
Components de UI acessíveis, usando regras da aria-label (?)
O Radix controla automaticamente os estados dos componentes
Não possuem estilização própria

### Requisições HTTP
Usa-se a lib axios

### CLSX
Permite condicionais em tailwindcss

## React Native
- Compila JS em android/IOS
- O 'flexbox' já é ativo por padrão
- adb devices

## Nativewind
- Na versão web é utilizado o tailwind, com essa outra lib é possível utilizar as mesmas classes
- npx tailwindcss init

### Expo
- Automatiza a conversão do bundle para android e iOS. 
- Cada componente do celular é disponibilizado pelo expo. Em seu gitHub mostra o código equivalente para 
android e iOS

- npx create-expo-app mobile --template
- npx expo start

### Renderizar com SVGs
npx expo install react-native-svg

### Usar SVGs como componente
lib transformer


### npm install @react-navigation/native - React Navigation
- Existem várias estratégias de navegação
npx expo install:
react-native-screens
react-native-safe-area-context

npm install
@react-navigation/native-stack

# Notifications Web

- Somente dentro do frontend existe funções nativas "windows"
- Google possui a API notification trigger, porém não funciona quando o app está fechado
- Para resolver isso, usa-se "service workers", que são scripts que rodam no navegador, enquanto aberto

- API experimental: PushManager da Mozilla

# Notifications Mobile
npx expo install expo-notifications