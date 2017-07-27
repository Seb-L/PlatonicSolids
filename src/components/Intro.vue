<template>
  <Row class="intro section" type="flex" align="middle">
    <Col span="24" class="user-info">
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt="">
      </div>
      <h1>Sébastien Lombard</h1>
      <p>
        Lead Front-End Developer<br>
        at Numberly / 1000mercis Group
      </p>
      <br>

      <small>FIND ME ON:</small>
      <div class="social">
        <Tooltip content="LinkedIn" placement="bottom">
          <a href="https://www.linkedin.com/in/sebastienlombard" target="_blank"><Icon type="social-linkedin"></Icon></a>
        </Tooltip>
        <Tooltip content="Twitter" placement="bottom">
          <a href="https://twitter.com/Seb_L_" target="_blank"><Icon type="social-twitter"></Icon></a>
        </Tooltip>
        <Tooltip content="Github" placement="bottom">
          <a href="https://github.com/Seb-L" target="_blank"><Icon type="social-github"></Icon></a>
        </Tooltip>
        <Tooltip content="Codepen" placement="bottom">
          <a href="https://codepen.io/SebL/" target="_blank"><Icon type="social-codepen"></Icon></a>
        </Tooltip>
      </div>
    </Col>

    <a href="#more-details" class="more-details" v-smooth-scroll>
      <small>More Details</small><br>
      <Icon type="chevron-down"></Icon>
    </a>
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
  background-color: #f7f7f7;
  min-height: 100vh;
}
.user-info{
  text-align: center;
}
.user-info p{
  font-style: italic;
  line-height: 1;
  color: #95a5a6;
}
.avatar{
  border-radius: 5000px;
  width: 150px;
  height: 150px;
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
.more-details{
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  line-height: 1.2;
}
</style>
