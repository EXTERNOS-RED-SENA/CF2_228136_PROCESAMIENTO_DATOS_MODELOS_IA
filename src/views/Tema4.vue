<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Preparación avanzada de datos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up" data-aos-duration="1000")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La preparación avanzada de datos representa la culminación del proceso de transformación de datos crudos en información lista para alimentar modelos de inteligencia artificial. Este proceso va más allá de la limpieza de datos; implica utilizar técnicas sofisticadas de detección de errores, selección de variables y validación que aseguran la calidad y relevancia de los datos para su uso en análisis avanzados. La complejidad de esta etapa frecuentemente determina el éxito o fracaso de los proyectos de IA.
      
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_1 4.1 Detección y tratamiento de errores
    
    p(data-aos="fade-up") La detección y tratamiento de errores en datos constituye una fase crítica que requiere una combinación de automatización inteligente y criterio experto. Los errores en datos pueden manifestarse de múltiples formas, desde inconsistencias obvias hasta anomalías sutiles que solo se revelan a través de análisis detallados. El proceso de detección debe ser sistemático y exhaustivo, considerando tanto la calidad individual de cada variable como la coherencia global del conjunto de datos.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/2.png")
      .col-lg(data-aos="fade-left")
        .p-4(style="background-color:#E7FFE7;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema4/3.svg")
            .col-md
              p.mb-0 Los errores más comunes incluyen valores fuera de rango, inconsistencias lógicas entre variables relacionadas, y patrones temporales imposibles. Sin embargo, la verdadera complejidad radica en identificar errores que son técnicamente válidos pero contextualmente incorrectos. Por ejemplo, un valor de temperatura podría estar dentro del rango permitido, pero ser improbable dado el contexto geográfico y temporal.
        p.mt-4.mb-0 El tratamiento de errores una vez detectados requiere un enfoque matizado. La simple eliminación de registros problemáticos puede introducir sesgos en los datos, mientras que la corrección automática puede crear artificios que afecten análisis posteriores. Es fundamental documentar todas las decisiones de tratamiento de errores y mantener la trazabilidad de las modificaciones realizadas.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_2 4.2 Identificación de variables relevantes

    .row
      .col-lg(data-aos="fade-right")
        .p-4(style="background-color:#F7EEFE;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema4/4.svg")
            .col-md
              p.mb-0 La identificación y selección de variables relevantes constituye uno de los desafíos más significativos en la preparación avanzada de datos. Como se ilustra en la infografía anterior, este proceso sigue una secuencia metodológica que combina análisis estadístico, técnicas de selección automatizada y validación experta. Cada fase del proceso contribuye a la identificación de las variables que realmente aportan valor al modelo final.
        p.mt-4.mb-0 La identificación de variables relevantes sigue un proceso estructurado que combina análisis estadístico con conocimiento del dominio. La siguiente figura ilustra las cuatro fases principales de este proceso y sus componentes clave.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/5.png")

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 2.
      span Proceso de selección de variables
    .p-4(style="background-color:#ECF2FF;" data-aos="fade-up" data-aos-duration="850")
      .col-xl-11.m-auto
        .row
          .col-lg.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/6.svg" alt="La Figura 1 se denomina «Comparación de arquitecturas de bodegas de datos» y presenta dos ejemplos para el sector de ventas, donde el esquema estrella tiene solo dimensiones principales y el esquema copo de nieve tiene dimensiones primarias y secundarias.")
    figcaption.fw-normal.mt-1 #[strong Fuente.] OIT, 2024.

    .row.mt-5
      .col-lg(data-aos="fade-right")
        .p-4(style="background-color:#D9F2FE;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema4/7.svg")
            .col-md
              p.mb-0 El proceso comienza con un análisis inicial exhaustivo que examina las características estadísticas de cada variable, sus relaciones con otras variables y su completitud. Esta fase establece la base para decisiones informadas sobre qué variables merecen consideración adicional. La fase de selección aplica técnicas avanzadas como análisis de importancia de características y métodos de regularización para identificar las variables más prometedoras.
        p.mt-4.mb-0 La evaluación de impacto y la validación final son estratégicas para asegurar que las variables seleccionadas no solo son estadísticamente significativas, sino también relevantes desde una perspectiva del negocio. Este enfoque holístico ayuda a evitar la trampa común de seleccionar variables basándose únicamente en criterios estadísticos.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/8.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_3 4.3 Transformación y validación de datos
    
    p(data-aos="fade-up") La transformación y validación de datos representa la última línea de defensa antes de que los datos sean utilizados en modelos de IA. Esta fase combina técnicas de transformación sofisticadas con procesos rigurosos de validación para asegurar que los datos cumplan con todos los requisitos necesarios para su uso en modelado.

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/9.png")
      .col-lg(data-aos="fade-left")
        .p-4(style="background-color:#E7FFE7;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema4/10.svg")
            .col-md
              p.mb-0 Las transformaciones pueden incluir codificación de variables categóricas, normalización de variables numéricas, y creación de características derivadas. Cada transformación debe ser cuidadosamente documentada y validada para asegurar que preserve la integridad de la información mientras la hace más adecuada para el análisis automatizado.
        p.mt-4.mb-0 La validación debe ser un proceso continuo que ocurre en múltiples niveles. A nivel técnico, se verifica que las transformaciones mantengan las relaciones importantes entre variables y no introduzcan sesgos indeseados. A nivel de negocio, se confirma que los datos transformados sigan representando fielmente la realidad del dominio.
    
    .row.mt-5
      .col-lg(data-aos="fade-right")
        p El proceso de validación también debe incluir pruebas de robustez para asegurar que las transformaciones sean estables y reproducibles en diferentes condiciones. Esto es particularmente importante en sistemas de producción donde los datos se procesan de manera continua.
        .p-4.mt-4(style="background-color:#ECF2FF;")
          p.mb-0 El éxito en la preparación avanzada de datos requiere un balance delicado entre automatización y supervisión humana. Mientras que las herramientas automatizadas pueden manejar eficientemente grandes volúmenes de datos, el juicio experto sigue siendo indispensable para tomar decisiones estratégicas y validar resultados críticos.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/11.png")




</template>

<script>
export default {
  name: 'Tema4',
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
