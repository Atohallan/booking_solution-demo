<template>
  <v-container class="fill-height mt-n16">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="mx-2 my-5">
        <v-col cols="auto">
          <div class="text-subtitle-1 font-weight-bold">
            Legg inn kode som du har fått på SMS nå!
          </div>
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="Verifiseringskode på sms"
            v-model="code"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-btn
            block
            rounded="xl"
            size="x-large"
            color="amber"
            v-on:click="onPrev()"
            >Verifiser</v-btn
          >
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
export default {
  data: () => ({
    code: "",
  }),

  methods: {
    onPrev: function () {
      this.$router.push({
        path: `/${this.code}`,
      });
    },
  },
};
</script>
