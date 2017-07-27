<template>
  <Row class="intro section" type="flex" align="middle">
    <Col span="24" class="user-info">
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt="">
      </div>
      <h1>Sébastien Lombard</h1>
      <p>
        Lead Front-End Developer<br>
        at Numberly Group
      </p>
      <br>

      <div>
        After 2 years and half as a Sound Technician,<br>
        5 years and half in Graphic Design, Flash and HTML Integration,<br>
        I dragged myself into Front-End Development in 2014.
      </div>
      <br>

      <small>FIND ME ON:</small>
      <div class="social">
        <a href="https://www.linkedin.com/in/sebastienlombard" target="_blank"><Icon type="social-linkedin"></Icon></a>
        <a href="https://twitter.com/Seb_L_" target="_blank"><Icon type="social-twitter"></Icon></a>
        <a href="https://github.com/Seb-L" target="_blank"><Icon type="social-github"></Icon></a>
        <a href="https://codepen.io/SebL/" target="_blank"><Icon type="social-codepen"></Icon></a>
      </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.intro{
  height: 100vh;
}
.user-info{
  text-align: center;
}
.user-info p{
  font-style: italic;
  line-height: 1;
  color: #acacac;
}
.avatar{
  border-radius: 5000px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 0 auto;
}
.avatar img{
  display: block;
  max-width: 100%;
  height: auto;
}
.description{
  text-align: center;
}
.social{
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.social a{
  font-size: 2rem;
  display: inline-block;
  margin: 0 0.5rem;
}
</style>
