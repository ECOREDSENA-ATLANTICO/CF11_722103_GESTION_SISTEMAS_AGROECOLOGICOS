export default {
  global: {
    componenteFormativo: 'Gestión de sistemas agroecológicos',
    descripcionCurso:
      'El uso de agroquímicos está afectando considerablemente los suelos y la reparación de los mismos, siendo urgente garantizar la seguridad alimentaria, se hace necesario la preparación y el mejoramiento de los suelos mediante el uso de abonos y fertilizantes orgánicos que devuelvan la capacidad productiva de estos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Preparación agroecológica del suelo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Acondicionamiento del terreno',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de conservación de suelos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Biofábrica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fertilización del suelo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Normatividad y registros',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '4. Biofábrica',
      referencia:
        'Ángel, J. (2018). Abono Bocashi como solución para Recuperar Suelos. Tv Agro.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=x1JNdLiUlIs',
    },
    {
      tema: '5. Fertilización del suelo',
      referencia:
        'Ángel, J. (2018). La Lombricultura o Vermicultura. Una idea rentable. Tv Agro',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=fQn92aN0k8I',
    },
  ],
  glosario: [
    {
      termino: 'Bioabono',
      significado:
        'es el material resultante de la descomposición natural de la materia orgánica por acción de los microorganismos presentes en el medio, los cuales digieren los materiales, transformándolos en otros beneficios que aportan nutrientes al suelo logrando que las plantas crezcan.',
    },
    {
      termino: 'Biofertilizante',
      significado:
        'son productos elaborados en base a restos vegetales, bacterias, hongos y microorganismos, utilizados en la fertilización y nutrición vegetal.',
    },
    {
      termino: 'Drenajes',
      significado:
        'proceso por el cual se realiza la evacuación del exceso de agua en el suelo.',
    },
    {
      termino: 'Humus',
      significado:
        'es la sustancia compuesta por ciertos productos orgánicos de naturaleza coloidal, que proviene de la descomposición de los restos orgánicos por organismos y microorganismos descomponedores (como hongos y bacterias).',
    },
    {
      termino: 'Presión artesiana',
      significado:
        'se denomina presión artesiana a la presión obtenida de la diferencia de nivel de la capa freática (cimentación profunda por excavación) de un pozo artesiano. Es decir que cuando se perfora una cuenca artesiana, el agua, bajo presión, sube y este tipo de conducto, en el que el líquido sube a presión, se denominaría pozo artesiano',
    },
    {
      termino: 'Trinchos',
      significado:
        'muro pequeño transversal que se construye en una quebrada o arroyo para provocar sedimentación aguas arriba y en otros casos cortar la pendiente del terreno',
    },
    {
      termino: 'Zanjas',
      significado:
        'excavación larga y estrecha que se hace en la tierra para echar los cimientos, conducir las aguas, defender los sembrados o cosas semejantes',
    },
  ],
  referencias: [
    {
      referencia:
        'Brechelt, A. (2004). Manejo Ecológico del Suelo. Fundación Agricultura y Medio Ambiente (FAMA). Red de Acción de Plaguicidas y sus Alternativas para América Latina (RAP-AL).',
      link:
        'https://www.midagri.gob.pe/portal/download/pdf/ais-2015/manejo-ecol-suelo-fama.pdf',
    },
    {
      referencia:
        'Gagliano, E. (2019). Lombricompuesto, una alternativa para abonar. Instituto Nacional de Tecnología Agropecuaria',
      link:
        'https://inta.gob.ar/documentos/lombricompuesto-una-alternativa-para-abonar',
    },
    {
      referencia:
        'IAEA. Organismo Internacional de Energía Atómica. (s.f.). Mejora en la fertilidad del suelo.',
      link:
        'https://inta.gob.ar/sites/default/files/inta_manual_drenaje_de_suelos_para_uso_agricola.pdf',
    },
    {
      referencia:
        'Ramos Agüero, D., & Terry Alfonso, E. (2014). Generalidades de los abonos orgánicos: Importancia del Bocashi como alternativa nutricional para suelos y plantas. Cultivos Tropicales, 35(4), 52–59',
      link:
        '. http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0258-59362014000400007',
    },
    {
      referencia:
        'Rivera, P. (2005). Construcción de Trinchos Vivos para Conducción de Aguas de Escorrentía en Zonas Tropicales de Ladera',
      link: 'https://www.oocities.org/biotropico_andino/cap12.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
