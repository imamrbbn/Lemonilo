import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import WaveBackground from '../components/WaveBackground'
// import UnderMaintenanceGif from '../assets/maintenance.gif'
import LottieView from 'lottie-react-native';

export default function UnderMaintenance({navigation}) {
  return (
    <>
      <SafeAreaView>
        <View
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <WaveBackground/>

          <View style={styles.content}>
            <LottieView
              source={require('../assets/noodleLottie.json')} autoPlay loop
              style={{
                  height: 200,
                  width: 200
            }}/>
            <Text style={styles.sectionTitle}>Under Maintenance...</Text>

          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: '100%'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    top: 60
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  content: {
    top: 175
  }
});