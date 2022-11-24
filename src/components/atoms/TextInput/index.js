import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import {IcBack3} from '../../../assets';
import Gap from '../Gap';

const TextInput = ({type, Title, value, onChangeText, Desc, label, placeholder, ...restProps}) => {
  if (type === 'setting-only') {
    return (
      <View style={styles.isiContent}>
        <Text style={styles.textIsiContent}>{Title}</Text>
        <Text style={styles.textIsiContent2}>{Desc}</Text>
      </View>
    );
  }

  if (type === 'setting-icon') {
    return (
      <View style={styles.isiContent}>
        <Text style={styles.textIsiContent}>{Title}</Text>
        <TouchableOpacity>
          <IcBack3 />
        </TouchableOpacity>
      </View>
    );
  }

  if (type === 'support') {
    return (
    <View style={styles.isiContent}>
      <TouchableOpacity>
        <Text style={styles.textIsiContent}>{Title}</Text>
      </TouchableOpacity>
    </View>
    );
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={5} />
      <TextInputRN
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
    color: '#7D8797',
    // marginBottom: 15,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    padding: 10,
  },
  // setting
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
});
