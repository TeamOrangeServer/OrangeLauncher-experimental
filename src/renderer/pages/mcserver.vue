<template>
  <v-col fluid class="ma-0 pa-0">
    <div class="text-center">
      <!--<logo />
        <vuetify-logo />-->
      <v-card>
        <template>
          <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            lazy-src="https://picsum.photos/id/11/100/60"
          >
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-2 font-weight-thin mb-4 font1">
                  OrangeLauncher
                </h1>
                <h4 class="subheading font-weight-thin font3">
                  Experimental
                </h4>
              </v-col>
            </v-row>
          </v-parallax>
        </template>
        <div class="text-center">
          <v-card-title style="display: inline;">
            <p>Welcom</p>
          </v-card-title>
        </div>
      </v-card>
    </div>
  </v-col>
</template>
<style>
.container {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  props: {
    attrs: {
      type: Object,
      default: () => ({})
    }
  },

  data: (vm) => ({
    initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false,
    admins: [
      ['Management', 'mdi-home'],
      ['Settings', 'mdi-settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
  }),

  beforeDestroy() {
    if (!this.$vuetify) return

    this.$vuetify.theme.dark = this.initialDark
  }
}
</script>
