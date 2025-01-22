import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
            id: "m1",
            image:
              "https://www.charnveeresortkhaoyai.com/wp-content/uploads/2023/12/Rancho-Nov14-3-1536x1097.jpg.webp",
            title: "การท่องเที่ยว",
            description: "สถานที่ท่องเที่ยวสุดประทับใจ",
          },
          {
            id: "m2",
            image: "https://wisdommaxcenter.com/upload/at/pictures/pic-1504939011489.jpg",
            title: "การออกกำลังกาย",
            description: "สุขภาพดีทุกวันด้วยการออกกำลังกาย",
          },
          {
            id: "m3",
            image: "https://www.manarom.com/blog/img/Health_benefits_of_sleep_detail.jpg",
            title: "การนอน",
            description: "การพักผ่อนที่เพียงพอสำคัญอย่างไร",
          },
          {
            id: "m4",
            image: "https://cdn-cms.pgimgs.com/news/2017/10/20074879_xxl.jpg",
            title: "การใช้จ่ายเงิน",
            description: "การจัดการเงินให้มีประสิทธิภาพ",
          }
      ] 
    } // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      // Persist the updated memories list to localStorage
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;