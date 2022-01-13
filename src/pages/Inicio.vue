<template lang="pug">
.container.start( style="background-color:#dbd4bf;" )
  .main-title
    div(class="flex flex-col md:mx-32 md:mt-8 mt-24 mx-0 justify-center")
      div(class="md:w-full mx-5")
        p(style="font-family: 'Alegreya Sans Black';color:#407d80;" class="text-4xl md:text-5xl text-center") Acceso Equitativo a la Energía Sostenible
      div(class="md:w-full md:-mt-2 ")
        .relative        
          img(class="fao-img md:w-8/12 w-11/12 m-auto mb-3 md:my-5" src="@/assets/img/portada.svg")
    div(class="text-center md:mb-0 mb-72 md:pb-0 -mt-2 md:-mt-6").end
      p(class="text-center text-xl md:text-4xl " style="font-family: 'Alegreya Sans Regular';color:#407d80;") Políticas públicas para combatir la pobreza energética en Chile
</template>
<script>
import $ from 'jquery';

export default {
  name: 'Inicio',
 
  methods: {

  },
  mounted() {
    $(window).on("load", function () {        
      
    })
  }
}
</script>
<style lang="scss" scoped>

</style>