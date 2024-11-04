# Development

Pasos para levantar la app en desarollo

1. Levantar la base de datos

```
docker compose up -d
```

2. Renombrar el .env.template a.env
3. Remplazar las variables de entorno
4. Ejecutar comando `npm install`
5. Ejecutar comando `npm run dev`
6. Ejecutar comandos de prisma para crear tablas
```
npx prisma migrate dev
npx prisma generate
```

7. Ejecutar el seed para [crear la base de datos local](http://localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
