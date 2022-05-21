<template>
  <q-page class="q-pa-md"> 
        <q-list 
        v-if="Object.keys(tasksToDo).length"
        separator
        bordered >
      
        <task
         v-for="(task,key) in tasksToDo"
        :key=key
        :task="task"
        :id="key"
        ></task>

     
    </q-list>
      <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click= "showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
       />

    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask=false" />
    </q-dialog>


  </q-page>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('tasks', ['tasksToDo'])
  } ,
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'add-task': require('components/Tasks/Modals/AddTask.vue').default,
  },
  data() {
    return{
          
          showAddTask: true
    }
  }
 
};
</script>

<style scoped>

</style>
