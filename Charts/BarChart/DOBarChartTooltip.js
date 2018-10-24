import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase, ScrollView, TouchableHighlight } from 'react-native';
import DoChartBase from '../DOChartBase.js'
//import { forEach } from '../../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/async';
import DOBarChartCategory from './DOBarChartCategory.js'
import RNTooltips from 'react-native-tooltips';

   
export default class DOBarChartTooltip extends Component {

    constructor(props){
        super(props);
        this.state={
            ToolTipData: null,
            ToolTipStyleData: null,
            ToolTipAction:null
        };
    }
    
    componentDidMount(){
        this.setState({
            ToolTipData: this.props.data,
            ToolTipStyleData: this.props.ttStyle,
            ToolTipAction:this.props.toolTipAction
        });
    }
    
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            ToolTipData: nextProps["data"],
            ToolTipStyleData: nextProps["ttStyle"],
            ToolTipAction: nextProps["toolTipAction"]
        });
    }
       
    shouldComponentUpdate(nextProps,nextState){
        // your condition if you want to re-render every time on props change
        return true;
    }

    onToolTipPress = () => {
        if(this.state.ToolTipAction != null) {
            this.state.ToolTipAction();
        }
    }

    render() {


        var BackGroundColor = "#fff";
        var BorderColor = "#fff";

        var HeadingText = "";
        var DetailsText = "";

        var HeadingTextColor = "#000";
        var DetailsTextColor = "#000";

        var containerWidth = 100;
        var containerHeight = 100;

        var pointX = 100;
        var pointY = 100;

        var ttWidth = 100;
        var ttHeight = 100;



        const arrowWidth = 10;
        const halfArrowWidth = arrowWidth*0.5;
        const arrowHeight = (5 - 1);

        var ttTop = 0;
        var ttLeft = 0;
        var ttaTop = 0;
        var ttaLeft = 0;

        if(this.state.ToolTipData != null){
            //Another way of saying that parent states are initiallized.
            BackGroundColor = this.state.ToolTipData.BackGroundColor;
            BorderColor = this.state.ToolTipData.BorderColor;
            HeadingText = this.state.ToolTipData.HeadingText;
            DetailsText = this.state.ToolTipData.DetailsText;
            HeadingTextColor = this.state.ToolTipData.HeadingTextColor;
            DetailsTextColor = this.state.ToolTipData.DetailsTextColor;
            containerWidth = this.state.ToolTipData.containerWidth;
            containerHeight = this.state.ToolTipData.containerHeight;
            pointX = this.state.ToolTipData.pointX;
            pointY = this.state.ToolTipData.pointY;
            ttWidth = this.state.ToolTipData.ttWidth;
            ttHeight = this.state.ToolTipData.ttHeight;

            var leftMargin = halfArrowWidth;
            var topMargin = halfArrowWidth;


            
            //lets check horizontal clearance....
            if(pointX < halfArrowWidth) { pointX = halfArrowWidth; }
            else if(pointX > (containerWidth - halfArrowWidth)) {pointX = (containerWidth - halfArrowWidth);}
            
            //lets check vertical clearance....
            let topClearanceNeeded = ttHeight + arrowHeight;
            if( pointY < topClearanceNeeded ) { pointY = topClearanceNeeded; }
            
            //arrow Position...
            ttaTop = pointY - arrowHeight;
            ttaLeft = pointX - (halfArrowWidth);
            
            //tool tip position...
            ttTop = pointY - arrowHeight - ttHeight;
            var ttLeftNeeded = (ttWidth * 0.5);
            if(ttLeftNeeded > pointX) { ttLeft = 0; }
            else if( pointX > (containerWidth - ttLeftNeeded)) { ttLeft = (containerWidth - ttWidth); }
            else { ttLeft = (pointX - ttLeftNeeded); }

        }

        




        //this render will be overrided...
        return (            
                <View style={{ backgroundColor:"#ffff0022", position:'absolute', width:containerWidth, height:containerHeight  }}  >
                    <TouchableHighlight onPress={this.onToolTipPress}>
                    <View style={{
                            top: ttTop,
                            left: ttLeft,
                            width: ttWidth,
                            height: ttHeight,
                            backgroundColor: BackGroundColor,
                            borderColor:BorderColor,
                            borderWidth:1, position:'absolute'}} >
                            <Text style={{ color:HeadingTextColor }} >{HeadingText}</Text>
                            <Text style={{ color:DetailsTextColor }} >{DetailsText}</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={[{
                                    width: 0,
                                    height: 0,
                                    top: ttaTop,
                                    left: ttaLeft,
                                    backgroundColor: 'transparent',
                                    borderStyle: 'solid',
                                    borderLeftWidth: halfArrowWidth,
                                    borderRightWidth: halfArrowWidth,
                                    borderBottomWidth: arrowWidth,
                                    borderLeftColor: 'transparent',
                                    borderRightColor: 'transparent',
                                    borderBottomColor: BackGroundColor,
                                    position:'absolute',
                                    transform: [
                                        {rotate: '180deg'}
                                    ]
                                }, this.props.style]}/>
                        
                </View>
        );
    }
}