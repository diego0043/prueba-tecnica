<template>
  <a-row class="item">
    <a-col class="item-table" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
      {{ index }}
    </a-col>
    <a-col class="item-table" :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
      <img class="img-item" :src="flag" alt="flag" />
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
      <a-button type="link">Ver mas</a-button>
    </a-col>
  </a-row>
</template>

<script setup>
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
</style>
