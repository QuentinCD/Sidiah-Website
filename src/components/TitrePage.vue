<template>
  <h1>
    <i class="fab fa-twitch"></i>
    &nbsp;&nbsp;{{ title }}
  </h1>
</template>

<script>
export default {
  name: "TitrePage",
  props: {
    title: String
  }
};
</script>
