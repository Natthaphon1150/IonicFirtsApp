<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"

  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview 
      v-else 
      :title="loadedMemory.title" 
      :image="loadedMemory.image" 
      :description="loadedMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../component/memories/MemoryOverview.vue";

export default {
  components: {
    MemoryOverview,
  },
  data() {
    return {
      memoryId: this.$route.params.id, 
     
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memoryById(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>

<style scoped>
/* Header Styling */
.header-toolbar {
  color: white;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Content Wrapper */
.memory-content {
  padding: 1.5rem;
  border-radius: 8px;
}

/* Image Styling */
.memory-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
}

/* Details Container */
.memory-details {
  text-align: center;
  color: #333;
}

.memory-details h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #ee0979;
  margin-bottom: 1rem;
}

.memory-details p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}
</style>
