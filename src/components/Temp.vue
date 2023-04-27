<template>
  <v-container v-if="title === 'Tjenester'">
    <Type />
  </v-container>
  <v-container v-else-if="title === 'Tidspunkt'">
    <Calendar />
  </v-container>
  <v-container v-else>
    <Personalform />
  </v-container>
</template>

<script lang="ts">
import { title } from "process";
import Calendar from "./temp/calender.vue";
import Personalform from "./temp/personal.vue";
import Type from "./temp/type.vue";

export default {
  props: ["title"],

  components: {
    Calendar,
    Personalform,
    Type,
  },
};
</script>
