import React from "react";
import { Text, TextInput, Touchable, View } from "react-native";
import LogoHolder from "../Modules/LogoHolder";
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from "react-native";

function Header(){
    return <View style={{
      display:'flex',
      flexDirection:'column',
      flex:0,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:30,
      position:'relative'
    }}>
        <Pressable style={{position:'absolute',
top:0,
left:30}} onPress={()=>{

        }}>

<Icon  name="arrow-back-outline" color={'#5b84b5'} size={45}/>
</Pressable>


<LogoHolder/>
    </View>
}

function Hero(){
    return <View style={{
        marginTop:5,
        // padding:'80%',
        padding:20,
        width:'100%'
    }}>
        <Text style={{
            color:'#5B84B5',
            fontWeight:'700',
            fontSize:40
        }}>Welcome!</Text>
        <Text style={{
            color:'#787878',
            fontWeight:'700',
            fontSize:22
        }}>Join Us and Start a new journey</Text>
    </View>
}

function SignUpFormHolder(){
    return <>
    <View style={{marginTop:10,
    height:'100%',
    backgroundColor:'#5a83b536',
    borderTopRightRadius:30,
    padding:20,
    borderTopLeftRadius:30}}>
        <Text style={{
            color:'#5B84B5',
            fontSize:20,
            fontWeight:'500'
        }}>
        Discover the new life.
        </Text>
        <View>
            <TextInput placeholder="Username" style={{
                marginTop:20,
                padding:10,
                backgroundColor:'white',
                borderRadius:10,

            }}/>
            <TextInput placeholder="Full Name" style={{
                marginTop:20,
                padding:10,
                backgroundColor:'white',
                borderRadius:10,

            }}/>
            <TextInput placeholder="Email" style={{
                marginTop:20,
                padding:10,
                backgroundColor:'white',
                borderRadius:10,

            }}/>
            <View style={{
                position:'relative',
                marginTop:20,
                 
            }}>
             <TextInput placeholder="Password" style={{
                 backgroundColor:'white',
                 borderRadius:10,
                 padding:10,
                }}>
            </TextInput>
            <Pressable onPress={()=>{
            }} style={{
                position:'absolute',
                right:20,
                top:10
            }}>
            <Icon name="eye" color={'#5b84b5'}  size={25}/>
            </Pressable>
                </View>

            <View style={{
                position:'relative',
                marginTop:20,
                 
            }}>
                {/* TODO: Derive Here  */}
             <TextInput placeholder="Confirm Password" style={{
                 backgroundColor:'white',
                 borderRadius:10,
                 padding:10,
                }}>
            </TextInput>
            <Pressable onPress={()=>{
            }} style={{
                position:'absolute',
                right:20,
                top:10
            }}>
            <Icon name="eye" color={'#5b84b5'}  size={25}/>
            </Pressable>
                </View>
                
        </View>
        <View style={{
            marginTop:20,
            display:'flex',
            alignItems:'center'
        }}>


            <View style={{
                height:40,
                backgroundColor:'#5B84B5',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'35%',
                borderRadius:5,
            }}>
                <Text style={{
                    color:'white',
                    fontWeight:'600'
                }}>
                Sign Up
                </Text>
            </View>
            <View style={{
                marginTop:5
            }}>
                <Text style={{
                    color:'#787878'
                }}>
                Already have an account? 
                <Text style={{
                    color:'#5B84B5'
                }}>
                 Login
                </Text>
                </Text>
                
                    </View>
            </View>
    </View>
    </>
}


export default function LoginPage(){
    return <View>
       <Header/>
            <Hero/>
            <SignUpFormHolder/>
    </View>
}