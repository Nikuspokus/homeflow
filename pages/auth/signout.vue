<template>
  <h1>Sign out</h1>
</template>

<script>
export default {
  async AsyncData() {
    $nuxt.$fire.auth.signOut()
  },
}
</script>
