# Multi-stage Dockerfile para construir y servir la aplicación Vite (React + TS)
# Stage 1: builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar archivos de dependencia primero para aprovechar cache de docker
COPY package.json package-lock.json ./

# Instalar dependencias (incluye devDependencies para el build)
RUN npm ci

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# Stage 2: servidor ligero con nginx
FROM nginx:stable-alpine AS production

# Copiar artefactos estáticos de la build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx para SPA
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
