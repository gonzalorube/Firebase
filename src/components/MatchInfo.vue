<template>
  <div class="row g-i">
    <a type="button" class="btn btn-sq-lg btn-info teams">
<!-- <div class="row"><div class="col-3"><img class="t-shirt" id="t1" src="../assets/t-shirt.png"></div><div class="col-3"><img class="t-shirt" id="t2" src="../assets/t-shirt.png"></div></div> -->
      <h3 class="te">{{ $route.params.local }} vs. {{ $route.params.visitante }}</h3><br><h3 class="m-i" id="te">Teams</h3></a>
    <a type="button" class="btn btn-sq-lg btn-info location" :href="$route.params.mapa"><h6 class="lu"><em>{{ $route.params.lugar }}</em></h6><br><h3 class="m-i" id="lo">Location</h3></a>
    <a type="button" class="btn btn-sq-lg btn-info time"><h2 class="ho">{{ $route.params.hora}}</h2><br><h3 class="m-i" id="ti">Time</h3></a>
    <a type="button" class="btn btn-sq-lg btn-info date"><h3 class="fe">{{ $route.params.fecha}}</h3><br><h3 class="m-i" id="da">Date</h3></a>
  </div>
</template>

<script>
export default {
  name: "MatchInfo",
  props: {
    local: String,
    visitante: String,
    lugar: String,
    hora: String,
    fecha: String,
    mapa: String
  }
}
</script>

<style>
a {
  margin: 0;
  padding: 0;
}
.btn-info {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid #707070;
  border-radius: 0;
}
.btn-sq-lg {
    width: 150px !important;
    height: 150px !important;
}
.teams {
  background-color: #51656B;
}
.location {
  background-color: #283027;
}
.time {
  background-color: #3E2121;
}
.date {
  background-color: #033949;
}
.g-i {
  margin-bottom: 5px;
}
.m-i {
  font-size: 20px;
  color: #000;
  margin: 0;
}
#te {
  margin-top: 0px;
  margin-bottom: 0px;
  z-index: 1;
}
#lo {

}
#ti {

}
#da {

}
.te {
  margin-top: 43px;
  margin-bottom: 0px;
  z-index: 1;
}
.lu {
  margin-top: 49px;
  margin-bottom: 6px;
}
.fe {
  margin-top: 39px;
  margin-bottom: 5px;
}
.ho {
  margin-top: 35px;
  margin-bottom: 0px;
}
.t-shirt {
  position: relative;
  width: 60px;
  height: auto;
}
#t1 {
  float: left;
}
#t2 {
  float: right;
}
</style>
