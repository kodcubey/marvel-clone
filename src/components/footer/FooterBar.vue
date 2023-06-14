<template>
  <div class="footer-content">
    <p>@copyright {{ new Date().getFullYear() }}</p>
  </div>
</template>
<script>
export default {
  name: "FooterBar",
};
</script>
<style scoped>
.footer-content {
  clear: left;
}
</style>
