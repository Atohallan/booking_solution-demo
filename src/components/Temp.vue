<template>
  <v-container v-if="title === 'Tjenester'">
    <Type />
  </v-container>
  <v-container v-else-if="title === 'Tidspunkt'">
    <Calender />
  </v-container>
  <v-container v-else>
    <Personalform />
  </v-container>
</template>

<script lang="ts">
import Calender from "./Calender.vue";
import Personalform from "./Personalform.vue";
import Type from "./Type.vue";

export default {
  props: ["title"],

  components: {
    Calender,
    Personalform,
    Type,
  },
};
</script>
