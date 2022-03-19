<template>
    <div class="p-10">
        <h1 class="text-xl">Example to get User's Access token</h1>
        <p class="text-gray mb-4">(So we can do anything in behalf of the user)</p>
        <button class="p-3 bg-black text-white" @click="requestToken">STEP 1: CLICK to Request TOKEN</button>
        <p>OAuth Token: {{oAuthToken}}</p>
        <p>OAuth Token Secret: {{oAuthTokenSecret}}</p>

        <button v-if="oAuthToken" class="p-3 bg-black text-white" @click="redirect">STEP 2: CLICK to Redirect</button>
    </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      oAuthToken: '',
      oAuthTokenSecret: '',
      oAuthCallBackConfirmed: true
    }
  },
  methods: {
      requestToken () {
        axios
          .get<{oauth_token: string; oauth_token_secret: string}>("/api/twitter/auth/requesttoken")
          .then(res => {
            const oauthData = res.data
            console.log("oauthData",oauthData)
            console.log(this)
            // if(oauthData.oauth_token && oauthData.oauth_token_secret) {
            //   this.oAuthToken = oauthData.oauth_token
            //   this.oAuthTokenSecret = oauthData.oauth_token_secret
            // }
          })
          .catch(error => console.error(error))
      },
      redirect() {
        // window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${this.oAuthToken}`
      }
  }
}
</script>
