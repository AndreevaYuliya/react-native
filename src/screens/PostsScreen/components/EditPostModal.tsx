import React, {Dispatch, FC, SetStateAction} from 'react';

import {Modal, View} from 'react-native';

import defaultStyles from '../../../styles/defaultStyles';

import BaseButton from '../../../components/BaseButton';
import {useNavigation} from '@react-navigation/native';
import {EditPostScreenProps, ScreensEnum} from '../../../navigation/types';
import {PostInfo} from '../type/types';
import {useAppDispatch} from '../../../store';
import {deletePost} from '../../../store/slices/posts/slice';

type Props = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  post: PostInfo;
};

const EditPostModal: FC<Props> = props => {
  const {modalVisible, setModalVisible, post} = props;

  const navigation = useNavigation<EditPostScreenProps['navigation']>();

  const dispatch = useAppDispatch();

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={defaultStyles.modalContainer}>
        <View style={defaultStyles.modal}>
          <View style={{alignSelf: 'flex-start'}}>
            <BaseButton title="Close" onPress={() => setModalVisible(false)} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <BaseButton
              title="Edit post"
              onPress={() => {
                setModalVisible(false);

                navigation.navigate(ScreensEnum.EDIT_POST_SCREEN, {
                  post: post,
                });
              }}
            />

            <BaseButton
              title="Delete post"
              onPress={() => {
                dispatch(deletePost(post.id));
                // setPosts(oldPosts =>
                //   oldPosts.filter(item => item.id !== post.id),
                // );
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditPostModal;
