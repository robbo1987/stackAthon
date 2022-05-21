<template>
  <q-page class="q-pa-md"> 

        <div class="row q-mb-lg">

        <search />
        <sort />

        </div>
        <p
        v-if="search && !Object.keys(tasksToDo).length && !Object.keys(tasksCompleted).length"
        >No Search Results </p>

        <no-tasks
           v-if="!Object.keys(tasksToDo).length && !search"
         >
        </no-tasks>
   
        <tasks-to-do
        v-if="Object.keys(tasksToDo).length"
        :tasksToDo="tasksToDo"
        />
        <hr>

        <tasks-completed
          :tasksCompleted="tasksCompleted"
          v-if="Object.keys(tasksCompleted).length"
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

import {  mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasksToDo','tasksCompleted']),
    ...mapState('tasks', ['search'])
  } ,
  components: {
    
    'add-task': require('components/Tasks/Modals/AddTask.vue').default,
    'tasks-to-do': require('components/Tasks/Modals/TasksToDo.vue').default,
    'tasks-completed': require('components/Tasks/Modals/TasksCompleted.vue').default,
    'no-tasks': require('components/Tasks/Modals/NoTasks.vue').default,
    'search': require('components/Tasks/Modals/Tools/Search.vue').default,
    'sort': require('components/Tasks/Modals/Tools/Sort.vue').default

   
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })

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
