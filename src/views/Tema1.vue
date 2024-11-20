<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Modelamiento avanzado de datos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up" data-aos-duration="1000")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El modelamiento avanzado de datos constituye la base de la construcción de sistemas de información modernos, especialmente aquellos destinados a soportar aplicaciones de inteligencia artificial. Este capítulo explora las técnicas y metodologías para diseñar e implementar las estructuras de datos que almacenen información de manera eficiente, y que también soporten las complejas necesidades analíticas de los sistemas de IA actuales. Abordaremos desde las reglas de negocio fundamentales hasta los principios de diseño de bases de datos.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Reglas de negocio y metodologías
    
    p(data-aos="fade-right") El modelamiento avanzado de datos representa un paso obligado en la gestión moderna de información, especialmente cuando se orienta hacia aplicaciones de inteligencia artificial. Este proceso va más allá del simple diseño de estructuras de almacenamiento, incorporando las reglas de negocio que definen cómo la organización opera y toma decisiones.

    .row.mt-4
      .col-lg(data-aos="fade-right")
        .p-4(style="background-color:#ECF2FF;")
          .row
            .col-md-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema1/2.svg")
            .col-md
              p.mb-0 Las reglas de negocio son las directrices que gobiernan aspectos del negocio y determinan cómo los datos deben ser capturados, almacenados, transformados y utilizados. Estas reglas pueden variar desde simples validaciones (como "la edad de un empleado debe ser mayor a 18 años") hasta complejas interrelaciones entre diferentes aspectos del negocio (como "un cliente premium debe haber realizado compras por más de $10,000 en los últimos 6 meses y tener un historial de pagos impecable").
        p.mt-4.mb-0 Las metodologías de modelamiento actuales tienen un enfoque iterativo y colaborativo, que les permite a los expertos en datos trabajar estrechamente con los expertos del dominio para asegurar que el modelo final refleje adecuadamente tanto los requisitos técnicos como las necesidades del negocio.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/3.png")

    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5.mt-5
      .tarjeta.bg-white.p-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Modelamiento de datos en empresas grandes y pymes
              p.mt-4 El modelamiento de datos organiza la información para responder a objetivos específicos. En empresas grandes, optimiza análisis de millones de registros en tiempo real para prever tendencias del mercado. En pymes, organiza inventarios y gestiona datos de clientes de forma eficiente para aumentar ventas y reducir costos.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/5.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Impacto en empresas grandes y pymes
              p.mt-4 Las empresas grandes utilizan reglas de negocio para garantizar que operaciones internacionales cumplan con normativas legales. Las pymes implementan reglas simples para gestionar inventarios o priorizar clientes según su rentabilidad. Este enfoque reduce errores y asegura el cumplimiento de objetivos comerciales.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/6.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Metodologías ágiles en el modelamiento de datos
              p.mt-4 Las metodologías iterativas ajustan los modelos a las necesidades cambiantes del negocio. Una empresa tecnológica actualiza su modelo para analizar el comportamiento de usuarios y mejorar productos. Las pymes refinan sus datos para ajustar precios o introducir promociones según patrones de compra.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/7.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Beneficios tangibles del modelamiento avanzado
              p.mt-4 El modelamiento de datos acelera análisis y mejora la toma de decisiones. En empresas grandes, facilita la gestión logística y la personalización de servicios. Las pymes maximizan ingresos al ajustar estrategias de ventas basadas en datos concretos, optimizando recursos limitados para obtener resultados rápidos.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/8.png')
    

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Normalización y diseño de bases de datos
    
    .row
      .col-lg(style="place-self:center;" data-aos="fade-right")
        p La normalización es un proceso fundamental en el diseño de bases de datos que busca eliminar redundancias y dependencias problemáticas. Para comprender mejor este proceso, se deben conocer las diferentes formas normales y su impacto en el diseño de bases de datos. Cada forma normal representa un nivel incremental de organización y optimización de la estructura de datos.
        p.mb-0.fw-bold La siguiente tabla expone una visión general de las principales formas normales, sus objetivos y consideraciones clave:
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Tabla 1.
      span Formas de normalización en las bases de datos
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        caption.fw-normal #[strong Fuente.] OIT, 2024.
        thead
          tr.text-white.text-center(style="background-color:#03A9F4;")
            th Forma normal
            th Objetivo
            th Beneficios
            th Consideraciones
        tbody.text-center
          tr.bg-white
            td 1FN
            td Eliminar grupos repetitivos
            td Atomicidad de datos
            td Puede aumentar el número de tablas
          tr.bg-white
            td 2FN
            td Eliminar dependencias parciales
            td Mejor integridad de datos
            td Requiere identificar dependencias funcionales
          tr.bg-white
            td 3FN
            td Eliminar dependencias transitivas
            td Reduce redundancia
            td Puede afectar el rendimiento de consultas
          tr.bg-white
            td BCNF
            td Eliminar anomalías restantes
            td Máxima normalización práctica
            td Complejidad aumentada
          tr.bg-white
            td 4FN
            td Manejar dependencias multivaluadas
            td Mejor manejo de relaciones M:N
            td Raramente necesaria

    p.mt-4(data-aos="fade-right") Esta progresión de formas normales ilustra cómo el proceso de normalización evoluciona desde conceptos básicos hasta consideraciones más avanzadas. Sin embargo, es importante notar que no siempre es necesario o deseable alcanzar los niveles más altos de normalización. La decisión de hasta qué nivel normalizar debe basarse en un análisis cuidadoso de los requisitos específicos del sistema, considerando factores como el rendimiento de las consultas, la naturaleza de los datos y las necesidades del negocio.

    .cont_1_2.mt-4
      .row
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure 
            img(src="@/assets/curso/tema1/11.png")
        .col-lg-9(data-aos="zoom-in")
          AcordionA(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Impacto de la primera forma normal (1FN) en las empresas")
              p La primera forma normal es esencial para garantizar un diseño básico en bases de datos. En una pyme que administra inventarios, esta forma evita errores al almacenar productos repetidos en una sola celda. Por ejemplo, registrar "10 sillas y 5 mesas" como un solo campo puede complicar el análisis de ventas. Al dividir estos datos en filas individuales, es más sencillo rastrear cada producto vendido, mejorar el control de inventarios y realizar proyecciones más precisas.
            .row.col-xl-11.m-auto(titulo="Optimización de procesos con la segunda forma normal (2FN)")
              p En empresas con operaciones complejas, la segunda forma normal asegura que no existan dependencias parciales. Por ejemplo, en una cadena de restaurantes, asociar el nombre del proveedor con cada pedido puede llevar a redundancia. Al separar esta información en tablas independientes, el sistema facilita la actualización de datos del proveedor sin afectar otras transacciones. Esto es crucial para integrar sistemas ERP y minimizar errores operativos.
            .row.col-xl-11.m-auto(titulo="Eficiencia en análisis con la tercera forma normal (3FN)")
              p La tercera forma normal es clave para mejorar la calidad del análisis de datos. En una empresa de logística, incluir la dirección de los clientes dentro de una tabla de órdenes puede generar inconsistencias cuando un cliente cambia de ubicación. Al crear una tabla específica para direcciones, se reduce la duplicidad y se garantiza que los reportes, como tiempos de entrega promedio, utilicen información consistente y actualizada.
            .row.col-xl-11.m-auto(titulo="Aplicabilidad empresarial de BCNF")
              p La forma normal de Boyce-Codd es fundamental en sectores como la banca, donde la precisión en la información es crítica. Por ejemplo, al diseñar un sistema de cuentas y transacciones, BCNF asegura que no existan datos redundantes o incoherencias en la relación entre las cuentas y los tipos de transacción. Esto mejora la transparencia del sistema, facilita auditorías y reduce errores regulatorios.
            .row.col-xl-11.m-auto(titulo="Manejo avanzado de relaciones con la cuarta forma normal (4FN)")
              p La cuarta forma normal aborda escenarios complejos que aparecen en grandes empresas con múltiples relaciones simultáneas. Por ejemplo, en una plataforma de comercio electrónico, una misma tabla podría incluir datos de clientes, productos y métodos de pago. Dividir estas relaciones en tablas separadas permite diseñar un sistema más escalable que agilice consultas específicas, como identificar métodos de pago preferidos para un producto. Esto resulta valioso para estrategias de marketing segmentado.
    
      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_1_3 1.3 Principios ACID (acrónimo en inglés de atomicidad, consistencia, aislamiento y durabilidad)
      
      p(data-aos="fade-right") Los principios ACID constituyen la base de la integridad transaccional en sistemas de bases de datos. Estos principios son especialmente determinantes en entornos donde la precisión y la consistencia de los datos son fundamentales para las operaciones del negocio.

      .row.mt-4.justify-content-center
        .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema1/12.svg")
            p.fw-bold.mb-3 Atomicidad
            p Asegura que una transacción se complete en su totalidad o no se realice en absoluto. Por ejemplo, en una transferencia bancaria, tanto el débito de una cuenta como el crédito en otra deben completarse exitosamente, o ninguna operación debe realizarse.
        .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema1/13.svg")
            p.fw-bold.mb-3 Consistencia
            p Garantiza que una transacción lleve la base de datos de un estado válido a otro igualmente válido. Esto significa que todas las reglas de integridad definidas deben cumplirse antes y después de cada transacción.
        .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema1/14.svg")
            p.fw-bold.mb-3 Aislamiento
            p Previene que transacciones concurrentes interfieran entre sí. Cada transacción debe ejecutarse como si fuera la única operación siendo realizada en el sistema, aunque en realidad múltiples transacciones pueden estar ejecutándose simultáneamente.
        .col-lg.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in" data-aos-duration="800")
          .cont_1_3.h-100.p-4
            figure.mb-3
              img(src="@/assets/curso/tema1/15.svg")
            p.fw-bold.mb-3 Durabilidad
            p  Asegura que una vez una transacción se ha completado, sus efectos son permanentes y sobrevivirán a cualquier falla subsecuente del sistema. Esto típicamente se logra a través de logs de transacciones y mecanismos de recuperación.
    
    .row.mt-4.mt-lg-5
      .col-lg(data-aos="fade-right")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#FDF9F3;")
          p.mb-0 En el contexto de la IA, estos principios ACID adquieren una nueva dimensión de importancia. Los modelos de IA dependen claramente de la calidad y consistencia de los datos de entrenamiento, y cualquier violación de estos principios podría resultar en modelos sesgados o poco confiables. Por ejemplo, si los datos de entrenamiento se recopilan durante estados inconsistentes de la base de datos, los patrones aprendidos por el modelo podrían no reflejar la realidad del negocio.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/16.png")

    p.mt-5(data-aos="fade-right") El desafío actual en el modelamiento avanzado de datos radica en encontrar el equilibrio adecuado entre estos principios tradicionales y las necesidades emergentes de sistemas de IA, que a menudo requieren flexibilidad y velocidad en el acceso a los datos.

    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5.mt-5
      .tarjeta.bg-white.p-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Atomicidad en transacciones bancarias
              p.mt-4 La atomicidad mantiene la integridad en transacciones críticas. Por ejemplo, en una transferencia bancaria, si se debita una cuenta pero no se acredita la otra, la transacción no debe completarse. Este principio evita errores costosos en sistemas financieros y garantiza que el estado de los datos sea consistente.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/17.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Consistencia en la integridad de los datos
              p.mt-4 La consistencia asegura que las reglas de integridad de una base de datos se mantengan antes y después de una transacción. Por ejemplo, en un sistema de inventario, si una transacción de venta reduce la cantidad de productos, el sistema debe asegurar que no queden productos en stock con cantidades negativas. Esto es clave para evitar errores de facturación y asegurar que el inventario refleje la realidad del negocio.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/18.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Aislamiento de transacciones concurrentes
              p.mt-4 El aislamiento previene que las transacciones concurrentes interfieran entre sí. En una empresa de comercio electrónico, si múltiples usuarios realizan compras simultáneamente, el sistema debe garantizar que cada compra se procese como si fuera única, lo cual evita conflictos de datos (como la sobreventa de un producto).
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/19.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Durabilidad de las transacciones
              p.mt-4 La durabilidad garantiza que una vez que una transacción se complete, sus efectos sean permanentes, incluso ante fallos del sistema. Por ejemplo, si un sistema de pago en línea procesa un pago, la información de la transacción debe quedar registrada y disponible, incluso si el sistema se cae inmediatamente después del procesamiento.
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/20.png')



      
</template>

<script>
import SlyderA from '../bootstrap/SlyderA.vue'
import AcordionA from '../bootstrap/AcordionA.vue'
export default {
  name: 'Tema1',
  components: {
    SlyderA,
    AcordionA,
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
