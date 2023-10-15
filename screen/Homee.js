import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';


const Homee = () => {
  const [img, setimg] = useState(0);
  const navi = useNavigation()
  const route = useRoute()
  const data = [
      {
          id: 0,
          color: 'Xanh',
          link: require('../assets/vs_blue.png'),
      },
      {
          id: 1,
          color: 'Đỏ',
          link: require('../assets/vs_red.png'),
      },
      {
          id: 2,
          color: 'Đen',
          link: require('../assets/vs_black.png'),
      },
      {
          id: 3,
          color: 'Bạc',
          link: require('../assets/vs_silver.png'),
      },
  ]
  return (
    <View style={styles.container}>
        <Image source={route.params?.linkimg == null ? data[img].link : route.params?.linkimg} style={{width: 301, height: 361,resizeMode:'contain',marginLeft:45}}/>
        <Text style={{marginLeft: 22,marginTop:14,color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{flexDirection:'row',marginLeft:22,marginTop:9}}>
            <Image source={require('../assets/star.png')} style={{width:23,height:25,marginRight:2}}/>
            <Image source={require('../assets/star.png')} style={{width:23,height:25,marginRight:2}}/>
            <Image source={require('../assets/star.png')} style={{width:23,height:25,marginRight:2}}/>
            <Image source={require('../assets/star.png')} style={{width:23,height:25,marginRight:2}}/>
            <Image source={require('../assets/star.png')} style={{width:23,height:25,marginRight:25}}/>
            <Text style={{width: '100%', color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word',paddingTop:5}}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:22,marginTop:13,alignItems:'center'}}>
            <Text style={{color: 'black', fontSize: 18, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',marginRight:44}}>1.790.000 đ</Text>
            <Text style={{color: 'rgba(0, 0, 0, 0.58)', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',textDecorationLine:'line-through'}}>1.790.000 đ</Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:22,marginTop:16,alignItems:'center'}}>
            <Text style={{marginRight:8 ,color: '#FA0000', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Text style={{fontWeight: '400',fontSize: 14,width: 20, height: 20,borderRadius:60, border: '1px black solid',textAlign:'center'}}>?</Text>
        </View>
        <Pressable
          onPress={() => navi.navigate("Menu", {
            imgg: route.params?.linkimg === null ? data[img].link : route.params?.linkimg,
          //  colorname: route.params?.makecolor === null ? data[img].color : route.params?.makecolor,
            productName: `Điện Thoại Vsmart Joy 3 \nHàng chính hãng (${data[img].color})`,
        })}
        >
          <View style={{marginTop:16,marginLeft:18,width: 350, height: 34, background: 'rgba(196, 196, 196, 0)', borderRadius: 10, border: '2px rgba(0, 0, 0, 0.46) solid'}}>
            <Text style={{marginTop:8,marginLeft:103,color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>4 MÀU-CHỌN MÀU</Text>
          </View>
        </Pressable>
        <Pressable style={{marginTop:59,marginLeft:18,width: 350, height: 44, background: '#EE0A0A',borderRadius: 10, border: '1px #CA1536 solid',justifyContent:'center', alignItems:'center'}}>
            <Text style={{color: '#F9F2F2', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>Chọn Mua</Text>
        </Pressable>
    </View>
  );
}
export default Homee
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
