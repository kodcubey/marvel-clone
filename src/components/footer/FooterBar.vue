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
  position: fixed;
  left: 0;
  bottom: 0;
  clear: left;
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151515;
}

.footer-content p {
  color: white;
}
</style>
