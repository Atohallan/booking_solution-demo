<template>
  <div style="background-color: #575756; border-radius: 25px">
    <v-row>
      <v-col cols="12">
        <p class="text-h6 font-weight-bold text-left px-2 py-1">Tjenester</p>
        <FullCalendar :options="options"></FullCalendar>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { ExtractDefaultPropTypes } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

interface Calender {
  options: Object;
}

export default {
  components: {
    FullCalendar,
  },
  data: function () {
    return {
      options: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        height: "auto",
        // weekends: false,
        dateClick: this.handleDateClick,
      } as ExtractDefaultPropTypes<Calender>,
    };
  },

  methods: {
    handleDateClick: function (arg: any) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>
