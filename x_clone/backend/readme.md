npm init -y

npm i -D typescript @types/express @types/node  
npx tsc --init

초기세팅 후
js로 바꿔서 실행
npx tsc
node index.js

배포단계 - tsconfig.json을 봐야함
보통 dist or build 를 만들어서 작업

<!-- "outDir": "./",  /* Specify an output folder for all emitted files. */ -->

npm i -D nodemon ts-node

ts-node ?

scripts 수정

<!-- "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon --watch \"*.ts\" --exec \"ts-node\" index.ts"
  }, -->
