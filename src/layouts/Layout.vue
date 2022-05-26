<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center"> Robbys ToDo App </q-toolbar-title>
        <q-btn
          v-if="!loggedIn"
          to="auth"
          flat
          color="secondary"
          icon-right="account_circle"
          label="login"
          class="absolute-right"
         />

          <q-btn
          @click="logoutUser"
          v-if="loggedIn"
          flat
          color="secondary"
          icon-right="account_circle"
          label="logout"
          class="absolute-right"
         />
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.id"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint='767'
      :width="225"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <q-item v-for="nav in navs" :key="nav.id" :to="nav.to" class="text-grey-4" exact clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import {mapState, mapActions} from "vuex"
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: "To Do",
          icon: "list",
          to: "/",
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/settings",
        },
      ],
    };
  },

  computed: {
    ...mapState('auth',['loggedIn'])
  },
  methods: {
    ...mapActions('auth',['logoutUser'])
  }
};
</script>
<style lang='scss'scoped>
@media screen and (min-width: 768px) {
  .q-footer {
    display:none
  }
}
.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
