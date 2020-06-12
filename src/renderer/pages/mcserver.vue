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
                  Mod Pack
                </h1>
                <h4 class="subheading font-weight-thin font3">
                  さぁ、新たな生活を・・・
                </h4>
              </v-col>
            </v-row>
          </v-parallax>
        </template>
        <p class="card_bottom" />
        <h2 class="font-weight-light">
          インストールされたModPack
        </h2>
        <p class="card_bottom" />
      </v-card>
    </div>
    <p class="card_bottom" />
    <v-card>
      <v-card-text>ModPackがありません。</v-card-text>
      <v-card-actions>
        <v-btn text disabled>
          起動
        </v-btn>
      </v-card-actions>
    </v-card>
    <p class="card_bottom" />
    <v-card>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <v-card-text> モック<br />正式版ではこの項目は削除されます。 </v-card-text>
      <v-card-actions>
        <launch />
      </v-card-actions>
    </v-card>
    <p class="card_bottom" />
    <div class="text-center">
      <v-card-title style="display: inline;">
        <p>Mod Packの追加は専用の招待リンク(未実装)または、下のボタンでできます。</p>
      </v-card-title>
      <p class="card_bottom" />
      <v-btn>招待リンク</v-btn>
      <v-btn>リポジトリ</v-btn>
      <p class="card_bottom" />
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
import launch from '~/components/NewLaunch'

export default {
  components: {
    launch
  },
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
