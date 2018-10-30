import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import DOChart from './Charts/DOChart.js';


export default class BarChartContainer extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          type: 'stackedarea2d',
          width: '100%',
          height: '100%',
          dataFormat: 'json',
          dataSource: {
            "chart": {
                "backgroundColor":"#f2f2f2",
                "borderThickness":1,
                "borderColor":"#ffffff",
                "shadowColor": "#000",  
                "shadowOpacity":1,
                "shadowRadius": 10,
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Jan 2012"
                        },
                        {
                            "label": "Feb 2012"
                        },
                        {
                            "label": "Mar 2012"
                        },
                        {
                            "label": "Apr 2012"
                        },
                        {
                            "label": "May 2012"
                        },
                        {
                            "label": "Jan 2012"
                        },
                        {
                            "label": "Feb 2012"
                        },
                        {
                            "label": "Mar 2012"
                        },
                        {
                            "label": "Apr 2012"
                        },
                    ],
                    "categoryLabelColor": "#555555",
                    "categoryWidth": "65",
                    "categoryLabelHeight":40,
                    "categoryLabelFontSize":10,
                    "xAxisThickness":1,
                    "xAxisColor":"#999999",

                    "categoryDividerColor":"#999999",
                    "categoryDeviderThickness":1,
                }
            ],
            "dataset": [
                {
                    "data": [
                        {
                            "value": "27400",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "29600",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "27400",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%"
                        },
                    ],
                    "maxValue": "30000",
                },
                {
                    "data": [
                        {
                            "value": "17400",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "19800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "15800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "16800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "19600",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "27400",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%"
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%"
                        },
                    ],
                    "maxValue": "40000",
                }
            ],
            "style": [
                {
                    "data": [
                        {
                            "barColorTop": "#487591",
                            "barColorBottom": "#0D3E61",
                            "topLabelColor": "#111111",
                            "topLabelFontSize": 6,
                            "margin":5,
                            "barWidth":10,
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "barColorTop": "#f442d4",
                            "barColorBottom": "#992a82",
                            "topLabelColor": "#111111",
                            "topLabelFontSize": 6,
                            "margin":5,
                            "barWidth":10,
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
          <Text>Bar Chart Container</Text>
          <DOChart type="BarChart" width="350" height="200" data={ json } animateOnStateSet={true}/>
        </View>
      );
    }
}
   