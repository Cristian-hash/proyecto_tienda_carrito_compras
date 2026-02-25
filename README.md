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
