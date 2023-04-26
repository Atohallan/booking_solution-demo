<template>
  <v-card color="grey-lighten-1" class="mx-2 my-1">
    <p class="text-h6 font-weight-bold text-left">Tjenester</p>
    <FullCalendar :options?="calendarOptions" />
  </v-card>
</template>

<script lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
  },
  data: function () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        height: "auto",
        weekends: false,
        dateClick: this.handleDateClick,
      },
    };
  },

  methods: {
    handleDateClick: function (arg: any) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>
