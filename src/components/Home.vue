<template>
  <div class="container">
    <a-auto-complete
      v-model:value="value"
      :options="options"
      class="input-principal"
      placeholder="input here"
      @search="onSearch"
    />
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const value = ref("");
  const options = ref([]);

  const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  };
};

  const onSearch = (searchText) => {
    options.value = !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  };


</script>

<style scoped>
  .input-principal {
    width: 80%;
    height: 40px;
    margin-top: 40px;
  }

  .container {
    display: flex;
    justify-content: center;
    height: 78vh;
  }
</style>
