<template>
  <div>
    <h1>{{ part.title}}</h1>
    <div>
      {{part.description}}
    </div>
  </div>

</template>

<script>
import partsData from '../../data/parts';

export default {
  name: 'PartInfo',
  props: ['partType', 'id'],
  computed: {
    part() {
      const { partType, id } = this;
      return partsData[partType].find((part) => part.id === +id);
    },
  },
};

</script>

<style>

</style>
