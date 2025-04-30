import React, {Dispatch, FC, SetStateAction} from 'react';

import {Image, Pressable, Text, View} from 'react-native';

import {PostInfo} from '../type/types';

import defaultStyles from '../../../styles/defaultStyles';

type Props = {
  post: PostInfo;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setSelectedPostId: Dispatch<SetStateAction<null | number>>;
};

const PostsListItem: FC<Props> = props => {
  const {id, title, description, image} = props.post;

  const {name, avatar} = props.post.author;

  const {setModalVisible, setSelectedPostId} = props;
  return (
    <Pressable
      style={({pressed}) => [
        defaultStyles.innerContainer,
        {opacity: pressed ? 0.5 : 1},
      ]}
      onLongPress={() => {
        setModalVisible(true);
        setSelectedPostId(id);
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={defaultStyles.titleContainer}>{title}</Text>
          <Text style={defaultStyles.text}>{description}</Text>
        </View>
        <Image source={{uri: image}} style={{width: 100, height: 100}} />
      </View>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Image source={{uri: avatar}} style={defaultStyles.avatar} />
        <Text style={defaultStyles.text}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default PostsListItem;
