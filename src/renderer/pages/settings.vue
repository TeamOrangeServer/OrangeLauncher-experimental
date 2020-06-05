<template>
  <v-app>
    <div class="sp_s_top">
      <p class="setting_title indigo white--text">Main Config</p>
    </div>
    <v-card outlined left>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >ダークモード切り替え</v-list-item-title
          >
          <v-divider></v-divider>
          <v-list-item-subtitle
            >OrangeLauncherのテーマを変更します。</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <dsw />
      </v-card-actions>
    </v-card>
    <br />
    <v-card outlined left>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >ハードウェアアクセラレーション無効化(未実装)</v-list-item-title
          >
          <v-divider></v-divider>
          <v-list-item-subtitle
            >※再起動が必要です。(未実装)</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
          <v-switch></v-switch>
      </v-card-actions>
    </v-card>
    <hr class="sp_s_bottom" />
    <p class="sp_s_bottom">その他</p>
    <div class="sp_s_bottom text-center">
      <v-btn to="edition" style="width: 90%;">他の配布形態</v-btn>
    </div>
    <div class="sp_s_bottom text-center">
      <v-btn to="oss" style="width: 90%;">オープンソースライセンス</v-btn>
    </div>
    <hr class="sp_s_bottom" />
    <div class="sp_s_bottom">
      <p>バージョン</p>
      <p id="lversion">{{ lversion || '不明' }}</p>
    </div>
  </v-app>
</template>

<script>

import dsw from '~/components/DarkSwitch.vue'

// ????
const lversion = require('../../../package.json').version

export default {
  components: {
    dsw
  }
}
</script>

<style></style>
