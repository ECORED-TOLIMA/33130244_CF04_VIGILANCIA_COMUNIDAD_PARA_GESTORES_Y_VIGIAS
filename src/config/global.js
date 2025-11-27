export default {
  global: {
    componenteFormativo: 'Movilización social y autogestión en salud',
    descripcionCurso:
      'Este componente formativo trata sobre la movilización social y la autogestión, impulsadas por la organización comunitaria y el empoderamiento. Promueve la participación activa, la toma de decisiones autónomas y el uso eficiente de recursos para transformar la salud pública. Se utilizan herramientas como el árbol de soluciones, la espina de pescado y SARAR para fortalecer el análisis y la acción colectiva',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
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
        titulo: 'Movilización social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Autogestión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Participación social: definición, normativa, formas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Organización y empoderamiento',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas de análisis',
            hash: 't_1_4',
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: '1. Movilización social',
      referencia:
        'Instituto Nacional de Salud. (2025). <em>Caja de herramientas para la gestión del riesgo colectivo en brotes, epidemias y eventos de interés en salud pública. Etapa 1.2. Sistema de alerta temprana: Vigilancia Basada en Comunidad- fases de implementación.</em>',
      tipo: 'Manual',
      link:
        'https://www.ins.gov.co/Noticias/revcom/Etapa%201.2.%20Sistema%20de%20alerta%20temprana%20vigilancia%20basada%20en%20comunidad,%20fases%20de%20implementaci%C3%B3n%20caja.pdf',
    },
    {
      tema: '1. Movilización social',
      referencia:
        'Instituto Nacional de Salud. (2025). <em>Lineamientos para la Vigilancia Basada en la Comunidad.</em>',
      tipo: 'Documento',
      link:
        'https://www.ins.gov.co/Noticias/revcom/Lineamientos%20para%20la%20Vigilancia%20Basada%20en%20Comunidad%202025.pdf',
    },
    {
      tema: '1.1. Autogestión',
      referencia:
        'Rodríguez Tamayo, N. A. (2019). La autogestión como resistencia, dos ejemplos en América Latina. <em>Kavilando, 11.</em>',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7225263',
    },
    {
      tema: '1.4. Herramientas de análisis',
      referencia:
        'Pazo Fernández, C. A. (2020). <em>Salud y participación social en Colombia. Análisis y reflexiones de las condiciones actuales para el ejercicio de la democracia.</em>',
      tipo: 'Artículo',
      link:
        'https://revistas.upb.edu.co/index.php/trabajosocial/article/view/6693',
    },
  ],
  glosario: [
    {
      termino: 'Autogestión',
      significado:
        'capacidad de las personas y comunidades para gestionar y decidir sobre sus propios procesos.',
    },
    {
      termino: 'Control social',
      significado:
        'mecanismos ciudadanos para vigilar y exigir transparencia en la gestión pública.',
    },
    {
      termino: 'Corresponsabilidad',
      significado:
        'compromiso compartido de todos los actores en la transformación social o sanitaria.',
    },
    {
      termino: 'Diagnóstico participativo',
      significado:
        'identificación colectiva y reflexiva de necesidades y problemas comunitarios.',
    },
    {
      termino: 'Empoderamiento',
      significado:
        'desarrollo de capacidades y liderazgo comunitario para incidir en decisiones y recursos.',
    },
    {
      termino: 'Liderazgo social',
      significado:
        'habilidad de guiar y movilizar a la comunidad en procesos colectivos.',
    },
    {
      termino: 'Movilización social',
      significado:
        'proceso colectivo en el que la comunidad actúa para transformar su realidad y salud.',
    },
    {
      termino: 'Organización comunitaria',
      significado:
        'agrupamiento estructurado de personas para identificar y resolver necesidades comunes',
    },
    {
      termino: 'Participación social',
      significado:
        'involucramiento activo de la ciudadanía en la gestión y control de los asuntos de salud',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de mantener en el tiempo logros y transformaciones alcanzadas por la comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bauni, N. (2022). <em>Innovar y autogestionar: Teorías y experiencias históricas sobre innovaciones organizacionales en la autogestión.</em> TeseoPress.',
    },
    {
      referencia:
        'Centro de estudios en democracia y asuntos electorales. (2014). <em>Una mirada desde los movimientos campesinos y el paro nacional agrario.</em>',
      link:
        'https://www.registraduria.gov.co/IMG/pdf/Caracterizacion_de_las_organizaciones_sociales.pdf',
    },
    {
      referencia:
        'Centro para la Salud y Desarrollo Comunitario de la Universidad de Kansas. (2025). <em>Caja de herramientas comunitarias: Organizar la movilización comunitaria.</em>',
      link:
        'https://ctb.ku.edu/es/mejores-procesos-de-cambio/organizar-la-movilizacion-comunitaria/vision-general',
    },
    {
      referencia:
        'Congreso de Colombia. (2011, 19 de enero). Ley 1438 de 2011. Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41355',
    },
    {
      referencia:
        'Congreso de Colombia, (2015, 16 de febrero). Ley Estatutaria 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733',
    },
    {
      referencia:
        'Constitución Política de la República de Colombia. (1991). Autor.',
    },
    {
      referencia:
        'Contreras Hernández, J. G. (2022). ¿Qué es un movimiento social? y su importancia en el estudio de la ciencia política. <em>Revista de La Facultad de Derecho y Ciencias Politicas, 52</em>(136), 68-100.',
      link: 'https://doi.org/10.18566/rfdcp.v52n136.a04',
    },
    {
      referencia:
        'Eugenio, J. L., Mejía Mendoza, M. L., Figueroa, I. V. & Márquez A, J. M. (2014). Movilización social y determinantes sociales de la salud: proceso educativo en comunidad rural de Jalisco. <em>Estudio Sociales.</em>',
    },
    {
      referencia:
        'García Jerez, F. A. (2016). La movilidad socio-espacial desde la teoría de Pierre Bourdieu: capital de motilidad, campo de movilidad y habitus ambulante 1. <em>Sociedad y Economía, 31,</em> 15-32.',
      link: 'http://www.scielo.org.co/pdf/soec/n31/n31a02.pdf',
    },
    {
      referencia:
        'Hudson, J. P. (2010). Formulaciones teórico-conceptuales de la autogestión. <em>Revista Mexicana de Sociología, 72</em>(4), 571-597.',
      link: 'https://www.scielo.org.mx/pdf/rms/v72n4/v72n4a3.pdf',
    },
    {
      referencia:
        'Instituto de Estudios Latinoamericanos. (2025). <em>Participación Social.</em>',
    },
    {
      referencia:
        'Marinof, N., Amalia Pesantes, M. & Centurión, C. (2001). <em>Metodologías participativas en educación sanitaria Una adaptación de SARAR PHAST para comunidades rurales andinas.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IETS/guia-del-orientador-metodologias-participativas-en-educacion-sanitaria-(sarar-1).pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016, 17 de febrero). Resolución 0429 de 2016. Por medio de la cual se adopta la Política de Atención Integral en Salud.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200429%20de%202016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017, 9 de junio). Resolución 2063 de 2017. Por la cual se adopta la Política de Participación Social en Salud - PPSS.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%202063%20de%202017.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Política de Participación Social en Salud PPSS. Resolución 2063 de 2017.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/GT/politica-ppss-resolucion-2063-de-2017-cartilla.pdf',
    },
    {
      referencia:
        'Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos. (1976). <em>Pacto Internacional de Derechos Económicos, Sociales y Culturales.</em>',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2022). <em>Voz, agencia, empoderamiento - Manual sobre la participación social para la cobertura sanitaria universal.</em>',
    },
    {
      referencia:
        'Paris Pombo, M, D. (2012). La fabricación de armas para una revolución simbólica. Pierre Bourdieu y la sociología de la dominación. <em>Sociológica, 77</em>, 7-34.',
      link: 'https://www.scielo.org.mx/pdf/soc/v27n77/v27n77a1.pdf',
    },
    {
      referencia:
        'Pazo Fernández, C. A. (2020). <em>Salud y participación social en Colombia. Análisis y reflexiones de las condiciones actuales para el ejercicio de la democracia.</em>',
      link:
        'https://revistas.upb.edu.co/index.php/trabajosocial/article/view/6693',
    },
    {
      referencia:
        'Richer, M. (2005). Participación y organización comunitaria en el sector salud: Servicios sociales quebequense. <em>Revista de Ciencias Sociales, 11</em>(2).',
    },
    {
      referencia:
        'Rodríguez Tamayo, N. A. (2019). La autogestión como resistencia, dos ejemplos en América Latina. <em>Kavilando, 11.</em>',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7225263',
    },
    {
      referencia:
        'Sanabria R, G. (2004). Participación social en el campo de la salud. <em>Revista Cubana de Salud Pública, 30</em>(3). Tilly, C. & Wood, L. J. (2010). <em>Los movimientos sociales.</em> Editorial Crítica. S.L., Ed.; Segunda, pp. 13-30.',
    },
    {
      referencia:
        'Torres Tovar, M., Vega Romero, R. R., Luna García, J. E. & Otros autores. (2022). <em>Movilizaciones sociales por la Salud en Colombia</em> (Universidad Nacional de Colombia, Ed.).',
    },
    {
      referencia:
        'Vera Martínez, J. & Ceballos Villada, Z. (2021). Autogestión comunitaria: una apuesta para la investigación y la intervención. <em>Acciones de Psicología Comunitaria desde los escenarios académicos, comunitarios e investigativos.</em>',
      link:
        'https://libros.unad.edu.co/index.php/selloeditorial/catalog/download/46/32/917?inline=1',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Cataño Mora',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Luz Dary Quintero Torres',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Gina M. Morales S',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Fabian Nicolas Moreno Anzola',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Diego Felipe López Ávila',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Diana Alexandra Moreno Santamaria',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'María Elena Tamayo Bustamante',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
