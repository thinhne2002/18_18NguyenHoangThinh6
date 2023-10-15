import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [img, setimg] = useState(0);
  const navi = useNavigation();
  const route = useRoute();
  const data = [
      {
          id: 0,
          link: require('../assets/vs_blue.png'),
          color:'blue',
          colorname:'Xanh'
      },
      {
          id: 1,
          link: require('../assets/vs_red.png'),
          color:'red',
          colorname:'Đỏ'
      },
      {
          id: 2,
          link: require('../assets/vs_black.png'),
          color:'black' ,
          colorname:'Đen' 
      },
      {
          id: 3,
          link: require('../assets/vs_silver.png'),
          color:'white',
          colorname:'Trắng'  
      },
  ]
  const setidimg = (id) => {
    setimg(id)
}
  return (
    <View style={styles.container}>
      <View style={{width:'100%',height:149,marginBottom:15,flexDirection:'row'}}>
        <Image source={data[img]?.link == null ? route?.params?.imgg : data[img]?.link} style={{marginLeft:10,marginTop:8,width:112,height:132,resizeMode:'contain'}}/>
        <View>
          <Text style={{marginLeft:25,marginTop:17,color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>{route?.params?.productName}</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:25,marginTop:9,color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>
              Màu: 
            <Text style={{marginLeft: 5,color: 'red', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
              {data[img]?.colorname}</Text>
            </Text>
          </View>
        <Text style={{marginLeft:25,marginTop:9,color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>
          Cung Cấp Bởi 
          <Text style={{marginLeft: 5,color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
            Tiki Trading</Text>
          </Text>
          <Text style={{marginLeft:25,marginTop:9,color: 'black', fontSize: 18, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'rgba(196, 196, 196, 1)',height:510,width:'100%',justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 18, fontFamily: 'Arial',padding:15, fontWeight: '400', wordWrap: 'break-word'}}>
          Chọn một màu bên dưới:</Text>
        {data.map((item, index) => (
          <Pressable style={{alignItems:'center'}} onPress={() => setidimg(item.id)}>
            <View style={{ marginTop: 5, backgroundColor: item?.color, width: 80, height: 80 }}></View>
          </Pressable>
        ))}
        <Pressable onPress={()=>navi.navigate('Home',{
          linkimg: data[img]?.link,
          makecolor: data[img]?.colorname
        })} style={{alignItems:'center',marginTop:34}}>
          <Text style={{textAlign:'center',paddingTop:12,color: '#F9F2F2', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',width: 350, height: 44, background: 'rgba(25.46, 81.70, 226.31, 0.58)',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: '1px #CA1536 solid'}}>
            XONG
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
