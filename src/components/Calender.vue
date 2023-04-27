<template>
  <div class="bg-color-primary rounded-lg">
    <v-row>
      <v-col cols="12">
        <p class="text-h6 font-weight-bold text-left px-2 py-2">
          Velg tidspunkt
        </p>
        <vue-cal
          class="vuecal--date-picker"
          xsmall
          hide-view-selector
          :time="false"
          :todayButton="true"
          active-view="month"
          :disable-views="['week']"
          style="width: auto; height: 350px"
        >
        </vue-cal>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: { VueCal },
};
</script>
