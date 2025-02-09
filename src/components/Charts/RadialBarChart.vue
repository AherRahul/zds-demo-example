<template>
    <div>
        <zds-radial-bar-chart
            :variant="variant"
            :data="data"
            :labels="chartLabels"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'RadialBarChart',
    data() {
        return {
			theme: 'green',
            data: [
                {
                    "datasets": [
                        {
                            "label": "January",
                            "data": [
                                1100
                            ],
                        }
                    ]
                },
                {
                    "datasets": [
                        {
                            "label": "February",
                            "data": [
                                1000
                            ],
                        }
                    ]
                },
                {
                    "datasets": [
                        {
                            "label": "March",
                            "data": [
                                700
                            ],
                        }
                    ]
                }
            ],
            variant: 'blue',
            chartLabels: [
                "January",
                "February",
                "March",
            ],
            colors: ['green', 'turquoise', 'orange'],
        }
    },
    mounted () {}
  }
  </script>
  
  <style>
  </style>
  