import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, SearchBar} from '../../atoms';
import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native';

const CardSearch = ({
  setInputCity,
  setStartDate,
  setLastDate,
  handleConfirmSearch,
  inputCity,
  startDate,
  lastDate,
}) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <View style={styles.searchBar}>
      <SearchBar
        placeholder="Cari destinasimu ?"
        value={inputCity}
        onChangeText={e => setInputCity(e)}
        onClear={() => setInputCity('')}
      />
      <Gap height={16} />
      <View style={styles.inputDate}>
        <Button
          type="checkDate"
          icon="https://cdn-icons-png.flaticon.com/512/747/747479.png"
          onPress={() => setOpen(true)}
        />
        <DatePicker
          modal
          mode="date"
          format="YYYY-MM-DD"
          minDate={startDate}
          open={open}
          date={startDate}
          onConfirm={startDate => {
            setOpen(false);
            setStartDate(startDate);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          type="checkDate"
          value={startDate}
        />
        <TextInput
          type="text"
          placeholder="Check In"
          value={startDate}
          editable={false}
        />
        <Button
          type="checkDate"
          icon="https://cdn-icons-png.flaticon.com/512/747/747479.png"
          onPress={() => setOpen2(true)}
        />
        <DatePicker
          modal
          mode="date"
          open={open2}
          date={lastDate}
          onConfirm={date => {
            setOpen2(false);
            setLastDate(date);
          }}
          onCancel={() => {
            setOpen2(false);
          }}
          type="checkDate"
        />
        <TextInput
          placeholder={'Check Out'}
          value={lastDate}
          editable={false}
        />
      </View>
      <Button text="Search" onPress={handleConfirmSearch} />
    </View>
  );
};

export default CardSearch;

const styles = StyleSheet.create({
  // search
  searchBar: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  inputDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
    marginBottom: 15,
  },
  guest: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countGuest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
  },
  coundDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconCheck: {
    width: 20,
    height: 20,
  },
});
