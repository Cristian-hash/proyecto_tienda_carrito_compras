# MiniTienda

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.
ng serve-npm start

# Mini Tienda – Angular + Spring Boot

Este proyecto simula una tienda con carrito de compras.

## Arquitectura

- Angular: interfaz de usuario
- Spring Boot: lógica del negocio
- Comunicación vía HTTP

## Flujo principal

Usuario → Angular → HTTP → Spring → Angular

## DIA 1 Flujo detallado

Usuario
→ Click en botón
→ Componente Angular
→ Servicio Angular
→ HTTP
→ Controller (Spring)
→ Service (lógica)
→ Respuesta
→ UI se actualiza

## DIA 2 Pedido elegido: Agregar producto al carrito

Usuario
→ Click
→ HTML
→ Component TS
→ Service Angular
→ HTTP
→ Controller
→ Service backend
→ Response
→ UI

## DIA 3 Angular bien ordenado

Padre
├─ tiene datos
├─ decide acciones
└─ llama services
↓
Service
├─ coordina
├─ comunica
└─ llama backend
↓
Hijo
├─ muestra
└─ emite eventos

## Día 4 — Spring Boot bien ordenado

El Controller solo recibe peticiones; el Service contiene TODA la lógica del negocio.

## DIA 5 CORS

CORS es una regla del navegador configurada desde el backend para decidir qué frontends pueden usar la API.

## DIA 6 Estado actual del sistema

La memoria sirve para aprender; la base de datos sirve para construir sistemas reales.

## Día 7 — Qué pasaría con 2 usuarios

El sistema no tiene identidad.

No existen:

usuarios

carritos separados

persistencia

contexto

¿Por qué hoy NO escala?

Porque:

Hay un solo carrito

Vive en memoria

Es compartido

No distingue usuarios

## DIA 8 REFRANTOR

- [ ] Arreglé console.log que imprimía Subscription en cart.component.ngOnInit
- [ ] Eliminé imports y comentarios innecesarios en products.component.ts
- [ ] Corregí styleUrl → styleUrls en App component
- [ ] Añadí constructor vacío en Producto.java para compatibilidad Jackson
- [ ] Usé nuevos nombres: obtenerProductos()
- [ ] (Opcional) Reemplacé System.out por Logger o quité prints
- [ ] Probé flujo: POST /carrito/productos, GET /carrito, GET /carrito/total, DELETE /carrito/{id}

## DIA 9 Preparar camino a Base de Datos

-Solo pensar y documentar cómo debería verse el sistema cuando tenga base de datos.
-Esto evita reescribir todo después.

Futuro con DB (conceptual)
CarritoService
├── obtenerCarritoPorUsuario()
├── agregarItem(carritoId, productoId)
├── eliminarItem(itemId)
├── calcularTotal(carritoId)

Futuro con DB (conceptual)
Frontend (Angular)
|
| HTTP
v
Controller (Spring)
|
v
Service (reglas del negocio)
|
v
[ HOY ] List en memoria
[ FUTURO ] Base de datos

## DIA 10 - Como explicarlo en entrevista

Es una mini tienda pensada para aprender arquitectura limpia entre Angular y Spring Boot, con decisiones conscientes y preparada para crecer.

## DIA 11- README — ¿Por qué usar Base de Datos?

Estado actual

El carrito vive en memoria (RAM).

Existe un solo carrito.

Los datos se pierden al reiniciar el backend.

Problema

La memoria:

❌ No persiste datos

❌ No soporta múltiples usuarios

❌ No escala

Qué resuelve una DB

✅ Persistencia real

✅ Un carrito por usuario

✅ Soporte multiusuario
Decisión

No se usa DB aún a propósito.
Primero se domina el flujo y las reglas del negocio.

Próximo paso

Diseñar entidades antes de integrar la base de datos.

## DIA 12 Modelo inicial de datos

- Usuario: identidad del sistema
- Carrito: pertenece a un usuario
- ItemCarrito: representa productos dentro del carrito

Este modelo prepara el camino para persistencia en DB.
