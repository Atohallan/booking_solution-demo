<template>
  <v-row class="content-wrap">
    <v-col cols="12">
      <v-list
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(item)"
        v-if="completed === false"
      >
        <div class="list-wrapper">
          <div class="circle p-6-12">{{ index + 1 }}</div>
          <v-list-item-title class="text-left px-3 font-weight-bold">{{
            item.text
          }}</v-list-item-title>
        </div>

        <temp-view
          v-if="item.text === seltext"
          :title="seltext"
          @skip1="onPushService"
          @skip2="onSelectedCalender"
          @skip3="onUserInfo"
          ref="ComputedRef"
        />

        <div
          v-if="
            item.text === 'Tjenester' && item.selectedvalue.selectedIndex !== -1
          "
        >
          <div class="d-flex justify-space-between">
            <p class="text-subtitle-1">
              {{ `${item.selectedvalue.selectedIndex} tjenester for beløpet` }}
            </p>
            <p class="text-subtitle-1 font-weight-bold">
              {{ item.selectedvalue.type_price }}
            </p>
          </div>
          <v-btn block rounded color="white" @click="onClear1">Endring</v-btn>
        </div>

        <div v-if="item.text === 'Tidspunkt' && item.selectedDate !== ''">
          <div class="d-flex justify-space-between">
            <p class="text-subtitle-1">
              {{ `Valgt dato` }}
            </p>
            <p class="text-subtitle-1 font-weight-bold">
              {{ item.selectedDate }}
            </p>
          </div>
          <v-btn block rounded color="white" @click="onClear2">Endring</v-btn>
        </div>
      </v-list>
      <Becreftelse :booking_data="items" v-else />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import TempView from "./TempView.vue";
import Becreftelse from "../pages/Becreftelse.vue";

interface Item {
  text: string;
  selectedvalue: {
    selectedIndex: number;
    type_price: number;
    selectedItemTitle: string;
  };
  selectedDate?: string;
  userInfo?: string[];
}

// interface ComputedRef {
//   onCancel1: () => void;
// }

export default {
  data() {
    return {
      selectedItems: "",
      completed: false,
      items: [
        {
          text: "Tjenester",
          selectedvalue: {
            selectedIndex: -1,
            type_price: -1,
            selectedItemTitle: "",
          },
        },
        {
          text: "Tidspunkt",
          selectedDate: "",
        },
        {
          text: "Personinformasjon",
          userInfo: {
            fullname: "",
            telephone: "",
            epost: "",
            regnumber: "",
            kmstand: "",
            info: "",
          },
        },
      ] as Item[],
    };
  },

  computed: {
    seltext(): string {
      return this.selectedItems;
    },
  },

  methods: {
    selectItem(item: Item): void {
      this.selectedItems = item.text;
    },

    onPushService(value: Item["selectedvalue"]): void {
      if (!value) return;
      const newItems1 = this.items.map((item) =>
        item.text === "Tjenester" ? { ...item, selectedvalue: value } : item
      );
      this.items = newItems1;
    },

    onSelectedCalender(value: any): void {
      if (!value) return;
      const newItems2 = this.items.map((item) =>
        item.text === "Tidspunkt" ? { ...item, selectedDate: value } : item
      );
      this.items = newItems2;
    },

    onUserInfo(value: any): void {
      if (!value) return;
      const newItems3 = this.items.map((item) =>
        item.text === "Personinformasjon" ? { ...item, userInfo: value } : item
      );
      this.items = newItems3;
      this.completed = true;
      console.log(this.items);
    },

    async onClear1(): Promise<void> {
      if (this.selectedItems === "Tjenester") {
        console.log("ComputedRef", this.$refs.ComputedRef); // Check if ComputedRef exists
        const myRef: any = await this.$refs.ComputedRef;
        console.log("myRef", myRef); // Check if myRef is defined
        if (myRef && myRef.onCancel1) {
          myRef.onCancel1();
        } else {
          console.error("Unable to call onCancel1()");
        }
      }
    },

    async onClear2(): Promise<void> {
      if (this.selectedItems === "Tidspunkt") {
        const myRef: any = await this.$refs.ComputedRef;
        if (myRef && myRef.onCancel2) {
          myRef.onCancel2();
        } else {
          console.error("Unable to call onCancel2()");
        }
      }
    },
  },

  components: {
    TempView,
    Becreftelse,
  },
};
</script>
