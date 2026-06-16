# Proyecto NBA Expansion 🏀 — Simulador y Gestor de Franquicias

**Proyecto NBA Expansion** es una aplicación de software integral diseñada para simular y gestionar la expansión de la liga de baloncesto más importante del mundo, la NBA. La plataforma permite a los usuarios fundar una nueva franquicia desde cero, elegir su sede, simular el complejo **Draft de Expansión** de la liga y administrar las finanzas del equipo respetando las complejas normativas reales de la NBA.

El sistema fusiona una arquitectura backend robusta para el procesamiento de transacciones financieras y algoritmos de draft con una interfaz de usuario interactiva y minimalista.

---

## 🚀 Características Clave

* **Simulador de Draft de Expansión:** Algoritmo que recrea las reglas reales de la NBA. Las 30 franquicias existentes seleccionan y protegen a 8 jugadores de su plantilla actual, permitiendo al usuario draftear a los jugadores desprotegidos para dar forma a su nuevo equipo.
* **Gestión Financiera de Franquicia (Salary Cap):** Módulo de control presupuestario que calcula el límite salarial de la plantilla, impuestos de lujo (*Luxury Tax*), ingresos de taquilla, derechos de televisión y costes operativos del pabellón deportivo.
* **Algoritmo de Fichajes Inteligente (IA):** Motor de IA que simula las decisiones de fichajes, ofertas de agentes libres e intercambios (trades) del resto de managers generales (GMs) de la liga.
* **Panel Analítico de Plantilla:** Telemetría de rendimiento que evalúa el potencial (POT) y valoración (OVR) de los jugadores históricos y actuales en gráficos y tablas dinámicas.

---

## 🛠️ Tecnologías y Arquitectura

El proyecto está diseñado bajo un enfoque modular y robusto para asegurar la consistencia y escalabilidad de los datos:

* **Frontend:** React y TypeScript para una interfaz reactiva, con componentes interactivos y visualizaciones gráficas sutiles.
* **Backend:** Spring Boot (Java) estructurado bajo un patrón MVC, gestionando lógica de negocio pesada y validaciones de draft.
* **Base de Datos:** PostgreSQL para almacenar de forma consistente relaciones complejas de contratos, plantillas y estadísticas históricas mediante transacciones ACID estrictas.
* **Control de Versiones & DevOps:** Git y Docker para empaquetar y distribuir de forma ágil el entorno completo de desarrollo.

---

## 📁 Estructura del Proyecto

```text
proyecto-nba-expansion/
├── backend/            # Spring Boot REST API
│   ├── src/            # Lógica de negocio (Draft, Finanzas, Jugadores)
│   └── pom.xml         # Dependencias Maven
├── frontend/           # Interfaz React & TypeScript
│   ├── src/            # Componentes, vistas y llamadas a la API
│   └── package.json    # Dependencias de npm
├── database/           # Scripts SQL y migraciones de PostgreSQL
└── README.md           # Documentación del proyecto
```

---

## 💻 Instalación y Uso Local

### Requisitos previos:
* Java Development Kit (JDK) 17 o superior.
* Node.js v18 o superior.
* PostgreSQL 15 instalado y en ejecución.

### Pasos de ejecución:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/laglera/Proyecto_NBA_Expansion.git
   ```
2. **Configurar la Base de Datos:**
   * Crea una base de datos en PostgreSQL llamada `nba_expansion` y configura tus credenciales en el archivo `backend/src/main/resources/application.properties`.
3. **Ejecutar el Backend (Spring Boot):**
   ```bash
   cd Proyecto_NBA_Expansion/backend
   ./mvnw spring-boot:run
   ```
4. **Ejecutar el Frontend (React):**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   * Abre tu navegador en `http://localhost:5173` para acceder a la aplicación.
