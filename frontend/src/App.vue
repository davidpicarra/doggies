<template>
  <section class="section">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~bulma';
$fa-font-path: '~font-awesome/fonts';
@import '~font-awesome/scss/font-awesome.scss';
</style>
