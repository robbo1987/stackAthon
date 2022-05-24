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
          <form>
      <q-input 
      outlined
      v-model="formData.email"
      label="Email"
      stack-label
      class='col'
      />
       <q-input 
      outlined
      v-model="formData.password"
      label="Password"
      type='password'
      stack-label
      class='col'
      />
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
        email: '',
        password:''
      }
    }
  }
};
</script>
