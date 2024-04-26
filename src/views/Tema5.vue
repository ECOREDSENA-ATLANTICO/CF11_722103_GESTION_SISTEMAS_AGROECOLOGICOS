<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fertilización del suelo  

    p.mb-4 La fertilidad del suelo es la capacidad que tiene el terreno para sustentar el crecimiento de las plantas y optimizar el rendimiento de los cultivos. Ello puede potenciarse por medio de fertilizantes orgánicos e inorgánicos que nutran el suelo. Las técnicas nucleares proporcionan datos útiles que mejoran la fertilidad del suelo y la producción de cultivos, al tiempo que reducen al mínimo el impacto medioambiental.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img60.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-2 Los fertilizantes que están en el mercado son de dos tipos, de origen orgánico e inorgánico y contienen nutrientes para la adición directa a los suelos para mejorar su calidad y de esta manera aportar en el desarrollo del cultivo implantado. Los nutrientes más demandados en los procesos agrícolas son el Nitrógeno (N), Fósforo (P), Potasio (K), los cuales son llamados primeros, los secundarios son el Calcio (Ca), Azufre (S) y Magnesio (Mg). 

  
    figure.mb-4
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
      h2.d-inline-block.mb-0.align-middle Concepto y proceso de lombricompuesto
    
    p.mb-5 El lombricompuesto en un abono natural muy rico en nutrientes y es obtenido bajo la acción de la lombriz roja californiana que a partir de los restos húmedos y en descomposición de materia orgánica, realiza un proceso de digestión que tiene como resultado el lombricompuesto.

    .titulo-sexto.color-acento-contenido.col-md-5.mx-auto(data-aos="fade-right")
      h5 Figura 5.
      span Beneficios de lombricompuesto

    .row.mb-4
      .col-lg-10.mx-auto.text-center
        figure.mb-4
          img.img-t.d-inline-block(src='@/assets/curso/temas/tema5/img61.png', alt='')

    figure.mb-4
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
      h2.d-inline-block.mb-0.align-middle.align-middle Condiciones ambientales para el desarrollo
    
    p.mb-5 Es importante mantener la humedad adecuada del sustrato donde se colocan las lombrices. Una forma práctica para determinar la humedad es la prueba del puño, que consiste en comprimir un puñado del sustrato y comprobar que esté húmedo sin llegar a gotear agua.

    .row.col-lg-12.mx-auto.mb-5
      .p-3.clr--lightgreen.mb-2(data-aos="fade-left")
        .row.align-items-center.position-relative.box_leaves
          figure
            img.img-t.top-left(src='@/assets/curso/temas/tema2/img20.svg', alt='')  
          .col-lg-1 
          .col-lg-7.pt-4.pt-md-0
            p La falta de humedad trae problemas en la alimentación. Al no poseer dientes las lombrices chupan los alimentos, operación que no es posible con la tierra seca. Por otro lado, el exceso de humedad dificulta la respiración, que es cutánea.
            p En relación a la temperatura se debe tener cuidado del calor y del frío intenso, siendo los valores óptimos 19-20º C. Siempre es recomendable cubrir los criaderos con una capa de paja o pasto, que además de proteger de las temperaturas extremas, ayuda a conservar la humedad.
            p.mb-0 El PH expresa el grado de acidez o alcalinidad de una sustancia. Para el caso de la cría de lombriz californiana en cautiverio el valor conveniente es que esté próximo a 7.


          .col-lg-4
            img.mb-7.img-t.m-auto(src='@/assets/curso/temas/tema5/img62.png', alt='')
          
          figure
            img.img-t.bottom-right(src='@/assets/curso/temas/tema2/img21.svg', alt='')

    figure.mb-4
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
      h2.d-inline-block.mb-0.align-middle Herramientas para drenajes
    
    p.mb-5 La construcción de los drenajes es relativamente sencilla, solo se necesita el personal para la obra manual o una retroexcavadora en caso de necesitarla. 

    .row.col-lg-12.mx-auto.mb-5
      .p-3.clr--lightgreen.mb-2(data-aos="fade-left")
        .row.align-items-center.position-relative.box_leaves
          figure
            img.img-t.top-left(src='@/assets/curso/temas/tema2/img20.svg', alt='')  
          .col-lg-1 
          .col-lg-7.pt-4.pt-md-0
            p Es importante mencionar que las cantidades de excavación, la longitud, la pendiente y otros factores deben ser establecidos con anterioridad y ser verificados en campo con topografía para que se garantice el flujo constante de agua y así, evitar estancamientos que pueden provocar la proliferación de vectores y plagas. 
            p.mb-0 Para el mantenimiento de los drenajes se hacen necesarias herramientas menores en unos y un sistema de transporte del material que es evacuado de acuerdo a su cantidad. 

          .col-lg-4
            img.mb-7.img-t.m-auto(src='@/assets/curso/temas/tema5/img63.png', alt='')
          
          figure
            img.img-t.bottom-right(src='@/assets/curso/temas/tema2/img21.svg', alt='')


    figure.mb-4
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
      h2.d-inline-block.mb-0.align-middle Concepto y tipos de biofertilizantes
    
    p.mb-5 Los biofertilizantes son insumos que no contaminan y enriquecen la capacidad productiva del suelo, además de que son muy económicos y en ningún momento van a degradar la capacidad productiva.

    .row.col-lg-12.mx-auto.mb-5
      .p-3.clr--lightgreen.mb-2(data-aos="fade-left")
        .row.align-items-center.position-relative.box_leaves
          figure
            img.img-t.top-left(src='@/assets/curso/temas/tema2/img20.svg', alt='')  
          .col-lg-1 
          .col-lg-7.pt-4.pt-md-0
            p.mb-0  La producción comercial de biofertilizantes que permitan su fácil disponibilidad en el mercado podría cambiar las condiciones de producción del sector agrícola. Estos son una gran opción como sustitutos de los fertilizantes y pesticidas químicos o industriales. Un biofertilizante es una sustancia que contiene microorganismos vivos, que cuando se aplica a semillas, plantas o suelo, promueve el crecimiento al aumentar el suministro o la disponibilidad de nutrientes primarios para la planta, es un producto de innovación en la biofábrica, ayuda a mejorar el rendimiento en la producción de cultivos a la vez que protege o mantiene y regenera las condiciones ambientales (ver figura 6).
          .col-lg-4
            img.mb-7.img-t.m-auto(src='@/assets/curso/temas/tema5/img64.png', alt='') 
          figure
            img.img-t.bottom-right(src='@/assets/curso/temas/tema2/img21.svg', alt='')
    
    .titulo-sexto.color-acento-contenido.col-md-5.mx-auto(data-aos="fade-right")
      h5 Figura 6.
      span Tipos de biofertilizantes

    .row
      .col-lg-10.mx-auto.text-center
        figure.mb-5
          img.img-t.d-inline-block(src='@/assets/curso/temas/tema5/img65.svg', alt='')
    

    figure.mb-4
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
      h2.d-inline-block.mb-0.align-middle Concepto y tipo de inoculantes biológicos y variables de control

    .cajon.p-4.mb-5.clr--lightgreen
      .row.align-items-center
        .col-lg-2
          figure
            img.mb-4.img-t.m-auto(src='@/assets/curso/temas/tema5/img66.svg', alt='')
        .col-lg-10
          p Un inoculante biológico es un producto elaborado a partir de una o más cepas de microorganismos benéficos o sus metabolitos que al aplicarse al suelo o a las semillas tienen un efecto positivo sobre la nutrición, sanidad, rendimiento y adaptación en cultivos de importancia económica. 
          p.mb-0 El Instituto Colombiano Agropecuario ICA para el 2015 tenía registrado 55 inoculantes biológicos relacionados por su actividad biológica los cuales de describen a continuación (ver figura 7):

      
    .titulo-sexto.color-acento-contenido.col-md-7.mx-auto(data-aos="fade-right")
      h5 Figura 7.
      span Relación de inoculantes biológicos de acuerdo a su actividad biológica

    .row
      .col-lg-10.mx-auto.text-center
        figure.mb-4
          img.img-t.d-inline-block(src='@/assets/curso/temas/tema5/img67.svg', alt='')

  
</template>

<script>
export default {
  name: 'Tema3',
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
