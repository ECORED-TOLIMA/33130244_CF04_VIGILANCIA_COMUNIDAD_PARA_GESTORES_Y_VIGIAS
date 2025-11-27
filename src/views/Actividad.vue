<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Proponiendo, participando y autogestionando apoyo en la comunidad',
      titulo: 'Cuestionario',
      introduccion:
        '<strong>objetivo:</strong> evaluar los conocimientos fundamentales sobre la movilización social y todo lo que la representa, con el fin de fortalecer la comprensión y aplicación de estrategias que permitan proponer, participar y autogestionar acciones de apoyo en la comunidad.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una característica clave de una comunidad organizada y empoderada en relación con su capacidad para generar transformaciones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantenerse al margen de los procesos sociales y evitar asumir responsabilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Depender exclusivamente de actores externos para impulsar cualquier iniciativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Participar de manera activa y coordinar acciones colectivas orientadas al cambio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Limitarse únicamente a recibir información sin involucrarse en la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué garantiza la participación social respaldada por normativas legales en salud?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasividad ciudadana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusión de la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de trámites administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Intervención activa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué demuestran los ejemplos exitosos de movilización social en salud pública?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento de riesgos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desinterés comunitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fallas en la comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de enfermedades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes herramientas no permite identificar causas y alternativas de solución en la comunidad y planificar estrategias de mejora?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagrama de Gantt.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Árbol de soluciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Metodología SARAR.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diagrama de espina de pescado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El empoderamiento comunitario implica el desarrollo de capacidades, conocimientos y liderazgo que potencian la capacidad de incidir en la gestión y control de:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conflictos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Participación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Recursos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Amistades',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica fundamental de la movilización social según Pierre Bourdieu?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un proceso espontáneo y breve.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Depende únicamente de recursos materiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Rompe con el determinismo estructural para transformar condiciones sociales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Excluye el simbolismo en sus estrategias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué implica la autogestión comunitaria en salud pública?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Gestionar recursos únicamente por las autoridades externas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asumir un rol activo, autónomo y responsable en la toma de decisiones sobre salud.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Limitar la participación a los profesionales de la salud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Centralizar todas las decisiones en el gobierno nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta permite analizar causas y consecuencias de los problemas comunitarios en salud?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Árboles de soluciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Encuesta estructurada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Control de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamento interno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes no es un eje estratégico de la Política de Participación Social en Salud (PPSS)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fortalecimiento institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Empoderamiento de la ciudadanía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impulso a la cultura de la salud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Externalización de la gestión comunitaria.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué efecto produce la organización comunitaria efectiva?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorece la dependencia de ayuda externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce la autonomía colectiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Amplia el poder de influencia y promueve la equidad social.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limita la toma de decisiones en la comunidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La autogestión consiste en que las personas y comunidades deleguen por completo en otros las decisiones y acciones que afectan su bienestar, sin asumir un rol activo ni responsable.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La movilización social es un proceso netamente individual que permite a la comunidad gestionar y liderar procesos colectivos para transformar su realidad en salud pública.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'La organización comunitaria favorece la creación de espacios participativos y redes colaborativas, fortaleciendo la cooperación, participación y corresponsabilidad en la solución de problema.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El empoderamiento es el desarrollo de capacidades, conocimientos y liderazgo que potencia la incidencia de la comunidad en la gestión de recurso.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La organización comunitaria fortalece la cooperación y corresponsabilidad en la solución de los problemas locales.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La movilización social solamente ocurre cuando existen presiones externas y no facilita cambios internos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Las herramientas de análisis comunitario no son útiles para identificar causas, ni para plantear soluciones en salud pública.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'La organización comunitaria limita la participación activa e impide la formación de redes y no promueve el liderazgo local.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Las coaliciones comunitarias están formadas por grupos homogéneos y no integran actores diferentes del territorio.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La metodología SARAR busca fortalecer la autoestima, la responsabilidad y la planificación de acciones colectivas en comunidades rurales.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
