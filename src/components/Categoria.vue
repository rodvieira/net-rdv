<template>
    <div class="slider">
      <h3>{{ titulo }}</h3>

      <span @mouseover="scrollEsquerda()" @mouseout="clearScroll()" class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>

      <div ref="scroller" class="row">
        <div class="row__inner">
            <filme v-for="filme in filmes" :key="filme.id" :titulo="filme.titulo" :imagem="filme.imagem"></filme>
        </div>
      </div>
        
      <span @mouseover="scrollDireita()" @mouseout="clearScroll()" class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </span>

    </div>
</template>

<script>
import Filme from './Filme'
export default {
    props:['titulo', 'filmes'],
    components: {
        Filme
    },
    data() {
        return {

        }
    },

    methods: {
        scrollDireita() {
            this.intervalo = setInterval(() => {
                this.$refs.scroller.scrollLeft += 1; 
            }, 5);

        },
        scrollEsquerda() {
            this.intervalo = setInterval(() => {
                this.$refs.scroller.scrollLeft -= 1;
            }, 5);

        },
        clearScroll() {
            clearInterval(this.intervalo);
        }
    }
}
</script>

<style>
   
</style>
