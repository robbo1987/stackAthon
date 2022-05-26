<template>
  <q-page padding>
    <q-card class="auth-tabs">
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
          <form @submit.prevent="submitForm">
            <q-input
              outlined
              v-model="formData.email"
              label="Email"
              stack-label
              class="col"
              ref="email"
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
              ref="password"
              stack-label
              class="col"
              lazy-rules=""
            />

            <div class="row">
              <q-space />
              <q-btn color="primary" label="Login" type="submit" />
            </div>
          </form>
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
              ref="email"
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
              ref="password"
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tab: "login",
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser",'loginUser']),
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === "login") {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData);
        }
      }
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
<style scoped>
.auth-tabs {
  max-width: 500px;
  margin: 0 auto;
}
</style>
