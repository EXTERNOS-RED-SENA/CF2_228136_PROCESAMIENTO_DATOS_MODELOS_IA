export default {
  global: {
    componenteFormativo:
      'Integración y gestión avanzada de datos para inteligencia artificial',
    descripcionCurso:
      'Este componente profundiza en las técnicas avanzadas de integración y gestión de datos para sistemas de inteligencia artificial. Abarca desde el modelamiento avanzado de bases de datos hasta el análisis exploratorio y la preparación sofisticada de datos, incluyendo metodologías de inteligencia de negocios. Proporciona las herramientas necesarias para implementar soluciones de gestión de datos en contextos empresariales modernos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Modelamiento avanzado de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Reglas de negocio y metodologías',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normalización y diseño de bases de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Principios ACID (acrónimo en inglés de atomicidad, consistencia, aislamiento y durabilidad)',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Inteligencia de negocios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Bodegas de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Arquitecturas estrella y copo de nieve',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Metodologías Kimball e Inmon',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis exploratorio de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estadística descriptiva e inferencial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métodos de análisis univariable y multivariable',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de visualización',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Preparación avanzada de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Detección y tratamiento de errores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación de variables relevantes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Transformación y validación de datos',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Modelamiento avanzado de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023e, marzo 27). <em>Modelos y metodologías de analítica</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=96pohadjEWE ',
    },
    {
      tema: '2. Inteligencia de negocios',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023d, marzo 27). <em>Bodegas de datos</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SsP1tA6hAdg',
    },
    {
      tema: '2. Inteligencia de negocios',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 23). <em>Modelos y esquemas de bodega de datos</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Uq6WxfzaroM ',
    },
    {
      tema: '3. Análisis exploratorio de datos',
      referencia:
        '<em>Limpiar datos de Excel, CSV, PDF y Hojas de cálculo de Google con el intérprete de datos</em>. (s. f.). Tableau.',
      tipo: 'Portal <em>web</em>',
      link:
        'https://help.tableau.com/current/pro/desktop/es-es/data_interpreter.htm ',
    },
    {
      tema: '3. Análisis exploratorio de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, marzo 24). <em>Introducción a la aplicación de herramientas estadísticas en la presentación de datos</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M9q9zxX8Evc< ',
    },
    {
      tema: '4. Preparación avanzada de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, julio 25). <em>Procesamiento y análisis de datos</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8OSIN2kdU5o',
    },
    {
      tema: '4. Preparación avanzada de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023e, diciembre 30). <em>Modelamiento, análisis y preparación de datos</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HjJpqHD6sV0',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura estrella',
      significado:
        'Modelo de diseño de bases de datos dimensionales donde una tabla de hechos central se conecta con múltiples tablas de dimensiones desnormalizadas.',
    },
    {
      termino: 'Bodega de datos',
      significado:
        'Sistema de almacenamiento diseñado específicamente para el análisis y reporteo, que integra datos de múltiples fuentes en un modelo unificado.',
    },
    {
      termino: 'Copo de nieve',
      significado:
        'Variante de la arquitectura estrella donde las dimensiones están normalizadas, creando una estructura más compleja pero con mejor eficiencia de almacenamiento.',
    },
    {
      termino: '<em>Data mart</em>',
      significado:
        'Subconjunto de una bodega de datos enfocado en un área específica del negocio o departamento.',
    },
    {
      termino: 'Dimensiones conformadas',
      significado:
        'Tablas de dimensiones estandarizadas que se comparten entre diferentes <em>data marts</em>, asegurando consistencia en el análisis.',
    },
    {
      termino: 'ETL avanzado',
      significado:
        'Procesos sofisticados de Extracción, Transformación y Carga que incluyen validaciones complejas y transformaciones avanzadas de datos.',
    },
    {
      termino: '<em>Feature importance</em>',
      significado:
        'Medida que indica la relevancia o contribución de cada variable en un modelo predictivo o análisis estadístico.',
    },
    {
      termino: 'Metodología Inmon',
      significado:
        'Enfoque "<em>top-down</em>" para el diseño de bodegas de datos, que comienza con una visión empresarial completa y luego deriva en <em>data marts</em> específicos.',
    },
    {
      termino: 'Metodología Kimball',
      significado:
        'Enfoque "<em>bottom-up</em>" para el diseño de bodegas de datos, que construye data marts incrementalmente que luego se integran en una solución empresarial.',
    },
    {
      termino: 'Metadatos empresariales',
      significado:
        'Información que describe el contenido, formato, estructura y uso de los datos en un contexto empresarial.',
    },
    {
      termino: 'Normalización avanzada',
      significado:
        'Proceso de diseño de bases de datos que va más allá de la tercera forma normal, incluyendo BCNF y formas normales superiores.',
    },
    {
      termino: 'Prueba de hipótesis',
      significado:
        'Método estadístico para tomar decisiones sobre poblaciones basándose en muestras de datos.',
    },
    {
      termino: 'Reglas de negocio',
      significado:
        'Políticas, condiciones y restricciones que definen cómo se deben gestionar y validar los datos en un contexto empresarial.',
    },
    {
      termino: 'Tabla de hechos',
      significado:
        'Tabla central en un modelo dimensional que contiene las métricas o medidas del negocio y las claves foráneas a las dimensiones.',
    },
    {
      termino: 'Tablas de dimensiones',
      significado:
        'Tablas que contienen los atributos descriptivos utilizados para analizar los datos en las tablas de hechos.',
    },
    {
      termino: 'Transformación de datos',
      significado:
        'Proceso de convertir datos de un formato o estructura a otro, incluyendo limpieza, normalización y agregación.',
    },
    {
      termino: 'Validación cruzada',
      significado:
        'Técnica estadística para evaluar modelos analíticos dividiendo los datos en conjuntos de entrenamiento y prueba.',
    },
    {
      termino: 'Variables categóricas',
      significado:
        'Tipos de datos que representan categorías o grupos discretos, que pueden ser nominales u ordinales.',
    },
    {
      termino: 'Visualización avanzada',
      significado:
        'Técnicas sofisticadas para representar datos complejos de manera visual, incluyendo gráficos interactivos y multidimensionales.',
    },
    {
      termino: '<em>Workflow ETL</em>',
      significado:
        'Flujo de trabajo que define la secuencia y dependencias de los procesos de extracción, transformación y carga de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, L. J. (2020). Inteligencia de negocios y analítica de datos. Marcombo.',
      link: '',
    },
    {
      referencia:
        'De Pablos Heredero, C., Agius, J. J. L. H., Romero, S. M., & Salgado, S. M. (2019). Organización y transformación de los sistemas de información en la empresa. ESIC.',
      link: '',
    },
    {
      referencia:
        'Díaz, C. O., Soler, P., Pérez, M. & Mier, A. (2024). OMASHU: La ciencia detrás del éxito; Big Data e IA en los eSports. Revista SISTEMAS, 170, 61-79.',
      link: '',
    },
    {
      referencia:
        'Guardelli, E. (2024). Minería de Procesos: Convertir Datos en Valor. MedTechBiz.',
      link: '',
    },
    {
      referencia:
        'Jones, H. (2018). Analítica de Datos: Una guía esencial para principiantes en minería de datos, recolección de datos, análisis de <em>Big Data</em> para negocios y conceptos de inteligencia empresarial. Independently Published.',
      link: '',
    },
    {
      referencia:
        'Maldonado, L. (2012). Data Analysis Using Regression and Multilevel/Hierarchical Models. Persona y Sociedad, 26(1), 191.',
      link: 'https://doi.org/10.53689/pys.v26i1.12',
    },
    {
      referencia:
        'McKinsey, W. (2023). Python para análisis de datos. Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'Orlandi, M. A. M. (2024). Tecnologías Big Data, Minería de Datos y Analítica aplicada a la gestión de Recursos Humanos: contiene: un caso de estudio. Editora Dialética.',
      link: '',
    },
    {
      referencia:
        'Peraza, E. A. C. (2012). Estructuras y Fundamentos de Datos. Guía de ejercicios prácticos. Lulu.com.',
      link: '',
    },
    {
      referencia:
        'Shovic, J. C. & Simpson, A. (2019). Python All-in-One For Dummies. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Subirats Maté, L., Pérez Trenard, D. O., Calvo González, M. & Isabel Guitart Hormigo. (2019). Introducción a la limpieza y análisis de los datos. ',
      link:
        'https://openaccess.uoc.edu/bitstream/10609/148647/1/IntroduccionALaLimpiezaYAnalisisDeLosDatos.pdf',
    },
    {
      referencia:
        'Wilke, C. O. (2019). Fundamentals of Data Visualization: A Primer on Making Informative and Compelling Figures. O’Reilly Media.',
      link: '',
    },
  ],
}
