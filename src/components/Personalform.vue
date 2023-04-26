<template>
  <v-card class="mx-5 my-1">
    <v-text-field label="Fult navn"></v-text-field>
    <v-text-field label="Telefonnummer"></v-text-field>
    <v-text-field label="E-post"></v-text-field>
    <v-text-field label="Regnummer / chasisnr"></v-text-field>
    <v-text-field label="KM-stand"></v-text-field>
    <v-textarea label="Melding til verkstedet"></v-textarea>
    <v-btn block rounded="xl" color="amber" v-on:click="onNext()"
      >Booking</v-btn
    >
  </v-card>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: [],
  }),

  methods: {
    onNext: function () {
      this.$router.push("/sms_verifisering");
    },
  },
};
</script>
