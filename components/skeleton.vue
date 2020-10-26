<template>
  <div class="profile-card">
    <div class="profile-image">
      <img
        class="profile-image__border"
        src="https://learnvue.co/wp-content/uploads/2020/04/img-border.png"
      />
      <img class="profile-image__img" />
    </div>
    <div class="profile-info">
      <span />
      <h3 />
      <p />
    </div>
  </div>
</template>
<style scoped>
.profile-card {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  min-height: 150px;
}
.profile-card .profile-image {
  float: left;
}
.profile-card .profile-image__img {
  width: 10%;
  padding-top: 10%;
  border-radius: 50%;
  background-color: #ddd;
  position: absolute;
}
.profile-card .profile-image__border {
  width: calc(10% + 20px);
  height: auto;
  position: absolute;
  top: 20px;
  left: 20px;
}

.profile-info {
  width: 85%;
  float: right;
  padding-left: 10px;
  box-sizing: border-box;
}
.profile-info span {
  min-width: 100px;
  height: 16px;
  display: inline-block;
  background-color: #ddd;
}

.profile-info h3 {
  content: " ";
  width: 250px;
  height: 24px;
  background-color: #ddd;
  margin: 10px 0;
}

.profile-info p {
  width: 80%;
  background-color: #ddd;
  height: 16px;
  line-height: 140%;
}
</style>
