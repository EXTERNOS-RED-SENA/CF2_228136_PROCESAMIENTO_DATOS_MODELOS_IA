<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Inteligencia de negocios

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up" data-aos-duration="1000")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La inteligencia de negocios (BI) representa la convergencia entre la gestión de datos empresariales y la toma de decisiones estratégicas. En el contexto de la inteligencia artificial, la BI se ha convertido en un componente elemental que proporciona la infraestructura y los métodos necesarios para transformar datos crudos en información accionable. Este capítulo explora las arquitecturas, metodologías y mejores prácticas que permiten a las organizaciones aprovechar al máximo sus datos para obtener ventajas competitivas.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Bodegas de datos

    .cont_1_2
      p(data-aos="fade-up") Las bodegas de datos (#[em Data Warehouses]) son el fundamento de cualquier estrategia moderna de inteligencia de negocios. A diferencia de las bases de datos operacionales tradicionales, las bodegas de datos están diseñadas específicamente para el análisis y el soporte a la toma de decisiones. 
      p.fw-bold(data-aos="fade-right") Características de las bodegas de datos
      .row.mt-4.justify-content-center
        .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/2.svg")
            p.fw-bold.mb-3 Orientación a temas
            p Los datos se organizan por áreas temáticas principales del negocio.
        .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/3.svg")
            p.fw-bold.mb-3 Integración
            p Datos provenientes de múltiples fuentes se unifican bajo un esquema coherente.
        .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/4.svg")
            p.fw-bold.mb-3 No volatilidad
            p Los datos históricos se preservan para análisis temporales.
        .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/5.svg")
            p.fw-bold.mb-3 Variación temporal
            p Se mantiene la dimensión temporal de todos los datos
    
    p.mt-4.mt-lg-5(data-aos="fade-right") El diseño de una bodega de datos requiere una comprensión profunda tanto de las necesidades analíticas del negocio como de las características de los datos disponibles. Un aspecto crítico es la estrategia de actualización y mantenimiento, que debe balancear la frescura de los datos con la estabilidad del sistema.

    .p-4.p-md-3.mt-4(style="background-color:#E7FFE7;" data-aos="fade-up" data-aos-duration="700")
      .row
        .col-md-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/6.svg")
        .col-md(style="place-self:center;")
          p.mb-0 El diseño de una bodega de datos requiere una comprensión profunda tanto de las necesidades analíticas del negocio como de las características de los datos disponibles. Un aspecto crítico es la estrategia de actualización y mantenimiento, que debe balancear la frescura de los datos con la estabilidad del sistema.
    

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Arquitecturas estrella y copo de nieve
    
    .row
      .col-lg(data-aos="fade-right")
        .p-4(style="background-color:#F7EEFE;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema2/7.svg")
            .col-md
              p.mb-0 Las arquitecturas estrella y copo de nieve son los dos paradigmas principales para organizar datos en un entorno de bodega de datos. Cada arquitectura tiene sus propias características y casos de uso óptimos. Para comprender mejor las diferencias fundamentales entre estas arquitecturas, consideremos una representación visual de ambos esquemas. La figura que se muestra más adelante ilustra cómo se organizan las tablas y sus relaciones en cada tipo de arquitectura, tomando como ejemplo un caso típico de análisis de ventas.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/8.png")
    
    p.mt-4(data-aos="fade-up") Como se puede observar, mientras que el esquema estrella mantiene una estructura más simple y directa con todas las dimensiones conectadas directamente a la tabla de hechos central, el esquema copo de nieve introduce niveles adicionales de normalización en las dimensiones. Esta diferencia estructural tiene implicaciones significativas tanto en el rendimiento de las consultas como en la mantenibilidad del sistema. Por ejemplo, en el esquema copo de nieve, la información sobre productos está normalizada con una tabla separada para categorías, lo que reduce la redundancia de datos, pero aumenta la complejidad de las consultas.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 1.
      span Comparación de arquitecturas de bodegas de datos
    .p-4(style="background-color:#ECF2FF;" data-aos="fade-up" data-aos-duration="850")
      .col-xl-11.m-auto
        .row
          .col-lg.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/9.svg" alt="La Figura 1 se denomina «Comparación de arquitecturas de bodegas de datos» y presenta dos ejemplos para el sector de ventas, donde el esquema estrella tiene solo dimensiones principales y el esquema copo de nieve tiene dimensiones primarias y secundarias.")
    figcaption.fw-normal.mt-1 #[strong Fuente.] OIT, 2024.

    .row.mt-5
      .col-lg(data-aos="fade-right")
        p El esquema estrella se caracteriza por su simplicidad y eficiencia en las consultas. En el centro se encuentra la tabla de hechos, que contiene las métricas del negocio, rodeada por tablas de dimensiones desnormalizadas. Esta estructura facilita la navegación intuitiva de los datos y generalmente proporciona mejor rendimiento en consultas analíticas. Por otro lado, el esquema copo de nieve introduce normalización adicional en las tablas de dimensiones, creando una estructura más compleja, pero más eficiente en términos de almacenamiento. Esta arquitectura es particularmente útil cuando:
        .p-4.mt-4(style="background-color:#ECF2FF;")
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span.fw-bold 1
              span Las dimensiones tienen múltiples niveles de jerarquía
            li.d-flex
              .lista-ol--cuadro__vineta
                span.fw-bold 2
              span El almacenamiento es una preocupación primordial
            li.d-flex
              .lista-ol--cuadro__vineta
                span.fw-bold 3
              span La integridad referencial es crítica
            li.d-flex.mb-0
              .lista-ol--cuadro__vineta
                span.fw-bold 4
              span Las dimensiones son compartidas entre múltiples esquemas
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/11.png")

    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5.mt-5
      .tarjeta.bg-white.p-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Estructura de las tablas de dimensiones
              p.mt-4 En el esquema estrella, las tablas de dimensiones están desnormalizadas, lo que significa que contienen toda la información en una sola tabla, reduciendo la cantidad de uniones necesarias. En el esquema copo de nieve, las dimensiones están normalizadas, lo que significa que los datos se dividen en varias tablas relacionadas entre sí.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/12.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Complejidad de las consultas
              p.mt-4 Las consultas en el esquema estrella son más simples, ya que las tablas de dimensiones están desnormalizadas y no requieren uniones complejas. En el esquema copo de nieve, debido a la normalización de las dimensiones, las consultas son más complejas, ya que es necesario hacer más uniones entre tablas.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/13.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Uso de espacio de almacenamiento
              p.mt-4 El esquema estrella generalmente ocupa más espacio de almacenamiento debido a la desnormalización de las tablas de dimensiones, ya que los datos redundantes se almacenan en cada tabla. En el esquema copo de nieve, al normalizar las tablas de dimensiones, se reduce la redundancia, lo que disminuye el espacio de almacenamiento requerido.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/14.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Mantenimiento de los datos
              p.mt-4 En el esquema estrella, el mantenimiento de los datos es más sencillo debido a la simplicidad de las tablas de dimensiones. Sin embargo, debido a la redundancia de datos, pueden ocurrir inconsistencias. En el esquema copo de nieve, el mantenimiento es más complejo, pero la normalización reduce el riesgo de inconsistencias y facilita la actualización de datos.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/15.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Rendimiento en consultas
              p.mt-4 El esquema estrella ofrece un mejor rendimiento en consultas, ya que las uniones son mínimas y los datos están optimizados para la lectura. En el esquema copo de nieve, aunque la normalización reduce la redundancia, el rendimiento en consultas puede verse afectado por las múltiples uniones necesarias.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/16.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Uso recomendado del sistema estrella
              p.mt-4 El esquema estrella es ideal para entornos donde se requiere un alto rendimiento en consultas y análisis rápidos de grandes volúmenes de datos, como en análisis de ventas o en sistemas de soporte a la toma de decisiones.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/17.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Uso recomendado del sistema copo de nieve
              p.mt-4 El esquema copo de nieve es más adecuado cuando se necesita un almacenamiento eficiente y la reducción de redundancia en bases de datos de grandes dimensiones, como en sistemas que gestionan datos históricos complejos o información con muchas relaciones entre atributos.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/18.png')

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3 Metodologías Kimball e Inmon
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/19.png")
      .col-lg(data-aos="fade-left")
        p Las metodologías de Kimball e Inmon representan dos filosofías fundamentales pero diferentes para el diseño y la implementación de bodegas de datos. Aunque ambas buscan crear un repositorio de datos empresariales eficiente, sus enfoques difieren significativamente.
        p.mb-0 La metodología Kimball, también conocida como el enfoque "bottom-up", comienza con la identificación de procesos de negocio específicos y construye data marts interconectados que eventualmente forman una bodega de datos empresarial. Las características principales de este enfoque incluyen:
      
    .cont_2_1.mt-4
      .row.mt-4.justify-content-center
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/20.svg")
            p.fw-bold.mb-3 01
            p Desarrollo incremental por áreas de negocio
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/20.svg")
            p.fw-bold.mb-3 02
            p Uso consistente de dimensiones conformadas
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/20.svg")
            p.fw-bold.mb-3 03
            p Enfoque en la usabilidad y el rendimiento analítico
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/20.svg")
            p.fw-bold.mb-3 04
            p Mayor flexibilidad y tiempo más rápido hasta el primer resultado
              
      p.mt-lg-4(data-aos="fade-right") Por su parte, la metodología #[strong Inmon], conocida como el enfoque "#[em top-down]", aboga por la construcción de una bodega de datos empresarial normalizada desde el principio, a partir de la cual se pueden derivar data marts específicos. Este enfoque se distingue por:

      .row.mt-4.justify-content-center
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/21.svg")
            p.fw-bold.mb-3 01
            p Visión empresarial integral desde el inicio
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/21.svg")
            p.fw-bold.mb-3 02
            p Datos altamente normalizados en el nivel empresarial
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/21.svg")
            p.fw-bold.mb-3 03
            p Énfasis en la consistencia y la integración de datos
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema2/21.svg")
            p.fw-bold.mb-3 04
            p Mayor inversión inicial pero mejor escalabilidad a largo plazo
    
    .row.mt-4.mt-lg-5
      .col-lg(data-aos="fade-right")
        p La selección de la metodología más apropiada requiere una evaluación cuidadosa del contexto organizacional. Las empresas deben considerar su nivel de madurez en la gestión de datos, pues organizaciones más experimentadas pueden estar mejor preparadas para implementar el enfoque más estructurado de Inmon. Los recursos disponibles también juegan un papel medular; el tiempo, presupuesto y personal técnico necesarios varían significativamente entre metodologías. Además, la urgencia por obtener resultados analíticos puede inclinar la balanza hacia el enfoque más ágil de Kimball, mientras que la complejidad del ambiente de datos y los requisitos de gobierno podrían favorecer la estructura más rigurosa de Inmon.
        .p-4.mt-4(style="background-color:#F7EEFE;")
          p.mb-0 En el panorama actual, la dicotomía entre estas metodologías se ha difuminado considerablemente. Las organizaciones modernas tienden a adoptar enfoques híbridos, al seleccionar y adaptar elementos de ambas metodologías según sus circunstancias particulares. Lo verdaderamente determinante no es la adherencia estricta a una metodología específica, sino mantener la consistencia en el enfoque elegido y asegurar que la implementación se alinee efectivamente con los objetivos analíticos de la organización. Este equilibrio pragmático permite a las empresas aprovechar las fortalezas de ambas metodologías mientras mitigan sus respectivas limitaciones.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/22.png")



</template>

<script>
import SlyderA from '../bootstrap/SlyderA.vue'
export default {
  name: 'Tema2',
  components: {
    SlyderA,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
