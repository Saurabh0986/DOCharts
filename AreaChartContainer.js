import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import DOChart from './Charts/DOChart.js';


export default class AreaChartContainer extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          type: 'stackedarea2d',
          width: '100%',
          height: '100%',
          dataFormat: 'json',
          dataSource: {
            "chart": {
                
                "backgroundColor":"#eeeeee",
                "borderThickness":1,
                "borderColor":"#fff",
                "shadowColor": "#000",  
                "shadowOpacity":1,
                "shadowRadius": 10,

                "showLeftRangePannel":true,
                "widthOfLeftRangePannel":80,
                "fontSizeOfLeftRangePannel":10,
                
                "showBottomLegendsPannel":true,
                "heightOfBottomLegendsPannel":40,
                "fontSizeOfBottomLegendsPannel":10,

                "willFitData":false

            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "2010",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                        {
                            "label": "2011",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                        {
                            "label": "2012",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                        {
                            "label": "2013",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                        {
                            "label": "2014",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                        {
                            "label": "2015",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                        {
                            "label": "2016",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                        {
                            "label": "2017",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                        {
                            "label": "2018",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                    ],
                    "showCategoryLabel": true,
                    "categoryLabelColor": "#555555",
                    "categoryWidth": 120,
                    "categoryLabelHeight":40,
                    "categoryFontHeight":10
                }
            ],
            "dataRange": {
                "showRanges":false,
                "ranges":[
                    {   "label":"$30,000 k", "value":30000,  },
                    {   "label":"$28,000 k", "value":28000,  },
                    {   "label":"$26,000 k", "value":26000,  },
                    {   "label":"$24,000 k", "value":24000,  },
                    {   "label":"$22,000 k", "value":22000,  },
                    {   "label":"$20,000 k", "value":20000,  },
                    {   "label":"$18,000 k", "value":18000,  },
                    {   "label":"$16,000 k", "value":16000,  },
                    {   "label":"$14,000 k", "value":14000,  },
                    {   "label":"$12,000 k", "value":12000,  },
                    {   "label":"$10,000 k", "value":10000,  },
                    {   "label":"$8,000 k",  "value":8000,   },
                    {   "label":"$6,000 k",  "value":6000,   },
                    {   "label":"$4,000 k",  "value":4000,   },
                    {   "label":"$2,000 k",  "value":2000,   },
                    {   "label":"$0 k",      "value":0,      },
                ],
            },
            "dataset": [
                {
                    "data": [
                        {
                            "subCategoryData":[ { "value":30000, "desc":"profit", },{ "value":24000, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":27400, "desc":"loss", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":17400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":27400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":26400, "desc":"profit", },{ "value":24400, "desc":"profit", },{ "value":25400, "desc":"profit", },{ "value":27400, "desc":"profit", },]
                        },
                    ],
                    "legendsLabel":"Amount Invested",
                },
                {
                    "data": [
                        {
                            "subCategoryData":[ { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":17400, "desc":"loss", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                        {
                            "subCategoryData":[ { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":27400, "desc":"profit", },{ "value":23400, "desc":"profit", },
                                                { "value":17400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":16400, "desc":"profit", },{ "value":14400, "desc":"profit", },{ "value":15400, "desc":"profit", },{ "value":17400, "desc":"profit", },]
                        },
                    ],
                    "legendsLabel":"Profit",
                },
            ],
            "style": [
                {
                    "data": [
                        {
                            "areaColorTop": "#48759144",
                            "areaColorBottom": "#0D3E6144",
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "areaColorTop": "#f442d444",
                            "areaColorBottom": "#992a8244",
                        }
                    ]
                }
            ]
        },
        dataSource1: {
            "chart": {
                "caption": "Sales Trends",
                "showCaption": false,

                "subcaption": "FY 2012 - FY 2013",
                "showSubcaption": false,

                "xaxisname": "Month",
                "showXaxisname": false,
                "showXaxis":false,

                "yaxisname": "Revenue",
                "showYaxisname": false,
                "showYaxis":false,

                "axisColor": "#cccccc",
                
                "showvalues": "1",
                "numberprefix": "$",
                "labeldisplay": "WRAP",
                "linethickness": "3",
                "numVisiblePlot": "12",
                "scrollheight": "10",
                "flatScrollBars": "1",
                "scrollShowButtons": "0",
                "scrollColor": "#cccccc",
                "theme": "fusion",
                ///Added by Saud....

                "showLeftRangePannel":true,
                "widthOfLeftRangePannel":80,
                "fontSizeOfLeftRangePannel":10,
                
                "showBottomLegendsPannel":true,
                "heightOfBottomLegendsPannel":40,
                "fontSizeOfBottomLegendsPannel":10,

                "willFitData":false

            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "2010",
                            "subCategories":[
                                {"label":"Jan",},{"label":"Feb",},{"label":"Mar",},{"label":"Arp",},{"label":"May",},{"label":"Jun",},
                                {"label":"Jul",},{"label":"Aug",},{"label":"Sep",},{"label":"Oct",},{"label":"Nov",},{"label":"Dec",},
                            ]
                        },
                    ],
                    "showCategoryLabel": true,
                    "categoryLabelColor": "#555555",
                    "categoryWidth": 240,
                    "categoryLabelHeight":40,
                    "categoryFontHeight":10
                }
            ],
            "dataRange": {
                "showRanges":false,
                "ranges":[
                    {   "label":"$30,000 k", "value":30000,  },
                    {   "label":"$28,000 k", "value":28000,  },
                    {   "label":"$26,000 k", "value":26000,  },
                    {   "label":"$24,000 k", "value":24000,  },
                    {   "label":"$22,000 k", "value":22000,  },
                    {   "label":"$20,000 k", "value":20000,  },
                    {   "label":"$18,000 k", "value":18000,  },
                    {   "label":"$16,000 k", "value":16000,  },
                    {   "label":"$14,000 k", "value":14000,  },
                    {   "label":"$12,000 k", "value":12000,  },
                    {   "label":"$10,000 k", "value":10000,  },
                    {   "label":"$8,000 k",  "value":8000,   },
                    {   "label":"$6,000 k",  "value":6000,   },
                    {   "label":"$4,000 k",  "value":4000,   },
                    {   "label":"$2,000 k",  "value":2000,   },
                    {   "label":"$0 k",      "value":0,      },
                ],
            },
            "dataset": [
                {
                    "data": [
                        {
                            "subCategoryData":[ 
                                { "value":0, "desc":"profit", },
                                { "value":26000, "desc":"profit", },
                                { "value":25000, "desc":"profit", },
                                { "value":24000, "desc":"profit", },
                                { "value":23000, "desc":"profit", },
                                { "value":22000, "desc":"profit", },
                                { "value":21000, "desc":"profit", },
                                { "value":20000, "desc":"profit", },
                                { "value":25000, "desc":"profit", },
                                { "value":10000, "desc":"profit", },
                                { "value":10000, "desc":"profit", },
                                { "value":2000, "desc":"profit", },
                            ]
                        },
                    ],
                    "legendsLabel":"Amount Invested",
                }
            ],
            "style": [
                {
                    "data": [
                        {
                            "areaColorTop": "#48759144",
                            "areaColorBottom": "#0D3E6144",
                        }
                    ]
                }
            ]
        }
        };
      }



    render() {

        var json = this.state.dataSource
        return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>Area Chart Container</Text>
          <DOChart type="AreaChart" width="350" height="400" data={ json }/>
        </View>
      );
    }
}
   