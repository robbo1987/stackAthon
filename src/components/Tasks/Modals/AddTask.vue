<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <modal-task-date
          :dueDate.sync="taskToSubmit.dueDate"
          @clear="clearDueDate"
        />

        <modal-task-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>

      <modal-task-button />
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
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    },
  },
  components: {
    "modal-header":
      require("src/components/Tasks/Modals/Shared/modal-header.vue").default,
    "modal-task-name":
      require("src/components/Tasks/Modals/Shared/modal-task-name.vue").default,
    "modal-task-date":
      require("src/components/Tasks/Modals/Shared/modal-task-date.vue").default,
    "modal-task-time":
      require("src/components/Tasks/Modals/Shared/modal-task-time.vue").default,
    "modal-task-button":
      require("src/components/Tasks/Modals/Shared/modal-task-button.vue")
        .default,
  },
};
</script>
