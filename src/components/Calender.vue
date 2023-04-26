<template>
  <v-card color="grey-lighten-1">
    <h1>Demo App</h1>
    <FullCalendar :options="calendarOptions" />
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
        dateClick: this.handleDateClick,
      },
    };
  },

  methods: {
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>
