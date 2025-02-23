<template>
    <div class="utils">
      <div class="container-fluid">
        <div class="header"> 
          <zds-grid :cols="1" gap="50px" class="grid-background">
            <zds-grid-item>
              <div class="header-content">
                <h1 class="title">Utils Component's</h1>
                <p class="description">
                  The Utils Components page in our design system highlights a range of versatile UI elements 
                  designed to support and enhance the functionality of your applications. These Vue.js 
                  components offer various utilities to streamline development and improve efficiency. 
                  Each component is thoroughly documented using Storybook, providing detailed guidance 
                  for implementation and customization to suit your unique needs.
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
          <div>
            <h3>1. Clickable</h3>
            <p>
              The Clickable Component in our design system provides a wrapper for components lacking 
              native click interaction, enabling them to be clickable. This Vue.js component enhances 
              usability by adding essential click functionality to various UI elements. Detailed 
              Storybook documentation ensures straightforward integration and customization for 
              seamless implementation across your application.
            </p>
          </div> 
          <zds-grid :cols="2" gap="50px" class="grid-background">
            <zds-grid-item>
              <h5>1. clickable="true" - (default)</h5>

              <Clickable
                :clickable="true"
              />
            </zds-grid-item>
            <zds-grid-item>
              <h5>2. clickable="false"</h5>

              <Clickable
                :clickable="false"
              />
            </zds-grid-item>
          </zds-grid>
          
          <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  

          <div>
            <h3>2. ImageComponent</h3>
            <p>
              The Image utility component in our design system simplifies the rendering of images with 
              fallback options. This Vue.js component ensures robust image handling for various scenarios, 
              including fallbacks when the primary image fails to load.
            </p>
          </div> 
          <zds-grid :cols="2" gap="50px" class="grid-background">
            <zds-grid-item>
              <h5>1. width="400" blackAndWhite="false" dimmed="false" roundedCorners="false" opacity="1"</h5>

              <image-component
                :width="400"
                :blackAndWhite="false"
                :dimmed="false"
                :roundedCorners="false"
                :opacity="1"
                src="https://cdn.dribbble.com/users/56251/screenshots/10780716/media/bf16339f04fb54b38055adcce2a6da21.png?compress=1&resize=1000x750&vertical=top"
                fallbackSrc="https://cdn.dribbble.com/users/945601/screenshots/15072838/media/4a82b3dc2b8b419e245f28fd1767f717.png?compress=1&resize=1000x750&vertical=top"
                alt="Example image from zds-image"
              />
            </zds-grid-item>
            <zds-grid-item>
              <h5>2. width="400" blackAndWhite="true" dimmed="true" roundedCorners="true" opacity="0.5"</h5>

              <image-component
                :width="400"
                :blackAndWhite="true"
                :dimmed="true"
                :roundedCorners="true"
                :opacity="0.5"
                src="https://cdn.dribbble.com/users/56251/screenshots/10780716/media/bf16339f04fb54b38055adcce2a6da21.png?compress=1&resize=1000x750&vertical=top"
                fallbackSrc="https://cdn.dribbble.com/users/945601/screenshots/15072838/media/4a82b3dc2b8b419e245f28fd1767f717.png?compress=1&resize=1000x750&vertical=top"
                alt="Example image from zds-image"
              />
            </zds-grid-item>
          </zds-grid>
          
          <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  

          <div>
            <h3>3. Spacer</h3>
            <p>
              The Spacer utility component in our design system provides standardized padding and margin 
              values based on the ZDS token system. This Vue.js component ensures consistent spacing throughout 
              your application, enhancing layout consistency and design coherence.
            </p>
          </div>
          <zds-grid :cols="1" gap="50px" class="grid-background">
            <zds-grid-item>
              <h5>1. paddingTop="10" marginRight="15" marginLeft="50"</h5>

              <spacer
                :clickable="true"
              />
            </zds-grid-item>
          </zds-grid>

          <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  

          <div>
            <h3>4. Truncate</h3>
            <p>
              The Truncate utility component in our design system provides a straightforward way to truncate text 
              by adding ellipsis when the content exceeds a specified length. This Vue.js component helps maintain 
              clean and compact UI layouts, especially useful for displaying long strings of text in limited space.
            </p>
          </div> 
          <zds-grid :cols="2" gap="50px" class="grid-background">
            <zds-grid-item>
              <h5>1. width="50"</h5>

              <truncate width="50" />
            </zds-grid-item>
            <zds-grid-item>
              <h5>2. width="100"</h5>

              <truncate
                width="100"
              />
            </zds-grid-item>
          </zds-grid>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Clickable from '../components/Utils/Clickable.vue';
  import ImageComponent from '../components/Utils/ImageComponent.vue';
  import Spacer from '../components/Utils/Spacer.vue';
  import Truncate from '../components/Utils/Truncate.vue';

  export default {
    name: "Utils",
    components: {
      Clickable,
      ImageComponent,
      Spacer,
      Truncate,
    },
    data() {
      return {

      }
    },
  }
  </script>
  <style>
  @media (min-width: 1024px) {
    .utils {
      min-height: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 10rem;
    }
  }
  </style>
  