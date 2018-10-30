import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase, TouchableHighlight, Animated } from 'react-native';
import BarChartContainer from '../../BarChartContainer';


   
export default class DOBarChartBar extends Component {

    constructor(props){
        super(props);
        this.state={
            BackGroundColor: "#fff",
            ChartData: null,
            StyleData: null,
            ShowToolTip: null,
            labelHeight: 15,
            barHeightAnim: new Animated.Value(0),
            barGapHeightAnim: new Animated.Value(0)
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

        var labelFontSize = 10;
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
            labelFontSize = this.state.StyleData.topLabelFontSize;
            //Lets draw bars...


        }

        var barContainerHeight = (heightInternal-this.state.labelHeight);
        let barHeightAnim = barContainerHeight*barHeight;        
        let barGapHeightAnim = barContainerHeight*(1-barHeight);

        if(this.state.ChartData != null && this.state.ChartData.animateOnStateSet){
            this.state.barGapHeightAnim = new Animated.Value(barContainerHeight)

            Animated.timing(                    // Animate over time
                this.state.barHeightAnim,       // The animated value to drive
                {
                  toValue: barContainerHeight*barHeight,
                  duration: 1000,              // Make it take a while
                }
              ).start();

            Animated.timing(                    // Animate over time
                this.state.barGapHeightAnim,       // The animated value to drive
                {
                  toValue: barContainerHeight*(1-barHeight),
                  duration: 1000,              // Make it take a while
                }
              ).start();

              barHeightAnim = this.state.barHeightAnim;
              barGapHeightAnim = this.state.barGapHeightAnim;
        }


        
        
        var LabelStyle = {
            color: topLabelColor,
            textAlign: 'center',
            fontSize: labelFontSize,
        };
        var BarContainerStyle = {
            width: 10, 
            height: barHeightAnim,
            top:0,
            backgroundColor:barColorTop
        };

        //this render will be overrided...
        return (
            <View style={{backgroundColor:color, borderColor:"#111", width:widthInternal, height:heightInternal, alignItems: 'center' , justifyContent: 'center' }} key={"barOuterView"} >
                <View style={{
                    width: '100%', 
                    height: this.state.labelHeight,
                    top: 0,
                    justifyContent:'center',
                    alignItems:'center'
                    }}
                    key={"barInnerView"} >
                    <Text style={LabelStyle} key={"text"} >{topLabel}</Text>
                </View>
                <Animated.View style={{ width:'100%',  height:barGapHeightAnim, bottom:0, top:0 }} key={"barAdjust"} />
                {/*Shift the above View up if you want to attach the percent label just above bar.*/}
                <TouchableHighlight onPress={this.onBarPress}>
                <Animated.View style={BarContainerStyle}  key={"bar"} />
                </TouchableHighlight>
           </View>
        );
    }
}