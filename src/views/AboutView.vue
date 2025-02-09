<template>
  <div class="home">
    <div class="container-fluid">
      <!-- Content here -->
      <div class="home-header">
        <zds-grid :cols="1" gap="50px" class="grid-background">
          <zds-grid-item>
            <div class="header-content">
              <h1>ZDS - Welcome</h1>
              <p>
                ZDS, which stands for Zema Design System, represents the culmination of our fundamental 
                principles and unwavering commitment to design excellence, implementation integrity, and user-centric 
                innovation. This meticulously crafted framework serves as the bedrock of our design philosophy, 
                offering a cohesive blueprint for developing seamless and engaging user interfaces across all our digital products.
              </p>
            </div>
          </zds-grid-item>
        </zds-grid>
      </div>
      <div class="mt-3">
        <div>
          <div>
            <h2><strong>Principles:</strong></h2>
            <zds-divider :width="0" />
          </div>
        </div>
        <div class="row mt-1">
          <div class="col">
            <zds-grid :cols="2" gap="50px" class="grid-background">
              <zds-grid-item>
                <div>
                  <h4>Context over consistency</h4>
                </div>
                <div>
                  <p>Consistency and standards are important for building a unified design 
                    language and help the user know what to expect from our product and how 
                    to use it. However, this does not mean sacrificing the user experience. 
                    In this sense, the context and needs of our users are priorities when 
                    developing our solutions.
                  </p>
                </div>
              </zds-grid-item>
              <zds-grid-item>
                <div>
                  <h4>Usable</h4>
                </div>
                <div>
                  <p>Users and their needs drive our design process. For us, being usable 
                    means being built with empathy, reaching users' real needs and problems 
                    by putting ourselves in their shoes and looking at their world with 
                    attention and care. To achieve these results, we carry out research, 
                    analyze data and always listen to it.
                  </p>
                </div>
              </zds-grid-item>
            </zds-grid>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col">
            <zds-grid :cols="2" gap="50px" class="grid-background">
              <zds-grid-item>
                <div>
                  <h4>Inclusive</h4>
                </div>
                <div>
                  <p>We design our experiences for real people. We understand that those 
                    who use our products have different conditions and abilities. This 
                    understanding guides us in developing more humane solutions.
                  </p>
                </div>
              </zds-grid-item>
              <zds-grid-item>
                <div>
                  <h4>Direct</h4>
                </div>
                <div>
                  <p>All elements must have a purpose. These elements must provide experiences 
                    that allow people to achieve their goals quickly, efficiently and as directly 
                    as possible.
                  </p>
                </div>
              </zds-grid-item>
            </zds-grid>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col">
            <zds-grid :cols="2" gap="50px" class="grid-background">
              <zds-grid-item>
                <div class="">
                  <h4>Autonomy through empowerment</h4>
                </div>
                <div class="mt(10) font-weight-bold">
                  <p>We believe in the potential of people and their ability to develop the 
                    best solutions. In this way, we empower teams to feel confident when 
                    designing solutions, knowing that they will do so by ensuring the best 
                    user experience, while working on what they are passionate about doing.
                  </p>
                </div>
              </zds-grid-item>
              <zds-grid-item />
            </zds-grid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {
  .home {
    min-height: 100%;
    display: flex;
    align-items: center;
  }
}

.heading-3 {
  font-size: 29px;
  font-weight: 650;
}

.mt-1 {
  margin-top: 1%;
}

.mt-3 {
  margin-top: 3%;
}


</style>
