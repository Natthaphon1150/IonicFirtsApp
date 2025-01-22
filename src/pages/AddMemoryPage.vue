<template>
  <base-layout  :page-title="'Add a Memory'"
    :page-default-back-link="'/memories'"
    >
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../component/memories/CreateMemoryForm.vue";

export default {
  components: {
    CreateMemoryForm,
  },
  
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/memories');
    }
  }
};
</script>

<style>
/* Reset default margin */
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background: #ffffff; /* เปลี่ยนพื้นหลังเป็นสีขาว */
  color: #333; /* ปรับสีข้อความให้อ่านง่ายขึ้น */
}

/* Header/Logo Title */
.header {
  padding: 60px;
  text-align: center;
  background: linear-gradient(135deg, #ffffff, #ee0979);
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 20px 20px;
}

/* Page Content */
.content {
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 800px;
}

/* Content Headings */
.content h1 {
  font-size: 2rem;
  color: #ee0979;
  margin-bottom: 10px;
  text-align: center;
}

/* Paragraph Styles */
.content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin: 10px 0;
  text-align: center;
}

</style>
