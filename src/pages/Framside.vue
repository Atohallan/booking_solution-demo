<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="my-3">
        <v-col cols="auto" class="mx-2">
          <h1 class="text-h6 font-weight-bold text-left">Online booking</h1>

          <div class="text-subtitle-1 text-left">
            Her kan du enkelt velge tjenester og legge inn bookinger enkelt fra
            din egen stue eller fra hytta. Du vil motta en bekreftelses SMS så
            snart vår verkstedsmester har sett på bookingen din. Du får også en
            påminnelse dagen i forkant av din booking.
          </div>
        </v-col>

        <v-col cols="12" class="mx-2">
          <v-text-field :rules="rules" placeholder=" Telefonnummer"
            >+</v-text-field
          >
        </v-col>

        <v-col cols="12">
          <router-view />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
export default {
  data: () => ({
    rules: [
      (value: string) => !!value || "Required.",
      (value: string) => (value || "").length <= 20 || "Max 20 characters",
      (value: string) => {
        const pattern =
          /^(([0-9]{1,3})-([0-9]{1,3})-([0-9]{1,4})-([0-9]{1,5}))$/;
        return (
          pattern.test(value) || "Invalid phone number. ex. 12-123-123-1231"
        );
      },
    ],
  }),
};
</script>
