<template>
  <div class="content has-text-centered" id="home-content">
    <p>
      <img src="~assets/weshareashare_logo.png" :alt="description">
    </p>

    <h1 class="is-title is-bold">{{ name.replace('-', ' ') }}</h1>

    <p>
      <strong>{{ description }}</strong>
    </p>

  </div>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg
  }

}
</script>

<style lang="scss" scoped>
.is-title {
  text-transform: capitalize;
}

#home-content {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
