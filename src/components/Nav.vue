<template>
  <nav id="navbar">
    <div class="flex ml-10">
      <div class="logo_l">
        <img src="../assets/logo.png" width="30" />
      </div>
      <p id="pseudo">Sidiah</p>
    </div>
    <div class="flex mr-10" v-if="windowWidth > 768">
      <p>Stalk moi ici -></p>
      <a target="_blank" href="https://instagram.com/Sidiah">
        <div class="logo">
          <img src="../assets/instagram.png" width="30" />
        </div>
      </a>
      <a target="_blank" href="https://twitter.com/Sidiah_">
        <div class="logo_r">
          <img src="../assets/twitter.png" width="30" />
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: function() {
    return { windowWidth: window.innerWidth };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  }
};
</script>

<style>
</style>