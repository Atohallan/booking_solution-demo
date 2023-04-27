<template>
  <v-row>
    <v-col cols="12">
      <v-list
        v-for="(item, index) in items"
        :key="index"
        open-strategy="single"
      >
        <v-list-group :value="item.text === seltext">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" v-on:click="pushArray(item.text)">
              <div class="list-wrapper">
                <div class="circle">{{ index + 1 }}</div>
                <v-list-item-title
                  v-text="item.text"
                  class="text-left px-3 font-weight-bold"
                ></v-list-item-title>
              </div>
            </v-list-item>
          </template>

          <temp-view :title="seltext" />
        </v-list-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import TempView from "./Temp.vue";

export default {
  data: () => ({
    seltext: "123",
    items: [
      { text: "Tjenester", icon: "fa-regular fa-circle-1" },
      { text: "Tidspunkt", icon: "mdi-account-multiple" },
      { text: "Personinformasjon", icon: "mdi-star" },
    ],
  }),

  methods: {
    pushArray: function (title: string) {
      this.seltext = title;
    },
  },
  components: {
    TempView,
  },
};
</script>
