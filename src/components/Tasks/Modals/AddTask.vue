<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn flat round dense v-close-popup icon="close" />
    </q-card-section>

    <q-card-section class="q-pt-none">

        <div class="rov q-mb-sm">
       <q-input
        outlined
        v-model="taskToSubmit.name"
        label="Task name"
        class="col"
        />
        </div>

        <div class="rov q-mb-sm">
        <q-input 
        outlined
        v-model="taskToSubmit.dueDate" 
        label= "Due Date"
        >
         <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="taskToSubmit.dueDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          
        </q-input>
        </div>

        <div class="rov q-mb-sm">
        <q-input 
        outlined
        label="Due Time"
        v-model="taskToSubmit.dueTime" >

         <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToSubmit.dueTime">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
               </q-time>
             </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        </div>
     
    </q-card-section>
   

    <q-card-actions align="right">
      <q-btn flat label="Save" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {

  data() {
    return{
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false

      }
    }
  }
};
</script>
