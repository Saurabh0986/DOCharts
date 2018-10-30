import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import BarChartContainer from '../../BarChartContainer';
import DOBarChartBar from './DOBarChartBar.js'


   
export default class DOBarChartCategory extends Component {

    constructor(props){
        super(props);
        this.state={
            BackGroundColor: "#fff",
            ChartData: null,
            ShowToolTip : null
        };
    }
    
    componentDidMount(){
        this.setState({
            BackGroundColor: this.props.bgColor,
            ChartData: this.props.data,
            ShowToolTip : this.props.showToolTip
        });
    }
    
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            BackGroundColor: nextProps["bgColor"],
            ChartData: nextProps["data"],
            ShowToolTip: nextProps["showToolTip"]
        });
    }
       
    shouldComponentUpdate(nextProps,nextState){
        // your condition if you want to re-render every time on props change
        return true;
    }

    render() {

        var color = "#fff";
        var heightInternal = 0;
        var widthInternal = 0;
        var label= "";
        var labelColor = "#000000";
        
        let labelHeight = 15;
        var barTag = <View></View> 

        var xAxisThickness = 0;
        var xAxisColor = "#00000000";
        var categoryLabelFontSize = 15;

        var categoryDividerColor = 'transparent';
        var categoryDeviderThickness_Left = 0;
        var categoryDeviderThickness_Right = 0;
        if(this.state.ChartData != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;
            heightInternal = this.state.ChartData.height;
            widthInternal = this.state.ChartData.width;
            label = this.state.ChartData.label;
            labelColor = this.state.ChartData.categoryLabelColor;
            labelHeight = this.state.ChartData.labelHeight;
            xAxisThickness = this.state.ChartData.xAxisThickness;
            xAxisColor = this.state.ChartData.xAxisColor;
            categoryLabelFontSize = this.state.ChartData.categoryLabelFontSize;
            categoryDividerColor = this.state.ChartData.categoryDividerColor;
            if(this.state.ChartData.categoryIndex == 0){
                categoryDeviderThickness_Left = this.state.ChartData.categoryDeviderThickness;
            }
            categoryDeviderThickness_Right = this.state.ChartData.categoryDeviderThickness;


            var bars = this.state.ChartData.data.map((a,j) => {

                var margin = this.state.ChartData.style[j].margin;
                var barWidth = this.state.ChartData.style[j].barWidth;

                var dataForBar = {
                    //"width" : (widthInternal / this.state.ChartData.data.length), //Actual Width of bar With gap....
                    "width" : ((margin * 2) + barWidth)*1,
                    "height": (heightInternal - labelHeight), //Actual Height of bar....
                    "dataHeight": (a.data.value / a.maxValue),
                    "label": a.data.topSummary,     
                    "categoryIndex": this.state.ChartData.categoryIndex,
                    "animateOnStateSet": this.state.ChartData.animateOnStateSet,
                    "dataIndex": j,
                }

                return <DOBarChartBar data={dataForBar}  style={this.state.ChartData.style[j]} showToolTip={this.state.ShowToolTip} key={"bar"+j}/>
            })
            
            barTag = <View style={{flexDirection:'row'}}>{bars}</View>
            //Lets draw bars...
        }



        var LabelStyle = {
            color: labelColor,
            textAlign: 'center',
            fontSize: categoryLabelFontSize
        };
        var BarContainerStyle = {
            width: 10, 
            height: 10,
        };


        //this render will be overrided...
        return (
            <View style={{
                backgroundColor:color, 
                borderColor:categoryDividerColor,
                borderLeftWidth:categoryDeviderThickness_Left, 
                borderRightWidth:categoryDeviderThickness_Right, 
                width:widthInternal, 
                height:heightInternal, 
                alignItems: 'center' }}
                key={"outerView"}>

            {barTag}
            <View style={{
                width: '100%', 
                height: labelHeight, 

                justifyContent: 'center',
                alignItems: 'center',
                borderTopWidth:xAxisThickness,
                borderTopColor:xAxisColor,
            }} key={"textContainer"}>
                <Text style={LabelStyle} key={"text"} >{label}</Text>
            </View>
            </View>
        );
    }
}