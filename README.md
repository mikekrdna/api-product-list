# API de Catálogo de Productos 📦

Esta es una API básica desarrollada con **Node.js** y **Express** que permite gestionar un inventario de productos mediante operaciones CRUD.

## 🛠️ Instalación y Ejecución

Para poner en marcha este proyecto en tu equipo local, sigue estos pasos:

1. **Instalar dependencias**:
   Escribe el siguiente comando en tu terminal para instalar los módulos necesarios después de descargar la carpeta:

  -bash

  -npm install

2. **iniciar el servidor**:  
   una vez instaladas las dependencias inicia el servidor con los siguientes comandos:

  -bash

  -node index.js

3. **🔗 Endpoints de la API**

| Acción | Método | Ruta (Endpoint) | Descripción |
| :--- | :---: | :--- | :--- |
| **Listar productos** | `GET` | `/api` | Obtiene la lista completa de productos. |
| **Crear producto** | `POST` | `/api` | Agrega un nuevo producto al catálogo. |
| **Actualizar producto** | `PUT` | `/api/id` | Modifica un producto existente usando su ID. |
| **Eliminar producto** | `DELETE` | `/api/id` | Borra un producto del sistema usando su ID. |

### 4. pruebas de funcionamiento

### 1. Listar productos (GET)
![Listar Productos](./assets/get-request.png)

### 2. Crear producto (POST)
![Crear Producto](./assets/post-request.png)

### 3. Actualizar producto (PUT)
![Actualizar Productos](./assets/put-request.png)

### 4. Eliminar producto (DELETE)
![Eliminar Productos](./assets/delete-request.png)
