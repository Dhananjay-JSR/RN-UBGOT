import React from "react";
import { ColorValue, Dimensions, Image, Pressable, Text, View } from "react-native";
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
    
    return <View style={{
        flex:1
    }}>
     <View style={{
        marginTop:Dimensions.get('screen').height*0.03
    }}>
    <View style={{
        marginLeft:Dimensions.get('window').width*0.01,
        marginRight:Dimensions.get('window').width*0.01,
        backgroundColor:'transparent',
        display:'flex',
        flexDirection:'row',
    }}>
       <Pressable onPress={()=>{
        props.navigationProp();
}} style={{
      flex:1.2
  }}>
  <Image resizeMode="contain" source={require('../Assets/DrawerNavigation.png')} style={{
    width:Dimensions.get('screen').height*0.06,
    height:Dimensions.get('screen').height*0.06
  }}/>
</Pressable>
            <Text style={{
                color:props.titleColor,
                fontSize:Dimensions.get('window').height*0.04,
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
        marginTop:Dimensions.get('window').height*0.11,
        backgroundColor:props.backgroundColor,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
    }}>
        <View style={{
         width:'100%',
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
        marginTop:-Dimensions.get('window').height*0.12,
        }}>
    <Image style={{
        height:Dimensions.get('window').height*0.2,
        width:Dimensions.get('window').height*0.2,
    }} source={imageSrc}/>
    </View>
    <View style={{
        paddingTop:Dimensions.get('window').height*0.02
    }}>
    {props.children}

    </View>
    </View>
    {/* <View style={{
        height:'100%',
        backgroundColor:"red",
        elevation:10,
    }}>
     <View style={{
        elevation:10,
        borderTopWidth: 0,
         width:'100%',
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:"blue"
        }}>
    <Image style={{
        height:Dimensions.get('window').height*0.2,
        width:Dimensions.get('window').height*0.2,
    }} source={imageSrc}/>
    </View>
    <View style={{
        marginTop:-Dimensions.get('window').height*0.08,
        elevation:-10,
        borderTopWidth: 0,
        backgroundColor:props.backgroundColor,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        height:'100%',
        paddingTop:70
    }}>
       {props.children}
    </View>
    </View> */}
    </View>
}