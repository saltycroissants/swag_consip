import React from 'react';
import {View, StyleSheet,Text, Image} from 'react-native';
import Dash from 'react-native-dash';
import data from '../../../json/lecture.json';


function read_lectname(){

    var fin = [];   
    
    var len = Object.keys(data.lectureList).length;
    for(var i=0;i<len;i++){
        console.log(data.lectureList[i].name);
        fin.push(data.lectureList[i].name);
    }
    // var keylen = Object.keys(data.lectureList[an].keywords).length;
    // for(var i=0;i<keylen;i++){
    //         ret= [];
    //         ret.push(data.lectureList[an].keywords[i].date.substring(4,6));
    //         ret.push(data.lectureList[an].keywords[i].date.substring(6,8));
    //         ret.push(data.lectureList[an].keywords[i].key1);
    //         ret.push(data.lectureList[an].keywords[i].key2);
    //         ret.push(data.lectureList[an].keywords[i].key3);
    //         //console.log(ret);
    //         fin.push(ret);
            
        
    // }

    return fin;

}



const Block = ({navigation}) => {
    
    const lectname = read_lectname();
    console.log("출력해보자 결과값을: "+lectname);


    const show_name = () => {
        return lectname.map((el,i) => 

        <View style ={styles.container}>
            <View style = {{flex:1, alignItems : 'center', justifyContent: 'center'}}>
            <Image
                    style ={styles.stamp}
                    source={require('../../../assets/icons/circleButtonOff.png')}
                    resizeMode = "contain"
                    >
                </Image>
            </View>
            <View style={{flex: 0.5}}>
                <Text style = {styles.textname}>{lectname[i]}</Text>
                <Text style = {styles.texttime}>11:00</Text>
            </View>
        </View>
           
        
    )
    }



    return(
        <View style={{flexDirection:'row'}}>

            {show_name()}
        </View>
       
    // <View style ={styles.container}>
    //     <View style = {{flex:1, alignItems : 'center', justifyContent: 'center'}}>
    //     <Image
    //             style ={styles.stamp}
    //             source={require('../../../assets/icons/circleButtonOff.png')}
    //             resizeMode = "contain"
    //             >
    //         </Image>
    //     </View>
        
    //     <View style={{flex: 0.5}}>
    //         <Text style = {styles.textname}>브랜드스토리</Text>
    //         <Text style = {styles.texttime}>11:00</Text>
    //     </View>
    // </View>
        
        
    );
}

const styles = StyleSheet.create({
    container :{
        aspectRatio: 11/15,
        marginRight : 5,
        marginLeft : 5,
        backgroundColor : '#FFF',
        borderRadius : 16,
        borderWidth :1,
        borderColor : '#D9DBE9'
    },
    stamp:{
        width : '75%',
        height : '75%',
    },
    blockImage : {
        width : '100%',
        height : '100%',
        //boxShadow: 4px 4px 5px 'rgba(0, 0, 0, 0.2)',
        //borderRadius: 20
    },
    textname : {
        fontSize :20,
        textAlign : "center",
        fontFamily : "NanumSquareEB",
        color : "#4E4B66"
    },
    texttime : {
        fontSize :25,
        textAlign : "center",
        fontFamily : "NanumSquareR",
        color : "#4E4B66"
    }
    
})

export default Block;