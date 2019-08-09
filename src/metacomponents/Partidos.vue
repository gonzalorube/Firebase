<template>
  <div class="container-fluid">
  <div class="row subtitle"><h6><em>Next games</em></h6></div>
<!--      <div v-for="(partido, index) of partidos">-->
    <div class="row">
      <div class="col-12">
          <router-link :to="{ name: 'gameinfo', params: {id: partido.id, fecha: partido.fecha, local: partido.local, lugar: partido.lugar, visitante: partido.visitante, hora: partido.hora, mapa: partido.mapa} }" v-for="(partido, index) of partidos" :key="index">
            <partido-del-dia v-bind="partido" />
          </router-link>
       </div>
    </div>
  </div>
</template>

<script>
 import PartidoDelDia from '../components/PartidoDelDia';

    export default {
       data() {
         return {
           partidos:[
             {
               id: "1",
               fecha: "09/01",
               local: "U1",
               lugar: "AZ Katzenmaier",
               visitante: "U2",
               hora: "9:30 am",
               mapa: "https://goo.gl/maps/gqQ5EADc4SVn2qDk6"
             },{
               id: "2",
               fecha: "09/08",
               local: "U3",
               lugar: "Greenbay",
               visitante: "U2",
               hora: "1:00 pm",
               mapa: "https://goo.gl/maps/gqQ5EADc4SVn2qDk6"
             },{
               id: "3",
               fecha: "09/15",
               local: "U5",
               lugar: "Howard Yeager",
               visitante: "U6",
               hora: "9:30 am",
               mapa: "https://goo.gl/maps/gqQ5EADc4SVn2qDk6"
             },{
               id: "4",
               fecha: "09/22",
               local: "U6",
               lugar: "Marjorie P Hart",
               visitante: "U1",
               hora: "1:00 pm",
               mapa: "https://goo.gl/maps/gqQ5EADc4SVn2qDk6"
             },{
               id: "5",
               fecha: "09/29",
               local: "U2",
               lugar: "North",
               visitante: "U4",
               hora: "9:30 am",
               mapa: "https://goo.gl/maps/gqQ5EADc4SVn2qDk6"
             }],
         }
       },
       props: {
       },
          components: {
            PartidoDelDia
       },

            name: "Partidos"
        }
</script>

<style scoped>

</style>
