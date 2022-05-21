<template>
    <div>
      <q-banner
      dense 
      inline-actions 
      class="text-white bg-red text-center">
      <span class="text-bold text-subtitle1">TO DO</span>
        </q-banner>
  
       <q-list 
        
        separator
        bordered >
      
        <task
         v-for="(task,key) in tasksToDo"
        :key=key
        :task="task"
        :id="key"
        ></task>
        </q-list>
        </div>

</template>

<script> 

export default {

  props: ['tasksToDo'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
  }


}
</script>