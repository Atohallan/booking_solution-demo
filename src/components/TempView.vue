<template>
  <v-container v-if="title === 'Tjenester'" class="p-0">
    <Type
      @service-types="onPushService"
      @clear1="onServiceClear"
      ref="TypeRef"
    />
  </v-container>
  <v-container v-else-if="title === 'Tidspunkt'" class="p-0">
    <Calendar
      @selected-calender="onSelectedCalender"
      @clear2="onCalenderClear"
      ref="CalenderRef"
    />
  </v-container>
  <v-container v-else class="p-0">
    <Personalform @userInfo="onUserInfo" />
  </v-container>
</template>

<script lang="ts">
import Type from "./Type.vue";
import Calendar from "./Calender.vue";
import Personalform from "./Personalform.vue";

export default {
  props: ["title"],

  methods: {
    //Service Controlling
    onPushService: function (value: any) {
      this.$emit("skip1", value);
    },

    onServiceClear: function (value: any) {
      this.$emit("onclear1", value);
    },

    //Calender Controlling
    onSelectedCalender: function (value: any) {
      this.$emit("skip2", value);
    },

    onCalenderClear: function (value: any) {
      this.$emit("onclear2", value);
    },

    //Personal_Info Controlling
    onUserInfo: function (value: any) {
      this.$emit("skip3", value);
    },
  },

  components: {
    Calendar,
    Personalform,
    Type,
  },
};
</script>
