import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import AreaChartContainer from '../../AreaChartContainer';
import DOAreaChartSubCategory from './DOAreaChartSubCategory.js'


   
export default class DOAreaChartCategory extends Component {

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

        var color = 'transparent';
        var heightInternal = 0;
        var widthInternal = 0;
        var label= "";
        var labelColor = "#000000";
        
        let labelHeight = 15;
        var barTag = <View></View> 
        if(this.state.ChartData != null){
            //Another way of saying that parent states are initiallized.
            color = this.state.BackGroundColor;
            heightInternal = this.state.ChartData.height;
            widthInternal = this.state.ChartData.width;
            label = this.state.ChartData.label;
            labelColor = this.state.ChartData.categoryLabelColor;
            labelHeight = this.state.ChartData.labelHeight;

            var numberOfSubCategories = this.state.ChartData.data[0].subCategories.length;
            var widthOfSubCategories = widthInternal * 1.0 / numberOfSubCategories;


            var subCategories = this.state.ChartData.data[0].subCategories.map((a,j) => {

                var dataForBar = this.state.ChartData.data.map((b,i) => {
                    var nextData = 0;
                    if(j < (numberOfSubCategories-1)){
                        nextData = b.subCategoryData[j+1].value;
                    }
                    else{
                        if(this.state.ChartData.nextCategory == null){
                            b.subCategoryData[j].value
                        }else{
                            nextData = this.state.ChartData.nextCategory[i].subCategoryData[0].value;                            
                        }
                    }
                    return({
                        //"width" : (widthInternal / this.state.ChartData.data.length), //Actual Width of bar With gap....
                        "currentData" : b.subCategoryData[j].value,
                        "nextData" : nextData,
                        "topColor" : this.state.ChartData.style[i].areaColorTop,
                        "bottomColor" : this.state.ChartData.style[i].areaColorBottom,
                    })
                });


                return <DOAreaChartSubCategory data={{
                                "width" : widthOfSubCategories,
                                "height": (heightInternal - labelHeight), //Actual Height of subCategory....
                                "ranges": this.state.ChartData.ranges,
                                "rangesGaps": this.state.ChartData.rangesGaps,
                                "dataForBar": dataForBar,
                                "categoryIndex": this.state.ChartData.categoryIndex,
                                "subCategoryIndex": j
                            }} 

                            key={j}
                            bgColor="#fff" 
                            showToolTip={this.state.ShowToolTip} />
            })
            
            barTag = <View style={{flexDirection:'row'}}>{subCategories}</View>
            //Lets draw bars...
        }



        var LabelStyle = {
            width: '100%', 
            height: labelHeight, 
            position: 'absolute',
            color: labelColor,
            bottom: 0,
            textAlign: 'center',
            
        };
        var BarContainerStyle = {
            width: 10, 
            height: 10,
        };


        //this render will be overrided...
        return (
            <View style={{backgroundColor:'transparent', borderColor:"#999", borderWidth:0.5, width:widthInternal, height:heightInternal, alignItems: 'center' }}>
                <Text style={LabelStyle}  key={"categoryText"} >{label}</Text>
                {barTag}
            </View>
        );
    }
}