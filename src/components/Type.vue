<template>
  <v-card class="mx-5 my-1 py-5">
    <v-radio-group
      v-for="(item, index) in datas"
      :key="index"
      open-strategy="single"
    >
      <v-radio value="Google" name="radiobox">
        <template v-slot:label>
          <div>qweqweqwew</div>
        </template>
      </v-radio>
    </v-radio-group>
  </v-card>
</template>

<script lang="ts">
export default {
  data: function () {
    return {
      datas: [
        {
          title1: "EU-kontroll opp til 3500kg",
          title2: "titlen kan ta opp til 2 linjer.",
          contents:
            "Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.",
          number: "1490,-",
        },
        {
          title1: "EU-kontroll opp til 3500kg",
          title2: "titlen kan ta opp til 2 linjer.",
          contents:
            "Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.",
          number: "1490,-",
        },
        {
          title1: "EU-kontroll opp til 3500kg",
          title2: "titlen kan ta opp til 2 linjer.",
          contents:
            "Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.",
          number: "1490,-",
        },
        {
          title1: "EU-kontroll opp til 3500kg",
          title2: "titlen kan ta opp til 2 linjer.",
          contents:
            "Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.",
          number: "1490,-",
        },
      ],
    };
  },
};
</script>
