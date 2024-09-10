
Install PostgreSql
- https://www.postgresql.org/download/
- Select your operating system family
- After selecting, click the "Download the Installer" link
- then you will be directed in this link: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
- Select the latest PostgreSQL Version and it will be installed


Install Nest Js
- npm i -g @nestjs/cli
- nest new .

Run Prettier
- npm run format

Check outdated packages
- npm outdated

Install Prisma
- npm i prisma
- npx prisma init
- npm i @prisma/client
- npm i @prisma/studio

Setup Database
- npx prisma migrate dev --name your_message
- npx prisma db seed
- npx prisma studio
- npx prisma generate

Automatically create folder
nest g resource folder_name --no-spec

Compile and Run the Backend
- npm run start:dev
- npm run start
- npm run start:prod

Run Tests
- npm run test
- npm run test:e2e
- npm run test:cov