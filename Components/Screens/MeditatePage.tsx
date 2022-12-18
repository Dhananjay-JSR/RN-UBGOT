import { Image, Pressable, ScrollView, Text, Vibration, View } from "react-native";
import MiddlewareScreen from "../Modules/MiddleWareScreen";
import Icon from 'react-native-vector-icons/Ionicons'

function HorizontalController(){
    return <>
    <View style={{
        height:190,
        width:300,
        // backgroundColor:'red',
        margin:10
    }}>
        <Image source={require("../Assets/yoga.png")} style={{
            height:'80%',
            width:'100%',
            borderRadius:20
        }} />
        <View style={{
            width:300,
            marginTop:10,
            height:80,
        }}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
        <View>
            <Text style={{
                color:'#242424'
            }}>
            Breathing Exercise
            </Text>
            <Text style={{
                fontSize:12,
                color:'#393939'
            }}>
            Exercise for relief
            </Text>
        </View>
        <View style={{
            display:'flex',
            flexDirection:'row'
        }}>

              <View style={{
                //   height:"100%",
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Icon name="star" size={20} color="#f9c747"/>
                </View>  
                <View style={{
                //   height:"100%",
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Icon name="star" size={20} color="#f9c747"/>
                </View>  
                <View style={{
                //   height:"100%",
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Icon name="star" size={20} color="#f9c747"/>
                </View>  
                <View style={{
                //   height:"100%",
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Icon name="star" size={20} color="#f9c747"/>
                </View>  
                  </View>
            </View>
        </View>
    </View>
        
        </>
}

function YogaComponents({show}:{show:boolean}){
    return <View style={{
        marginTop:10,
        height:150,
        width:'100%',
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <View style={{
            backgroundColor:'white',
            borderRadius:20,
            height:"100%",
            width:"80%",
            padding:20,
            position:'relative',
            display:'flex',
            flexDirection:"row"
        }}>
                <View><Image source={require("../Assets/mask1.png")} /></View>
        <View style={{
            padding:10
        }}>
            <Text>Yoga for Wellness</Text>
            <Text style={{
                fontSize:10
            }}>Exercise for relief Exercise for relief Exercise
</Text>
<Text style={{
fontSize:10
}}>for relief.</Text>
   {show?<View style={{
display:'flex',
flexDirection:'row'
}}>
<Icon name="star" size={20}  color={"#f9c747"}/>
<Icon name="star" size={20}  color={"#f9c747"}/>
<Icon name="star" size={20}  color={"#f9c747"}/>
<Icon name="star" size={20}  color={"#f9c747"}/>
        </View>:null}     


        </View>
<Pressable onPress={()=>{

}} style={{
    position:'absolute',
    bottom:10,
    right:10,
    height:30,
    width:80,
    borderRadius:30,
    backgroundColor:'#FBD87F',
    justifyContent:'center',
    alignItems:'center'
}}>
    <Text style={{
        fontWeight:'500',
        color:"#7C7C7C"
    }}>
            Enroll
    </Text>
</Pressable>

<Pressable style={{
    position:"absolute",
    top:10,
    right:10
}} onPress={()=>{

}}>
    <Icon name="radio" color={"#fbd87f"} size={25}/>
</Pressable>
        </View>
    </View>
}

export default function MeditatePage(){
    return <><ScrollView style={{
        flex:1,
        height:'100%',
        width:'100%'
    }}>
        <MiddlewareScreen ImageType="Meditate" backgroundColor={"#ffff6436"} title="Meditate" titleColor={"#FBD87F"} >
        <ScrollView style={{
            // height:120
        }} horizontal>
        <HorizontalController/>
        <HorizontalController/>
        <HorizontalController/>
        <HorizontalController/>
        <HorizontalController/>
        </ScrollView>
        {/* FIXME: */}
        <View style={{
            height:1500
        }}>
        <View style={{
            marginTop:-180,
        }}>
            <View style={{
                padding:20,
                
            }}>
        <Text style={{
            fontSize:20,
            color:"#5B84B5"
        }}>Online Yoga Classes</Text>
            </View>

        <YogaComponents show/>

        <View style={{
             padding:20,
        }}>
            <Text style={{
                fontSize:20,
                color:"#5B84B5"
            }}>
            Relax with Tunes
            </Text>
        </View>
            <View style={{
                paddingLeft:40,
                paddingRight:40,
                height:120,
                width:"100%",

                display:'flex',
                flexDirection:'row'
            }}>
                <View style={{
                    flex:3,

                    margin:5,
                    
                }}>
                    <View>
                        <View style={{
                            height:"85%",
                            borderRadius:15,
                            width:'100%',
                            backgroundColor:'white'
                        }}>
                            <Icon name="musical-notes" color={"#FBD87F"} style={{
                                position:"absolute",
                                top:7,
                                right:7
                            }} size={20}/>
                        </View>
                        <View style={{
                            margin:1,
                            height:"15%"
                        }}>
                            <Text style={{
                                color:'#242424',
                                fontSize:13
                            }}>
                            Time to Moon
                            </Text >
                            <Text style={{
                                fontSize:10,
                                color:"#393939"
                            }}>
                            3 Audios
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    flex:3,

                    margin:5,
                    
                }}>
                    <View>
                        <View style={{
                            height:"85%",
                            borderRadius:15,
                            width:'100%',
                            backgroundColor:'white'
                        }}>
                            <Icon name="musical-notes" color={"#FBD87F"} style={{
                                position:"absolute",
                                top:7,
                                right:7
                            }} size={20}/>
                        </View>
                        <View style={{
                            margin:1,
                            height:"15%"
                        }}>
                            <Text style={{
                                color:'#242424',
                                fontSize:13
                            }}>
                            Time to Moon
                            </Text >
                            <Text style={{
                                fontSize:10,
                                color:"#393939"
                            }}>
                            3 Audios
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex:3,

                    margin:5,
                    
                }}>
                    <View>
                        <View style={{
                            height:"85%",
                            borderRadius:15,
                            width:'100%',
                            backgroundColor:'white'
                        }}>
                            <Icon name="musical-notes" color={"#FBD87F"} style={{
                                position:"absolute",
                                top:7,
                                right:7
                            }} size={20}/>
                        </View>
                        <View style={{
                            margin:1,
                            height:"15%"
                        }}>
                            <Text style={{
                                color:'#242424',
                                fontSize:13
                            }}>
                            Time to Moon
                            </Text >
                            <Text style={{
                                fontSize:10,
                                color:"#393939"
                            }}>
                            3 Audios
                            </Text>
                        </View>
                    </View>
                </View>

                
            </View>


            <View style={{
             padding:20,
             marginTop:10,
        }}>
            <Text style={{
                fontSize:20,
                color:"#5B84B5"
            }}>
            Live Classes
            </Text>
        </View>

        <YogaComponents show={false}/>
        <YogaComponents show={false}/>
        <YogaComponents show={false}/>
        <YogaComponents show={false}/>
        <YogaComponents show={false}/>
        <YogaComponents show={false}/>
            




        </View>
        </View>
        </MiddlewareScreen>
        </ScrollView></>
}