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

      .tarjeta.p-4.mb-5.clr-paleYellow
        SlyderA(tipo="b")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Ley 23 de 1973
              p Principios fundamentales sobre prevención y control de la contaminación del aire, agua y suelo
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img69.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto ley 2811 de 1974 
              p Código nacional de los recursos naturales renovables y no renovables y de protección al medio ambiente. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img70.png', alt='Texto que describa la imagen')
          
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Ley 99 de 1993
              p Crea el ministerio del medio ambiente y organiza el sistema nacional ambiental SINA.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img71.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Ley 55 del 2 de julio de 1993 del Ministerio del Trabajo y Seguridad Social
              p Por medio de la cual se aprueba en “Convenio #170 y la recomendación número 177 sobre la seguridad en la utilización de productos químicos en el trabajo” adoptados por la 77 reunión de la conferencia general de la O.I.T.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img72.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 1753 de 1994 del Ministerio del Medio Ambiente
              p Por el cual se reglamentan parcialmente los Títulos VIll y Xll de la Ley 99 de 1993 sobre licencias ambientales. La Licencia Ambiental es la autorización que otorga la autoridad ambiental competente, mediante acto administrativo, a una persona, para la ejecución de un proyecto, obra o actividad que conforme a la ley y a los reglamentos
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img73.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 1753 de 1994
              p Define la licencia ambiental LA: naturaleza, modalidad y efectos; contenido, procedimientos, requisitos y competencias para su otorgamiento.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img74.png', alt='Texto que describa la imagen')
          
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 2150 de 1995
              p Reglamenta la licencia ambiental y otros permisos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img75.png', alt='Texto que describa la imagen')
          
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 1056 del 17 de abril de 1996 del Instituto Colombiano Agropecuario ICA
              p Donde se dictan disposiciones sobre el control técnico de los insumos pecuario y se derogan las Resoluciones 710 de 1981, 2218 de 1980 y 444 de 1993.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img76.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Ley 388 de 1997
              p Ordenamiento territorial municipal y distrital y planes de ordenamiento territorial.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img77.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Ley 491 de 1999
              p Define el seguro ecológico y delitos contra los recursos naturales y el ambiente y se modifica el código penal.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img78.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 1124 de 1999
              p Por medio del cual se reestructura el ministerio del medio ambiente.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img79.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 1698 del 27 de junio de 2000 del Instituto Colombiano Agropecuario ICA
              p Por la cual se dictan disposiciones sobre productores de alimentos para animales con destino al autoconsumo.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img80.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 1713 del 6 de agosto de 2002 del Ministerio del Medio Ambiente Vivienda y Desarrollo Territorial 
              p Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 del 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974, la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img81.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 150 del 21 de enero de 2003 del Instituto Colombiano Agropecuario ICA
              p Por la cual se adopta el reglamento técnico de fertilizantes y acondicionadores de suelos para Colombia.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img82.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 3100 del 30 de octubre de 2003 del Ministerio del Medio Ambiente Vivienda y Desarrollo Territorial
              p Por el  cual se reglamenta la tasa retributiva por la utilización directa del agua como receptor de los vertimientos puntuales y se toman otras determinaciones.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img83.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 3172 de 2003 del Ministerio de Ambiente, Vivienda y Desarrollo Territorial
              p Por medio del cual se reglamenta el artículo 158-2 del Estatuto Tributario. El contribuyente deberá acreditar el cumplimiento de los siguientes requisitos cuando la Dirección de Impuestos y Aduanas Nacionales, DIAN los exija por inversiones en control y mejoramiento del medio ambiente.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img84.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 375 del 27 de febrero de 2004 del Instituto Colombiano Agropecuario ICA
              p Por la cual se dictan las disposiciones sobre Registro y Control de los Bioinsumos y Extractos Vegetales de uso agrícola en Colombia.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img85.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 1023 de 2005 del Ministerio de Ambiente y Desarrollo Territorial 
              p Por la cual se adoptan guías ambientales como instrumento de autogestión y autorregulación. Mediante la presente resolución se procederá a adoptar las guías ambientales como instrumento de autogestión y autorregulación de los sectores productivos y de consulta y referencia de carácter conceptual y metodológico tanto para las autoridades ambientales como para el sector regulado.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img86.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Ley 388 de 1997
              p Ordenamiento territorial municipal y distrital y planes de ordenamiento territorial.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img87.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 1500 del 4 de mayo de 2007 del Ministerio de la Protección Social 
              p Decreto en el que se establece el reglamento técnico se crea el Sistema Oficial de Inspección, Vigilancia y Control de la Carne, Productos Cárnicos Comestibles y Derivados Cárnicos Destinados para el Consumo Humano y los requisitos sanitarios y de inocuidad que se deben cumplir en su producción primaria, beneficio, desposte, desprese, procesamiento, almacenamiento, transporte, comercialización, expendio, importación o exportación.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img88.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 2833 del 29 de octubre de 2007 del Instituto Colombiano Agropecuario ICA
              p Por el cual se modifica la Resolución 2101 de 2007
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img89.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 1299 de 2008 del Ministerio de Ambiente y Desarrollo Territorial
              p Por el cual se reglamenta el departamento de gestión ambiental de las empresas a nivel industrial y se dictan otras disposiciones.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img90.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 968 del 10 de marzo de 2010 del Instituto Colombiano Agropecuario ICA
              p Por medio de la cual se modifica la Resolución 150 de 2003.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img91.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Decreto 2078 de 2012
              p Por el cual se establece la estructura nacional de Vigilancia de Medicamentos y alimentos INVIMA.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img92.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 1229 de 2013
              p Por el cual se establece el modelo de inspección vigilancia y control sanitario para los productos de uso y consumo 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img93.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Resolución 770 de 2014
              p Por la cual se establecen las directrices para la formulación, ejecución, seguimiento y evaluación de los Planes Nacionales Subsectoriales de Vigilancia y Control de Residuos en Alimentos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img94.png', alt='Texto que describa la imagen')

          .row.align-items-centerz
            .col-md-6.mb-4.mb-md-0
              h4 Circular 031 de 2015
              p Directrices para la aplicación de la normatividad sanitaria de alimentos de consumo humano.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img95.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Circular 046 de 2016
              p Lineamientos complementarios para la articulación y coordinación de las actividades de inspección, vigilancia y control relacionadas con alimentos y bebidas destinados al consumo humano.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img96.png', alt='Texto que describa la imagen')




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
          p.mb-2 Las técnicas de diligenciamiento se resumen en la habilidad el técnico o el personal que realiza la actividad de acuerdo a los manuales de cada registro, el cual es elaborado por la parte directiva y socializado con el personal que realiza la actividad. 
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
