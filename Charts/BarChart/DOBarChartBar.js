import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase, TouchableHighlight } from 'react-native';
import BarChartContainer from '../../BarChartContainer';


   
export default class DOBarChartBar extends Component {

    constructor(props){
        super(props);
        this.state={
            BackGroundColor: "#fff",
            ChartData: null,
            StyleData: null,
            ShowToolTip: null,
            labelHeight: 15
        };
    }
    
    componentDidMount(){
        this.setState({
            BackGroundColor: this.props.bgColor,
            ChartData: this.props.data,
            StyleData: this.props.style,
            ShowToolTip : this.props.showToolTip            
        });
    }
    
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            BackGroundColor: nextProps["bgColor"],
            ChartData: nextProps["data"],
            StyleData: nextProps["style"],
            ShowToolTip: nextProps["showToolTip"]
        });
    }
       
    shouldComponentUpdate(nextProps,nextState){
        // your condition if you want to re-render every time on props change
        return true;
    }
    
    getBarHeight() {
        if(this.state.ChartData != null){
            var heightInternal = this.state.ChartData.height;
            var barContainerHeight = (heightInternal-this.state.labelHeight);
            var barHeight = this.state.ChartData.dataHeight;
            return barContainerHeight*(1-barHeight);
        }
        return 0;
    }

    onBarPress = () => {
        if(this.state.ChartData != null){
            this.state.ShowToolTip(this.state.ChartData.categoryIndex, this.state.ChartData.dataIndex, this.getBarHeight());
        }
    }



    render() {

        var color = "#fff";
        var heightInternal = 0;
        var widthInternal = 0;
        var topLabel= "";
        var topLabelColor = "#000000";
        var barHeight = 0;
        var barColorTop = "#111";
        var barColorBottom = "#111";
        if(this.state.ChartData != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;
            heightInternal = this.state.ChartData.height;
            widthInternal = this.state.ChartData.width;
            topLabel = this.state.ChartData.label;
            barHeight = this.state.ChartData.dataHeight;

            topLabelColor = this.state.StyleData.topLabelColor;
            barColorTop = this.state.StyleData.barColorTop;
            barColorBottom = this.state.StyleData.barColorBottom;           
            //Lets draw bars...
        }

        

        var LabelStyle = {
            width: '100%', 
            height: this.state.labelHeight,
            color: topLabelColor,
            top: 0,
            textAlign: 'center',
            fontSize: 10
        };
        var barContainerHeight = (heightInternal-this.state.labelHeight);
        var BarContainerStyle = {
            width: 10, 
            height: (barContainerHeight*barHeight),
            top:0,
            backgroundColor:barColorTop
        };

        //this render will be overrided...
        return (
            <View style={{backgroundColor:color, borderColor:"#111", width:widthInternal, height:heightInternal, alignItems: 'center' , justifyContent: 'center' }}>
                
                <Text style={LabelStyle}>{topLabel}</Text>
                <View style={{ width:'100%', height:barContainerHeight*(1-barHeight), bottom:0, backgroundColor:"fff", top:0 }} />
                {/*Shift the above View up if you want to attach the percent label just above bar.*/}
                <TouchableHighlight onPress={this.onBarPress}>
                <View style={BarContainerStyle}>
                
                </View>
                </TouchableHighlight>
           </View>
        );
    }
}