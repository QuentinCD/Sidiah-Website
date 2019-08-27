<template>
  <div class="footer">
    <a href="www.google.fr">Mention légale</a>
  </div>
</template>

<script>
export default { name: "Footer" };
</script>

<style scoped>
.footer {
  display: flex;
  background-color: black;
  padding: 20px 20%;
  opacity: 0.6;
  margin-top: 40px;
}
.footer a {
  text-align: center;
  color: #fff;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>