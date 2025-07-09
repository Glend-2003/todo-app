#Todo App - Aplicación Full Stack de Gestión de Tareas

##Descripción

Aplicación web para gestión de tareas desarrollada como proyecto académico para mejorar mis habilidades en desarrollo full stack. La aplicación permite crear, editar, completar y eliminar tareas de manera intuitiva.

Este proyecto fue desarrollado como parte de mi formación en **Ingeniería en Sistemas** para aprender y practicar tecnologías modernas de desarrollo web que son demandadas en la industria actual.

##Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución para JavaScript
- **Express.js** - Framework web para Node.js
- **TypeScript** - Superset de JavaScript con tipado estático
- **PostgreSQL** - Base de datos relacional
- **Prisma** - ORM moderno para TypeScript/JavaScript

### Frontend
- **React** - Biblioteca para construir interfaces de usuario
- **TypeScript** - Para un desarrollo más robusto y mantenible
- **CSS3** - Estilos y diseño responsive
- **Axios** - Cliente HTTP para comunicación con la API

## Arquitectura del Proyecto

```
todo-app/
├── backend/                 # Servidor Node.js + Express
│   ├── src/
│   │   ├── controllers/     # Controladores de rutas
│   │   ├── services/        # Lógica de negocio
│   │   ├── routes/          # Definición de endpoints
│   │   ├── types/           # Tipos de TypeScript
│   │   └── server.ts        # Servidor principal
│   ├── prisma/
│   │   └── schema.prisma    # Esquema de base de datos
│   └── package.json
└── frontend/                # Aplicación React
    ├── src/
    │   ├── components/      # Componentes reutilizables
    │   ├── services/        # Servicios API
    │   ├── hooks/           # Custom hooks
    │   ├── types/           # Tipos TypeScript
    │   └── App.tsx          # Componente principal
    └── package.json
```

## Funcionalidades

- **Crear tareas** con título y descripción
- **Listar todas las tareas** ordenadas por fecha de creación
- **Marcar tareas como completadas** o pendientes
- **Editar tareas existentes** inline
- **Eliminar tareas** con confirmación
- **Interfaz responsive** que funciona en móviles y desktop
- **Validación de datos** tanto en frontend como backend
- **Manejo de errores** y estados de carga

## Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- PostgreSQL
- Git

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/todo-app.git
cd todo-app
```

### 2. Configurar Backend
```bash
cd backend
npm install
```

### 3. Configurar Base de Datos
- Crear una base de datos PostgreSQL llamada `todoapp`
- Crear archivo `.env` en la carpeta backend:

```env
DATABASE_URL="postgresql://postgres:tu_password@localhost:5432/todoapp"
PORT=3001
```

### 4. Ejecutar Migraciones
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Configurar Frontend
```bash
cd ../frontend
npm install
```

## Ejecutar la Aplicación

### Iniciar Backend (Puerto 3001)
```bash
cd backend
npm run dev
```

### Iniciar Frontend (Puerto 3000)
```bash
cd frontend
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| POST | `/api/tasks` | Crear nueva tarea |
| PUT | `/api/tasks/:id` | Actualizar tarea |
| DELETE | `/api/tasks/:id` | Eliminar tarea |

### Ejemplo de uso:
```javascript
// Crear tarea
POST /api/tasks
{
  "title": "Estudiar para examen",
  "description": "Repasar capítulos 1-5 de algoritmos"
}
```

## Screenshots

### Vista Principal
- Interfaz limpia y moderna
- Formulario para crear tareas
- Lista de tareas con opciones de edición

### Funcionalidades
- Edición inline de tareas
- Estados visuales para tareas completadas
- Confirmación antes de eliminar

## Objetivos de Aprendizaje Alcanzados

- [x] **Arquitectura Full Stack**: Separación clara entre frontend y backend
- [x] **TypeScript**: Implementación de tipado estático en ambos lados
- [x] **Base de Datos**: Diseño y manejo de esquemas con Prisma
- [x] **API RESTful**: Creación de endpoints siguiendo buenas prácticas
- [x] **React Hooks**: Uso de useState, useEffect y custom hooks
- [x] **Manejo de Estados**: Gestión eficiente del estado de la aplicación
- [x] **Responsive Design**: Interfaz adaptable a diferentes dispositivos

## Próximas Mejoras

- [ ] Implementar autenticación de usuarios
- [ ] Agregar filtros por categorías
- [ ] Añadir fechas límite para tareas
- [ ] Implementar notificaciones
- [ ] Deploy en servicios cloud (Vercel/Heroku)
- [ ] Agregar tests unitarios y de integración

## Contribuciones

Este es un proyecto académico, pero acepto sugerencias y feedback para seguir aprendiendo. Si encuentras algún bug o tienes ideas de mejora, no dudes en abrir un issue.

## Lo que Aprendí

Durante el desarrollo de este proyecto pude practicar y consolidar conocimientos en:

- **Desarrollo Full Stack** con tecnologías modernas
- **Patrones de diseño** como arquitectura por capas
- **Manejo de bases de datos** relacionales con ORMs
- **Programación asíncrona** en JavaScript/TypeScript
- **Buenas prácticas** de desarrollo y estructura de código
- **Control de versiones** con Git

## Autor
**Glend Rojas Alvarado**  
Estudiante de Ingeniería en Sistemas - 4to Año  
Universidad Nacional de Costa Rica
