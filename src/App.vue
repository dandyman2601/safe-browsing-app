<template>
  <div id="app">
    <div class="main-wrapper">
      <site-status />
    </div>
  </div>
</template>

<script>
import SiteStatus from "./components/SiteStatus.vue";

export default {
  components: {
    SiteStatus,
  },
};
</script>

<style>
.main-wrapper {
  margin: auto;
}
</style>
