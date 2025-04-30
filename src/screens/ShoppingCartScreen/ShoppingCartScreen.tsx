import React, {FC, useState} from 'react';

import {FlatList, ScrollView, Text, View} from 'react-native';

import {ShoppingCartScreenProps} from '../../navigation/types';
import defaultStyles from '../../styles/defaultStyles';

import Header from '../../components/Header';

import CartListItem from './components/CartListItem';
import {ProductsInfo} from '../ProductsScreen/type/type';
import BaseButton from '../../components/BaseButton';
import {useAppDispatch, useAppSelector} from '../../store';
import {deleteAll} from '../../store/slices/shoppingCart/slice';

const ShoppingCartScreen: FC<ShoppingCartScreenProps> = ({
  navigation,
  route,
}) => {
  // const {selectedProducts, setSelectedProducts} = route.params;

  const {cart} = useAppSelector(state => state.cart);

  const dispatch = useAppDispatch();

  return (
    <View style={defaultStyles.outerContainer}>
      <Header title="Shopping cart" />

      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={cart}
          renderItem={({item}) => (
            <CartListItem
              selectedProduct={item}
              // setSelectedProducts={setSelectedProducts}
            />
          )}
        />

        <BaseButton
          title="Delete all"
          onPress={
            () => dispatch(deleteAll())
            // setSelectedProducts([])
          }
        />
      </View>
    </View>
  );
};

export default ShoppingCartScreen;
