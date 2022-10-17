import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NavBack from '../../components/molecules/NavBack';
import {Button, Gap, Line, TextInput2} from '../../components';
import TextHome2 from '../../components/atoms/TextHome2';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const InformationPribadi = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Perempuan', value: 'Perempuan'},
    {label: 'Laki-laki', value: 'Laki-laki'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <NavBack text="Informasi Pribadi" style={styles.text} />
      <Gap height={24} />
      <TextHome2 text="Edit Informasi Pribadi" />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <TextInput2 label="Nama depan" placeholder="Lailatul" />
          <Gap height={18} />
          <TextInput2 label="Nama belakang" placeholder="Fitriyah" />
          <Gap height={18} />
          <View style={styles.dropdownContent}>
            <Text style={styles.textDropdown}>Jenis Kelamin</Text>
            {/* <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.dropdown}
              // dropDownStyle={styles.dropdown}
              textStyle={styles.textDropdown}
              arrowColor="#000"
              arrowSize={20}
              placeholder="Pilih Jenis Kelamin"
              placeholderStyle={styles.textDropdown}
              containerStyle={styles.dropdown}
              labelStyle={styles.textDropdown}
              dropDownStyle={{backgroundColor: '#fff'}}
            /> */}
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.dropdown}
              textStyle={styles.textDropdown}
              arrowColor="#000"
              arrowSize={20}
              placeholder="Pilih Jenis Kelamin"
              // placeholderStyle={styles.textDropdown}
              // containerStyle={styles.dropdown}
              // labelStyle={styles.textDropdown}
            />
          </View>
          <Gap height={18} />
          <View>
            <TextInput2 label="Tanggal Lahir" placeholder="DD/MM/YYYY" />
          </View>
          <Line />
          <View style={styles.dataFix}>
            <View>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.isi}>Fitringer612@gmail.com</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Tambahkan</Text>
            </TouchableOpacity>
          </View>
          <Line />
          <View style={styles.dataFix}>
            <View>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.isi}>Fitringer612@gmail.com</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Tambahkan</Text>
            </TouchableOpacity>
          </View>
          <Line />
          <View style={styles.dataFix}>
            <View>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.isi}>Fitringer612@gmail.com</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Tambahkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContent}>
        <Button text="Simpan" />
      </View>
    </SafeAreaView>
  );
};

export default InformationPribadi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    marginRight: 130,
  },
  form: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  dropdownContent: {
    marginTop: 24,
    backgroundColor: '#ffff',
    zIndex: 1,
  },
  textDropdown: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: '#7D8797',
    marginBottom: 15,
    backgroundColor: '#ffff',
  },
  dropdown: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    padding: 15,
  },

  dataFix: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: '#7D8797',
    marginBottom: 5,
  },
  isi: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: '#000000',
    marginBottom: 15,
  },
  link: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: '#44CFCB',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
  btnContent: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
});
