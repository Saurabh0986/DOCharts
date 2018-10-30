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

                "backgroundColor":"#aaaaaa",
                "borderThickness":1,
                "borderColor":"#ffffff",
                "shadowColor": "#000",  
                "shadowOpacity":1,
                "shadowRadius": 10,

                "TopHeadingVisible": true,
                "TopHeadingHeight": 50,
                "LeftTopHeading": "Assets",
                "RightTopHeading": "Total",


            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Jan 2012",
                            "desc": "$27400",
                        },
                        {
                            "label": "Feb 2012",
                            "desc": "$27400",
                        },
                        {
                            "label": "Mar 2012",
                            "desc": "$27400",
                        },
                        {
                            "label": "Apr 2012",
                            "desc": "$27400",
                        },
                        {
                            "label": "May 2012",
                            "desc": "$27400",
                        },
                        {
                            "label": "Jan 2012",
                            "desc": "$27400",
                        },
                        {
                            "label": "Feb 2012",
                            "desc": "$27400",
                        },
                        {
                            "label": "Mar 2012",
                            "desc": "$27400",
                        },
                        {
                            "label": "Apr 2012",
                            "desc": "$27400",
                        },
                    ],
                    "categoryLabelColor": "#555555",
                    "categoryHeight": 85,
                    "categoryLabelVisible":true,
                    "categoryLabelHeight": 15,
                }
            ],
            "dataset": [
                {
                    "data": [
                        {
                            "value": "27400",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                        {
                            "value": "29600",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                        {
                            "value": "27400",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#487591",
                            "barColorRight": "#0D3E61",
                        },
                    ],
                    "maxValue": "30000",
                },
                {
                    "data": [
                        {
                            "value": "17400",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                        {
                            "value": "19800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                        {
                            "value": "15800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                        {
                            "value": "16800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                        {
                            "value": "19600",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                        {
                            "value": "27400",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                        {
                            "value": "29800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                        {
                            "value": "25800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                        {
                            "value": "26800",
                            "topSummary": "9.2%",
                            "barColorLeft": "#ee7591",
                            "barColorRight": "#443E61",
                        },
                    ],
                    "maxValue": "40000",
                }
            ],
            "style": [
                {
                    "data": [
                        {
                            "rightLabelColor": "#111111",
                            "margin":5,
                            "barHeight":20,
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "rightLabelColor": "#111111",
                            "margin":5,
                            "barHeight":20,
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
          <DOChart type="HorizontalBarChart" width="350" height="500" data={ json } animateOnStateSet={true}/>
        </View>
      );
    }
}
   