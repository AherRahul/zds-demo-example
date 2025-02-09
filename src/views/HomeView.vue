<template>
  <div class="home">
    <div class="container-fluid home-container">
      <!-- Content Header -->
      <div class="home-header">
        <zds-grid :cols="1" gap="50px" class="grid-background">
          <zds-grid-item>
            <div class="header-content enhanced-header">
              <h1 class="title">Welcome to ZDS</h1>
              <p class="description">
                Zema Design System, empowers developers with a comprehensive set of tools designed to enhance the quality and effectiveness of web applications. By emphasizing thoughtful design principles, meticulous implementation practices, and a deep commitment to user-centric experiences, ZDS stands as a testament to our dedication to crafting innovative, seamless, and impactful digital solutions.
              </p>
              <button class="explore-btn" @click="goToDisplay" @mouseover="scaleButton" @mouseleave="resetButton">
                Explore Components
              </button>
            </div>
          </zds-grid-item>
        </zds-grid>
      </div>

      <div class="principles-section">
        <h2><strong>Principles:</strong></h2>
        <zds-divider :width="0" />
        
        <zds-grid :cols="2" gap="40px" class="grid-background mt-3">
          <zds-grid-item v-for="(principle, index) in principles" :key="index">
            <div class="principle-card">
              <h4 class="principle-title">{{ principle.title }}</h4>
              <p class="principle-description">{{ principle.description }}</p>
            </div>
          </zds-grid-item>
        </zds-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      principles: [
        {
          "title": "Context over Consistency",
          "description": "While consistency and standards create a cohesive design language, our primary focus remains on delivering meaningful user experiences. By understanding the unique context and specific challenges of each situation, we prioritize solutions that truly meet user needs."
        },
        {
          "title": "Usable",
          "description": "Designing for usability means adopting a user-first approach driven by empathy. Through meticulous research and thoughtful data analysis, we craft intuitive solutions that address genuine user problems with clarity and care. Delivering a consistent and optimized user experience across."
        },
        {
          "title": "Inclusive",
          "description": "We embrace diversity and strive to design products that are accessible to people of all abilities. Our approach ensures that every solution is inclusive, respectful, and considerate of different perspectives & needs."
        },
        {
          "title": "Direct",
          "description": "Every element in our design is intentional. We aim to create seamless experiences that guide users toward their objectives with speed, efficiency, and minimal complexity."
        },
        {
          "title": "Autonomy through Empowerment",
          "description": "We believe in empowering teams with the freedom to innovate and the confidence to design impactful solutions. By fostering a culture of trust and passion, we enable creators to deliver exceptional user experiences."
        },
        {
          "title": "ZDS Mission",
          "description": "Adaptable to Market Needs - Building flexible and scalable solutions that evolve alongside emerging technologies, industry trends, and shifting user demands to remain competitive in a dynamic landscape."
        }
      ],
    };
  },
  methods: {
    scaleButton(event) {
      event.target.style.transform = 'scale(1.1)';
    },
    resetButton(event) {
      event.target.style.transform = 'scale(1)';
    },
    goToDisplay(){
      // this.$router.push('/display');
    }
  }
};
</script>

<style scoped>
/* General Layout */
.home {
  display: flex;
  align-items: center;
}

.home-container {
  padding: 0px 30px 30px 30px;
}


.principles-section {
  margin-top: 40px;
}

.principle-card {
  background: linear-gradient(135deg, #e8edfd, #fbfbfb);
  border-radius: 2px;
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.principle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
}

.principle-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-block: 1rem;
}

.principle-description {
  font-size: 1rem;
  color: #4b5563;
  margin-top: 10px;
}

.mt-3 {
  margin-top: 3%;
}

.home-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
}

.header-content {
  max-width: 100%;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f4fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.07);
  margin-bottom: 24px;
  animation: fadeIn 1.5s ease-out, slideIn 1.5s ease-out;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
  display: flex;
  text-align: center;
}

.explore-btn {
  background-color: #4275ff;
  color: #fff;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
