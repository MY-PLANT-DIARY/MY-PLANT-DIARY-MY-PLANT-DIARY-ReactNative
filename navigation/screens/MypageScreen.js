import * as React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MYpageScreen({navigation}){
    return(
        <View>
            <View style={style.header}>
            <View style={style.headerbox}>
                <View style={style.plda}>
                    <Image source={{uri:"https://i.pinimg.com/736x/33/cd/72/33cd7251bfdfd4efb6f58892e97a93a1.jpg"}}
                    style={style.profile}/>

                    <View style={style.dday}>
                        <Text>D + 35</Text>
                    </View>
                </View>

                <Text style={{marginTop:5,fontSize:18,color:'white'}}>LV 5. 초록이</Text>
                <Text style={{marginTop:5,fontSize:18,color:'white'}}>키우는 식물:             키운 날짜:</Text>
                <View style={style.plda}>
                    <Text style={{fontSize:16,color:'white',marginRight:90}}>선인장</Text>
                    <Text style={{fontSize:16,color:'white',marginRight:10}}>2022-08-06</Text>
                </View>
            </View>
        </View>
        <View style={style.plda}>
                <Ionicons name="play" size={25} style={{marginLeft:18,marginRight:5,color:'#8E5C21'}}></Ionicons>
                <Text style={{fontSize:18, color:'#8E5C21'}}>내가 심은 나무 수</Text>
            </View>
            <View style={style.plda}>
            <Image source={{uri:"https://postfiles.pstatic.net/MjAyMjA4MDZfMTA2/MDAxNjU5NzIxNzg3ODcw.36i0LBHy8MMPmkxw-q-2tlzNlV4YG2LX17WCwiYBIFMg.YCgs79yH9ckt1bihs_VBGWomIMk1fuc8-AS9R4VDamwg.PNG.loveyr0118/free-icon-tree-2298405.png?type=w966"}} 
            style={{width:60,height:60,margin:10,marginLeft:80,marginBottom:20}}
            />
            <Text style={{fontSize:25,marginTop:20}}>2.3그루</Text>
            </View>
            <View style={style.plda}>
                <Ionicons name="play" size={25} style={{marginLeft:18,marginRight:5,color:'#8E5C21'}}></Ionicons>
                <Text style={{fontSize:18, color:'#8E5C21'}}>30챌린지 현황</Text>
            </View>
            <View style={style.header}>
            <View style={style.bottombox}>
                <Text style={{fontSize:18,color:'white'}}>초록이</Text>
                <View style={style.innerbox}>
                <Image source={{uri:"https://postfiles.pstatic.net/MjAyMjA4MDZfODEg/MDAxNjU5NzIyNjk5ODQy.kajlJU8z3rEbMQp60xEbGrCDgwU_3nSAUtLIKSQoOsIg.hjIIpvd5Vs9peGmBW8vba-SaPMj8P4kZHDzrFEo0pSYg.PNG.loveyr0118/medal.png?type=w966"}} 
                style={{width:30,height:30,margin:5}}/>
                </View>
            </View>
            </View>


        </View>
    

    )
}

const style = StyleSheet.create({
    header:{
        width:360,
        alignItems:'center',

    },
    headerbox:{
        width:300,
        height:150,
        backgroundColor:'#BE9D76',
        borderRadius:10,
        padding:10,
        marginTop:10,
        marginBottom:20,
        shadowColor:'black'
    },
    profile:{
        borderRadius:100,
        width:50,
        height:50,
    },
    plda:{
        flexDirection:'row'
    },
    dday:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:160,
        width:60,
        height:30,
        backgroundColor:'#D9D9D9',
        borderRadius:5,
    },
    subtitle:{
        
    },
    bottombox:{
        width:300,
        height:220,
        backgroundColor:'#BE9D76',
        borderRadius:10,
        padding:10,
        marginTop:10,
        marginBottom:20,
        shadowColor:'black',
        alignItems:'center',
    },
    innerbox:{
        width:280,
        height:170,
        backgroundColor:'#E2D0BA',
        borderRadius:10,
        padding:10,
        marginTop:10,
        marginBottom:20,
        shadowColor:'black'
    },


})