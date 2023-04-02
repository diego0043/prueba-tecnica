<template>
  <a-row class="item">
    <a-col class="item-table" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
      {{ index }}
    </a-col>
    <a-col class="item-table" :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
      <img class="img-item" :src="flag" :alt="countrie.flags.alt" />
    </a-col>
    <a-col class="item-table" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <span class="item-name">
        {{ name }}
      </span>
    </a-col>
    <a-col class="item-table" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
      {{ poblation }}
    </a-col>
    <a-col class="item-table" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
      <a-button @click="showModal" type="link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-eye icon-option"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
          />
          <path
            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
          />
        </svg>
      </a-button>
    </a-col>
  </a-row>
  <a-modal
    v-model:visible="visible"
    width="1000px"
    :title="`País: `+ name" 
    :footer="null"
    @ok="handleOk"
  >
    <div class="modal">
      <a-row>
        <a-col class="col-spacing" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <span class="title"> Bandera </span>
          <img class="img-modal" :src="flag" alt="flag" />
        </a-col>
        <a-col class="col-spacing" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <span class="title"> Información </span>
          <a-list bordered :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-row style="width: 100%">
                  <a-col
                    :xs="12"
                    :sm="12"
                    :md="12"
                    :lg="12"
                    :xl="12"
                    style="font-weight: bold"
                  >
                    {{ item.title }} :
                  </a-col>
                  <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    {{
                      Array.isArray(item.value) === true
                        ? item.value[0]
                        : item.value
                    }}
                  </a-col>
                </a-row>
              </a-list-item>
            </template>
          </a-list>
        </a-col>
      </a-row>
      <a-row>
        <a-col class="col-spacing" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <span class="title"> Idiomas oficiales </span>
          <div class="container-traducciones">
            <a-tag
              v-for="languages in countrie.languages"
              :key="languages"
              color="green"
              class="traducciones"
              >{{ languages }}
              </a-tag>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col class="col-spacing" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <span class="title"> Traducciones </span>
          <div class="container-traducciones">
            <a-tag
              v-for="traduction in countrie.translations"
              :key="traduction"
              color="blue"
              class="traducciones"
              >{{ traduction.common }}
              
              </a-tag>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-modal>
</template>

<script setup>
  import { ref } from "vue";
  const visible = ref(false);
  const props = defineProps({
    index: {
      type: Number,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    poblation: {
      type: Number,
      required: true,
    },
    countrie: {
      type: Object,
      required: true,
    },
  });
  const data = [
    {
      title: "Nombre oficial",
      value: props.countrie.name.official,
    },
    {
      title: "Capital",
      value: props.countrie.capital,
    },
    {
      title: "Población",
      value: props.poblation.toLocaleString() + " habitantes",
    },
    {
      title: "Área",
      value: props.countrie.area.toLocaleString() + " km²",
    },
  ];
  const showModal = () => {
    visible.value = true;
  };
</script>

<style scoped>
  .img-item {
    width: 32px;
    height: 20px;
  }

  .item-table {
    display: flex;
    justify-content: center;
  }

  .item {
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 30px;
  }

  .item-name {
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon-option:hover {
    color: #0963b8;
  }

  .img-modal {
    display: block;
    width: 70%;
    height: 70%;
    margin-right: auto;
    margin-left: auto;
  }

  .title {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .modal {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .modal::-webkit-scrollbar {
    width: 0px;
  }

  .modal::-webkit-scrollbar-track {
    background: #c9c6c6;
  }

  .col-spacing {
    margin-bottom: 30px;
  }

  .container-traducciones {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ;
    
  }

  .traducciones {
    margin-bottom: 10px;
  }
</style>
