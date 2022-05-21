<template>
      <div>
      <q-banner
      dense 
      inline-actions 
      class="text-white bg-teal-4 text-center">
      <span class="text-bold text-subtitle1">Completed Tasks</span>
        </q-banner>
  
        <q-list 
        
        separator
        bordered >
      
        <task
         v-for="(task,key) in tasksCompleted"
        :key=key
        :task="task"
        :id="key"
        ></task>
     
        </q-list>
        </div>

</template>


<script> 

export default {

  props: ['tasksCompleted'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
  }


}
</script>