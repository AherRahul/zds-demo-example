<template>
    <div class="loaders">
      <div class="container-fluid">
        <div class="header"> 
          <zds-grid :cols="1" gap="50px" class="grid-background">
            <zds-grid-item>
              <div class="header-content">
                <h1 class="title">Loaders Component's</h1>
                <p class="description">
                  The Loaders Components page in our design system presents a collection of essential 
                  UI elements designed to indicate loading states and enhance user experience during 
                  data processing. These Vue.js components provide visually appealing and functional 
                  loaders to keep users informed and engaged. Each component is thoroughly documented 
                  using Storybook, offering detailed guidance for implementation and customization to 
                  fit your application's specific needs.
                </p>

                <p class="description">
                  Explore the different components as well and their configurations to find the best 
                  fit for your data visualization needs. Each component is accompanied by comprehensive 
                  documentation and examples to help you get started quickly and efficiently.
                </p>
              </div>
            </zds-grid-item>
          </zds-grid>
        </div>

        <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

        <div class="dashboard-content">
          <div class="dashboard-main">
            <div>
              <h3>1. LoadingBar</h3>
              <p>
                The LoadingBar component is used to indicate that the progress of an operation has not 
                yet been completed. It is useful for providing feedback to users while they wait for a 
                task to finish, such as loading data, submitting a form, or processing a request.
              </p>
            </div> 
            <zds-grid :cols="1" gap="50px" class="grid-background">
              <zds-grid-item>
                  <loading-bar class="pt-3" />
              </zds-grid-item>
            </zds-grid>

            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <div>
              <h3>2. OverlayLoader</h3>
              <p>
                The OverlayLoader component is used to indicate the loading of internal page components, 
                such as cards and graphics. It provides visual feedback to users, letting them know that 
                the content they are waiting for is still loading.
              </p>
            </div> 
            <zds-grid :cols="1" gap="50px" class="grid-background">
              <zds-grid-item>
                <overlay-loader class="pt-3" />
              </zds-grid-item>
            </zds-grid>
            
            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

              <div>
                <h3>3. Skeleton</h3>
                <p>
                  The Skeleton component is used to create placeholders that represent content that is 
                  loading or being processed. It is useful for improving user experience by providing 
                  visual feedback while the actual content is loading.
                </p>
              </div> 
              <zds-grid :cols="3" gap="50px" class="grid-background">
                <zds-grid-item>
                  <h5>1. width="100" height="16" fluid="false" shape="square" </h5>
                  <skeleton class="pt-3"
                    :width="100"
                    :height="16"
                    :fluid="false"
                    shape="square" 
                  />
                </zds-grid-item>
                <zds-grid-item>
                  <h5>2. width="100" height="16" fluid="true" shape="square" </h5>
                  <skeleton class="pt-3"
                    :width="100"
                    :height="16"
                    :fluid="true"
                    shape="square" 
                  />
                  </zds-grid-item>
                  <zds-grid-item>
                  <h5>3. width="100" height="50" fluid="true" shape="circle" </h5>
                  <skeleton class="pt-3"
                    :width="100"
                    :height="50"
                    :fluid="true"
                    shape="circle" 
                  />
                </zds-grid-item>
              </zds-grid>

            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

              <div>
                <h3>4. SkeletonText</h3>
                <p>
                  The SkeletonText component is used to display a loading state for various component types. 
                  It serves as a visual placeholder, indicating that the text content is being loaded or processed.
                </p>
              </div> 
              <zds-grid :cols="3" gap="50px" class="grid-background">
                <zds-grid-item>
                <h5>1. width="250" height="25" </h5>
                <skeleton-text class="pt-3"
                    :width="250"
                    :height="25"
                  />
                </zds-grid-item>
                <zds-grid-item>
                  <h5>2. width="40" </h5>
                  <skeleton-text class="pt-3"
                      :height="40"
                    />
                </zds-grid-item>
                <zds-grid-item>
                  <h5>3. default </h5>
                  <skeleton-text class="pt-3" />
              </zds-grid-item>
            </zds-grid>
            
            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <div>
              <h3>5. Spinner</h3>
              <p>
                The Spinner component is used to indicate that the progress of an operation has not yet been 
                completed. It provides visual feedback to users, showing that a process is ongoing.
              </p>
            </div>
            <zds-grid :cols="3" gap="50px" class="grid-background">
              <zds-grid-item>
                <h5>1. variant="blue" size="sm" delay="0" </h5>
                  <spinner class="pt-3"
                    variant="blue"
                    size="sm"
                    delay="0"
                  />
                </zds-grid-item>
                <zds-grid-item>
                  <h5>2. variant="red" size="md" delay="5" </h5>
                  <spinner class="pt-3"
                    variant="red"
                    size="md"
                    delay="5"
                  />
                </zds-grid-item>
                <zds-grid-item>
                  <h5>3. variant="blue" size="lg" delay="15"</h5>
                  <spinner class="pt-3"
                    variant="blue"
                    size="lg"
                    delay="15"
                  />
              </zds-grid-item>
            </zds-grid>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Skeleton from '@/components/Loaders/Skeleton.vue';
  import LoadingBar from '../components/Loaders/LoadingBar.vue';
  import OverlayLoader from '../components/Loaders/OverlayLoader.vue';
  import SkeletonText from '@/components/Loaders/SkeletonText.vue';
  import Spinner from '@/components/Loaders/Spinner.vue';

  export default {
    name: 'Loaders',

    components: {
      LoadingBar,
      OverlayLoader,
      Skeleton,
      SkeletonText,
      Spinner,
    },

   data() {
      return {

      }
    },
  }

  </script>

  <style>
  @media (min-width: 1024px) {
    .loaders {
      min-height: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 10rem;
    }
  }

  .pt-3 {
    margin-top: 3rem;
  }
  </style>
  