<template>
  <div class="container-fluid fondo">
<!--    <router-link :to="{ name: 'gameinfo', params: {id: item.id} }"v-for="(item, index) of partidos" :key="index">-->
     <button type="button" class="btn btn-primary btn-lg" :id="id">
       <div class="row">
      <!--   <div class="col-1"></div>-->
         <div class="col-2 font fecha"><h6><em>{{fecha}}</em></h6></div>
         <div class="col-7 font match"><h5><strong>{{local}} vs. {{visitante}}</strong></h5><h6 class="lugar">{{lugar}}</h6></div>
         <div class="col-3 font hora"><h6><em>{{hora}}</em></h6></div>
      <!--   <div class="col-1"></div>-->
       </div>
     </button>
<!--   </router-link>-->
 </div>
</template>

<script>
    export default {
   props: {
     id: String,
     fecha: String,
     local: String,
     visitante: String,
     lugar: String,
     hora: String
   },
   methods: {
   },
        name: "PartidoDelDia"
    }
</script>

<style>
  .btn{
        height: 45px;
        width: 295px;
        margin: 10px 0px;
        padding-top: 0;
      }
  .font{
        color: #BFBCBC;
        margin: 0px;
      }
  .btn-primary{
        background-color: #1E301E;
        border-radius: 0;
        border: 2px solid #333333;
       }
  .fondo{
        background-color: #1E1919;
      }
  .fecha{
        float:left;
        padding: 10px;
        margin: 0;
      }
  .hora{
        float: right;
        padding: 10px;
        margin: 0;
      }
  .match{
        position: absolute;
        padding: 0;
        margin: 0 0 0 90px;
      }
  h5{
        color: #BFBCBC;
        font-size: 22px;
        font-weight: lighter;
        margin: 0;
      }
  h6{
        color: #BFBCBC;
        font-size: 14px;
        font-weight: lighter;
        margin: 0;
      }
</style>
