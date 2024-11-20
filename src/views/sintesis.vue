<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="800") El diagrama siguiente representa la estructura integral del componente formativo, donde se parte del concepto central de gestión avanzada de datos para IA y se ramifica en cuatro áreas fundamentales: modelamiento avanzado, inteligencia de negocios, análisis exploratorio y preparación avanzada. Cada una de estas áreas se desglosa en subtemas específicos que constituyen los pilares del proceso de integración y gestión de datos para IA.

    .row.mb-5
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#ECF2FF;border-radius:10px;") 
          p.mb-0 Esta organización refleja la progresión lógica del aprendizaje, desde los fundamentos del modelamiento hasta las técnicas más avanzadas de preparación de datos. La interconexión entre las diferentes áreas ilustra cómo cada concepto contribuye al objetivo final de preparar datos de alta calidad para su uso en sistemas de inteligencia artificial.
      .col-lg.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/sintesis1.png")
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#BDE9FC;border-radius:10px;") 
          p.mb-0 El diagrama sirve como una guía visual para navegar por los conceptos presentados en el texto, permitiendo al aprendiz comprender rápidamente la estructura del componente y las relaciones entre sus diferentes elementos. Se recomienda utilizarlo como referencia para organizar el estudio y comprender la integración de los diferentes aspectos de la gestión avanzada de datos.


    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 3.
      span Síntesis temática del componente
    .row.justify-content-center.p-4(style="background-color:#F4F4F4;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up" data-aos-duration="950")
          img(src="@/assets/curso/sintesis.svg", alt="La Figura 3 se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre integración y gestión avanzada de datos para inteligencia artificial —como el modelamiento avanzado, la inteligencia de negocios, el análisis exploratorio y la preparación avanzada de datos— y algunos subtemas que los integran.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
