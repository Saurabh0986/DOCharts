import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';



const AreaChartUtilities = {
    leftScaleData: function(dataSource, heightOfScale){
        var dataRange = dataSource.dataRange;
        var ranges = dataRange.ranges;
        var numberOfRanges = ranges.length;
        return ({
            "numberOfRanges":numberOfRanges,
            "scaleGaps":heightOfScale/numberOfRanges,
        });
    },

    leftScaleView: function(dataSource, heightOfScale, widthOfLeftRangePannel, color){
        var dataRange = dataSource.dataRange;
        var ranges = dataRange.ranges;
        var numberOfRanges = ranges.length;
        var scaleGaps = heightOfScale/numberOfRanges;
        var Arr = ranges.map((a, i) => {
            return <Text style={{height:scaleGaps, textAlignVertical:'bottom', textAlign:'right'}} key={i}>{a.label}</Text>
        })

        var adjustHeight = 9;

        return ( <View style={{backgroundColor:color, shadowColor: "#000000", width: widthOfLeftRangePannel,}} >
            <View style={{height:adjustHeight, width:10}} />
            {/* above view is added to adjust the texts according to the back lines of backScaleView ....*/}
            {Arr}
        </View> );
    },

    leftScaleShadowView: function(heightOfScale, widthOfLeftRangePannel, color){
        return ( <View style={{backgroundColor:'#000', shadowColor: "#000000", height:(heightOfScale-10), width:20, left:(widthOfLeftRangePannel-20), top:10, position:'absolute', shadowOpacity:1, shadowRadius: 10,
        shadowOffset: {
          height: 0,
          width: 1
        }}} />);
    },

    backScaleView: function(dataSource, heightOfScale, widthOfScale){
        //this is used to show the lines at the back of areaView...
        var dataRange = dataSource.dataRange;
        var ranges = dataRange.ranges;
        var numberOfRanges = ranges.length;
        var scaleGaps = heightOfScale/numberOfRanges;

        var Arr = ranges.map((a, i) => {
            return <View style={{borderBottomColor:"#999", borderBottomWidth:0.2, height:scaleGaps, width: widthOfScale}} key={i}/>
        })

        return ( <View style={{ width: widthOfScale }} >
            {Arr}
        </View> );
    },

    legendsView: function(dataSource, widthOfScroll, heightOfBottomLegendsPannel){
        //this is used to show the lines at the back of areaView...
        var style = dataSource.style;
        var numberOfData = style.length;

        var gapBetweenTheLegends = 10;
        var gapBetweenLegendsColorAndLabel = 3;

        var Arr = style.map((a, i) => {
            return <View style={{ flexDirection:'row', alignItems:'center' }} key={i} >
                <View style={{ backgroundColor: a.data[0].areaColorTop, height: heightOfBottomLegendsPannel*0.5, width:5 }}/>
                <View style={{ height: heightOfBottomLegendsPannel*0.5, width:gapBetweenLegendsColorAndLabel }}/>
                <Text>{dataSource.dataset[i].legendsLabel}</Text>
                <View style={{ height: heightOfBottomLegendsPannel*0.5, width:gapBetweenTheLegends }}/>
            </View>
        })

        return ( <View style={{ width: widthOfScroll, alignItems:'center'  }} >
            <View style={{ flexDirection:'row', borderTopColor:'#888', borderTopWidth:1, height:heightOfBottomLegendsPannel }}>
                {Arr}
            </View>
        </View> );
    }
}

export default AreaChartUtilities;