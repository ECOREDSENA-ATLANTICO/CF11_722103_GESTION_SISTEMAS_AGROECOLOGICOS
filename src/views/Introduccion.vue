<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5(data-aos="fade-right") Anualmente, se produce una cantidad considerable de residuos agrícolas, pero solo una cierta parte de estos es aprovechada directamente para la alimentación, dejando una gran cantidad de desechos, los cuales se convierten en un potencial de contaminación ambiental. El siguiente video invita a reconocer el concepto de la fertilidad del suelo, como la capacidad que tiene el terreno para sustentar el crecimiento de las plantas y optimizar el rendimiento de los cultivos: 
      figure(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/bHPppQpEOS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

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
