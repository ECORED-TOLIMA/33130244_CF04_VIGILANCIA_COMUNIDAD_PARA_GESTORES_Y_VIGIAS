<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo ofrece una visión integrada de los procesos que fortalecen la acción colectiva en las comunidades, abordando la movilización social como un mecanismo para promover la organización, la autogestión y la toma de decisiones informadas en torno a la salud y el bienestar común. Se destacan los fundamentos conceptuales de la participación social, su marco normativo y las diversas formas mediante las cuales la ciudadanía interviene activamente en la identificación de necesidades, la formulación de propuestas y la construcción de soluciones.
    p Asimismo, se resalta el papel del empoderamiento y la organización comunitaria como elementos que permiten consolidar capacidades locales, generar liderazgo y fomentar la corresponsabilidad en la gestión de iniciativas que mejoren las condiciones de vida. Para ello, se introducen herramientas participativas de análisis — como el árbol de soluciones, el diagrama de espina de pescado y la metodología SARAR — que facilitan la comprensión de problemas, la búsqueda colaborativa de alternativas y la planificación de acciones estratégicas.
    p.mb-4 En conjunto, esta temática promueve una comprensión amplia de los procesos participativos y de autogestión aplicados al contexto comunitario, reafirmando su importancia para impulsar transformaciones sostenibles, fortalecer la cohesión social y consolidar una participación activa y propositiva en los asuntos que afectan el bienestar colectivo.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Movilización social y autogestión en salud, presenta contenidos orientados a comprender cómo las comunidades se organizan, toman decisiones y proponen soluciones frente a sus necesidades. Se revisan los conceptos fundamentales de participación social, su marco normativo y las formas de intervención ciudadana, junto con el papel del empoderamiento y la organización comunitaria en la construcción colectiva. Además, se introducen herramientas de análisis como el árbol de soluciones, el diagrama de espina de pescado y la metodología SARAR, que permiten identificar problemas, estructurar alternativas y orientar acciones participativas en los territorios.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
