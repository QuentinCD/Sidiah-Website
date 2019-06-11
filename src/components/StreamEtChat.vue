<template>
  <div id="stream">
    <div id="flux">
      <iframe
        src="https://player.twitch.tv/?channel=sidiahtv&autoplay=1"
        scrolling="none"
        allowfullscreen="allowfullscreen"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="windowWidth > 1380" id="chat">
      <iframe
        defer
        id="if-chat"
        src="https://www.twitch.tv/embed/sidiahtv/chat?darkpopout"
        scrolling="none"
        class="active"
        width="340"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "StreamEtChat",
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
