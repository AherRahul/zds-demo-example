<template>
    <div>
        <zds-pie-chart
            :data="chartData"
            :variant="variant"
            :labels="chartLabels"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'PieChart',
    data() {
        return {
            chartLabels: [
                "January",
                "February",
                "March",
                "April",
                "May"
            ],
            variant: 'blue',
            chartData: [
                {
                    "name": "Echocardiogram",
                    "datasets": [
                        {
                            "label": "Exams performed",
                            "data": [
                                120,
                                220,
                                180,
                                20,
                                150
                            ],
                            "name": "Echocardiogram"
                        }
                    ]
                }
            ],
        }
    },
    mounted () {}
  }
  </script>
  
  <style>
  .responsive-container canvas {
    height: 250px !important;
    width: 100% !important;
  }
  </style>
  