<template lang="">
  <div class="creators-content">
    {{ role }} {{ name }} <a :href="resourceURI">link</a>
  </div>
</template>
<script>
export default {
  name: "CreatorsComponent",
  props: {
    resourceURI: String,
    role: String,
    name: String,
  },
};
</script>
<style scoped>
.creators-content {
  text-align: left;
  font-size: 18px;
}

.creators-content a {
  color: #e62429;
}
</style>
