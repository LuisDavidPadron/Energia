<template lang="pug">
.container.hero-cnt.land-cap4(class="")#principal-cap4
  .grid.border-number-cap4(class="md:pl-14 mb-72 mt-20 justify-start ")
    h2.text-left.text-title-number.cap4(class="text-8xl md:text-7xl") 4 .
    h2.text-left.mb-30.text-title-medium.cap4(class="text-6xl") ¿Cómo seguimos?
    h2.text-left.text-title-last.cap4(class="text-6xl") Avances y desafíos
div
  .bg.bg-grey.first
    .intro-stripe-top
    .intro-stripe-bottom
    .container-in.intro(class="")
      div(class="sm:intro-cnt md:intro-cnt lg:intro-cnt -mt-32 md:mx-auto lg:mx-auto ")
        p.subtitle-chapter.cap4.text-left.text-5xl#avance Avances en el acceso equitativo a energía sostenible
        p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules mt-10 text-lg -mb-4 md:mb-0 md:text-5xl") Si bien las brechas son significativas, los avances en materia de acceso equitativo a energía sostenible son igualmente importantes. Uno de los más destacados es sin duda la alta cobertura eléctrica que existe en el país: hace 30 años sólo un poco más del 50% de la población rural del país tenía electricidad en sus viviendas, mientras que hoy llegamos al 96,5% y a cerca del 100% de cobertura a nivel nacional#[sup 1].
  .bg.bg-grey.start
    .container-in.intro(class="")
      div(class="sm:main-down lg:main-down md:main-down")              
        p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg mb-5 md:text-5xl mt-0") Asimismo, el acceso a soluciones de agua caliente sanitaria y el mejoramiento de la eficiencia energética de las viviendas ha tenido un fuerte impulso en la última década gracias a la estrecha colaboración entre el Ministerio de Energía y el Ministerio de Vivienda y Urbanismo. En este marco, la actualización de los estándares de construcción de las viviendas a través de la reglamentación térmica ha sido uno de los pilares principales para mejorar las condiciones de confort en que viven las familias.
        p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg mb-5 md:text-5xl") Las acciones desde el sector público para abordar el acceso equitativo a la energía han aumentado y se han diversificado a lo largo del tiempo, incluyendo programas, estrategias y políticas que permitan aumentar el acceso físico a la energía y mejorar la calidad de las fuentes de suministro, buscando especialmente reducir el uso de leña, mejorar la aislación térmica de las viviendas y otros establecimientos, reducir el consumo y gasto en energía de los hogares y promover la educación energética de forma transversal.
        div(class="flex flex-col md:flex-row mt-5 md:mt-10")
          div(class="md:w-1/2 mr-0 md:mr-10")       
            p.text-normal.right( class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl mb-5") Diversas instituciones públicas han abordado las diferentes dimensiones de la pobreza energética, aun años antes de que se comenzara a utilizar este concepto. Algunos ejemplos son los subsidios para el mejoramiento de viviendas en zonas urbanas y rurales que entrega el Ministerio de Vivienda y Urbanismo, que han permitido mejorar las condiciones de habitabilidad y reducir el consumo de energía; y el programa de recambio de equipos de calefacción del Ministerio del Medio Ambiente, que busca reducir la contaminación en las ciudades y que ha impactado positivamente en la dimensión de calidad de la pobreza energética.                
          div(class="md:w-1/2")
            img(class="fao-img mb-auto w-full" src="@/assets/img/Pag41.jpg")
            p.text-normal( class="text-center md:text-center md:text-sm text-xs mb-4 md:mb-4 mt-2 md:mt-0") Santos Sanhueza, comuna de Melipeuco, región de La Araucanía.            
        hr
        div.text-normal.text-left.text-sm.mt-5 #[sup 1] Resultados del Mapa de Vulnerabilidad Energética del Ministerio de Energía, año 2019.
  div(id="title-col" style="left: -50px;")
    div.text-center.text-3xl.cap4(style="font-family: Alegreya Bold;") ¿Cómo seguimos?

.bg.bg-grey(class="sm:bg")
  .container-in.intro(class="")
    div(class="sm:main-down lg:main-down md:main-down").start 
      p.subtitle-chapter.cap4.text-5xl.text-left(class="md:mb-10 mb-5")#politicas Políticas para el acceso equitativo a la energía sostenible

      div(class="flex flex-col md:flex-row ")
        div(class="flex justify-center md:mt-0 mt-10")
          img(class="w-full md:w-72 md:mb-auto" src="@/assets/img/RutaDeLaLuz.svg")
        .flex-1(class="md:ml-10 ml-0 md:mt-0 mt-10")
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") #[strong(style="font-family: 'Alegreya Sans Bold';color:#194a66") Ruta de la luz]: iniciativa que busca reducir las brechas de acceso a la energía eléctrica que aún persisten en zonas rurales y aisladas del país. La Ruta de la Luz reúne una serie de medidas, programas y proyectos, aplicando lógicas de focalización y eficiencia, con participación de diversos organismos públicos y del sector privado, con el objetivo de entregar suministro eléctrico continuo y seguro a todos los chilenos y chilenas.
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Institución: Ministerio de Energía 
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Más información: #[a(href="https://www.energia.gob.cl/iniciativas/ruta-de-la-luz") https://www.energia.gob.cl/iniciativas/ruta-de-la-luz]
      div(class="flex flex-col md:flex-row md:my-6")
        div(class="flex justify-center md:mt-0 mt-14")
          img(class="w-full md:w-72 md:mb-auto" src="@/assets/img/RecambioDeCalefactores.svg")
        .flex-1(class="md:ml-10 ml-0 md:mt-0 mt-10")      
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") #[strong(style="font-family: 'Alegreya Sans Bold';color:#194a66") Programa de recambio de calefactores]: tiene como objetivo reducir las emisiones de contaminantes generadas por la combustión residencial debido al uso de leña. Por medio de este programa, los beneficiarios pueden acceder a un nuevo calefactor más eficiente y menos contaminante, haciendo entrega de su antiguo calefactor y/o cocina.
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Institución: Ministerio del Medio Ambiente 
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Más información: #[a(href="https://calefactores.mma.gob.cl/") https://calefactores.mma.gob.cl/]
      div(class="flex flex-col md:flex-row")
        div(class="flex justify-center md:mt-0 mt-14")
          img(class="w-72 md:mb-auto" src="@/assets/img/Leñaseca.png")
        .flex-1(class="md:ml-10 ml-0 md:mt-0 mt-10")      
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") #[strong(style="font-family: 'Alegreya Sans Bold';color:#194a66") Programa leña más seca]: tiene como objetivo aumentar la oferta de leña seca en las regiones de O’Higgins, Maule, Ñuble, Biobío, Araucanía, Los Ríos, Los Lagos y Aysén. Está dirigido a productores y comerciantes de leña con o sin inicio de actividades en primera categoría ante el Servicio de Impuestos Internos que tengan experiencia demostrable en el rubro de la leña que quieran aumentar su volumen de leña seca o implementar procesos de secado. Este programa permite aumentar la disponibilidad de leña seca al reemplazar la leña húmeda y con ello disminuir sus impactos en la salud de la población.
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Institución: Ministerio de Energía 
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Más información: #[a(href="https://www.agenciase.org/lenamasseca/") https://www.agenciase.org/lenamasseca/]
      div(class="flex flex-col md:flex-row md:my-6")
        div(class="flex justify-center md:mt-0 mt-14")
          img(class="w-full md:w-72 md:mb-auto" src="@/assets/img/Hogarmejor.svg")
        .flex-1(class="md:ml-10 ml-0 md:mt-0 mt-10")      
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") #[strong(style="font-family: 'Alegreya Sans Bold';color:#194a66") Programa hogar mejor]: el Programa de Mejoramiento de Viviendas y Barrios busca mejorar la calidad de vida de las familias y favorecer sus condiciones de seguridad y habitabilidad. Corresponde a un subsidio enfocado en hogares de áreas o localidades urbanas de más de 5 mil habitantes y financia proyectos de reparación, mejoramiento o ampliación de viviendas, equipamiento comunitario y soluciones de eficiencia energética que incluyen el acondicionamiento térmico de las viviendas, instalación de sistemas fotovoltaicos y sistemas solares térmicos.
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Institución: Ministerio de Vivienda y Urbanismo 
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Más información: #[a(href="https://www.minvu.cl/beneficios/mejorar-vivienda-y-barrio/") https://www.minvu.cl/beneficios/mejorar-vivienda-y-barrio/]
      div(class="flex flex-col md:flex-row")
        div(class="flex justify-center md:mt-0 mt-14")
          img(class="w-full md:w-72 md:mb-auto" src="@/assets/img/ProgramaDeHabitabilidad.svg")
        .flex-1(class="md:ml-10 ml-0 md:mt-0 mt-10")      
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") #[strong(style="font-family: 'Alegreya Sans Bold';color:#194a66") Programa de habitabilidad rural]: subsidio destinado a familias que necesitan una solución habitacional y viven en zonas rurales o urbanas de hasta 5.000 habitantes. Permite mejorar, ampliar o construir una vivienda, mejorar el entorno y equipamiento comunitario y optar a subsidios complementarios destinados, entre otros elementos, al acondicionamiento térmico de las viviendas, soluciones fotovoltaicas y sistemas solares térmicos. Además, toma en consideración las condiciones geográficas de los territorios, otorgando los recursos necesarios para una solución adecuada al modo de habitar de cada una de las familias.
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Institución: Ministerio de Vivienda y Urbanismo 
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Más información: #[a(href="https://www.minvu.cl/beneficios/programa-rural/") https://www.minvu.cl/beneficios/programa-rural/]
      div(class="flex flex-col md:flex-row md:my-6")
        div(class="flex justify-center ml-0 md:mt-0 mt-14")
          img(class="w-72 md:w-72 md:mb-auto" src="@/assets/img/Recambiatucalor.png")
        .flex-1(class="md:ml-10 md:mt-0 mt-10")      
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") #[strong(style="font-family: 'Alegreya Sans Bold';color:#194a66") Descuento en la tarifa eléctrica para calefacción residencial]: es parte de la estrategia de transición energética residencial del Ministerio de Energía y busca ayudar a descontaminar las ciudades del centro-sur del país, ofreciendo un descuento en la tarifa eléctrica para calefacción al utilizar este energético e incentivando con ello su uso en reemplazo de la leña
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Institución: Ministerio de Energía 
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Más información:  #[a(href="https://www.recambiatucalor.cl/") https://www.recambiatucalor.cl/]
      div(class="flex flex-col md:flex-row")
        div(class="flex justify-center md:mt-0 mt-14")
          img(class="w-full md:w-72 md:mb-auto" src="@/assets/img/conBuenaEnergía.svg")
        .flex-1(class="md:ml-10 md:mt-0 mt-10")      
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") #[strong(style="font-family: 'Alegreya Sans Bold';color:#194a66") Programa con buena energía]: iniciativa que apunta a impulsar la eficiencia energética en el ámbito residencial, a través de capacitaciones en eficiencia energética y la entrega de un kit de soluciones para el hogar, buscando con ello traspasar a los beneficiarios, y la comunidad en general, conocimientos y experiencias en el área de la energía.
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Institución: Ministerio de Energía 
          p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl" style="font-family: 'Alegreya Light Italic' !important;") Más información: #[a(href="https://www.mienergia.cl/oportunidades-y-beneficios/programa-con-buena-energia") https://www.mienergia.cl/oportunidades-y-beneficios/programa-con-buena-energia]
div.bg.bg-grey
  .container-in.intro(class="")
    div(class="sm:main-down lg:main-down md:main-down")
      p.subtitle-chapter.cap4.text-5xl.text-left#desafio(class="md:mb-10 mb-5") Pobreza energética, un desafío de integración
      p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg mb-5 mt-5 md:mt-0 md:text-5xl") No sólo el sector público ha implementado acciones para reducir la pobreza energética, sino que el sector privado y la academia también han tenido un rol fundamental, destacándose especialmente el trabajo de investigación, desarrollo conceptual y visibilización del problema que ha desarrollado la Red de Pobreza Energética de la Universidad de Chile. Asimismo, iniciativas como el Programa de Inclusión Energética, proyectos pilotos que han implementado diversas instituciones en asociación público privada y los créditos verdes de instituciones bancarias, suman esfuerzos para la reducción de la pobreza energética.
      p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") Sin embargo, la precariedad o ausencia de suministro eléctrico en algunas zonas del país, las dificultades de las familias para pagar los energéticos que necesitan, el impacto en la salud de las personas que provoca el alto consumo de leña para calefacción y la imposibilidad de mantener una temperatura de confort al interior de buena parte de las viviendas del país, plantean un desafío mucho más difícil que hasta hace un par de décadas atrás. Y es que los problemas no son necesariamente nuevos, pero sí presentan una mayor complejidad.
      
      .relative        
        img(class="fao-img mx-auto mt-8" src="@/assets/img/cap4Img2.jpg")    
      div(class="mb-5 md:mb-10 md:mt-5")
        p.text-normal.text-center(class="-mt-4  md:text-sm text-xs") Selma Cañiuñir, comuna de Teodoro Schmidt, región de La Araucanía.
      p.text-normal.right(class="mb-5 mt-5 md:mt-0 md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") En este escenario, la pobreza energética necesariamente convoca a diversas instituciones, públicas y privadas, a la hora de afrontar los desafíos sociales que implica. Además, dada la multidimensionalidad del problema, resulta fundamental la promoción de soluciones que satisfagan las necesidades energéticas de las familias y que consideren, al mismo tiempo, condiciones de calidad adecuadas y costos asequibles.
      p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg mb-5 mt-5 md:mt-0 md:text-5xl") Incorporar esta perspectiva en las políticas públicas implica hacer los esfuerzos necesarios para integrar las políticas, estrategias y programas, actuales y futuros, de las entidades públicas de manera que no se pierdan de vista las diferentes dimensiones de la pobreza energética. Abordarlo de este modo no es solo un reto, sino también una oportunidad para los organismos de Estado para optimizar el gasto fiscal y focalizar mejor las acciones de política pública.
      p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg mb-5 mt-5 md:mt-0 md:text-5xl") Este desafío de integración implica además un abordaje colaborativo, aunando esfuerzos con el sector privado, la academia y la sociedad civil e implementando acciones conjuntas en pos de un interés común: lograr el acceso equitativo a energía sostenible para todos los habitantes de nuestro país.    
      p.text-normal.right(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") Asegurar el suministro energético en el largo plazo, de forma sostenible y en condiciones de equidad, calidad y seguridad para todas las personas, es un desafío país, no solo porque la energía es fundamental para el desarrollo, sino también y aún más importante, porque la energía mejora significativamente el bienestar de las personas y es un vector clave para su adaptación al cambio climático.
      div(class="flex flex-col md:flex-row md:mt-20 mt-10")   
        div(class="md:w-1/2 flex justify-center mr-0 md:mr-10 md:justify-end ")
          img(class="w-full" src="@/assets/img/juegoPalabras.svg")
        div(class="md:w-1/2 md:mt-0 mt-10 flex justify-center md:justify-end")
          div(class="").end
            img(class="w-full"  src="@/assets/img/cap4Img3.jpg")  
            p.text-normal.text-center(class="md:text-sm text-xs mt-2 md:mt-0") Loren San Martín, localidad de Hualpin, comuna de Toltén, región de La Araucanía.

<div>
  <div class="bg-grey same mt-2">
    <div class="main">
      <div>
        <div class="back-top" @click="backTop()">
          <div class="caret "></div><p class="text-normal text-center">volver arriba</p>
        </div>
        <div class="prev-next pr-8 pl-8 md:pr-16 md:pl-16">
        <div class="prev">
          <router-link :to="{ path: '/capitulo3', hash: '#principal-cap3' }"><span style="color:#61802b;">CAPÍTULO 3</span></router-link>         
        </div>
        <div class="next">
          <router-link :to="{ path: '/' }"><span style="color:rgb(64, 125, 128);">INICIO</span></router-link>          
        </div>
      </div>
    </div>
  </div>
</div>


</div>

Footer
</template>
<script>
import $ from 'jquery'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Capitulo3',
  components: {
    Footer
  },
  mounted: function(){
    // setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  methods: {
    backTop(){
      return $("html, .app").animate({ scrollTop: 0 }, "slow"), !1;
    }
  }
}
</script>
<style lang="scss" scoped>
  @media (max-width: 768px) {
  .sm\:bg{
    transform: skewY(-4.01deg);
    padding: 0px 0 !important;
  }
  .md:\w-19{
    width: 19rem;
  }
}
</style>