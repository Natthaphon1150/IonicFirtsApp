<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import MemoriesList from "../component/memories/MemoriesList.vue";

export default {
  components: {
    MemoriesList,
    IonButton,
    IonIcon
  },
  data() {
    return { add };
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

<style scoped>
/* List Background */
.memory-list {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Individual Items */
.memory-item {
  background: #ffffff;
  margin: 10px 0;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Hover effect */
.memory-item:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Thumbnail Styling */
.thumbnail ion-img {
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Memory Label */
.memory-label h2 {
  color: #ee0979;
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
}

.memory-label p {
  margin: 5px 0 0;
  color: #555;
  font-size: 0.9rem;
}
</style>
