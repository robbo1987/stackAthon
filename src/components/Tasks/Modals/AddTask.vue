<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn flat round dense v-close-popup icon="close" />
    </q-card-section>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <div class="rov q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            :rules="[(val) => !!val || 'Field is required']"
            autofocus
            ref="name"
            label="Task name"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.name"
                name="close"
                @click="taskToSubmit.name = ''"
                class="curson-pointer"
              />
            </template>
          </q-input>
        </div>

        <div class="rov q-mb-sm">
          <q-input outlined v-model="taskToSubmit.dueDate" label="Due Date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
              <q-icon
                v-if="taskToSubmit.dueDate"
                name="close"
                @click="clearDueDate"
                class="curson-pointer"
              />
            </template>
          </q-input>
        </div>

        <div v-if="taskToSubmit.dueDate" 
          class="rov q-mb-sm">
          <q-input 
            outlined 
            label="Due Time" 
            v-model="taskToSubmit.dueTime">
            <template v-slot:append>
              
            
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn 
                        v-close-popup 
                        label="Close" 
                        color="primary" flat />
                    </div>
                  </q-time>
                   
                </q-popup-proxy>
              </q-icon>
              <q-icon
                    v-if="taskToSubmit.dueTime"
                    name="close"
                    @click="taskToSubmit.dueTime = ''"
                    class="curson-pointer"
                  />
            </template>
          </q-input>
            </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Save" color="primary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false,
      },
    };
  },

  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
      
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
    clearDueDate(){
      this.taskToSubmit.dueDate= ''
      this.taskToSubmit.dueTime =''
    }
  },
};
</script>
