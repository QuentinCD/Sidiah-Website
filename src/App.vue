<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  color: white;
  font-family: "Forte", serif;
  margin: 0;
  padding: 0;
  background-image: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
#navbar {
  display: flex;
  justify-content: space-between;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 10px 0;
}
footer {
  margin-top: 150px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 10px 0;
  height: 60px;
}
#content {
  width: 80%;
  margin: auto;
}
#pseudo {
  font-size: 30px;
  line-height: 0;
}
.logo {
  display: flex;
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border: 1px white solid;
}
.logo img {
  width: 30px;
}

h1 {
  color: white;
  font-weight: 900;
}
.fa-twitch {
  font-size: 50px;
}
#stream {
  display: flex;
  width: 100%;
  height: 700px;
}
#flux {
  width: 100%;
}
#chat {
  width: 20%;
}
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mr-10 {
  margin-right: 10%;
}
.ml-10 {
  margin-left: 10%;
}
.more {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.a-propos p {
  margin-top: 30px;
}
.a-propos ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.buttons {
  background-color: #26262b;
  border-radius: 20px;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.w-50 {
  width: 50%;
}
.just-sb {
  justify-content: space-between;
}
</style>
