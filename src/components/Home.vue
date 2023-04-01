<template>
  <div class="container">
    <a-row class="container-input">
      <a-col class="list" :xs="22" :sm="22" :md="20" :lg="17" :xl="17">
        <a-auto-complete
          v-model:value="value"
          class="input-principal"
          placeholder="Escribe el nombre de un país"
          @search="handleOnSearch"
          @keyup.enter="showCountries"
        >
          <template #dataSource>
            <a-select-option
              class="list"
              v-for="item in countries.namesCountries"
              :key="item"
            >
              {{ item }}
            </a-select-option>
          </template>
        </a-auto-complete>
      </a-col>

      <a-col class="col-btn" :xs="7" :sm="7" :md="7" :lg="4" :xl="4">
        <a-button class="btn-form" @click="showCountries" html-type="submit">
          Buscar
        </a-button>
      </a-col>
    </a-row>
    <div class="container-cards">
      <TableCountrie v-if="showData === true" :data="countries.countries" />
      <animation-home v-if="showData === false" />
    </div>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from "vue";
  import { useCountriesStore } from "@/stores/counter";
  import TableCountrie from "@/components/TableCountrie.vue";
  import debounce from "lodash/debounce";
  import AnimationHome from "@/components/AnimationHome.vue";

  const countries = useCountriesStore();

  const value = ref("");
  const showData = ref(false);

  const handleOnSearch = (searchText) => {
    if(searchText === ""){
      countries.getCountries(searchText);
    }else{
      onSearch(searchText);
    }
  };

  const onSearch = debounce((searchText) => {
    countries.getCountries(searchText);
    countries.getNamesCountries();
  }, 5000);

  const showCountries = () => {
    if (value.value.length === 0) {
      showData.value = false;
      countries.clearData();
    } else {
      countries.getCountries(value.value);
      showData.value = true;
    }
  };

  const sheckData = () => {

    if (value.value.length === 0) {
      console.log("entro")
      showData.value = false;
      countries.clearData();
    }
  };

  onBeforeMount(() => {
    countries.getAllData();
  });
</script>

<style scoped>
  @media only screen and (max-width: 768px) {
    .container {
      height: 90vh;
    }

    .btn-form{
    margin-top: 40px;
  }


  }
  @media only screen and (min-width: 769px) {
    .container {
      height: 95vh;
    }

    .btn-form{
    margin-top: 52px;
    width: 80%;
  }

  }
  .input-principal {
    position: absolute;
    width: 100%;
    margin-top: 0px;
  }

  .container-input {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .col-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-cards {
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    overflow-y: scroll;
    height: 85%;
  }

  .container-cards::-webkit-scrollbar {
    width: 5px;
  }

  .container-cards::-webkit-scrollbar-track {
    background: #fff;
  }

  .container-cards::-webkit-scrollbar-thumb {
    background: #bbbbbb;
  }

  .list {
    position: relative;
    height: 20px;
    margin-top: 40px;
    -webkit-box-shadow: 0px 5px 15px 0px rgba(207, 207, 207, 1);
    -moz-box-shadow: 0px 5px 15px 0px rgba(207, 207, 207, 1);
    box-shadow: 0px 5px 15px 0px rgba(207, 207, 207, 1);
  }

  .img-lottie {
    display: block;
    margin: auto;
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }
</style>
