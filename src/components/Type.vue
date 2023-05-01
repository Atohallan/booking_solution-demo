<template>
  <v-radio-group v-model="selectedItem">
    <v-radio
      v-for="(option, index) in items"
      :key="index"
      :value="option.id"
      color="orange"
      class="my-2 border-grey rounded-lg"
      v-if="clickedbtn === false"
    >
      <template v-slot:label>
        <v-row>
          <v-col cols="12">
            <div class="text-left">
              <p class="text-h6 font-weight-bold">{{ option.title1 }}</p>
              <p class="text-subtitle-1 font-weight-bold">
                {{ option.title2 }}
              </p>
              <p>{{ option.contents }}</p>
              <p class="text-h6">{{ option.number }}</p>
            </div>
          </v-col>
        </v-row>
      </template>
    </v-radio>
    <v-btn
      block
      rounded
      color="amber"
      @click="onSubmit"
      v-if="clickedbtn === false"
      >Fortsette</v-btn
    >
  </v-radio-group>
</template>

<script lang="ts">
interface Item {
  id: number;
  title1: string;
  title2: string;
  contents: string;
  number: string;
}

export default {
  data() {
    return {
      selectedItem: 0,
      selectedItemTitle: "",
      clickedbtn: false,
      selectedItem_number: 0,
      items: [] as Array<Item>,
    };
  },

  mounted() {
    for (let index = 0; index < 4; index++) {
      this.items.push({
        id: index,
        title1: "EU-kontroll opp til 3500kg",
        title2: "titlen kan ta opp til 2 linjer.",
        contents:
          "Her kan du enkelt bestille PKK til din personbil opp til 3500kg. Beskrivelsen kan bruke opp til 3 linjer.",
        number: "1490,-",
      });
    }
  },

  methods: {
    onSubmit() {
      const selectedItem = this.items.find(
        (item) => item.id === this.selectedItem
      );
      if (typeof this.selectedItem === "number") {
        this.selectedItemTitle =
          this.items.find((item) => item.id === this.selectedItem)?.title1 ??
          "";
      }
      this.selectedItem_number = selectedItem
        ? parseFloat(selectedItem.number)
        : 0;
      this.clickedbtn = true;

      this.$emit("serviceTypes", {
        selectedIndex: this.selectedItem + 1,
        selectedItemTitle: this.selectedItemTitle,
        type_price: this.selectedItem_number,
      });
    },
    onCancel() {
      console.log("qwew");
      this.selectedItem = 0;
      this.selectedItem_number = 0;
      this.clickedbtn = false;
    },
  },
};
</script>
