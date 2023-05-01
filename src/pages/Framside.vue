<template>
  <v-container class="text-center m-13vh content-wrap">
    <v-responsive class="d-flex align-center">
      <v-row class="my-3 mx-1">
        <v-col cols="12" class="d-flex justify-center">
          <v-img contain width="100" height="100" src="@/assets/image5.png" />
        </v-col>
        <v-col cols="12">
          <h1 class="text-h6 font-weight-bold my-2">Online booking</h1>

          <div>
            Her kan du enkelt velge tjenester og legge inn bookinger enkelt fra
            din egen stue eller fra hytta. Du vil motta en bekreftelses SMS så
            snart vår verkstedsmester har sett på bookingen din. Du får også en
            påminnelse dagen i forkant av din booking.
          </div>
        </v-col>

        <v-col cols="12">
          <v-btn block rounded="xl" color="amber" v-on:click="onNext()"
            >Booking</v-btn
          >
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
export default {
  methods: {
    onNext: function () {
      this.$router.push("/phone");
    },
  },
};
</script>
