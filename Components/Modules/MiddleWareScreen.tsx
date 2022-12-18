import React from "react";
import { ColorValue, Image, Pressable, Text, View } from "react-native";
interface ScreenProps{
    title:string,
    titleColor:ColorValue,
    backgroundColor:ColorValue,
    ImageType:"Nurture"|"Meditate"|"Inspire",
    children:React.ReactNode,
    navigationProp?:any,
}
export default function MiddlewareScreen(props:ScreenProps){
    let imageSrc = require("./../Assets/boy_running.png")
    if (props.ImageType=="Nurture"){
        imageSrc = require("./../Assets/boy_running.png")
    }else if (props.ImageType=="Meditate"){
        imageSrc=require("./../Assets/girl.png")
    }else if (props.ImageType=="Inspire"){
        imageSrc=require("./../Assets/inspire.png")

    }
    
    return <>
    <View style={{
        marginTop:30
    }}>
    <View style={{
        marginLeft:6,
        marginRight:6,
        backgroundColor:'transparent',
        display:'flex',
        flexDirection:'row',
    }}>
       <Pressable onPress={()=>{
        props.navigationProp();
}} style={{
      height:25,
      width:55,
      margin:5,
      flex:1.2
  }}>
  <View style={{
      width:'90%',
      backgroundColor:'#5B84B5',
      borderRadius:30,
      height:'20%'
  }}></View>
  <View style={{
      marginTop:5,
      width:'60%',
      borderRadius:30,
      backgroundColor:'#5B84B5',
      height:'20%'
  }}></View>
</Pressable>
            <Text style={{
                color:props.titleColor,
                fontSize:25,
                paddingLeft:45,
                fontWeight:'500',
                textAlign:'center',
                flex:7
            }}>
            {props.title}
            </Text>
            <View style={{
                backgroundColor:'transparent',
                height:'100%',
                flex:3
            }}>

            </View>
    </View>
    </View>
    <View style={{
        height:'100%',
    }}>
     <View style={{
        elevation:100,
         width:'100%',
         display:'flex',
         justifyContent:'center',
         alignItems:'center'
        }}>
        {/* <View style={{
            borderWidth:1,
            borderStyle:'solid',
            borderRadius:225,
            shadowColor:"red",
            shadowRadius:10,
            elevation:1,
            shadowOpacity:1
        }}> */}

    <Image style={{
        height:200,
        width:190,
    }} source={imageSrc}/>
    {/* </View> */}
    </View>
    <View style={{
        marginTop:-70,
        elevation:-1,
        backgroundColor:props.backgroundColor,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        height:'100%',
        paddingTop:70
    }}>
       {props.children}
    </View>
    </View>
    </>
}