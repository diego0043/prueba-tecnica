<template>
  <div>
    <a-row class="header-container">
      <a-col class="header-table" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <span>#</span>
      </a-col>
      <a-col class="header-table" :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <span>Bandera</span>
      </a-col>
      <a-col class="header-table" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <span>Nombre</span>
      </a-col>
      <a-col class="header-table" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <span>Población</span>
      </a-col>
      <a-col class="header-table" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"> Opciones </a-col>
    </a-row>
    <TableItem
      v-for="(item, index) in data"
      :key="index"
      :index="index + 1"
      :flag="item.flags.png"
      :name="item.name.common"
      :poblation="item.population"
      :countrie="item"
    />
  </div>
</template>

<script setup>
  import TableItem from "@/components/TableItem.vue";
  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped>
.header-table {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container {
  background-color: #f0f2f5;
  border-radius: 5px;
  margin-bottom: 20px;
  height: 30px;
}
</style>
