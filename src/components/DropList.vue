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
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              v-on:click="pushArray(item.text)"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title
                v-text="item.text"
                class="text-left"
              ></v-list-item-title>
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
      { text: "Tjenester", icon: "mdi-folder" },
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
