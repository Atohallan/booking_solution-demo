<template>
  <v-row>
    <v-col cols="12">
      <div class="font-weight-bold">Fult navn</div>
      <v-text-field
        label="Fult navn"
        v-model="userInfo.fullname"
      ></v-text-field>
      <div class="font-weight-bold">Telefonnummer</div>
      <v-text-field
        label="Telefonnummer"
        v-model="userInfo.telephone"
        :rules="rules"
        placeholder="47 "
        >+</v-text-field
      >
      <div class="font-weight-bold">E-post</div>
      <v-text-field label="E-post" v-model="userInfo.epost"></v-text-field>
      <div class="font-weight-bold">Regnummer / chasisnr</div>
      <v-text-field
        label="Regnummer / chasisnr"
        v-model="userInfo.regnumber"
      ></v-text-field>
      <div class="font-weight-bold">KM-stand</div>
      <v-text-field label="KM-stand" v-model="userInfo.kmstand"></v-text-field>
      <div class="font-weight-bold">Melding til verkstedet</div>
      <v-textarea
        label="Melding til verkstedet"
        v-model="userInfo.info"
      ></v-textarea>
    </v-col>
    <v-col cols="12" v-for="(option, index) in checkdetails" :key="index">
      <v-checkbox
        v-model="selectedOptions"
        :label="option"
        :value="option"
        color="black"
      ></v-checkbox>
    </v-col>
    <v-btn block rounded="xl" color="amber" @click="onSubmit()">Booking</v-btn>
  </v-row>
</template>

<script lang="ts">
const dateRegex = /^(\d{1,3}\ \d{3,4}\ \d{3,4}\ \d{4,5})$/;

export default {
  data: () => ({
    items: [],
    userInfo: {
      fullname: "",
      telephone: "",
      epost: "",
      regnumber: "",
      kmstand: "",
      info: "",
    },
    rules: [
      (value: string) => !!value || "Påkrevd",
      (value: string) => (value || "").length <= 30 || "Maks 30 tegn",
      (value: string) =>
        dateRegex.test(value) || "Ugyldig datotype. eks. +47 111 111 1111",
    ],
    checkdetails: [
      "Bekreft vår privacy police for å bruke vår booking tjeneste",
      "Bekreft om du ønsker viktig info og reklame fra oss",
    ],
    selectedOptions: [],
  }),

  methods: {
    onSubmit() {
      if (this.userInfo !== null && this.selectedOptions.length) {
        this.$emit("userInfo", this.userInfo);
      }
    },
  },
};
</script>
