<template>
    <div class="p-10">
        <button class="p-3 bg-black text-white">STEP 1: Request TOKEN</button>
        <p>OAuth Token: {{oAuthToken}}</p>
        <p>OAuth Token Secret: {{oAuthTokenSecret}}</p>
    </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      oAuthToken: '',
      oAuthTokenSecret: '',
      oAuthCallBackConfirmed: true
    }
  },
  methods: {
      requestToken: async () => {
        
      }
  }
}
</script>
