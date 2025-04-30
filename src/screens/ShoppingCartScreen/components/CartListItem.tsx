import React, {Dispatch, FC, SetStateAction, useState} from 'react';

import {Image, Pressable, Text, View} from 'react-native';

import {ProductsInfo} from '../../ProductsScreen/type/type';
import defaultStyles from '../../../styles/defaultStyles';
import BaseButton from '../../../components/BaseButton';
import {useAppDispatch} from '../../../store';
import {deleteProduct} from '../../../store/slices/shoppingCart/slice';

type Props = {
  selectedProduct: ProductsInfo;
  // setSelectedProducts: Dispatch<SetStateAction<ProductsInfo[]>>;
};

const CartListItem: FC<Props> = props => {
  const {id, title, description, price, image} = props.selectedProduct;

  const {selectedProduct} = props;

  const dispatch = useAppDispatch();

  return (
    <View>
      <Pressable
        style={({pressed}) => [
          defaultStyles.innerContainer,
          {opacity: pressed ? 0.5 : 1},
        ]}
        onLongPress={
          () => dispatch(deleteProduct(id))
          // setSelectedProducts(prod =>
          //   prod.filter(prodId => prodId.id !== selectedProduct.id),
          // )
        }>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={defaultStyles.titleContainer}>{title}</Text>
            <Text style={defaultStyles.text}>{price}</Text>
            <Text style={defaultStyles.text}>{description}</Text>
          </View>
          <Image source={{uri: image}} style={{width: 100, height: 100}} />
        </View>
      </Pressable>
    </View>
  );
};

export default CartListItem;
