import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase, TouchableHighlight } from 'react-native';
import AreaChartContainer from '../../AreaChartContainer';


   
export default class DOAreaChartSubCategory extends Component {

    constructor(props){
        super(props);
        this.state={
            BackGroundColor: "#fff",
            ChartData: null,
            ShowToolTip: null,

            dataHeightRatio:null,
            minMaxPointsForData: [],
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
    

    onSubCategoryPress(evt){
        if(this.state.ChartData != null){
            console.log(`y coord = ${evt.nativeEvent.locationY}`);

            var numberOfData = this.state.minMaxPointsForData.length;
            while(numberOfData > 0){
                numberOfData = numberOfData - 1;
                var max = this.state.minMaxPointsForData[numberOfData].min;
                if(evt.nativeEvent.locationY > max){
                    this.state.ShowToolTip(this.state.ChartData.categoryIndex, this.state.ChartData.subCategoryIndex, numberOfData, max);
                    return;
                }
            }
        }
    }

    onSubCategoryPress2(dic){
        if(this.state.ChartData != null){
            console.log(`y coord = ${dic.dataNum}, ${dic.max}`);

        }
    }

    onSubCategoryPress3(evt){
        if(this.state.ChartData != null){
            console.log(`y coord = ${evt.nativeEvent.locationY}`);

        }
    }

    getTopGap (ranges, rangesGaps, data) {
        var numberOfRanges = ranges.length;
        
        var indexOfRange = 0;
        for (k = 0; k < numberOfRanges; k++) { 
            if(ranges[k].value <= data){
                break;
            }
            indexOfRange = indexOfRange + 1;
        }
        
        var topSpace = indexOfRange * rangesGaps;
        
        var rangeMin = ranges[numberOfRanges-1].value;
        var rangeMax = ranges[0].value;
        if(indexOfRange < (numberOfRanges-1)){
            rangeMin = ranges[indexOfRange + 1].value;
            rangeMax = ranges[indexOfRange].value;
        }
        
        
        var topSpaceInRange = (rangeMax - data)/(rangeMax - rangeMin)*rangesGaps
        topSpace = topSpace + topSpaceInRange;
        var spaceToReturn = topSpace + rangesGaps
        if(spaceToReturn > numberOfRanges*rangesGaps){
            spaceToReturn = numberOfRanges*rangesGaps
        }
        return  spaceToReturn;
    }

    render() {

        var color = "#fff";
        var heightInternal = 0;
        var widthInternal = 0;
        var barHeight = 0;
        var barColorTop = "#111";
        var barColorBottom = "#111";
        if(this.state.ChartData != null){
            this.state.minMaxPointsForData = [];
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;
            heightInternal = this.state.ChartData.height;
            widthInternal = this.state.ChartData.width;
            
            styleByParent = this.state.StyleData;
            dataForBar = this.state.ChartData.dataForBar;
            
            var ranges = this.state.ChartData.ranges;
            var rangesGaps = this.state.ChartData.rangesGaps;


            var views = dataForBar.map((b,i) => {
                
                var currentData = b.currentData;
                var nextData = b.nextData;

                var topSpace = this.getTopGap(ranges,rangesGaps, currentData);
                var nextTopSpace = this.getTopGap(ranges, rangesGaps, nextData);

                var topCrown = <View/>

                var maxTopSpace = topSpace;
                var minTopSpace = nextTopSpace;
                if(topSpace != nextTopSpace){
                    
                    var isLeftMax = true;
                    if(maxTopSpace < minTopSpace ){
                        maxTopSpace = nextTopSpace;
                        minTopSpace = topSpace;
                        isLeftMax = false;
                    }
                    var width = widthInternal;
                    var height = (maxTopSpace - minTopSpace);
                    if(height < widthInternal){
                        height = (maxTopSpace - minTopSpace)
                        width = height
                    }

                    this.state.minMaxPointsForData.push({"min":minTopSpace, "max":maxTopSpace})

                    topCrown = <View pointerEvents="none"
                    style={{
                        left:0,
                        top:minTopSpace,
                        position:'absolute',
                        width:width,
                        height:height,
                        
                        backgroundColor: 'transparent',
                        borderStyle: 'solid',
                        borderLeftWidth: isLeftMax?0:(maxTopSpace - minTopSpace),
                        borderRightWidth: isLeftMax?(maxTopSpace - minTopSpace):0,
                        borderBottomWidth: width,
                        
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: b.topColor,
                        transform: [
                            {translateX: isLeftMax?-((maxTopSpace - minTopSpace) - widthInternal):0},
                            {rotate: isLeftMax?'270deg':'90deg' },
                        ]
                    }}
                    />
                }
                else{
                    this.state.minMaxPointsForData.push({"min":minTopSpace, "max":maxTopSpace})                    
                }

                let indexOfData = i;
                let max = maxTopSpace;

                return(
                    
                    <View>
                        {/* <View 
                        style={{
                            left:0,
                            top:0,
                            position:'absolute',
                            width:widthInternal,
                            height:heightInternal,

                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderLeftWidth: widthInternal*0.5,
                            borderRightWidth: 0,
                            borderBottomWidth: heightInternal,
                            borderLeftColor: 'transparent',
                            borderRightColor: 'transparent',
                            borderBottomColor: b.topColor,
                        }}
                        /> */}
                        {/* <TouchableHighlight key={i} onPress={this.onSubCategoryPress2.bind(this,{"dataNum":indexOfData, "max":max})} > */}
                        {topCrown}
                        {/* </TouchableHighlight>
                        <TouchableHighlight key={i} onPress={this.onSubCategoryPress2.bind(this,{"dataNum":indexOfData, "max":max})} > */}

                        <View pointerEvents="none"
                        style={{
                            left:0,
                            top:maxTopSpace,
                            position:'absolute',
                            width:widthInternal,
                            height:(heightInternal - maxTopSpace),
                            backgroundColor: b.topColor,
                        }} key={i}/>
                        {/* </TouchableHighlight> */}


                    </View>

                )
            })
        }


        return (
            //underlayColor and activeOpacity is used to hide the highlights.... underlayColor="#00000000" activeOpacity={1}
                <View style={{width:widthInternal, height:heightInternal}}>
                <TouchableHighlight onPress={(evt) => this.onSubCategoryPress(evt)}>
                        <View style={{/*backgroundColor:"red",*/ top:0, left:0, width:widthInternal, height:heightInternal, position:'absolute'}}/>
                </TouchableHighlight>
                    {views}
                    

                </View>
            )
    }
}