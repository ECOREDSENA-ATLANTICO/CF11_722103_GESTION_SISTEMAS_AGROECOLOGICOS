<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Técnicas de conservación de suelos 

    p.mb-5 Las conservaciones de los suelos son fundamentales para la implementación de la agricultura sostenible, por tal razón, a continuación, se referencian algunos tipos de técnicas de conservación de suelos: 

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Labranza de conservación y siembra directa
            p En la labranza de conservación se busca minimizar el número de labranzas en la finca, de esta manera se evita la erosión de los suelos.
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img24.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Rotación de cultivos
            p  La rotación consiste en el cambio periódico de los cultivos por especies diferentes con el objeto de que un mismo cultivo no perdure por muchas temporadas, esto mitiga la aparición de plagas y aporta a la mejora de la estructura de la tierra. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img25.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 No uso de agroquímicos
            p  Los productos químicos son perjudiciales para el medio ambiente debido a que sus componentes no solo afectan la razón por la que se usó, sino también contamina los suelos y las aguas. Es necesario trascender a los abonos orgánicos.
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img26.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Conservación de organismos del suelo
            p  Los organismos que viven en el suelo son un elemento clave en su conservación y el uso de pesticidas y fertilizantes químicos puede tener consecuencias negativas para ellos, especialmente si se usan de forma habitual y/o excesiva, debido a la toxicidad que pueden alcanzar.
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img27.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Agricultura de contorno
            p  Realizar las siembras en hileras a lo largo del contorno en terrenos con topografía accidentada, de esta manera se controlan las corrientes de agua. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img28.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Cultivo de franjas
            p  Esta técnica combina cultivos de gran tamaño con unos de bajo tamaño lo cual ayuda a la protección de los vientos, acción de las aves, entre otros.
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img31.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Cortavientos
            p  Los cortavientos o barreras vivas conocidas comúnmente realizan protección de los vientos, sirven como cerramiento perimetral, sombra, entre otros. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img29.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Cultivo de cobertura
            p  Con la implementación de esta técnica se puede lograr la producción de forraje para el pastoreo de especies pecuarias, mantener la humedad de los suelos, biodiversidad, proporcionar materia prima para la producción de abono, entre otras. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img30.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Franjas de protección
            p  Esta técnica consiste en instalar árboles y arbustos en las orillas de las masas de agua para evitar sedimentos y el arrastre de agua.
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img34.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Vías navegables con cesped
            p  Se trata de un surco para las corrientes de agua cubierto de hierba. Está conectado a una zanja, fosa o corriente para recoger el agua, y las raíces de la hierba mantienen la tierra en su sitio, protegiendo de la erosión del agua, y contribuyendo así a la conservación del suelo.
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img32.png')})`}")

      .tarjeta.tarjeta-slide.arriba.clr--lightgreen.d-flex.align-items-center(@mouseover="indicadorTarjetaSlide = false")
        .indicador--hover(v-if="indicadorTarjetaSlide")
        .tarjeta-slide__contenedor
          .tarjeta-slide__contenido.p-4.p-xl-5
            h4 Manejo integrado de plagas
            p  El uso de los herbicidas sintéticos afectan de manera considerable los  suelos, es por ello que se hace pertinente sustituirlos por otros de origen orgánico. 
          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img33.png')})`}")
      
    figure.d-flex.align-items-center.mb-4#t_3_1
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='Imagen Decorativa')
      h2.mb-0 Manejo ecológico del suelo
    p.mb-0 El manejo ecológico del suelo hace referencia a los cuidados que se deben tener en cuenta para el uso adecuado de los recursos naturales con el fin de preservarlos y minimizar los impactos negativos que las actividades agrícolas y pecuarias tienen en ellos.
    p.mb-3 Es por ello que el manejo ecológico busca que los suelos estén en óptimas condiciones mediante la conservación efectiva y el mantenimiento de la fertilidad de los mismos, mediante el fortalecimiento de las condiciones para propender que la presencia de los microorganismos.
    p.mb-5 El éxito en la conservación de los suelos radica en la utilización de las materias orgánicas presentes en los mismos para garantizar la humedad que se necesita para que los microorganismos actúen, aportando los nutrientes necesarios a los suelos a través del proceso de descomposición:


    .row
      .col-md-6.d-flex.flex-column
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.w90.img-t.m-auto(src='@/assets/curso/temas/tema3/img113.svg', alt='Imagen Decorativa')
          .tarjeta.clr--lightgray.shadow-sm.align-items-center.d-flex
            .p-4
              h4.mb-0 
                b Materia Orgánica
              p.mb-0 Residuos orgánicos.

      .col-md-6.d-flex.flex-column
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.w90.img-t.m-auto(src='@/assets/curso/temas/tema3/img115.svg', alt='Imagen Decorativa')
          .tarjeta.clr--lightgray.shadow-sm.align-items-center.d-flex
            .p-4
              h4.mb-0 
                b NO3 + H2PO4
              p.mb-0 Elementos en forma soluble.
      
    .row.justify-content-center
      .col-md-6.d-flex.flex-column
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.w90.img-t.m-auto(src='@/assets/curso/temas/tema3/img114.svg', alt='Imagen Decorativa')
          .tarjeta.clr--lightgray.shadow-sm.align-items-center.d-flex
            .p-4
              h4.mb-0 
                b Humificación
              p.mb-0 Conjunto de procesos físicos, químicos y biológicos que transforman la materia orgánica en humus.
      .col-md-6.d-flex.flex-column
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.w90.img-t.m-auto(src='@/assets/curso/temas/tema3/img116.svg', alt='Imagen Decorativa')
          .tarjeta.clr--lightgray.shadow-sm.align-items-center.d-flex
            .p-4
              h4.mb-0 
                b Proceso de Mineralización
              p.mb-0 Consiste en la transformación del humus en compuestos solubles asimilables por las plantas. Es un proceso lento (1 año) y solo se realiza en condiciones altamente especializadas.


    figure.d-flex.align-items-center.mb-4#t_3_2
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='Imagen Decorativa')
      h2.mb-0 Prácticas de conservación

    p.mb-5 La conservación de suelo es muy importante en la agricultura debido a que un suelo en óptimas condiciones garantizará un rendimiento ideal de los cultivos instalados en él. El efecto de la conservación de los suelos a menudo no genera resultados en corto tiempo debido a que la acción de los microorganismos con la materia orgánica requiere de tiempos largos, sin embargo a largo plazo se reflejan los resultados como mantenimiento de la fertilidad, minimización de la contaminación y la erosión, entre otras que se relacionan a continuación: 
    p.mb-3.text-center Haz clic sobre cada uno de los elementos y recuerda los beneficios de la conservación del suelo: 

    .row.mb-5
      .col-lg-10.mx-auto
        figure.d-block.d-lg-none
          img.img-t.mx-auto(src='@/assets/curso/temas/tema3/img110.svg', alt='Imagen Decorativa')
        ImagenInfografica.color-acento-botones.mb-5.d-none.d-lg-block
          template(v-slot:imagen)
            figure
              img.img-t.mx-auto(src='@/assets/curso/temas/tema3/img31.svg', alt='Imagen Decorativa')

          .tarjeta.p-3.px-4.shadow(x="67.4%" y="66.2%" numero="")
            p.m-0 Reducción en la erosión: la intervención continua de los suelos provocan desprendimiento de los mismos generando erosión.
          
          .tarjeta.p-3.px-4.shadow(x="59.2%" y="59.3%" numero="")
            p.m-0 Promueve la infiltración de agua: la siembra directa reduce la evapotranspiración y la compactación de los suelos, aportando a la circulación de agua. 

          .tarjeta.p-3.px-4.shadow(x="32.5%" y="54.7%" numero="")
            p.m-0 Aumento de la calidad y la productividad del suelo: mantener los microorganismos presentes en la tierra en su entorno natural reduce la necesidad de aplicar agroquímicos a los suelos.

          .tarjeta.p-3.px-4.shadow(x="38.7%" y="40.7%" numero="")
            p.m-0 Da alimento y refugio a la fauna: el crecimiento natural de la vegetación conlleva a la presencia de fauna. 

          .tarjeta.p-3.px-4.shadow(x="66.1%" y="22.5%" numero="")
            p.m-0 Aporte a la purificación de agua y aire: los suelos son filtros naturales y a la circulación de agua por estos minimiza la carga orgánica que es transformada por los microorganismos del suelo en nutrientes.

    .row.col-lg-10.mx-auto.mb-5
      .p-5.clr--lightgreen.mb-2(data-aos="fade-left")
          p.mb-0 El concepto de conservación del suelo hace referencia a un conjunto de técnicas y prácticas agrícolas que evitan la degradación, la erosión y el agotamiento de éste. Las técnicas de conservación del suelo están orientadas a un uso a largo plazo, pensando en el futuro. Tomando medidas adecuadas y oportunas, los agricultores aumentan el rendimiento de sus campos para los años venideros.

    figure.d-flex.align-items-center.mb-4#t_3_3
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
      h2.mb-0 Zanjas, trinchos y barreras vivas

    p.mb-5 Las zanjas, trinchos y las barreras vivas son mecanismos utilizados para diferentes fines, pero todos relacionados con la agricultura y producción pecuaria, los cuales son instalados de acuerdo con la necesidad y un fin particular, a continuación, se realiza una breve descripción de cada uno: 
       
    .row
      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta").mb-5
          .row(titulo="Zanjas")    
            .row.col-lg-11.mx-auto.p-3
              p.mb-4 Las zanjas de drenaje se proyectan en áreas donde existe alta precipitación y se necesita evacuar las aguas o también son usadas para el drenaje de taludes donde el nivel freático es muy alto, todo esto se realiza para evitar que la infiltración de aguas sea mayor a la capacidad de absorción de los suelos ya que si se sobrepasa existe el riesgo de la pérdida de la cosecha.

          div(titulo="Trinchos")
            .row.col-lg-11.mx-auto.p-3
              p.mb-0 Los trinchos son estructuras que se construyen para dar estabilidad a los taludes o para canalizar corrientes de agua en pro de los cultivos. Generalmente se construyen en guadua soportados por pilotes verticales, también son conocidos como presas de control de sedimentos. 

          div(titulo="Barreras vivas")
            .row.col-lg-11.mx-auto.p-3
              p.mb-0 La barrera viva tiene varios usos entre los que se destacan el cerramiento perimetral de la finca, control de olores de los puntos de beneficio, control de la velocidad del viento, sombra de especies pecuarias, residencia de aves entre otros. 
      .col-md-4
         figure
          img.mb-3.img-t.m-auto.mb-5(src='@/assets/curso/temas/tema3/img32.png', alt='Imagen Decorativa')
       

    figure.d-flex.align-items-center.mb-4#t_3_4
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='Imagen Decorativa')
      h2.mb-0 Abonos verdes, materia orgánica y terrazas

    p.mb-5 Otras formas de protección de los suelos es la implantación de abonos verdes, el uso de la materia orgánica para producción de abonos y la implementación de terrazas en terrenos topográficamente accidentados. A continuación, se detallan las formas de proteger sus suelos:

    .row.justify-content-center.mb-5.mx-auto
      .col-12
        .row
          .col-12.col-md-4.col-lg-4.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img.img-t(src='@/assets/curso/temas/tema3/img35.png' alt='AvatarTop')
              .tarjeta.clr--lightgreen
                .p-3.pt-4
                  p.text-center.mb-0 
                    b Abonos verdes 
                  p.mb-3.text-center Son plantas con capacidad de adaptarse a diversos suelos y climas, de rápido crecimiento y alto poder de producción de material vegetativo. Se cultivan con el fin de proteger y recuperar el suelo. Se encuentran en forma Natural como malezas en áreas no cultivadas.
          
          .col-12.col-md-4.col-lg-4.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img.img-t(src='@/assets/curso/temas/tema3/img36.png' alt='AvatarTop')
              .tarjeta.clr--lightgreen
                .p-3.pt-4
                  p.text-center.mb-0 
                    b Materia orgánica
                  p.mb-3.text-center La materia orgánica y el humus almacenan muchos nutrientes del suelo. También mejoran su estructura, sueltan suelos de arcilla, ayudan a prevenir la erosión y mejoran la capacidad de retención de nutrientes y agua de suelos arenosos o toscos.

          .col-12.col-md-4.col-lg-4.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img.img-t(src='@/assets/curso/temas/tema3/img37.png' alt='AvatarTop')
              .tarjeta.clr--lightgreen
                .p-3.pt-4
                  p.text-center.mb-0 
                    b Terrazas
                  p.mb-3.text-center Las terrazas son un método de cultivo que propone la reordenación de las tierras de cultivo o la conversión de las colinas en tierras de cultivo mediante la construcción de plataformas en distintos niveles. A cada plataforma se la denomina terraza.


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
