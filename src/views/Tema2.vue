<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1(data-aos="fade-right") Acondicionamiento del terreno
  
      .row.mb-5.align-items-center
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/temas/tema2/img11.png', alt='Imagen Decorativa')
        .col-lg-8(data-aos="fade-right")
          p El agua es un factor esencial en la producción agrícola, es por ello que su disponibilidad debe ser primordial en la granja, en su defecto por la acción de un distrito de riego garantizar un caudal suficiente dependiendo de la actividad agrícola.
          .row.align-items-center
            .col-md-3
              figure
                img.img-t.m-auto.mb-3(src='@/assets/curso/temas/tema2/img12.svg', alt='Imagen Decorativa')
            .col-md-9
              .p-4.ps-5.mb-3.clr--lightorange
                p.mb-0 Es importante tener en cuenta que el agua es un recurso natural y que depende de los factores climáticos y de la zona, por tal razón el uso eficiente y el ahorro de agua debe ser una política de la empresa con el objeto de proteger los recursos naturales.
      
          p.mb-4 Para realizar un distrito de riego o una concesión de aguas para uso industrial, el primer requisito que se debe tramitar es el permiso de concesión de aguas, el cual consiste en solicitar el derecho de aprovechamiento del agua, ya sea superficial o subterránea para uso doméstico. 
       
        p.mb-5 Este permiso lo otorgan las Corporaciones Autónomas Regionales al cual pertenezca el territorio en el que se tiene el proyecto de abastecimiento de agua después de la evaluación de la solicitud presentada. Los requerimientos para la solicitud varían de acuerdo a la corporación territorial a la que se dirija, pero generalmente se tiene en cuenta lo siguiente:

        SlyderF.mb-5(columnas="col-md-6 col-xl-3 col-sm-6")
          .tarjeta-avatar
            img.img-t(src='@/assets/curso/temas/tema2/img13.png' alt='AvatarTop')
            .tarjeta.clr--lightgreen
              p.p-3.pt-4.mb-3.text-center 
                b La fuente de captación debe tener un caudal continuo y mayor al caudal solicitado.     

          .tarjeta-avatar
            img.img-t(src='@/assets/curso/temas/tema2/img14.png' alt='AvatarTop')
            .tarjeta.clr--lightgreen
              p.p-3.pt-4.mb-3.text-center 
                b La propiedad del sitio de captación (permisos de intervención).

          .tarjeta-avatar
            img.img-t(src='@/assets/curso/temas/tema2/img15.png' alt='AvatarTop')
            .tarjeta.clr--lightgreen
              p.p-3.pt-4.mb-3.text-center 
                b Descripción del proyecto: se debe presentar el proyecto completo y la finalidad de su construcción. 
          
          .tarjeta-avatar
            img.img-t(src='@/assets/curso/temas/tema2/img16.png' alt='AvatarTop')
            .tarjeta.clr--lightgreen
              p.p-3.pt-4.mb-3.text-center 
                b Costos del proyecto: este valor es la base del pago de los servicios de valoración de la solicitud.

          .tarjeta-avatar
            img.img-t(src='@/assets/curso/temas/tema2/img17.png' alt='AvatarTop')
            .tarjeta.clr--lightgreen
              p.p-3.pt-4.mb-3.text-center 
                b Programa de uso eficiente y ahorro de agua: se debe presentar el programa a implementar para la protección del recurso hídrico y de su uso responsable.

          .tarjeta-avatar
            img.img-t(src='@/assets/curso/temas/tema2/img18.png' alt='AvatarTop')
            .tarjeta.clr--lightgreen
              p.p-3.pt-4.mb-3.text-center 
                b Solicitud de acuerdo al formato de la entidad.
          
  
        p.mb-5.col-md-10.mx-auto Para la solicitud del permiso, es necesario revisar el formato único nacional de concesión de aguas superficiales, como  la guía para la presentación de la solicitud ya que contiene la guía de diligenciamiento y los documentos anexos de la solicitud. 

        figure.d-flex.align-items-center.mb-4#t_2_1
          img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='Imagen Decorativa')
          h2.mb-0 Drenajes

        p.mb-4 Los drenajes tienen como función principal evacuar el exceso de agua de los niveles freáticos de la finca, esto se logra deprimiendo el nivel del drenaje por debajo de los niveles freáticos, mejorando la exploración radicular en busca de nutrientes y la aireación de los suelos. 

        
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img19.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La instalación de drenajes es un instrumento que facilita la mejora de suelos que han sido sobreexplotados, iniciando así su recuperación para volver a ser productivos. 
            p.mb-2 La necesidad de la adopción de los drenajes, según Liotta, la saturación del suelo y formación de freáticas superficiales, pueden tener diferentes orígenes, por ejemplo:
            p.mb-0 ● Procedencia de zonas topográficamente más altas.
            p.mb-0 ● Influencia de la presión artesiana proveniente de acuíferos profundos en años de abundancia hídrica.
        
        
        figure.d-flex.align-items-center.mb-4#t_2_2
          img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='Imagen Decorativa')
          h2.mb-0 Tipos e instrumentos

        p.mb-4 Existen dos tipos de drenaje, los que están construidos a cielo abierto o descubiertos y los subterráneos. Para la construcción de cualquiera de ellos es absolutamente necesaria la intervención de maquinaria (retroexcavadora) o realizarlos a mano. 

        .row.clr--lightorange.mb-5.position-relative.mx-auto
            .col-md-12.p-4.col-lg-8
              p El flujo de agua corre por la zanja o por la tubería (si es cerrado) evacuando el fluido del área de los cultivos, así se evita la sobre saturación de agua en los suelos que ocasiona la pérdida de los nutrientes necesarios para una buena cosecha. 
              p.mb-0 Las desventajas que tienen los dos sistemas en la limpieza general, en el caso de los drenajes cerrados se puede presentar acumulación de sedimentos que generan una obstrucción al paso libre de las aguas y en los abiertos se pierde eficiencia por la acumulación de malezas acuáticas o sedimentación, es por ello que la limpieza en los sistemas abiertos debe realizarse por lo menos una vez al año. En el caso de los drenajes cerrados se deben realizar los cálculos del caudal promedio para su diseño, propendiendo que la pendiente no sea cercana a cero (0) para evitar la sedimentación interna. 
            .col-md-3.d-none.d-lg-block
              figure
                img.img-t.right-bottom(src='@/assets/curso/temas/tema2/img22.png', alt='Imagen Decorativa')   

        figure.d-flex.align-items-center.mb-4#t_2_3
          img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='')
          h2.mb-0 Herramientas para drenajes

        .row.mb-5.align-items-center
          .col-lg-8(data-aos="fade-left")
            p La construcción de los drenajes es relativamente sencilla, solo se necesita el personal para la obra manual o una retroexcavadora en caso de necesitarla.
            p.mb-4 Es importante mencionar que las cantidades de excavación, la longitud, la pendiente y otros factores deben ser establecidos con anterioridad y ser verificados en campo con topografía para que se garantice el flujo constante de agua y así, evitar estancamientos que pueden provocar la proliferación de vectores y plagas. Para el mantenimiento de los drenajes se hacen necesarias herramientas menores en unos y un sistema de transporte del material que es evacuado de acuerdo a su cantidad.

          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img.img-t.m-auto(src='@/assets/curso/temas/tema2/img23.png', alt='Imagen Decorativa')
          
        figure.d-flex.align-items-center.mb-4#t_2_4
          img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/temas/img101.svg', alt='Imagen Decorativa')
          h2.mb-0 Medidas correctivas y enmiendas
        
        p.mb-4 Las medidas correctivas y enmiendas se pueden generar a través de procesos de mejora, de los cuales existen varias estrategias que se comparten a través del siguiente vídeo: 
        figure(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/uc_HgWQ98FY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        
      
</template>

<script>
export default {
  name: 'Tema2',
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
