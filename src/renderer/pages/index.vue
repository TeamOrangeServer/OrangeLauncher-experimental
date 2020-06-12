<template>
  <div>
    <template>
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        lazy-src="https://picsum.photos/id/11/100/60"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-2 font-weight-thin mb-4 font1">
              Welcom to OrangeLauncher
            </h1>
            <h4 class="subheading font-weight-thin font3">
              Version:{{ require('./../../../package.json').version }} Experimental
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </template>
    <launch />
  </div>
</template>

<script>
import launch from '~/components/Launch'

export default {
  components: {
    launch
  }
}

//const { Client, Authenticator } = require('minecraft-launcher-core');
//const launcher = new Client();
/*
const opts = {
    clientPackage: null,
    // For production launchers, I recommend not passing 
    // the getAuth function through the authorization field and instead
    // handling authentication outside before you initialize
    // MCLC so you can handle auth based errors and validation!
    authorization: Authenticator.getAuth("sousuke20xx@gmail.com", ""),
    root: "./minecraft",
    forge: "./minecraft/forge/forge-1.7.10-10.13.4.1614-1.7.10-universal.jar",
    version: {
        number: "1.7.10",
        type: "release",
        //custom: "1.7.10-Forge10.13.4.1614-1.7.10"
    },
    memory: {
        max: "6000",
        min: "4000"
    }
}

launcher.launch(opts);

launcher.on('debug', (e) => console.log(e));
launcher.on('data', (e) => console.log(e));*/
</script>
