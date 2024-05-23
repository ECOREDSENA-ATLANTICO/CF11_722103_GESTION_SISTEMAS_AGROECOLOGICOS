<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Normatividad y registros 

      p.mb-4 En la agricultura los aspectos medioambientales son factores importantes que se deben tener muy en cuenta para los procesos productivos, ya que son elementos vitales para el éxito en la producción, así mismo el manejo adecuado de los recursos y la implementación de las buenas prácticas ambientales garantizan que los impactos generados hacia el ambiente sean menores.

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img68.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-2 La aplicación de la normatividad vigente al sistema productivo es una garantía para la comercialización de los productos finales, ya que algunas cadenas de comercialización exigen la presentación de los permisos para la aceptación de los productos, es por ello que la empresa debe cumplir con los estándares nacionales para la implementación del sistema de producción. En caso de que la empresa se direccione a la exportación de sus productos deberá consultar la legislación aplicable para la exportación de alimentos y tener en cuenta las exigencias del país al que se envía la producción.  

      figure.mb-4
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
        h2.d-inline-block.mb-0 Normatividad sanitaria y ambiental
      
      p.mb-4 La normatividad ambiental en Colombia es una de las más completas del mundo, ya que el país ha desarrollado mecanismos de protección de los ecosistemas propendiendo el desarrollo industrial con la minimización de los impactos generados por las actividades antrópicas.
      
      .p-4.mb-5.clr--lightgreen
        p.mb-2 La normatividad sanitaria se crea para propender la protección de las actividades agropecuarias y agrícolas de posibles enfermedades y la expansión de contagios que puedan afectar gravemente las actividades en el campo. 
        p.mb-0 De acuerdo a lo anterior a continuación puede verificar la transición de las normas que han surgido y su alcance: 


      .tarjeta.clr--lightgray.p-4.p-md-5.mb-5
        .row.justify-content-around.align-items-center
          .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema6/img101.png" alt='')

          .col-md.col-lg-6
            h3 Normativa sanitaria y ambiental
            p.mb-4 Normas y su alcance

            a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download


      figure.mb-4
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
        h2.d-inline-block.mb-0 Tipos de formatos de registro


      .row.mb-5.align-items-center
        .col-lg-2
          figure
            img.mb-4z.img-t.m-auto(src='@/assets/curso/temas/tema6/img97.svg', alt='')
        .col-lg-10
          p.mb-2 Los registros son instrumentos que soportan una acción los cuales son consultados para realizar las evaluaciones o controles a las actividades realizadas. 
          p.mb-0 La información resultante de cada punto de intervención en campo debe ser registrada en los formatos que hayan sido elaborados por la parte administrativa para que se lleve un control de las acciones y los tiempos de cada actividad, de esta manera se pueden establecer los indicadores de cumplimiento y de efectividad que sean necesarios para evaluar la efectividad el proceso. 
      
      p.text-center.mb-4 Los tipos de formatos se pueden definir de dos tipos, los abiertos y los cerrados:

      .row.justify-content-center.mb-5
        .col-10.col-md-7.col-lg-5.mb-5.mb-lg-0(data-aos="fade-right")
          .tarjeta-icon
            img.img-t.mx-auto(src='@/assets/curso/temas/tema6/img98.svg' alt='AvatarTop')
            .clr--acccent-color.text-center.p-4.pt-5
              h5.mb-0 Abiertos
            .clr--lightorange.text-center.p-3
              p El primero es el que está disponible la información al público, no es de carácter privado y la información registrada en este es básica y precisa.

       
        .col-10.col-md-7.col-lg-5.mb-5.mb-lg-0(data-aos="fade-left")
          .tarjeta-icon
            img.img-t.mx-auto(src='@/assets/curso/temas/tema6/img99.svg' alt='AvatarTop')
            .clr--green.text-center.p-4.pt-5
              h5.mb-0 Cerrados
            .clr--lightgreen2.text-center.p-3
              p El segundo tipo contiene información más detallada y de carácter privado (costos, cantidades, etc.) la cual es de dominio directivo, este tipo de formato se utiliza para las evaluaciones y control interno de la empresa.

      p.text-center.mb-5 Es válido mencionar que esta información puede ser requerida por los entes de control y la empresa estará en obligación de suministrarla. 

      figure.mb-4
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
        h2.d-inline-block.mb-0 Técnicas de diligenciamiento


      .row.mb-5.align-items-center
        .col-lg-2
          figure
            img.mb-4.img-t.m-auto(src='@/assets/curso/temas/tema6/img100.svg', alt='')
        .col-lg-10
          p.mb-2 Las técnicas de diligenciamiento se resumen en la habilidad del técnico o el personal que realiza la actividad de acuerdo a los manuales de cada registro, el cual es elaborado por la parte directiva y socializado con el personal que realiza la actividad. 
          p.mb-2 La guía debe establecer los tiempos de diligenciamiento, así como la información relevante que se debe registrar y el paso a paso de la actividad. Es la guía la que define los criterios a tener en cuenta para que el personal realice la observación y lleve a cabo el registro. 
          p.mb-2 Es importante tener en cuenta el programa que se usa para el registro de la información, ya que este debe ser compatible con el sistema operativo que maneja la empresa.
      

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
