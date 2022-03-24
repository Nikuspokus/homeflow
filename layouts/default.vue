<template>
  <v-app>
    <v-content>
      <!-- <div class="d-none d-md-block"></div> -->
      <div class="d-block">
        <v-container fluid class="jello-topbar">
          <v-row no-gutters align="center" justify="start">
            <v-col cols="1" class="flex-grow-0 flex-shrink-0">
              <v-icon @click="drawer = true">mdi-menu</v-icon>
            </v-col>
            <v-col
              cols="1"
              style="min-width: 100px; max-width: 100%"
              class="flex-grow-1 flex-shrink-0"
            >
              <v-row no-gutters align="center" justify="center">
                <nuxt-link to="/">
                  <v-row no-gutters align="center" justify="center">
                    <h3 class="logo">Jello</h3>
                  </v-row>
                </nuxt-link>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-navigation-drawer v-model="drawer" fixed left class="d-block">
          <v-container fluid class="jello-topbar">
            <v-row no-gutters align="center" justify="space-between">
              <v-icon @click="drawer = false">mdi-close</v-icon>
              <v-row no-gutters align="center" justify="end">
                <p class="jello-user">
                  Signed in as <br />
                  {{ $nuxt.$fire.auth.currentUser.email }}
                </p>
                &nbsp;
                <v-icon>mdi-acount-circle-outline</v-icon>
              </v-row>
            </v-row>
          </v-container>
          <v-container class="d-block menu-items">
            <div class="d-flex flex-column">
              <div class="d-flex">
                <br />
              </div>
              <div class="d-flex">
                <nuxt-link to="/">
                  <v-icon>mdi-view-dashboard-variant-outline</v-icon
                  >&nbsp;&nbsp;<b>My boards</b>
                </nuxt-link>
              </div>
              <div class="d-flex">
                <nuxt-link to="/auth/signout">
                  <v-icon>mdi-exit-to-app</v-icon>&nbsp;&nbsp;<b>Sign out</b>
                </nuxt-link>
              </div>
            </div>
          </v-container>
        </v-navigation-drawer>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
