<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right") En la era actual de la inteligencia artificial, la gestión avanzada de datos se ha convertido en un pilar fundamental para el éxito de cualquier iniciativa de transformación digital. La complejidad creciente de los sistemas de información y la necesidad de procesar volúmenes masivos de datos requieren un enfoque sofisticado que va más allá de las técnicas tradicionales de gestión de datos.

    .row.mt-4
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#ECF2FF;border-radius:10px;") 
          p.mb-0 Este componente formativo aborda los aspectos más avanzados de la integración y gestión de datos para IA, proporcionando una comprensión de las metodologías, arquitecturas y técnicas necesarias para construir soluciones robustas y escalables. Desde el modelamiento avanzado de datos hasta la implementación de bodegas de datos empresariales, cada tema se explora con un enfoque práctico.
      .col-lg.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/intro1.png")
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#BDE9FC;border-radius:10px;") 
          p.mb-0 A lo largo del componente, se examinarán las mejores prácticas en inteligencia de negocios, incluyendo las metodologías de Kimball e Inmon, así como las arquitecturas modernas para el almacenamiento y procesamiento de datos. El análisis exploratorio y las técnicas avanzadas de preparación de datos completarán el conjunto de herramientas necesarias para enfrentar los desafíos actuales en la gestión de datos para IA.
    
    .row.mt-4
      .col-md-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/intro2.svg")
      .col-md(style="place-self:center;" data-aos="fade-left")
        p La comprensión de estos conceptos avanzados es importante para cualquier persona que busque diseñar e implementar soluciones efectivas de gestión de datos en el contexto de la inteligencia artificial. Como dice un principio fundamental en este campo: "La arquitectura de datos de hoy determina las posibilidades analíticas del mañana".
        p.mb-0.fw-bold ¡Bienvenido a este viaje por las técnicas avanzadas de gestión de datos para IA!
    
    figure.mt-4(data-aos="zoom-in-up" data-aos-duration="800")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/mxb4fQq2CNw" title="Integración y gestión avanzada de datos para inteligencia artificial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
