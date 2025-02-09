<template>
    <div class="chart">
        <div class="container-fluid">
            <div class="header">
                <zds-grid :cols="1" gap="50px" class="grid-background">
                    <zds-grid-item>
                        <div class="header-content">
                            <h1 class="title">Chart's</h1>
                            <p class="description">
                                The charts page in our design system showcases a variety of chart components 
                                built with Vue.js and documented using Storybook. These components are designed 
                                to provide robust, customizable, and responsive data visualization solutions 
                                for your applications. 
                            </p>

                            <p class="description">
                                Explore the different chart components and their configurations to find the best 
                                fit for your data visualization needs. Each component is accompanied by comprehensive
                                documentation and examples to help you get started quickly and efficiently.
                            </p>
                        </div>
                    </zds-grid-item>
                </zds-grid>
            </div>
      
            <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />
            
            <div class="chart-content">
                <div class="chart-main">
                    <zds-grid cols="minmax(auto, 65%) 1fr" gap="50px" class="grid-background">
                        <zds-grid-item>
                            <h3 style="text-align: center;"> Bar chart</h3>
                            <p>
                                The BarChart Component page in our design system features an essential UI element 
                                designed to visually represent data through bar charts. This Vue.js component offers 
                                a clear and effective way to display quantitative information, making data analysis 
                                more accessible. Comprehensive documentation in Storybook provides detailed guidance 
                                for implementation and customization, ensuring the BarChart component can be tailored 
                                to fit your specific requirements.
                            </p>
                            <bar-chart />
                        </zds-grid-item>

                        <zds-grid-item>
                            <h3 style="text-align: center;">Gauge chart</h3>
                            <p>
                                The Gauge Chart Component page in our design system features a dynamic UI element for 
                                visualizing metrics with a gauge or dial. This Vue.js component offers an intuitive 
                                way to display performance indicators. 
                            </p>
                            <gauge-chart style="padding-top: 2rem;" />
                        </zds-grid-item>
                    </zds-grid>

                    <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

                    <zds-grid cols="minmax(auto, 65%) 1fr" gap="50px" class="grid-background">
                        <zds-grid-item>
                            <h3 style="text-align: center;"> Line chart</h3>
                            <p>
                                The Line Chart Component page in our design system showcases a versatile UI element for 
                                visualizing data trends with clarity. This Vue.js component offers an effective way to 
                                display temporal or sequential information. Comprehensive documentation in Storybook 
                                provides detailed guidance for implementation and customization, ensuring the BarChart 
                                component can be tailored to fit your specific requirements.
                            </p>
                            <line-chart />
                        </zds-grid-item>

                        <zds-grid-item>
                            <h3 style="text-align: center;">Pie chart</h3>
                            <p>
                                The Pie Chart Component page in our design system presents an essential UI element for 
                                visualizing data distribution with clarity. This Vue.js component offers an intuitive 
                                way to display proportions and percentages
                            </p>
                            <pie-chart />
                        </zds-grid-item>
                    </zds-grid>

                    <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

                    <zds-grid cols="minmax(auto, 65%) 1fr" gap="50px" class="grid-background">
                        <zds-grid-item>
                            <h3 style="text-align: center;"> Stack Bar chart</h3>
                            <p>
                                The Stack Bar Chart Component page in our design system features a powerful UI element 
                                for visualizing hierarchical data in stacked bars. This Vue.js component offers an effective 
                                way to display comparisons and compositions within datasets. Detailed Storybook documentation 
                                provides comprehensive guidance for seamless implementation and customization, empowering you 
                                to tailor the Stack Bar Chart to suit specific data visualization needs.
                            </p>
                            <stacked-bar-chart />
                        </zds-grid-item>

                        <zds-grid-item>
                            <h3 style="text-align: center;">Polar chart</h3>
                            <p>
                                The Polar Area Chart Component page in our design system showcases a versatile UI element for 
                                visualizing data distribution in a circular format. This Vue.js component offers an intuitive 
                                way to display relationships and proportions within datasets.
                            </p>
                            <polar-area-chart />
                        </zds-grid-item>
                    </zds-grid>

                    <zds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

                    <zds-grid cols="minmax(auto, 30.5%) minmax(auto, 30.5%)  1fr" gap="50px" class="grid-background">
                        <zds-grid-item>
                            <h3 style="text-align: center;"> Donut chart (Green Them)</h3>
                            <p>
                                The Donut Chart Component page in our design system features a sleek UI element for displaying 
                                data distribution in a circular format with a central hole. This Vue.js component offers a clear 
                                and concise way to visualize proportions and relationships within datasets.
                            </p>
                            <donut-chart-1 />
                        </zds-grid-item>

                        <zds-grid-item>
                            <h3 style="text-align: center;"> Donut chart (Blue Them)</h3>
                            <p>
                                The Donut Chart Component page in our design system features a sleek UI element for displaying 
                                data distribution in a circular format with a central hole. This Vue.js component offers a clear 
                                and concise way to visualize proportions and relationships within datasets.
                            </p>
                            <donut-chart-2 />
                        </zds-grid-item>

                        <zds-grid-item>
                            <h3 style="text-align: center;"> Radial chart</h3>
                            <p>
                                The Radial Bar Chart Component page in our design system showcases an innovative UI element for 
                                visualizing data using concentric bars radiating from the center. This Vue.js component offers a 
                                unique and dynamic way to represent quantitative information.
                            </p>
                            <radial-bar-chart v-if="showRadialChart" />
                            <div class="center-loader" v-else>
                                <zds-spinner
                                    variant="blue"
                                    size="lg"
                                />
                            </div>
                        </zds-grid-item>
                    </zds-grid>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import BarChart from '../components/Charts/BarChart.vue';
  import DonutChart1 from '../components/Charts/DonutChart1.vue';
  import DonutChart2 from '../components/Charts/DonutChart2.vue';
  import GaugeChart from '../components/Charts/GaugeChart.vue';
  import LineChart from '../components/Charts/LineChart.vue';
  import PieChart from '../components/Charts/PieChart.vue';
  import StackedBarChart from '../components/Charts/StackedBarChart.vue';
  import PolarAreaChart from '../components/Charts/PolarAreaChart.vue';
  import RadialBarChart from '../components/Charts/RadialBarChart.vue';
  
  export default {
    name: 'Dashboard',

    // components
    components: {
      BarChart,
      DonutChart1,
      DonutChart2,
      GaugeChart,
      LineChart,
      PieChart,
      StackedBarChart,
      PolarAreaChart,
      RadialBarChart
    },

    // component data
    data() {
      return {
        showRadialChart: true,
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>

    @media (min-width: 1024px) {
        .chart {
            min-height: 100%;
            display: flex;
            align-items: center;
            padding-bottom: 2rem;
        }
    }
    
    .mt-3 {
        margin-top: 2%;
    }

    .mb-3 {
        margin-bottom: 2%;
    }

    .radial-chart-container {
        position: relative;
        height: 250px;
    }

    .center-loader {
        position: absolute;
        top: 110%;
        left: 45%;
    }
    
    .chart-content .grid-item {
        background-color: #ffffff;
        border: 1px solid #e1e1e1;
        padding: 12px 20px 12px 20px;
        border-radius: 2px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    }
  </style>
  