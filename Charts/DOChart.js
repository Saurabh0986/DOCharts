import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import DOBarChart from './BarChart/DOBarChart.js'
import DOAreaChart from './AreaChart/DOAreaChart.js'
import DOHorizontalBarChart from './BarChartHorizontal/DOHorizontalBarChart.js'



   
export default class DOChart extends Component {

    constructor(props){
        super(props);
        this.state={
            DOChartType: "",
            DOChartWidth: "0",
            DOChartHeight: "0",
            DOChartData: ""
        };
    }
    
    componentDidMount(){
        this.setState({
            DOChartType: this.props.type,
            DOChartWidth: this.props.width,
            DOChartHeight: this.props.height,
            DOChartData: this.props.data,
        });
    }
    
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            DOChartType: nextProps["type"],
            DOChartWidth: nextProps["width"],
            DOChartHeight: nextProps["height"],
            DOChartData: nextProps["data"],
        });
    }
       
    shouldComponentUpdate(nextProps,nextState){
        // your condition if you want to re-render every time on props change
        return true;
    }

    render() {

        console.log(this.state.DOChartData)

        var chartData = this.state.DOChartData
        var chartTag = <View></View>
        if( this.state.DOChartData === "")
        {

        } 
        else 
        {
            //Data is initiallized....

            console.log(chartData)
            //chartData = chartData.categories[0].category[0].label
            if(this.state.DOChartType === "BarChart"){
                chartTag = <DOBarChart barGap="5" barWidth="10" width={this.state.DOChartWidth} height={this.state.DOChartHeight} bgColor="#fff" data={chartData}/>
            }
            else if(this.state.DOChartType === "AreaChart"){
                chartTag = <DOAreaChart width={this.state.DOChartWidth} height={this.state.DOChartHeight} bgColor="#fff" data={chartData}/>
            }
            else if(this.state.DOChartType === "HorizontalBarChart"){
                chartTag = <DOHorizontalBarChart barGap="5" barWidth="10" width={this.state.DOChartWidth} height={this.state.DOChartHeight} bgColor="#fff" data={chartData}/>
            }
        }



        
        
        return (
            <View>
            {chartTag}
            </View>
        );
    }


}