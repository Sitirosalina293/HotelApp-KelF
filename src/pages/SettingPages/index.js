import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import {Gap, Line} from '../../components';
import {SafeAreaView} from 'react-native';
import {IcBack2, IcBack3} from '../../assets';
import {TouchableOpacity} from 'react-native';

const SettingPages = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
        >
          <IcBack2 />
        </TouchableOpacity>
        <Gap width={150} />
        <Text style={styles.textHeader}>Setting</Text>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.textContent}>MY ACCOUNT</Text>
          <Gap height={10} />
          <View style={styles.isiContent}>
            <Text style={styles.textIsiContent}>First Name</Text>
            <Text style={styles.textIsiContent2}>Lailatul</Text>
          </View>
          <Line />
          <View style={styles.isiContent}>
            <Text style={styles.textIsiContent}>Last Name</Text>
            <Text style={styles.textIsiContent2}>Fitriyah</Text>
          </View>
          <Line />
          <View style={styles.isiContent}>
            <Text style={styles.textIsiContent}>Email</Text>
            <Text style={styles.textIsiContent2}>fitri@gmail.com</Text>
          </View>
          <Line />
          <View style={styles.isiContent}>
            <Text style={styles.textIsiContent}>Gender</Text>
            <Text style={styles.textIsiContent2}>Perempuan</Text>
          </View>
          <Line />
          <View style={styles.isiContent}>
            <Text style={styles.textIsiContent}>Language</Text>
            <TouchableOpacity>
              <IcBack3 />
            </TouchableOpacity>
          </View>
          <Line />
          <View style={styles.isiContent}>
            <Text style={styles.textIsiContent}>Search History</Text>
            <TouchableOpacity>
              <IcBack3 />
            </TouchableOpacity>
          </View>
          <Line />
          <View style={styles.isiContent}>
            <Text style={styles.textIsiContent}>Report A Problem</Text>
            <TouchableOpacity>
              <IcBack3 />
            </TouchableOpacity>
          </View>
          <Line />
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>SUPPORT</Text>
          <Gap height={10} />
          <View style={styles.isiContent}>
            <TouchableOpacity>
              <Text style={styles.textIsiContent}>Teams & Policy</Text>
            </TouchableOpacity>
          </View>
          <Line />
          <View style={styles.isiContent}>
            <TouchableOpacity>
              <Text style={[styles.textIsiContent, styles.danger]}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
          <Line />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingPages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#44CFCB',
  },
  textHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    letterSpacing: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
  },
  textContent: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium',
    color: '#000',
    letterSpacing: 1,
  },
  isiContent: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textIsiContent: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    letterSpacing: 1,
  },
  textIsiContent2: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9A9A9A',
    letterSpacing: 1,
  },
  danger: {
    color: '#FF0000',
  },
});
