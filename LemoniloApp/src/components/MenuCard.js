import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

function MenuCard(props) {
  const navigation = props.navigation
  return (
    <>
    <View style={styles.headContent}>
      <Text style={styles.sectionHeadTitle}>Categories</Text>
      <Image source={require('../assets/categories.png')} style={styles.headIcon} />
    </View>
    <View style={ styles.contentContainer}>
      <View style={styles.newTaskContainer} >
        <TouchableOpacity style={styles.card}
          onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/food_icon.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Makanan</Text>
        </TouchableOpacity>                         
        <TouchableOpacity style={styles.card}
          onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/snack_icon.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Cemilan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} 
          onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/drink_icon.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Minuman</Text>
        </TouchableOpacity>  
      </View>
      <View style={[styles.newTaskContainer]}>
      <TouchableOpacity style={styles.card} onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/cathering_icon.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Katering</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.card} onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/moms_icon.jpg')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Ibu & Anak</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/herbal_icon.jpg')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Perawatan</Text>
        </TouchableOpacity>           
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
      height: 250,
      padding: 10,
      backgroundColor: '#27ae60',
      top: 10,
      width: '100%',
  },
  newTaskContainer: {
      flexDirection: 'row',
      justifyContent: 'center', 
      width: '100%',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      marginTop: 5,
      shadowOffset: {
        width: 0,
        height: 4
      }
  },
  card: {
    width: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 6,
  },
  icon: {
    maxWidth: '100%', 
    height: 70,
    width: 70
  },
  headContent : {
    flexDirection: 'row',
  },
  headIcon: {
    maxWidth: '100%', 
    height: 20,
    width: 20,
    tintColor:'#e91e63',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft:'auto',
    marginRight: 20
  },
    sectionTitle: {
    fontWeight: 'bold',
    color: '#e91e63',
  },
  sectionHeadTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e91e63',
    marginLeft: 10,
  },
  
});


export default MenuCard