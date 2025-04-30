import React, {FC, useState} from 'react';

import {Text, TextInput, View} from 'react-native';

import {EditPostScreenProps, ScreensEnum} from '../../navigation/types';

import defaultStyles from '../../styles/defaultStyles';
import Header from '../../components/Header';
import BaseButton from '../../components/BaseButton';
import {useAppDispatch} from '../../store';

import {editPost} from '../../store/slices/posts/slice';

const EditPostScreen: FC<EditPostScreenProps> = ({navigation, route}) => {
  const {post} = route.params;

  const [changePostInfo, setChangedPostInfo] = useState(post);

  const dispatch = useAppDispatch();

  return (
    <View style={defaultStyles.outerContainer}>
      <Header title="Edit post" />

      <View style={defaultStyles.innerContainer}>
        <Text style={defaultStyles.titleContainer}>Edit post</Text>
        <TextInput
          value={changePostInfo.title}
          style={defaultStyles.inputContainer}
          onChangeText={text => setChangedPostInfo({...post, title: text})}
        />
        <TextInput
          value={changePostInfo.description}
          style={defaultStyles.inputContainer}
        />
      </View>

      <View style={defaultStyles.innerContainer}>
        <Text style={defaultStyles.titleContainer}>Edit author</Text>

        <TextInput
          value={changePostInfo.author.name}
          style={defaultStyles.inputContainer}
        />
      </View>

      <BaseButton
        title="Save"
        buttonStyles={{alignSelf: 'center'}}
        onPress={() => {
          dispatch(editPost(changePostInfo));

          // setPosts(oldPosts => {
          //   const newPosts = oldPosts.map(item => {
          //     if (item.id === changePostInfo.id) {
          //       return changePostInfo;
          //     }

          //     return item;
          //   });

          //   return newPosts;
          // });

          // navigation.navigate(ScreensEnum.POSTS_SCREEN);
          // navigation.pop(2);
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default EditPostScreen;
