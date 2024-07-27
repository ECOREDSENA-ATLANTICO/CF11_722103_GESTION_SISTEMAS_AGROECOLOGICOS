export default {
  global: {
    componenteFormativo:
      'Preparación y manejo del suelo de acuerdo con criterios técnicos y principios agroecológicos',
    descripcionCurso:
      'El uso de agroquímicos está afectando considerablemente los suelos y la reparación de los mismos, siendo urgente garantizar la seguridad alimentaria, se hace necesario la preparación y el mejoramiento de los suelos mediante el uso de abonos y fertilizantes orgánicos que devuelvan la capacidad productiva de estos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Maquinaria, herramienta y equipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Operación y manejo de manuales técnicos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Procesos de labranza',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Conservación',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Acondicionamiento del terreno',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Drenajes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos e instrumentos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas para drenajes',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Medidas correctivas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de conservación de suelos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Manejo ecológico del suelo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Prácticas de conservación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Zanjas, trinchos y barreras vivas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Abonos verdes, materia orgánica y terrazas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Biofábrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Concepto y componentes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Especificaciones del sitio de preparación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Bioabonos orgánicos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Etapas de preparación de bioabonos',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Materiales e insumos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fertilización del suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Concepto y proceso del lombricompuesto',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Condiciones ambientales para el desarrollo',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Herramientas para drenajes',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Concepto y tipos de biofertilizantes',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo:
              'Concepto y tipo de inoculantes biológicos y variables de control',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Normatividad y registros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Normatividad sanitaria y ambiental',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Tipos de formatos de registro',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Técnicas de diligenciamiento',
            hash: 't_6_3',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CFA11_DU.pdf',
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
      link: 'https://www.youtube.com/watch?v=fQn92aN0k8I',
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
        'se denomina presión artesiana a la presión obtenida de la diferencia de nivel de la capa freática (cimentación profunda por excavación) de un pozo artesiano. Es decir que cuando se perfora una cuenca artesiana, el agua, bajo presión, sube y este tipo de conducto, en el que el líquido sube a presión, se denominaría pozo artesiano.',
    },
    {
      termino: 'Trinchos',
      significado:
        'muro pequeño transversal que se construye en una quebrada o arroyo para provocar sedimentación aguas arriba y en otros casos cortar la pendiente del terreno.',
    },
    {
      termino: 'Zanjas',
      significado:
        'excavación larga y estrecha que se hace en la tierra para echar los cimientos, conducir las aguas, defender los sembrados o cosas semejantes.',
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
        'Gagliano, E. (2019). Lombricompuesto, una alternativa para abonar. Instituto Nacional de Tecnología Agropecuaria.',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/15991/39972_24527.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'IAEA. Organismo Internacional de Energía Atómica. (s.f.). Mejora en la fertilidad del suelo.',
      link: 'https://www.iaea.org/es/temas/mejora-de-la-fertilidad-del-suelo',
    },
    {
      referencia:
        'Ramos Agüero, D., & Terry Alfonso, E. (2014). Generalidades de los abonos orgánicos: Importancia del Bocashi como alternativa nutricional para suelos y plantas. Cultivos Tropicales, 35(4), 52–59.',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0258-59362014000400007',
    },
    {
      referencia:
        'Rivera, P. (2005). Construcción de Trinchos Vivos para Conducción de Aguas de Escorrentía en Zonas Tropicales de Ladera.',
      link: 'https://www.oocities.org/biotropico_andino/cap12.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Araújo Angarita',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Eulices Orduz Amezquita',
          cargo: 'Diseño de Contenidos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de Diseño y Contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de Diseño y Contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
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
