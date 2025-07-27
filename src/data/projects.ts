export const projects = [
    {
        title: "Sistema de Compras Automatizado",
        description:
            "Conexión con Odoo por medio de XMLRPC para la extracción de datos para su análisis, obtención de reportes y automatización de procesos.",
        images: [
            { filename: "odoo.webp", description: "Cálculo de pedido sugerido según el punto de reorden, el tiempo de demora del pedido y los productos pendientes de recepción." },
            { filename: "odoo2.webp", description: "Comparador de precios de productos entre distintos proveedores. Considerando el precio y stock del producto." },
            { filename: "odoo3.webp", description: "Importación de archivos XML de las compras realizadas para su importación a Odoo. Obtiene la información de los productos de Odoo en el caso de que algún producto no esté enlazado y guarda la información." },
            { filename: "odoo4.webp", description: "Verifica el stock de los productos en las ubicaciones del sistema y, de acuerdo a los puntos de reorden, sugiere el traslado de los productos entre las ubicaciones." },
            { filename: "odoo5.webp", description: "Calcula el punto de reorden de los productos según el periodo seleccionado a evaluar. Extrae la información de ventas y realiza el cálculo según la fórmula de inventario perpetuo." },
        ],
        repo: "",
        demo: "",
        skills: [
            { name: "Python", icon: "simple-icons:python" },
            { name: "Odoo", icon: "simple-icons:odoo" },
            { name: "XMLRPC", icon: "mdi:xml" }
        ],
    },
    {
        title: "Cancionero con acordes",
        description:
            "Aplicación web para gestionar canciones y acordes, con funcionalidades de búsqueda y filtrado. Desarrollada en Ionic con Angular y Firebase.",
        images: [
            { filename: "cancionero.webp", description: "Vista principal del proyecto" },
            { filename: "cancionero2.webp", description: "Pantalla de configuración" },
            { filename: "cancionero3.webp", description: "Pantalla de resultados" },
        ],
        repo: "",
        demo: "https://alabanzas-ucb-berea.web.app",
        skills: [
            { name: "Ionic", icon: "simple-icons:ionic" },
            { name: "Angular", icon: "simple-icons:angular" },
            { name: "Firebase", icon: "simple-icons:firebase" }
        ],
    },
    {
        title: "App de administración para una iglesia",
        description:
            "Aplicación para gestionar eventos, miembros, canciones y finanzas de una iglesia. Incluye funcionalidades de autenticación y autorización. Desarrollada en Angular y Firebase.",
        images: [
            { filename: "ibmdefe.webp", description: "Vista principal del proyecto" },
            { filename: "ibmdefe2.webp", description: "Pantalla de configuración" },
            { filename: "ibmdefe3.webp", description: "Pantalla de resultados" },
        ],
        repo: "",
        demo: "https://ibmdefe.cl",
        skills: [
            { name: "Ionic", icon: "simple-icons:ionic" },
            { name: "Angular", icon: "simple-icons:angular" },
            { name: "Firebase", icon: "simple-icons:firebase" }
        ],
    },
    {
        title: "Módulos personalizados para Odoo 18",
        description:
            "Desarrollo de conexión del POS de Odoo 18 con el POS integrado de Transbank, creación de campos personalizados, gestión de permisos de escritura y edición de vistas, entre otros.",
        images: [],
        repo: "",
        demo: "",
        skills: [
            { name: "Odoo", icon: "simple-icons:odoo" },
            { name: "Python", icon: "simple-icons:python" },
            { name: "HTML", icon: "simple-icons:html5" },
            { name: "CSS", icon: "simple-icons:css3" },
            { name: "JavaScript", icon: "simple-icons:javascript" },
            { name: "XML", icon: "simple-icons:xml" },
            { name: "Transbank", icon: "simple-icons:transbank" }
        ],
    },
];