import { Image, Pressable, ScrollView, Text, View,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'


function HorizontalController({type}:{type:"meditate"|"inspire"|"nurture"}){
    return <View style={{
        height:160,
        margin:10,
        width:350,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        position:'relative'
    }}>
        <View style={{
            elevation:2,
            backgroundColor:'transparent',
            position:'absolute'
        }}>
<View style={{
    elevation:10
}}>

        <Image style={{
            height:170,
            width:170,
            backgroundColor:'transparent',
            
        }} source={type=="inspire" ? require("../Assets/inspire.png") : (type=="meditate" ? require("../Assets/girl.png") : (type=="nurture" ? require("../Assets/boy_running.png") : require("../Assets/boy_running.png")))}/>
        <Text style={{
            position:'absolute',
            bottom:0
        }}>{type=="inspire" ? "Share your Stories" : (type=="meditate" ? "For Mental Health" : type=="nurture" ? "Your Daily Task " : null
        )}</Text>
        </View>
        </View>
        <View style={{
            width:"100%",
            bottom:0,
            height:170/2,
            position:'absolute',
            opacity:0.5,
            backgroundColor:type=="inspire" ? "#faadb2b0" : (type=="meditate" ? "#f9c747b0" : (type=="nurture" ? "#aadf8db0" : "white")),
            elevation:-1
        }}>
        </View>
    </View>
}

export default function HomePage(){
    return <>
    <View style={{
        marginTop:50,
        // backgroundColor:"red",
        height:10,
        width:"100%"
    }}>
    <View style={{
        paddingLeft:10,
        paddingRight:10,
        height:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }}>
    <Pressable onPress={()=>{

    }} style={{
        height:"100%",
        width:70,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    }}>
        <View style={{
            height:10,

            width:'100%',
            backgroundColor:"#5B84B5",
            borderRadius:10
        }}>
        </View>
        <View style={{
            height:10,

            width:'70%',
            backgroundColor:"#5B84B5",
            borderRadius:10
        }}>

        </View>
        </Pressable>     
        <Pressable onPress={()=>{

        }}>
            <Icon name="heart" color={"#f9595f"} size={30}/>
        </Pressable >
    </View>

    

    </View>

    <View>
    <View style={{
        marginTop:70,
        paddingLeft:20
    }}>
        <Text style={{
            fontSize:20,
            color:"#696969"
        }}>
        Hello,
        </Text>
        <Text style={{
            fontSize:30,
            fontWeight:"500",
            color:"#3E3E3E"
        }}>
        Mehul
        </Text>
    </View>
    </View>
<View
>



    <ScrollView horizontal style={{
        marginTop:30,
        // backgroundColor:'red',
        // height:30,
        width:"100%"
    }}>
        <HorizontalController type="inspire"/>
        <HorizontalController type="meditate"/>
        <HorizontalController type="nurture"/>
    </ScrollView>
    </View>
    <View style={{
        // marginTop:-100
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Text style={{
            fontSize:30
        }}>

        Meditate
        </Text>
    </View>
    <View style={{
        marginTop:40,
        width:'100%',
        // padding:,
        paddingLeft:10,
        paddingTop:4
    }}>
        <Text style={{
            fontSize:20,
            color:'black'
        }}>
        Recommendations
        </Text>
    </View>
    <View style={{
        paddingLeft:20
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row'
        }}>
       <View>
        <Image style={{
            height:70,
            width:140,
            borderRadius:20,
            margin:10
        }} source={require('../Assets/yoga.png')}/>
       </View>
       <View>
        <Image style={{
            height:70,
            width:140,
            borderRadius:20,
            margin:10
        }} source={require('../Assets/yoga.png')}/>
       </View>
        </View>

        <View style={{
            display:'flex',
            flexDirection:'row'
        }}>
       <View>
        <Image style={{
            height:70,
            width:140,
            borderRadius:20,
            margin:10
        }} source={require('../Assets/yoga.png')}/>
       </View>
       <View>
        <Image style={{
            height:70,
            width:140,
            borderRadius:20,
            margin:10
        }} source={require('../Assets/yoga.png')}/>
       </View>
        </View>
    </View>
    <View style={{
        height:40,
        justifyContent:'center',
        alignItems:'center'
    }}>
   <TouchableOpacity activeOpacity={0.6}  style={{
    height:'100%',
    width:'60%',
     backgroundColor:'#3C6CA7',
     borderRadius:10,
     justifyContent:'center',
     alignItems:'center'
   }}><Text style={{
    color:'white'
   }}>
   Book a session with Therapist
   </Text></TouchableOpacity>
   
    </View>
    </>
}