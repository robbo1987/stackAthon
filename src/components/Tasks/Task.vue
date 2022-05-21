<template>

      <q-item 

        @click="updateTask({id:id, updates: { completed: !task.completed}})"
        clickable
        :class="!task.completed ? 'bg-orange-1' : 'bg-teal-1' "
        v-ripple>
        <q-item-section side top>
          
          <q-checkbox 
          :value="task.completed"
          class="no-pointer-events" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{'text-strike' : task.completed}"
           >{{ task.name }} </q-item-label>
       </q-item-section>


       <q-item-section 
        v-if='task.dueDate'
        side>
         <div class='row'>
           <div class="column justify-center">
                <q-icon name="event" size="18px" class="q-mr-xs"/>
            </div>
          <div class='column'>
            <q-item-label caption class="row justify-end"> {{task.dueDate}}</q-item-label>
            <q-item-label caption class="row justify-end"> <small>{{task.dueTime}}</small></q-item-label> 
          </div>
        </div>
         </q-item-section>
          
          <q-item-section side>
            <div class="row">
            </div>
            <q-btn flat 
            @click.stop="showEditTask = true"
            round 
            dense
            color="primary"
            icon ="edit" />

             <q-btn flat 
            @click.stop="promptToDelete(id)"
            round 
            dense
            color="red"
            icon ="delete" />

          </q-item-section >

      <q-dialog v-model="showEditTask">
      <edit-task 

        @close="showEditTask=false"
        :task="task"
        :id="id" />
    </q-dialog>
  
         
      </q-item>


 
</template>

<script>

import { mapActions } from "vuex"

export default {


  props: ['task','id'],
  data()
  {
    return {
      showEditTask : false
    }

  }
  ,
  methods: {
    ...mapActions('tasks', ['updateTask','deleteTask']),
    promptToDelete(id) {
        this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to Delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components: {
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default

  }
}

</script>

<style scoped>

</style>