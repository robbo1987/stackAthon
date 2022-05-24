<template>
  <q-page padding>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <div class="text-h6">Login</div>
          Login here
        </q-tab-panel>

        <q-tab-panel name="register">
          <div class="text-h6">Register</div>
          Register here
          <form @submit.prevent="submitForm">
            <q-input
              outlined
              v-model="formData.email"
              label="Email"
              stack-label
              class="col"
              :rules="[
                (val) =>
                  isValidEmailAddress(val) ||
                  'Please enter valid email address',
              ]"
              lazy-rules=""
            />
            <q-input
              outlined
              v-model="formData.password"
              :rules="[
                (val) => val.length >= 6 || 'Please use 6 or more characters',
              ]"
              label="Password"
              type="password"
              stack-label
              class="col"
              lazy-rules=""
            />

            <div class="row">
              <q-space />
              <q-btn color="primary" label="Register" type="submit" />
            </div>
          </form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "register",
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("hello world");
    },
    isValidEmailAddress(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
  },
};
</script>
