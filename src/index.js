import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
} from 'react-native';
import {styles} from './styles';

const SimpleModalSelect = ({
  data,
  labelName,
  valueName,
  visible,
  transparent,
  searchable,
  onItemPress,
  cancelText,
  cancelCallback,
  searchPlaceHolder,
  noResultsText,
}) => {
  //State
  const [listItems, setListItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  //useEffect
  useEffect(() => {
    setListItems(data);
  }, []);

  useEffect(() => {
    search();
  }, [searchText]);

  //Render flatlist items
  const renderItem = ({item}) =>
    item[`${labelName}`] && item[`${labelName}`] != '' ? (
      <Text
        style={styles.modalItem}
        value={item[`${valueName}`]}
        onPress={() => {
          handleItemPress(item);
        }}>
        {item[`${labelName}`]}
      </Text>
    ) : null;

  //Search results
  const search = () => {
    if(!data) return;
    const listItems = data.filter(item => {
      return (
        item[`${labelName}`].toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
    });
    setListItems(listItems);
  };

  //Handlers
  const handleItemPress = item => {
    setSearchText('');
    onItemPress(item);
  };

  const handleCancelPress = () => {
    setSearchText('');
    if (cancelCallback) cancelCallback();
  };

  return (
    <Modal
      animationType="slide"
      transparent={transparent}
      visible={visible}
      style={styles.modal}
      onRequestClose={handleCancelPress}
      >
      <View style={styles.modalBody}>
        <View style={styles.listContainer}>
          {searchable ? (
            <TextInput
              underlineColorAndroid="slategray"
              placeholderTextColor="gray"
              style={styles.searchInput}
              placeholder={searchPlaceHolder || 'Search'}
              value={searchText}
              onChangeText={setSearchText}
            />
          ) : null}
          <FlatList
            keyboardShouldPersistTaps={'always'}
            data={listItems}
            ListEmptyComponent={
              <Text>{noResultsText || 'No results found.'}</Text>
            }
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              'item_' + index.toString()
            }/>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={handleCancelPress}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: '#143154',
              }}>
              {cancelText || 'Cancel'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default SimpleModalSelect;