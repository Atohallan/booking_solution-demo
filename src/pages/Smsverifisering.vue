<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="my-3">
        <v-col cols="auto">
          <h1 class="text-h6 font-weight-bold text-left my-5">Autorisasjon</h1>

          <div class="redirect-phone text-left">
            {{ `En bekreftelseskode ble sendt til nummer +${redirectPhone}` }}
          </div>
        </v-col>

        <v-col cols="12">
          <div class="my-3">Verifiseringskode på sms</div>
          <v-text-field
            :rules="rules"
            placeholder="Skriv inn en kode"
            v-model="verifiedCode"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-btn block rounded="xl" color="amber" v-on:click="onNext()"
            >Bekrefte</v-btn
          >
        </v-col>

        <v-col cols="12">
          <p class="text-subtitle-1 cursor-pointer">Send Kode Igjen</p>
        </v-col>

        <v-col cols="12">
          <p class="text-subtitle-1 cursor-pointer">Endre telefonnummer</p>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
const verifiedRegex = /^\d{4,10}$/;

export default {
  data() {
    return {
      verifiedCode: "",
      redirectPhone: this.$route.params.id?.toString() ?? "",
      rules: [
        (value: string) => !!value || "Påkrevd",
        (value: string) => (value || "").length <= 10 || "Maks 10 tegn",
        (value: string) =>
          verifiedRegex.test(value) || "Ugyldig verifiseringskode. eks. 9999",
      ],
    };
  },

  methods: {
    onNext() {
      this.verifiedCode != "" && this.$router.push("/services");
    },
  },
};
</script>
