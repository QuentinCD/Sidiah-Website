<template>
  <div>
    <Nav />
    <div id="content">
      <TitrePage v-if="windowWidth > 768" title="Viens discuter sur mon live !" />
      <StreamEtChat v-if="windowWidth > 768" />
      <StreamMobile v-else />
      <div class="more">
        <div class="a-propos">
          <p>À propos</p>
          <p>
            Étudiante en Web Marketing, passionnée de jeux vidéos et d'e-sport.
            <br />Actuellement, je joue à:
          </p>
          <ul>
            <li>Fortnite (semi-bambi)</li>
            <li>League of legends (gold)</li>
            <li>Assassin's Creed Odyssey</li>
            <li>Ark Survival Evolved...</li>
          </ul>
        </div>
        <ButtonsStream />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ButtonsStream from "@/components/ButtonsStream.vue";
import StreamEtChat from "@/components/StreamEtChat.vue";
import StreamMobile from "@/components/StreamMobile.vue";
import TitrePage from "@/components/TitrePage.vue";
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    ButtonsStream,
    StreamEtChat,
    StreamMobile,
    TitrePage,
    Footer,
    Nav
  },
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

<style scoped>
</style>
