<template lang="pug">
.container.hero-cnt(class="" style="background-color:rgb(219, 212, 191) !important")#acercade
  .grid.border-number.acerca(class="md:pl-14 mb-72 mt-20 justify-center md:justify-start md:py-8")
    h2.text-left.mb-30.text-title-medium.acerca(class="text-6xl") Acerca de esta publicación      
.bg.bg-grey.first.start
  .intro-stripe-bottom
  .container-in.intro(class="")
    div(class="sm:intro-cnt md:intro-cnt lg:intro-cnt -mt-32 md:mx-auto lg:mx-auto ")
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") Esta publicación fue elaborada por la División de Acceso y Desarrollo Social del Ministerio de Energía. En ella se presenta información relevante sobre la situación actual del acceso equitativo a energía sostenible en Chile y las principales políticas públicas y desafíos que conlleva reducir la pobreza energética en el país.
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg my-5 md:text-5xl") #[strong Acceso Equitativo a la Energía Sostenible.] Políticas públicas para combatir la pobreza energética en Chile. 
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") © Ministerio de Energía 
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg mt-5 md:text-5xl") Diseño y diagramación: Romina Ramírez Jorquera
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg mt-5 md:text-5xl") Textos: Javiera Inostroza Codoceo y Valentina Gómez Duque
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") Edición: Julio Cuadra Stipetich y Valentina Gómez Duque 
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") Fotografías: Ministerio de Energía
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg my-5 md:text-5xl") Distribución gratuita. Se autoriza la reproducción total o parcial del contenido de la presente publicación, la distribución, la comunicación pública y la creación de documentos derivados, siempre y cuando se reconozca la autoría original. 
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg mt-5 md:text-5xl") 1ª Edición, diciembre 2021 
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") Ministerio de Energía 
      p.right.text-normal(class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:text-5xl") Alameda 1449, Piso 14, Santiago, Chile         
      a.right.text-normal(style="cursor:pointer" class="md:text-normal-down-capitules sm:text-normal-down-capitules lg:text-normal-down-capitules text-lg md:mb-44 md:text-5xl" @click="goEnergia()") www.energia.gob.cl                
      a(@click="openExternalPdf()" alt="Descargar la publicación" style="text-align:initial;font-family: 'Alegreya Sans Extra Bold';" class="block md:hidden mb-44 text-lg mt-10 md:text-5xl") ↓ Descargar la publicación
        
Footer
</template>
<script>
import Footer from '@/components/Footer.vue'

export default {
  name:'AcercaDe',
  components: {
    Footer
  },
  methods: {
    goEnergia(){
      window.open('https://www.energia.gob.cl','_blank')
    },
    openExternalPdf(){    
      window.open('https://energia.gob.cl/sites/default/files/accesoequitativoenergiasostenible.pdf','_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
  @media (min-width: 1280px) {
  .md\:block {
    display: block;
  }
  .md\:hidden {
    display: none;
  }
}
</style>