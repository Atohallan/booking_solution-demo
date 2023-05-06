<template>
  <v-container class="fill-height content-wrap">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="my-3">
        <v-col cols="auto">
          <h1 class="text-h6 font-weight-bold text-left my-5">Autorisasjon</h1>

          <div style="text-align: left">For å fortsette må du logge inn</div>
        </v-col>

        <v-col cols="12">
          <div style="text-align: left" class="my-3">
            For å fortsette må du logge inn
          </div>
          <v-text-field :rules="rules" placeholder="47 " v-model="phonenumber"
            >+</v-text-field
          >
        </v-col>

        <v-col cols="12">
          <v-btn block rounded="xl" color="amber" v-on:click="onNext()"
            >Fortsette</v-btn
          >
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
const phoneNumberRegex =
  /^(([0-9]{1,3})[ ]([0-9]{3,4})[ ]([0-9]{3,4})[ ]([0-9]{4,5}))$/;

export default {
  data() {
    return {
      redirect: false,
      phonenumber: "",
      rules: [
        (value: string) => !!value || "Required.",
        (value: string) => (value || "").length <= 30 || "Maks 30 tegn",
        function (this: any, value: string) {
          if (phoneNumberRegex.test(value)) {
            this.redirect = true;
            return true;
          } else {
            return "Ugyldig datotype. eks. +47 111 111 1111";
          }
        }.bind(this),
      ],
    };
  },

  methods: {
    onNext: function () {
      if (this.redirect) {
        this.$router.push({
          path: `/sms_verifisering/${this.phonenumber}`,
        });
      }
    },
  },
};
</script>
