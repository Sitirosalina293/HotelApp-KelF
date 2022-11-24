import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Gap, HeaderPrimary, TextInput} from '../../components';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const EditProfile = () => {
  const state = useSelector((state) => state);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderPrimary Title="Edit Profile" type={'header-setting'} />
      <View style={styles.content}>
        <Text style={styles.txtTitle}>Edit Profile</Text>
        <TextInput
          label="Username"
          placeholder="Type your name"
          value={state.auth.user}
          editable={false}
        />
        <Gap height={10} />
        <TextInput label="Email" placeholder="Type your email"
        />
        <Gap height={10} />
        <TextInput label="Gender" placeholder="Type your gender" 
        />
      </View>
      <View style={styles.content2}>
        <Button
          text="Save Profile"
          type="btn-primary"
          onPress={''}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
  txtTitle: {
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
    color: '#020202',
    marginBottom: 10,
  },
  // 
  content2: {
    padding: 20,
    bottom: 0,
    width:'100%',
    justifyContent: 'flex-end',
    position:'absolute',
  },
});
