(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{2034:function(a,e,t){a.exports=t.p+"img/5.4c5d6825.png"},"20a4":function(a,e,t){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const a=this.elements.map(a=>a.id),e=a.indexOf(this.selected);if(e<0)return{};const t={};return 0===e?t.next=a[e+1]:(e+1===a.length||(t.next=a[e+1]),t.back=a[e-1]),t}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((a,e)=>{const t=a.data&&a.data.attrs?a.data.attrs:[];return{id:this.mainId+e+1,elm:a.elm,...t}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(a){return this.$refs[a][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(a=>a.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},"51e8":function(a,e,t){a.exports=t.p+"img/4.2cc81d4f.png"},"5ab9":function(a,e,t){a.exports=t.p+"img/1.8abff1fe.png"},"7abe":function(a,e,t){a.exports=t.p+"img/2.151cc732.png"},ad89:function(a,e,t){a.exports=t.p+"img/6.004c9381.svg"},b800:function(a,e,t){a.exports=t.p+"img/3.e3e62c32.svg"},eb46:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a._self._c;return e("div",{staticClass:"curso-main-container pb-3"},[e("BannerInterno"),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a._m(0),e("div",{staticClass:"bloque-texto-g color-secundario p-3 p-sm-4 p-md-5",attrs:{"data-aos":"flip-up","data-aos-duration":"1000"}},[e("div",{staticClass:"bloque-texto-g__img",style:{"background-image":`url(${t("5ab9")})`}}),a._m(1)]),e("Separador"),a._m(2),e("p",{attrs:{"data-aos":"fade-up"}},[a._v("La estadística descriptiva proporciona el conjunto de herramientas fundamental para comenzar cualquier análisis exploratorio. A través de medidas de tendencia central, dispersión y forma, los analistas pueden obtener una primera aproximación a la naturaleza de sus datos. Sin embargo, el verdadero poder de la estadística descriptiva radica en su capacidad para revelar aspectos sutiles de los datos que podrían pasar desapercibidos en un examen superficial.")]),a._m(3),e("Separador"),a._m(4),e("p",{attrs:{"data-aos":"fade-up"}},[a._v("La estadística descriptiva proporciona el conjunto de herramientas fundamental para comenzar cualquier análisis exploratorio. A través de medidas de tendencia central, dispersión y forma, los analistas pueden obtener una primera aproximación a la naturaleza de sus datos. Sin embargo, el verdadero poder de la estadística descriptiva radica en su capacidad para revelar aspectos sutiles de los datos que podrían pasar desapercibidos en un examen superficial.")]),a._m(5),a._m(6),a._m(7),e("Separador"),a._m(8),e("p",{attrs:{"data-aos":"fade-up"}},[a._v("La visualización de datos representa una herramienta indispensable en el análisis exploratorio, transformando números abstractos en representaciones visuales intuitivas que facilitan la identificación de patrones, tendencias y anomalías. Las técnicas de visualización modernas van más allá de los gráficos básicos, incorporando elementos interactivos y múltiples dimensiones de información en una sola representación.")]),a._m(9),a._m(10)],1)],1)},i=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-principal color-acento-contenido",attrs:{"data-aos":"flip-up"}},[e("div",{staticClass:"titulo-principal__numero"},[e("span",[a._v("3")])]),e("h1",[a._v("Análisis exploratorio de datos")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"bloque-texto-g__texto p-4"},[e("p",{staticClass:"mb-0"},[a._v("El análisis exploratorio de datos (EDA, por sus siglas en inglés) constituye una etapa fundamental en el proceso de comprensión y preparación de datos para modelos de inteligencia artificial. Esta fase inicial de investigación ayuda a los analistas a comprender las características fundamentales de los conjuntos de datos, identificar patrones significativos y detectar anomalías que podrían afectar análisis posteriores. A diferencia de los métodos estadísticos confirmatorios, el EDA adopta un enfoque más flexible y orientado al descubrimiento, permitiendo que los datos revelen sus secretos de manera orgánica.")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo",attrs:{"data-aos":"flip-up"}},[e("h2",{attrs:{id:"t_3_1"}},[a._v("3.1 Estadística descriptiva e inferencial")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-lg-auto d-none d-lg-block",attrs:{"data-aos":"fade-right"}},[e("figure",[e("img",{attrs:{src:t("7abe")}})])]),e("div",{staticClass:"col-lg",attrs:{"data-aos":"fade-left"}},[e("div",{staticClass:"p-4",staticStyle:{"background-color":"#ECF2FF"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-auto d-none d-md-block"},[e("figure",[e("img",{attrs:{src:t("b800")}})])]),e("div",{staticClass:"col-md"},[e("p",{staticClass:"mb-0"},[a._v("Las medidas de tendencia central, como la media, mediana y moda, ofrecen diferentes perspectivas sobre el centro de los datos. Por ejemplo, en distribuciones altamente sesgadas, la diferencia significativa entre la media y la mediana puede revelar la presencia de valores extremos que requieren atención especial. La dispersión de los datos, medida a través de la varianza, desviación estándar y rango intercuartílico, proporciona información clave sobre la variabilidad y la confiabilidad de las mediciones.")])])])]),e("p",{staticClass:"mt-4 mb-0"},[a._v("Por su parte, la estadística inferencial permite extender las conclusiones obtenidas de una muestra a la población general. Este proceso requiere una comprensión profunda de conceptos como intervalos de confianza, pruebas de hipótesis y significancia estadística. En el contexto del análisis exploratorio, las técnicas inferenciales ayudan a validar patrones observados y a determinar si las relaciones descubiertas son estadísticamente significativas.")])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo",attrs:{"data-aos":"flip-up"}},[e("h2",{attrs:{id:"t_3_2"}},[a._v("3.2 Métodos de análisis univariable y multivariable")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-lg",attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"p-4 mt-4",staticStyle:{"background-color":"#ECF2FF"}},[e("ol",{staticClass:"lista-ol--cuadro mb-0"},[e("li",{staticClass:"d-flex"},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",{staticClass:"fw-bold"},[a._v("1")])]),e("span",[a._v("Distribución de frecuencias y visualizaciones básicas")])]),e("li",{staticClass:"d-flex"},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",{staticClass:"fw-bold"},[a._v("2")])]),e("span",[a._v("Detección de valores atípicos y anomalías")])]),e("li",{staticClass:"d-flex"},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",{staticClass:"fw-bold"},[a._v("3")])]),e("span",[a._v("Análisis de valores faltantes")])]),e("li",{staticClass:"d-flex"},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",{staticClass:"fw-bold"},[a._v("4")])]),e("span",[a._v("Evaluación de la normalidad")])]),e("li",{staticClass:"d-flex mb-0"},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",{staticClass:"fw-bold"},[a._v("5")])]),e("span",[a._v("Identificación de patrones temporales o secuenciales")])])])]),e("p",{staticClass:"mt-4 mb-0"},[a._v("El análisis multivariable, por su parte, examina las relaciones entre múltiples variables simultáneamente. Este enfoque es particularmente relevante en el contexto de la inteligencia artificial, donde los modelos frecuentemente deben procesar numerosas variables interrelacionadas. "),e("strong",[a._v("La complejidad de estas relaciones puede apreciarse mejor a través de la siguiente tabla comparativa:")])])]),e("div",{staticClass:"col-lg-auto d-none d-lg-block",attrs:{"data-aos":"fade-left"}},[e("figure",[e("img",{attrs:{src:t("51e8")}})])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-sexto color-acento-contenido mt-4",attrs:{"data-aos":"fade-down"}},[e("h5",[a._v("Tabla 2.")]),e("span",[a._v("Tipos de análisis: técnicas, aplicaciones y consideraciones clave")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"tabla-a color-acento-contenido",attrs:{"data-aos":"fade-up"}},[e("table",[e("caption",{staticClass:"fw-normal"},[e("strong",[a._v("Fuente.")]),a._v(" OIT, 2024.")]),e("thead",[e("tr",{staticClass:"text-white text-center",staticStyle:{"background-color":"#03A9F4"}},[e("th",[a._v("Tipo de Análisis")]),e("th",[a._v("Técnicas Principales")]),e("th",[a._v("Aplicaciones")]),e("th",[a._v("Consideraciones clave")])])]),e("tbody",{staticClass:"text-center"},[e("tr",{staticClass:"bg-white"},[e("td",[a._v("Bivariado")]),e("td",[a._v("Correlación de Pearson, Chi-cuadrado")]),e("td",[a._v("Relaciones entre pares de variables")]),e("td",[a._v("Asunciones de linealidad")])]),e("tr",{staticClass:"bg-white"},[e("td",[a._v("Regresión múltiple")]),e("td",[a._v("Mínimos cuadrados, Ridge, Lasso")]),e("td",[a._v("Predicción de variables continuas")]),e("td",[a._v("Multicolinealidad")])]),e("tr",{staticClass:"bg-white"},[e("td",[a._v("Análisis factorial")]),e("td",[a._v("PCA, Factor Analysis")]),e("td",[a._v("Reducción de dimensionalidad")]),e("td",[a._v("Interpretabilidad de factores")])]),e("tr",{staticClass:"bg-white"},[e("td",[a._v("Análisis de clústeres")]),e("td",[a._v("K-means, jerárquico")]),e("td",[a._v("Segmentación de datos")]),e("td",[a._v("Selección de número de grupos")])]),e("tr",{staticClass:"bg-white"},[e("td",[a._v("Análisis discriminante")]),e("td",[a._v("LDA, QDA")]),e("td",[a._v("Clasificación supervisada")]),e("td",[a._v("Separabilidad de clases")])])])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo",attrs:{"data-aos":"flip-up"}},[e("h2",{attrs:{id:"t_3_3"}},[a._v("3.3 Técnicas de visualización")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-lg-auto d-none d-lg-block",attrs:{"data-aos":"fade-right"}},[e("figure",[e("img",{attrs:{src:t("2034")}})])]),e("div",{staticClass:"col-lg",attrs:{"data-aos":"fade-left"}},[e("div",{staticClass:"p-4",staticStyle:{"background-color":"#F7EEFE"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-auto d-none d-md-block"},[e("figure",[e("img",{attrs:{src:t("ad89")}})])]),e("div",{staticClass:"col-md"},[e("p",{staticClass:"mb-0"},[a._v("La selección de la técnica de visualización adecuada depende tanto de la naturaleza de los datos como del objetivo del análisis. Por ejemplo, los diagramas de dispersión resultan invaluables para examinar relaciones entre variables continuas, mientras que los gráficos de calor pueden revelar patrones complejos en matrices de correlación. Los gráficos de caja (box plots) combinan múltiples aspectos de la distribución de datos, mostrando simultáneamente la mediana, cuartiles y valores atípicos.")])])])]),e("p",{staticClass:"mt-4 mb-0"},[a._v("En el contexto del big data y la inteligencia artificial, las técnicas de visualización han evolucionado para manejar volúmenes masivos de datos. Las visualizaciones interactivas permiten a los analistas explorar diferentes niveles de detalle, mientras que las técnicas de reducción de dimensionalidad como t-SNE y UMAP facilitan la visualización de datos altamente dimensionales en espacios bidimensionales o tridimensionales.")])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-lg",attrs:{"data-aos":"fade-right"}},[e("p",[a._v("La efectividad de una visualización no solo depende de su precisión técnica, sino también de su capacidad para comunicar información de manera clara y convincente. Los principios de diseño visual, como el uso apropiado del color, la gestión del espacio y la jerarquía visual, desempeñan un papel destacado en la creación de visualizaciones que sean tanto informativas como accesibles")]),e("p",{staticClass:"mb-0 fw-bold"},[a._v("El análisis exploratorio de datos, con sus múltiples facetas y técnicas, es una fase crítica en cualquier proyecto de análisis de datos o inteligencia artificial. La combinación de estadística rigurosa, análisis multivariable y visualización efectiva proporciona los cimientos necesarios para construcción de modelos robustos y confiables.")])]),e("div",{staticClass:"col-lg-auto d-none d-lg-block",attrs:{"data-aos":"fade-left"}},[e("figure",[e("img",{attrs:{src:t("fcc6")}})])])])}],n=function(){var a=this,e=a._self._c;return e("div",{staticClass:"linea-tiempo-d"},[a._l(a.elements,(function(t,s){return e("div",{key:"linea-tiempo-d-key-"+t.id,staticClass:"linea-tiempo-d__item row",class:{"linea-tiempo-d__item--selected":a.selected===t.id}},[e("div",{staticClass:"col-auto linea-tiempo-d__item__col-number"},[e("div",{staticClass:"linea-tiempo-d__item__number tarjeta tarjeta--gris",class:[,{"px-3":t.numero.length>1}],on:{click:function(e){a.selected=t.id},mouseover:function(e){a.mostrarIndicador=!(a.mostrarIndicador&&s>=1)&&a.mostrarIndicador}}},[a.mostrarIndicador&&1===s?e("div",{staticClass:"indicador__container"},[e("div",{staticClass:"indicador--click"})]):a._e(),e("span",{domProps:{innerHTML:a._s(t.numero)}})]),s<a.elements.length-1?e("div",{staticClass:"linea-tiempo-d__item__dots"}):a._e()]),e("div",{staticClass:"col",class:{"mb-4":s<a.elements.length-1}},[e("div",{staticClass:"linea-tiempo-d__item__content tarjeta tarjeta--gris"},[e("div",{staticClass:"linea-tiempo-d__item__content__title px-3",on:{click:function(e){a.selected=t.id},mouseover:function(e){a.mostrarIndicador=!(a.mostrarIndicador&&s>=1)&&a.mostrarIndicador}}},[e("span",{domProps:{innerHTML:a._s(t.titulo)}})]),e("div",{staticClass:"linea-tiempo-d__item__content__slot",style:{height:a.rendered&&a.selected===t.id?a.getActiveHeight(t.id):0}},[e("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],ref:t.id,refInFor:!0,staticClass:"p-3 pt-0"})])])])])})),e("div",{staticClass:"hidden-slot"},[a._t("default")],2)],2)},o=[],d=t("20a4"),r={name:"LineaTiempoD",mixins:[d["a"]],data:()=>({mostrarIndicador:!0}),computed:{},watch:{},methods:{}},l=r,c=t("2877"),u=Object(c["a"])(l,n,o,!1,null,null,null),m=u.exports,p={name:"Tema3",components:{LineaTiempoD:m},data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},v=p,f=Object(c["a"])(v,s,i,!1,null,null,null);e["default"]=f.exports},fcc6:function(a,e,t){a.exports=t.p+"img/7.779436a0.png"}}]);
//# sourceMappingURL=tema3.25c57e7a.js.map