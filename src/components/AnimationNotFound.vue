<template>
  <div class="animation" ref="lottieContainer"></div>
  <a-typography>
    <a-typography-title class="title">
      <span class="text-title">
        No se encontro el país que buscas, intenta con uno diferente o revisa la
        ortografía
      </span>
    </a-typography-title>
  </a-typography>
</template>

<script>
  import { onMounted, ref } from "vue";
  import lottie from "lottie-web";

  export default {
    setup() {
      const lottieContainer = ref(null);

      onMounted(() => {
        lottie.loadAnimation({
          container: lottieContainer.value,
          path: `https://assets8.lottiefiles.com/private_files/lf30_zncbuxbi.json`,
          renderer: "svg",
          loop: true,
          autoplay: true,
        });
      });

      return { lottieContainer };
    },
  };
</script>

<style scoped>
  @media only screen and (max-width: 768px) {
    .animation {
      width: 390px;
      margin-right: auto;
      margin-left: auto;
      margin-top: 27%;
    }

    .title {
      position: absolute;
      text-align: center;
      margin-top: 20%;
      color: gray;
      bottom: 30px;
      width: 90%;
    }

    .text-title {
      font-size: 14px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 769px) {
    .animation {
      width: 450px;
      margin-right: auto;
      margin-left: auto;
      margin-top: 8%;
    }

    .title {
      position: absolute;
      text-align: center;
      margin-top: 20%;
      color: gray;
      bottom: 30px;
      width: 90%;
    }

    .text-title {
      font-size: 18px;
      text-align: center;
    }
  }
</style>
