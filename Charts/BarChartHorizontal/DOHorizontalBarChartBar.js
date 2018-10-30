import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase, TouchableHighlight, Animated } from 'react-native';


   
export default class DOHorizontalBarChartBar extends Component {

    constructor(props){
        super(props);
        this.state={
            BackGroundColor: "#fff",
            ChartData: null,
            StyleData: null,
            ShowToolTip: null,
            labelHeight: 15,
            barWidthAnim: new Animated.Value(0),
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


    onBarPress(env){
        if(this.state.ChartData != null){
            this.state.ShowToolTip(this.state.ChartData.categoryIndex, this.state.ChartData.dataIndex, env.nativeEvent.locationX);
        }
    }



    render() {

        var color = "#fff";
        var heightInternal = 0;
        var widthInternal = 0;
        var topLabel= "";
        var rightLabelColor = "#000000";
        var dataRatio = 0;
        var barColorLeft = "#111";
        var barColorRight = "#111";
        var margin = 0;
        if(this.state.ChartData != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;
            heightInternal = this.state.ChartData.height;
            widthInternal = this.state.ChartData.width;
            topLabel = this.state.ChartData.label;
            dataRatio = this.state.ChartData.dataRatio;

            rightLabelColor = this.state.StyleData.rightLabelColor;
            barColorLeft = this.state.ChartData.barColorLeft;
            barColorRight = this.state.ChartData.barColorRight;           
            margin = this.state.StyleData.margin;
            //Lets draw bars...
        }

        let barWidthAnim = (widthInternal*dataRatio);
        if(this.state.ChartData != null && this.state.ChartData.animateChartOnStateSet == true){
            

            Animated.timing(                    // Animate over time
                this.state.barWidthAnim,       // The animated value to drive
                {
                  toValue: widthInternal*dataRatio,
                  duration: 1000,              // Make it take a while
                }
              ).start();

              barWidthAnim = this.state.barWidthAnim;
        }

        var LabelStyle = {
            width: '100%', 
            color: rightLabelColor,
            textAlign: 'right',
            fontSize: 10,
        };

        //this render will be overrided...
        return (
            <View style={{backgroundColor:color, width:widthInternal, height:heightInternal, /*alignItems: 'center' , */justifyContent: 'center' }}>
                
                <TouchableHighlight onPress={(evt) => this.onBarPress(evt)}>
                <Animated.View style={{ backgroundColor:barColorLeft, height:(heightInternal-2*margin), width:barWidthAnim, justifyContent: 'center' }} >
                    <Text style={LabelStyle}>{topLabel}</Text>
                </Animated.View>
                </TouchableHighlight>
           </View>
        );
    }
}