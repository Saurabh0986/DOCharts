import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import BarChartContainer from '../../BarChartContainer';
import DOHorizontalBarChartBar from './DOHorizontalBarChartBar.js'


   
export default class DOHorizontalBarChartCategory extends Component {

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
        var labelAtRight= "";
        var labelColor = "#000000";
        
        let labelHeight = 15;
        var barTag = <View></View> 
        if(this.state.ChartData != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;
            heightInternal = this.state.ChartData.height;
            widthInternal = this.state.ChartData.width;
            label = this.state.ChartData.label;
            labelAtRight = this.state.ChartData.labelAtRight;
            labelColor = this.state.ChartData.categoryLabelColor;
            labelHeight = this.state.ChartData.labelHeight;

            var bars = this.state.ChartData.data.map((a,j) => {

                var margin = this.state.ChartData.style[j].margin;
                var barHeight = this.state.ChartData.style[j].barHeight;

                var dataForBar = {
                    //"width" : (widthInternal / this.state.ChartData.data.length), //Actual Width of bar With gap....
                    "height" : ((margin * 2) + barHeight),
                    "width": (widthInternal), //Actual Height of bar....
                    "dataRatio": (a.data.value / a.maxValue),
                    "barColorLeft": a.data.barColorLeft,
                    "barColorRight": a.data.barColorRight,
                    "label": a.data.topSummary,     
                    "categoryIndex": this.state.ChartData.categoryIndex,
                    "dataIndex": j,
                }

                return <DOHorizontalBarChartBar data={dataForBar} bgColor="#fff" style={this.state.ChartData.style[j]} showToolTip={this.state.ShowToolTip} />
            })
            
            barTag = <View>{bars}</View>
            //Lets draw bars...
        }

        //this render will be overrided...
        return (
            <View style={{backgroundColor:color, width:widthInternal, height:heightInternal, alignItems: 'center' }}>
                <View style={{ height:labelHeight, width:'100%', flexDirection: 'row'}}>
                    <Text style={{alignSelf:'center'}}>{label}</Text>
                    <Text style={{marginLeft: 'auto', alignSelf:'center'}} >{labelAtRight}</Text>
                </View>
                <View style={{height:(heightInternal - labelHeight), width:'100%'}}>
                    {barTag}
                </View>
            </View>
        );
    }
}