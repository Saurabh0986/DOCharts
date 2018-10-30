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
            DOChartData: "",
            DOChartAnimateOnStateSet: false,
        };
    }
    
    componentDidMount(){
        this.setState({
            DOChartType: this.props.type,
            DOChartWidth: this.props.width,
            DOChartHeight: this.props.height,
            DOChartData: this.props.data,
            DOChartAnimateOnStateSet: this.props.animateOnStateSet
        });
    }
    
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            DOChartType: nextProps["type"],
            DOChartWidth: nextProps["width"],
            DOChartHeight: nextProps["height"],
            DOChartData: nextProps["data"],
            DOChartAnimateOnStateSet: nextProps["animateOnStateSet"]
        });
    }
       
    shouldComponentUpdate(nextProps,nextState){
        // your condition if you want to re-render every time on props change
        return true;
    }

    render() {


        var chartData = this.state.DOChartData
        var chartTag = <View></View>
        var viewStyle = {}
        if( this.state.DOChartData === "")
        {

        } 
        else 
        {

            viewStyle ={
                backgroundColor : chartData.chart.backgroundColor,
                borderWidth : chartData.chart.borderThickness,
                borderColor : chartData.chart.borderColor,
                shadowColor : chartData.chart.shadowColor,  
                shadowOpacity : chartData.chart.shadowOpacity,
                shadowRadius : chartData.chart.shadowRadius,

            }
            //chartData = chartData.categories[0].category[0].label
            if(this.state.DOChartType === "BarChart"){
                chartTag = <DOBarChart width={this.state.DOChartWidth} height={this.state.DOChartHeight} bgColor="transparent" data={chartData} animateOnStateSet={this.state.DOChartAnimateOnStateSet}/>
            }
            else if(this.state.DOChartType === "AreaChart"){
                chartTag = <DOAreaChart width={this.state.DOChartWidth} height={this.state.DOChartHeight} bgColor="transparent" data={chartData} animateOnStateSet={this.state.DOChartAnimateOnStateSet}/>
            }
            else if(this.state.DOChartType === "HorizontalBarChart"){
                chartTag = <DOHorizontalBarChart width={this.state.DOChartWidth} height={this.state.DOChartHeight} bgColor="transparent" data={chartData} animateOnStateSet={this.state.DOChartAnimateOnStateSet}/>
            }
        }



        
        
        return (
            <View style={viewStyle} >
                {chartTag}
            </View>
        );
    }


}