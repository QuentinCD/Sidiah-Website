<template>
  <div>
    <div id="content">
      <TitrePage title="Viens discuter sur mon live !" />
      <StreamEtChat />
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
import TitrePage from "@/components/TitrePage.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    ButtonsStream,
    StreamEtChat,
    TitrePage,
    Footer
  },
  data: {
    window: {
      width: 0
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  }
};
</script>

<style scoped>
</style>
