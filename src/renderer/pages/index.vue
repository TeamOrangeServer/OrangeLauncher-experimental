<template>
  <div>
    <h1>Welcom to OrangeLauncher Experimental</h1>
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
