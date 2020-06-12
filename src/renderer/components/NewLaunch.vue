<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          起動
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">起動</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="loginForm">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="email" :rules="emailRules" label="Email/UserName" required clearable />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    :rules="passRules"
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    required
                    clearable
                    @click:append="showPassword = !showPassword"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <small>マインクラフのアカウントを入力してください。(未実装)</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="dialog = false">
            キャンセル
          </v-btn>
          <div class="login-btn">
            <v-btn :loading="loading" color="blue darken-1" text @click="login">
              起動
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
const { Client, Authenticator } = require('minecraft-launcher-core')
const launcher = new Client()

export default {
  data: () => ({
    dialog: false,
    showPassword: false,
    password: '',
    passRules: [(v) => !!v || '必須', (v) => (v && v.length >= 8) || 'err'],
    email: '',
    emailRules: [
      (v) => !!v || '必須',
      (v) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || '正しいアドレスではありません。'
    ]
  }),
  methods: {
    login() {
      if (this.$refs.loginForm.validate()) {
        // this.loading = true
        const opts = {
          clientPackage: null,
          // For production launchers, I recommend not passing
          // the getAuth function through the authorization field and instead
          // handling authentication outside before you initialize
          // MCLC so you can handle auth based errors and validation!
          authorization: Authenticator.getAuth(this.email, this.password),
          root: './minecraft',
          forge: './minecraft/forge/forge-1.7.10-10.13.4.1614-1.7.10-universal.jar',
          version: {
            number: '1.7.10',
            type: 'release'
          },
          memory: {
            max: '6000',
            min: '4000'
          }
        }

        launcher.launch(opts)

        launcher.on('debug', (e) => console.log(e))
        launcher.on('data', (e) => console.log(e))
      }
    }
  }
}
</script>
