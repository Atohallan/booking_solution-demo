<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="my-3 mx-1">
        <v-col cols="auto">
          <h1 class="text-h6 font-weight-bold text-left">Online booking</h1>

          <div style="text-align: left">
            Her kan du enkelt velge tjenester og legge inn bookinger enkelt fra
            din egen stue eller fra hytta. Du vil motta en bekreftelses SMS så
            snart vår verkstedsmester har sett på bookingen din. Du får også en
            påminnelse dagen i forkant av din booking.
          </div>
        </v-col>

        <v-col cols="12">
          <v-text-field
            :rules="rules"
            placeholder="Telefonnummer"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <router-view />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
const phoneNumberRegex =
  /^(([0-9]{1,3})-([0-9]{1,3})-([0-9]{3,4})-([0-9]{4,5}))$/;

export default {
  data() {
    return {
      redirect: false,
      rules: [
        (value: string) => !!value || "Required.",
        (value: string) => (value || "").length <= 20 || "Max 20 characters",
        function (this: any, value: string) {
          if (phoneNumberRegex.test(value)) {
            this.redirect = true;
            return true;
          } else {
            return "Invalid phone number. ex. 12-123-123-1231";
          }
        }.bind(this),
      ],
    };
  },

  computed: {
    redirectPath() {
      return "/sms_verifisering";
    },
  },

  watch: {
    redirect(newValue) {
      if (newValue) {
        this.$router.push(this.redirectPath);
      }
    },
  },
};
</script>
