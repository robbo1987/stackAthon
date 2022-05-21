<template>
  <q-select
    filled
    v-model="sortBy"
    :options="options"
    class="col q-ml-sm"
    label="sort"
    stack-label
    emit-value
    map-options
  />
</template>

<script>

import {mapState, mapActions} from "vuex"
export default {
  data() {
    return {
 
      options: [
        {
          label: "Name",
          value: "name",
        },
        {
          label: "Due Date",
          value: "dueDate",
        },
      ],
    };
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy:{
      get(){

        return this.sort

      },
      set(value) {
        this.setSort(value)
      }

    }
  },

  methods: {
    ...mapActions('tasks', ['setSort'])
  }
};
</script>

<style scoped>
.q-select {
  flex: 0 0 175px;
}
</style>
