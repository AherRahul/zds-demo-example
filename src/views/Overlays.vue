<template>
    <div class="overlays">
      <div class="container-fluid">
        <div class="header"> 
          <zds-grid :cols="1" gap="50px" class="grid-background">
            <zds-grid-item>
              <div class="header-content">
                <h1 class="title">Overlays Component's</h1>
                <p class="description">
                  The Overlays Components page in our design system features a collection of crucial UI 
                  elements designed to create layered interfaces and enhance user interaction. These 
                  Vue.js components, including modals, tooltips, and popovers, provide effective solutions 
                  for displaying additional content and information. Each component is meticulously documented 
                  using Storybook, offering detailed guidance for implementation and customization to meet 
                  the specific needs of your applications.
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
              <h3>1. BottomSheet</h3>
              <p>
                BottomSheets are components that display additional content in an overlay layer at the 
                bottom of the current page, providing quick access to additional information or actions 
                without interrupting the main flow of the interface.
              </p>
            </div> 
            <zds-grid :cols="1" gap="50px" class="grid-background">
              <zds-grid-item>
                  <bottom-sheet
                    title="Where to find my CNS"
                  />
              </zds-grid-item>
            </zds-grid>

            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  

            <div>
              <h3>2. Modal</h3>
              <p>
                Modals are like custom dialogs, windows that display additional content on a layer above 
                the current page, with an overlay covering the page and making it temporarily inaccessible.
              </p>
            </div> 
            <zds-grid :cols="4" gap="50px" class="grid-background">
              <zds-grid-item>
                <h5>1. size="sm"</h5>
                <modal
                  title="Where to find my CNS"
                  size="sm"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>2. size="md"</h5>
                <modal
                  title="Where to find my CNS"
                  size="md"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>3. size="lg"</h5>
                <modal
                  title="Where to find my CNS"
                  size="lg"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>4. size="xl"</h5>
                <modal
                  title="Where to find my CNS"
                  size="xl"
                />
              </zds-grid-item>
            </zds-grid>

            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  
            
            <div>
              <h3>3. Popover</h3>
              <p>
                The Popover component is a floating element used to display information and actions related to 
                the content on the screen upon interaction. It is useful for providing contextual information 
                and options without cluttering the main interface.
              </p>
            </div> 
            <zds-grid :cols="4" gap="50px" class="grid-background">
              <zds-grid-item>
                <h5>1. width="250" height="200"</h5>
                <popover
                  targetId="trigger-zds-popover1"
                  width="250"
                  :fitContentWidth="false"
                  height="200"
                  :rightAligned="false"
                  :verticalFluid="false"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>2. fitContentWidth="true"</h5>
                <popover
                  targetId="trigger-zds-popover2"
                  width="250"
                  :fitContentWidth="true"
                  height="200"
                  :rightAligned="false"
                  :verticalFluid="false"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>3. rightAligned="true"</h5>
                <popover
                  targetId="trigger-zds-popover3"
                  width="250"
                  :fitContentWidth="false"
                  height="200"
                  :rightAligned="true"
                  :verticalFluid="false"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>4. verticalFluid="true"</h5>
                <popover
                  targetId="trigger-zds-popover4"
                  width="250"
                  :fitContentWidth="false"
                  height="200"
                  :rightAligned="false"
                  :verticalFluid="true"
                />
              </zds-grid-item>
            </zds-grid>
                
            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <div>
              <h3>5. RichTooltip</h3>
              <p>
                The RichTooltip component, like standard tooltips, provides floating labels to explain elements 
                of the interface. However, RichTooltip offers greater freedom for describing structured and/or 
                longer texts, making it ideal for more detailed explanations or instructions.
              </p>
            </div> 
            <zds-grid :cols="3" gap="50px" class="grid-background">
              <zds-grid-item>
                <h5>1. fitContentWidth="true"</h5>

                <rich-tooltip
                  targetId="trigger-zds-popover1"
                  :fitContentWidth="true"
                  width="250"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>2. fitContentWidth="false" width="250"</h5>

                <rich-tooltip
                  targetId="trigger-zds-popover2"
                  :fitContentWidth="false"
                  width="250"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>3. fitContentWidth="false" width="500"</h5>

                <rich-tooltip
                  targetId="trigger-zds-popover3"
                  :fitContentWidth="false"
                  width="500"
                />
              </zds-grid-item>
            </zds-grid>

            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

              <div>
                <h3>6. SideSheet</h3>
                <p>
                  SideSheets are panels that appear on the right side of the screen. Similar to Modals, they are useful when 
                  users need to complete actions without losing the context of the current page.
                </p>
              </div> 
              <zds-grid :cols="4" gap="50px" class="grid-background">
                <zds-grid-item>
                <h5>1. size="sm"</h5>

                <side-sheet
                  title="Where to find my CNS"
                  size="sm"
                  :withOverlay=true
                  :noCloseOnBackdrop=false
                  :noCloseOnEsc=false
                  :position="right"
                  :no-close-on-backdrop="false"
                  :no-close-on-esc="false"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>2. size="md"</h5>

                <side-sheet
                  title="Where to find my CNS"
                  size="md"
                  :withOverlay=true
                  :noCloseOnBackdrop=false
                  :noCloseOnEsc=false
                  :position="right"
                  :no-close-on-backdrop="false"
                  :no-close-on-esc="false"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>3. size="lg"</h5>

                <side-sheet
                  title="Where to find my CNS"
                  size="lg"
                  :withOverlay=false
                  :noCloseOnBackdrop=true
                  :noCloseOnEsc=false
                  :position="right"
                  :no-close-on-backdrop="false"
                  :no-close-on-esc="false"
                />
              </zds-grid-item>
              <zds-grid-item>
                <h5>4. size="xl"</h5>

                <side-sheet
                  title="Where to find my CNS"
                  size="xl"
                  :withOverlay=false
                  :noCloseOnBackdrop=true
                  :noCloseOnEsc=false
                  :position="right"
                  :no-close-on-backdrop="false"
                  :no-close-on-esc="false"
                />
              </zds-grid-item>
            </zds-grid>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BottomSheet from '@/components/Overlays/BottomSheet.vue';
  import Modal from '@/components/Overlays/Modal.vue';
  import Popover from '@/components/Overlays/Popover.vue';
  import RichTooltip from '@/components/Overlays/RichTooltip.vue';
  import SideSheet from '@/components/Overlays/SideSheet.vue';

  export default {
    name: 'Loaders',

    components: {
      BottomSheet,
      Modal,
      Popover,
      RichTooltip,
      SideSheet,
    },

   data() {
      return {

      }
    },
  }

  </script>

  <style>
  @media (min-width: 1024px) {
    .overlays {
      min-height: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 10rem;
    }
  }
  </style>
  