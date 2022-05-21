<template>
  <q-page class="q-pa-md"> 
   
        <tasks-to-do
        :tasksToDo="tasksToDo"
        />
        <hr>

        <tasks-completed
          :tasksCompleted="tasksCompleted"
         />



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
import TasksToDo from 'components/Tasks/Modals/TasksToDo.vue';
import {  mapGetters } from 'vuex'
import TasksCompleted from 'components/Tasks/Modals/TasksCompleted.vue';
export default {
  computed: {
    ...mapGetters('tasks', ['tasksToDo','tasksCompleted'])
  } ,
  components: {
    
    'add-task': require('components/Tasks/Modals/AddTask.vue').default,
    'tasks-to-do': require('components/Tasks/Modals/TasksToDo.vue').default,
    'tasks-completed': require('components/Tasks/Modals/TasksCompleted.vue').default
   
  },
  data() {
    return{
          
          showAddTask: false
    }
  }
 
};
</script>

<style scoped>

</style>
