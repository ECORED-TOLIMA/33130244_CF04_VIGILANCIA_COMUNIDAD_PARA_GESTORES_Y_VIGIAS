<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-7.order-2
        p En este componente formativo se revisarán los conceptos relacionados con la movilización social y la autogestión comunitaria como procesos fundamentales para transformar la salud pública en Colombia, permitiendo que la población identifique problemas, participe activamente y gestione recursos para promover su bienestar. Estos modelos parten del fortalecimiento organizativo, el empoderamiento y la corresponsabilidad en la toma de decisiones, superando enfoques individualistas y verticales.
        p.mb-0 El éxito radica en articular la organización comunitaria, el liderazgo social, la inclusión y la solidaridad, mediante la construcción de redes colaborativas, el uso de metodologías participativas y herramientas analíticas que aseguren diagnósticos acertados, planeación colectiva y evaluación permanente de los resultados. Así, la comunidad se convierte en motor y agente activo del cambio social y sanitario.
      .col-lg-5.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')
    
    .fondo1-t1.px-md-5.px-4.py-4
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10.col-12
          .bg-color-1.tarjeta.py-3.px-4.h-100
            p.mb-0 Finalmente, la implementación de estrategias como el árbol de soluciones, la espina de pescado y la metodología SARAR, permiten analizar y abordar integralmente las necesidades, causas y posibles soluciones de los problemas de salud, fortaleciendo la capacidad para la acción colectiva, la gestión eficaz y la sostenibilidad de los logros alcanzados en el territorio.
            
      p.mb-4.text-center Por lo anterior, se invita a conocer el siguiente video que contextualiza sobre la temática a tratar:

      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/7Ch6tdK6N18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
