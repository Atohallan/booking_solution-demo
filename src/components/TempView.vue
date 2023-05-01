<template>
  <v-container v-if="title === 'Tjenester'" class="p-0">
    <Type @service-types="onPushService" ref="TypeRef" />
  </v-container>
  <v-container v-else-if="title === 'Tidspunkt'" class="p-0">
    <Calendar @selected-calender="onSelectedCalender" ref="CalenderRef" />
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
    onPushService: function (value: any) {
      this.$emit("skip1", value);
    },
    onSelectedCalender: function (value: any) {
      this.$emit("skip2", value);
    },
    onUserInfo: function (value: any) {
      this.$emit("skip3", value);
    },
    onCancel1: function () {
      console.log("qwe");

      // const typeRef = this.$refs.TypeRef as { onCancel: () => void };
      // typeRef.onCancel();
    },

    onCancel2: function () {
      console.log("qwe");

      // const typeRef = this.$refs.CalenderRef as { onCancel: () => void };
      // typeRef.onCancel();
    },
  },

  components: {
    Calendar,
    Personalform,
    Type,
  },
};
</script>
