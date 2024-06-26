<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Normatividad y registros 

      .banner-tarjeta.mb-5
        figure
          img.img-t.m-auto(src='@/assets/curso/temas/tema6/img68.png', alt='Imagen Decorativa')
        .row
          .col-md-10.col-11.clr--acccent-color.p-4.mx-auto
            p.mb-0 La aplicación de la normatividad vigente al sistema productivo es una garantía para la comercialización de los productos finales, ya que algunas cadenas de comercialización exigen la presentación de los permisos para la aceptación de los productos, es por ello que la empresa debe cumplir con los estándares nacionales para la implementación del sistema de producción. En caso de que la empresa se direccione a la exportación de sus productos deberá consultar la legislación aplicable para la exportación de alimentos y tener en cuenta las exigencias del país al que se envía la producción. 
      
      figure.d-flex.align-items-center.mb-4
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
        h2.mb-0 Normatividad sanitaria y ambiental
      
      .row.mb-5.align-items-center
        .col.md-4
          p.mb-3 La normatividad ambiental en Colombia es una de las más completas del mundo, ya que el país ha desarrollado mecanismos de protección de los ecosistemas propendiendo el desarrollo industrial con la minimización de los impactos generados por las actividades antrópicas.
        .col-md-8
          .p-4.clr--lightgreen
            p.mb-2 La normatividad sanitaria se crea para propender la protección de las actividades agropecuarias y agrícolas de posibles enfermedades y la expansión de contagios que puedan afectar gravemente las actividades en el campo. 
            p.mb-0 De acuerdo a lo anterior a continuación puede verificar la transición de las normas que han surgido y su alcance: 

      figure.d-flex.align-items-center.mb-4
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='Imagen Decorativa')
        h2.mb-0 Tipos de formatos de registro


      p Los registros son instrumentos que soportan una acción los cuales son consultados para realizar las evaluaciones o controles a las actividades realizadas. 
      p La información resultante de cada punto de intervención en campo debe ser registrada en los formatos que hayan sido elaborados por la parte administrativa para que se lleve un control de las acciones y los tiempos de cada actividad, de esta manera se pueden establecer los indicadores de cumplimiento y de efectividad que sean necesarios para evaluar la efectividad el proceso. 
      p.mb-4 Los tipos de formatos se pueden definir de dos tipos, los abiertos y los cerrados:


      .row.mb-5
        .col-md-11.mx-auto
          .row.justify-content-center
            .col-md-6.d-flex
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/temas/tema6/img98.svg', alt='Imagen Decorativa')
                .tarjeta.clr--lightorange.shadow-sm
                  .p-4
                    h4.mb-0 Abierto
                    p.mb-0 El primero es el que está disponible la información al público, no es de carácter privado y la información registrada en este es básica y precisa.
            .col-md-6.d-flex
              .tarjeta-avatar-b.mb-3
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/temas/tema6/img99.svg', alt='Imagen Decorativa')
                  .tarjeta.clr--lightgreen.shadow-sm
                    .p-4
                      h4.mb-0 Cerrado
                      p.mb-0 El segundo tipo contiene información más detallada y de carácter privado (costos, cantidades, etc.) la cual es de dominio directivo, este tipo de formato se utiliza para las evaluaciones y control interno de la empresa.
              
      p.mb-5 Es válido mencionar que esta información puede ser requerida por los entes de control y la empresa estará en obligación de suministrarla. 
      
      
        figure.d-flex.align-items-center
          img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='Imagen Decorativa')
          h2.mb-0 Técnicas de diligenciamiento

      .row.mb-4
        .col-lg-8(data-aos="fade-right")
          p Las técnicas de diligenciamiento se resumen en la habilidad del técnico o el personal que realiza la actividad de acuerdo a los manuales de cada registro, el cual es elaborado por la parte directiva y socializado con el personal que realiza la actividad.
          p La guía debe establecer los tiempos de diligenciamiento, así como la información relevante que se debe registrar y el paso a paso de la actividad. Es la guía la que define los criterios a tener en cuenta para que el personal realice la observación y lleve a cabo el registro.
          p Es importante tener en cuenta el programa que se usa para el registro de la información, ya que este debe ser compatible con el sistema operativo que maneja la empresa.
        
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/temas/tema6/img101.png', alt='Imagen Decorativa')
  
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
