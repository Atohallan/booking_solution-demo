<template>
  <v-card class="mx-auto" width="330">
    <v-list v-for="(item, index) in items" :key="index" open-strategy="single">
      <v-list-group>
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

        <router-view />
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: [
      { text: "Tjenester", icon: "mdi-folder" },
      { text: "Tidspunkt", icon: "mdi-account-multiple" },
      { text: "Personinformasjon", icon: "mdi-star" },
    ],
  }),

  methods: {
    pushArray: function (title: string) {
      this.$router.push("/" + title);
    },
  },
};
</script>
