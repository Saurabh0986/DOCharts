import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import BarChartContainer from '../../BarChartContainer';


   
export default class DOBarChartCategory extends Component {

    constructor(props){
        super(props);
        this.state={
            BackGroundColor: "#fff",
            ChartData: null
        };
    }
    
    componentDidMount(){
        this.setState({
            BackGroundColor: this.props.bgColor,
            ChartData: this.props.data            
        });
    }
    
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            BackGroundColor: nextProps["bgColor"],
            ChartData: nextProps["data"],
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
        if(this.state.ChartData != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;
            heightInternal = this.state.ChartData.height;
            widthInternal = this.state.ChartData.width;
            label = this.state.ChartData.label;
            labelColor = this.state.ChartData.categoryLabelColor;


            var chartTag = <View></View> 

            //Lets draw bars...
        }

        let labelHeight = 15;

        var LabelStyle = {
            width: '100%', 
            height: labelHeight, 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'absolute',
            color: labelColor,
            bottom: 0,
            textAlign: 'center'
        };
        var BarContainerStyle = {
            width: 10, 
            height: 10,
        };


        //this render will be overrided...
        return (
            <View style={{backgroundColor:color, borderColor:"#111", borderWidth:2, width:widthInternal, height:heightInternal, alignItems: 'center' }}>
            <View style={{width:(widthInternal*0.5), backgroundColor:"#111", height:(heightInternal-labelHeight),alignItems: 'center', justifyContent: 'center',position: 'absolute'  }}/>
            <Text style={LabelStyle}>{label}</Text>
            </View>
        );
    }
}