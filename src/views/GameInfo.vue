<template>
  <div class="container-fluid">
    <Header />
    <div class="subtitle"><h6><em>Game Information</em></h6></div>
    <div v-for="matchinfo in matchesinfo">
      <MatchInfo v-bind="matchinfo" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue';
import MatchInfo from '../components/MatchInfo.vue';
import Footer from '../components/layouts/Footer.vue';

export default {
  name: "GameInfo",
  components: {
    Header,
    MatchInfo,
    Footer
  },
  data () {
    return {
      matchesinfo: [
        {

        }
      ]
    }
  }
}
</script>

<style>

</style>
