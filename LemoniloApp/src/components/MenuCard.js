import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

function MenuCard({navigation}) {
  return (
    <>
    <Text style={styles.sectionHeadTitle}>Categories</Text>
    <View style={ styles.contentContainer}>
      <View style={styles.newTaskContainer} >
        <View style={styles.card}
          onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/food_icon.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Makanan</Text>
        </View>                         
        <View style={styles.card}
          onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/snack_icon.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Cemilan</Text>
        </View>
        <View style={styles.card} 
          onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/drink_icon.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Minuman</Text>
        </View>  
      </View>
      <View style={[styles.newTaskContainer]}>
      <View style={styles.card} onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/cathering_icon.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Katering</Text>
        </View>  
        <View style={styles.card} onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/moms_icon.jpg')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Ibu & Anak</Text>
        </View>
        <View style={styles.card} onPress={() => {
            navigation.replace('Maintenance')
          }}>
            <Image source={require('../assets/herbal_icon.jpg')} style={styles.icon} />
            <Text style={styles.sectionTitle}>Perawatan</Text>
        </View>           
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
      width: '100%'
  },
  newTaskContainer: {
      flexDirection: 'row',
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
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    margin: 5,
    alignItems: 'center',
  },
  icon: {
    maxWidth: '100%', 
    height: 70,
    width: 70
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
  sectionHeadTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10
  },
  
});


export default MenuCard