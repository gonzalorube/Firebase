<template>
  <div class="container-fluid footer">
    <div class="row">
      <div class="col-3 contact-left">
        <router-link to="/">
          <img class="contact-wpp" src="../../assets/logo_whatsapp.png">
        </router-link>
      </div>
      <div class="col-3 contact-left">
        <div class="contact-wpp-text">
          <h4><em>Contact w/ League</em></h4>
          <h4><em>Coordinator</em></h4>
        </div>
      </div>
      <div class="col-3 contact-right">
        <router-link to="/">
          <img class="contact-parents" src="../../assets/soccer.jpg">
        </router-link>
      </div>
      <div class="col-3 contact-right">
        <div class="contact-parents-text">
          <h4><em>Talk with other</em></h4>
          <h4><em>Parents</em></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
  .contact-right {
    float: right;
    margin-right: 20px;
  }
  .contact-parents {
    width: 40px;
    height: auto;
    border-radius: 40px;
    margin: 15px 0;
  }
  .contact-parents-text {
    width: 60px;
    margin: 0;
  }
  .contact-left {
    float: left;
  }
  .contact-wpp {
    width: 70px;
    height: auto;
    margin: 0px;
  }
  .contact-wpp-text {
    width: 80px;
    margin: 0px;
  }
  h4 {
    color: #BFBCBC;
    font-size: 9px;
    padding: 10px 0 0 0;
    margin: 0;
  }
</style>
