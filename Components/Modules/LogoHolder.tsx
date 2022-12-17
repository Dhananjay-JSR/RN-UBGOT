import { View,StyleSheet, Text } from "react-native";

export default function LogoHolder(){
    return <><View style={style.Holder}>
        <Text style={style.Text}>Logo</Text>
    </View>
    </>
}

const style = StyleSheet.create({
    Holder:{
        backgroundColor:'#D9D9D9',
        height:80,
        width:150,
        borderRadius:20,
        textAlign:"center",
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    Text:{
        color:'#787878',
        fontSize:35,
        fontWeight: "500"
    }
})