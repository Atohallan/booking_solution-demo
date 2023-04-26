<template>
  <v-radio-group
    v-for="(item, index) in datas"
    :key="index"
    v-model="selectedItem"
    :name="'radiobox-' + index"
  >
    <div
      style="background-color: #575756; border-radius: 10px"
      class="py-3 px-3"
    >
      <v-radio :value="item" color="orange">
        <template v-slot:label>
          <v-row>
            <v-col cols="12">
              <div class="text-left" style="color: white">
                <p class="font-weight-bold">{{ item.title1 }}</p>
                <p class="font-weight-bold">{{ item.title2 }}</p>
                <p>{{ item.contents }}</p>
                <p class="text-right" style="color: orange">
                  {{ item.number }}
                </p>
              </div>
            </v-col>
          </v-row>
        </template>
      </v-radio>
    </div>
  </v-radio-group>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selectedItem: null,
      datas: [
        {
          id: 1,
          title1: "EU-kontroll opp til 3500kg",
          title2: "titlen kan ta opp til 2 linjer.",
          contents:
            "Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.",
          number: "1490,-",
        },
        {
          id: 2,
          title1: "EU-kontroll opp til 3500kg",
          title2: "titlen kan ta opp til 2 linjer.",
          contents:
            "Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.",
          number: "1490,-",
        },
        {
          id: 3,
          title1: "EU-kontroll opp til 3500kg",
          title2: "titlen kan ta opp til 2 linjer.",
          contents:
            "Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.",
          number: "1490,-",
        },
        {
          id: 4,
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
