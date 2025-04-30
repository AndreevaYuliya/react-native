import React, {Dispatch, FC, SetStateAction} from 'react';

import {Image, Text, View} from 'react-native';

import {ProductsInfo} from '../type/type';

import defaultStyles from '../../../styles/defaultStyles';

import BaseButton from '../../../components/BaseButton';
import {useAppDispatch} from '../../../store';
import {addToCart} from '../../../store/slices/shoppingCart/slice';

type Props = {
  product: ProductsInfo;
  // setSelectedProducts: Dispatch<SetStateAction<ProductsInfo[]>>;
};

const ProductsListItem: FC<Props> = props => {
  const {id, title, description, price, image} = props.product;

  const {product} = props;

  const dispatch = useAppDispatch();

  return (
    <View style={defaultStyles.innerContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={defaultStyles.titleContainer}>{title}</Text>
          <Text style={defaultStyles.text}>{price}</Text>
          <Text style={defaultStyles.text}>{description}</Text>
        </View>
        <Image source={{uri: image}} style={{width: 100, height: 100}} />
      </View>

      <BaseButton
        title="Add to cart"
        buttonStyles={{alignSelf: 'center'}}
        onPress={() => {
          dispatch(addToCart(product));

          // setSelectedProducts(prev => {
          //   // if (prev.find(p => p.id === product.id)) {
          //   //   return prev;
          //   // }
          //   return [...prev, product];
          // });
        }}
      />
    </View>
  );
};

export default ProductsListItem;
