<template lang="pug">
.sticky(style="z-index:999")
  <header class="" style="background-color: #dbd4bf !important;">
    <div class="header">
      <div class="container-in header-cnt">
        <div class="logo">
          <router-link :to="{ path: '/' }" class="flex justify-center"><img src="@/assets/img/logoMinisterio.svg" alt="logo" id="logo-header" class="show"></router-link>
          <router-link id="text-header" class="hidden" :to="{ path: '/' }"><span class="menu-item logoText" id="span-logo">Ministerio de Energía</span></router-link>
        </div>

        <div class="milestones-desk">
          <ul>
            <li @mouseover="openMenu('cap1')">
              <router-link :to="{ path: '/capitulo1', hash: '#principal-cap1' }">
                <span class="menu-item cap1">Capítulo 1</span>
              </router-link>
              <div v-if="isOpenCap1 && !validSectionOver" style="background-color: rgb(156, 177, 166);" class="absolute right-0 mt-2 py-2 w-48 rounded-lg shadow-xl">
                <router-link @click="isOpenCap1 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo1', hash: '#orienta' }">Introducción</router-link>
                <router-link @click="isOpenCap1 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo1', hash: '#sostenible-1' }">SE4All: Energía sostenible para todos</router-link>
                <router-link @click="isOpenCap1 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo1', hash: '#sostenible-2' }">ODS 7: Energía asequible y no contaminante</router-link>
                <router-link @click="isOpenCap1 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo1', hash: '#pobreza' }">Pobreza Energética, una nueva mirada</router-link>
              </div>
            </li>           
            <li @mouseover="openMenu('cap2')">
              <router-link :to="{ path: '/capitulo2', hash: '#principal-cap2' }">
                <span class="menu-item cap2">Capítulo 2</span>
                <div v-if="isOpenCap2 && !validSectionOver" style="background-color: rgb(156, 177, 166);" class="absolute right-0 mt-2 py-2 w-48 rounded-lg shadow-xl">
                  <router-link @click="isOpenCap2 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo2', hash: '#hogares' }">¿Cuáles son las necesidades energéticas de los hogares?</router-link>
                  <router-link @click="isOpenCap2 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo2', hash: '#dimensiones' }">Dimensiones de la pobreza energética del hogar</router-link>
                  <router-link @click="isOpenCap2 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo2', hash: '#acceso' }">Acceso Físico</router-link>
                  <router-link @click="isOpenCap2 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo2', hash: '#calidad' }">Calidad</router-link>
                  <router-link @click="isOpenCap2 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo2', hash: '#habitabilidad' }">Habitabilidad</router-link>
                  <router-link @click="isOpenCap2 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo2', hash: '#asequibilidad' }">Asequibilidad</router-link>
                  <router-link @click="isOpenCap2 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo2', hash: '#brechas' }">Brechas en el acceso a servicios energéticos en los hogares</router-link>
                </div>
              </router-link>
            </li>           
            <li @mouseover="openMenu('cap3')">
              <router-link :to="{ path: '/capitulo3', hash: '#principal-cap3' }">
                <span class="menu-item cap3">Capítulo 3</span>
                <div v-if="isOpenCap3 && !validSectionOver" style="background-color: rgb(156, 177, 166);" class="absolute right-0 mt-2 py-2 w-48 rounded-lg shadow-xl">
                  <router-link @click="isOpenCap3 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo3', hash: '#genero' }">Acceso equitativo a la energía y género</router-link>
                  <router-link @click="isOpenCap3 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo3', hash: '#indigena' }">Energía sostenible y pueblos indígenas</router-link>
                  <router-link @click="isOpenCap3 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo3', hash: '#infancia' }">Acceso a la energía para una infancia plena</router-link>
                  <router-link @click="isOpenCap3 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo3', hash: '#vejez' }">Acceso a la energía para la vejez</router-link>          
                  <router-link @click="isOpenCap3 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo3', hash: '#desarrollo' }">Energía para el desarrollo local</router-link>
                </div>
              </router-link>
            </li>           
            <li @mouseover="openMenu('cap4')">
              <router-link :to="{ path: '/capitulo4', hash: '#principal-cap4' }">
                <span class="menu-item cap4">Capítulo 4</span>
                <div v-if="isOpenCap4 && !validSectionOver" style="background-color: rgb(156, 177, 166);" class="absolute right-0 mt-2 py-2 w-48 rounded-lg shadow-xl">
                  <router-link @click="isOpenCap4 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo4', hash: '#avances' }"> Avances en el acceso equitativo a energía sostenible </router-link>
                  <router-link @click="isOpenCap4 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo4', hash: '#politicas' }"> Políticas para el acceso equitativo a la energía sostenible </router-link>
                  <router-link @click="isOpenCap4 = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/capitulo4', hash: '#desafio' }"> Pobreza energética, un desafío de integración </router-link>
                </div>
              </router-link>
            </li>                                   
            <li @mouseover="openMenu('acerca')">  
              <router-link :to="{ path: '/acerca-de', hash: '#acercade' }">            
                <span class="menu-item acerca">Acerca de</span>
                <div v-if="isOpenAcerca && !validSectionOver" style="background-color: rgb(156, 177, 166);" class="absolute right-0 mt-2 py-2 w-48 rounded-lg shadow-xl">
                  <router-link @click="isOpenAcerca = false" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300" :to="{ path: '/acerca-de' }"> Acerca de esta publicación </router-link>
                  <a @click="openExternalPdf()" style="cursor:pointer;" class="menu-item-subs block px-4 py-2 text-gray-800 hover:text-white hover:bg-indigo-300"> Descargar la publicación </a>
                </div>    
              </router-link>          
            </li>                                   
          </ul>
        </div>      
      </div>    
    </div>
  </header>
  <div class="milestones show">
    <ul style="box-shadow: 0px -5px 4px 0px rgb(50 50 50 / 23%);">
      <li>
        <router-link :to="{ path: '/capitulo1', hash: '#principal-cap1' }"><span class="cap1">Capitulo</span> <span class="menu-item cap1">1</span></router-link>
      </li>
      <li>
        <router-link :to="{ path: '/capitulo2', hash: '#principal-cap2' }"><span class="cap2">Capitulo</span> <span class="menu-item cap2">2</span></router-link>
      </li>
      <li>
        <router-link :to="{ path: '/capitulo3', hash: '#principal-cap3' }"><span class="cap3">Capitulo</span> <span class="menu-item cap3">3</span></router-link>
      </li>
      <li>
        <router-link :to="{ path: '/capitulo4', hash: '#principal-cap4' }"><span class="cap4">Capitulo</span> <span class="menu-item cap4">4</span></router-link>
      </li>
      <li>
        <router-link :to="{ path: '/acerca-de', hash: '#acercade' }"><span class="acerca">Acerca de</span> <br></router-link>
      </li>
    </ul>
  </div>
  <div id="overlay" style="display: none;"></div>
  <div id="header-placeholder" style="display: none;"></div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    validSectionOver: Boolean
  },
  data() {
    return {
      isOpenCap1: false,
      isOpenCap2: false,
      isOpenCap3: false,
      isOpenCap4: false,
      isOpenAcerca: false
    }
  },
  beforeMount(){
    // if(this.$router.currentRoute.value.name == 'C'){

    // }
    

  }, 
  computed:{
    
  }, 
  methods : {
    openMenu(category){
      this.$emit('open', false) 
      switch (category) {
        case 'cap4':
          this.isOpenCap4 = true
          this.isOpenCap3 = false
          this.isOpenCap2 = false
          this.isOpenCap1 = false
          this.isOpenAcerca = false
          break;
        case 'cap3':
            this.isOpenCap3 = true
            this.isOpenCap4 = false
            this.isOpenCap2 = false
            this.isOpenCap1 = false
            this.isOpenAcerca = false
            break;
        case 'cap2':
            this.isOpenCap2 = true
            this.isOpenCap4 = false
            this.isOpenCap3 = false 
            this.isOpenCap1 = false
            this.isOpenAcerca = false
            break;
        case 'cap1':
            this.isOpenCap1 = true
            this.isOpenCap2 = false
            this.isOpenCap3 = false 
            this.isOpenCap4 = false
            this.isOpenAcerca = false
            break;       
        case 'acerca':
            this.isOpenAcerca = true
            this.isOpenCap1 = false
            this.isOpenCap2 = false
            this.isOpenCap3 = false 
            this.isOpenCap4 = false
            break;        
      }
    },
    openExternalPdf(){
      this.isOpenAcerca = false
      window.open('https://energia.gob.cl/sites/default/files/accesoequitativoenergiasostenible.pdf','_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
