import React, {FC, useState} from 'react';

import {FlatList, ScrollView, View} from 'react-native';

import defaultStyles from '../../styles/defaultStyles';

import {PostsScreenProps} from '../../navigation/types';
import {PostInfo} from './type/types';

import Header from '../../components/Header';

import PostsListItem from './components/PostsListItem';
import EditPostModal from './components/EditPostModal';

import {useAppSelector} from '../../store';

const DATA: PostInfo[] = [
  {
    id: 1,
    title: 'Post 1',
    description: 'This is post 1',
    image:
      'https://images.unsplash.com/photo-1420593248178-d88870618ca0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 1,
      name: 'Yuliia',
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/015/410/594/small_2x/elegant-pretty-woman-in-business-suit-with-badge-woman-business-avatar-profile-picture-illustration-isolated-vector.jpg',
    },
  },

  {
    id: 2,
    title: 'Post 2',
    description: 'This is post 2',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    author: {
      id: 2,
      name: 'Slavik',
      avatar:
        'https://www.shutterstock.com/shutterstock/photos/2107967969/display_1500/stock-vector-young-smiling-man-adam-avatar-d-vector-people-character-illustration-cartoon-minimal-style-2107967969.jpg',
    },
  },

  {
    id: 3,
    title: 'Post 3',
    description: 'This is post 3',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2022/4/RM/PV/DY/11929731/nature-wallpaper-1000x1000.jpg',
    author: {
      id: 3,
      name: 'Vika',
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
    },
  },

  {
    id: 4,
    title: 'Post 4',
    description: 'This is post 4',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    author: {
      id: 4,
      name: 'Vitalik',
      avatar:
        'https://www.shutterstock.com/shutterstock/photos/2230182563/display_1500/stock-vector-smart-boy-character-isolated-flat-icon-illustration-2230182563.jpg',
    },
  },

  {
    id: 5,
    title: 'Post 5',
    description: 'This is post 5',
    image:
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&h=130',
    author: {
      id: 5,
      name: 'Alina',
      avatar:
        'https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg',
    },
  },

  {
    id: 6,
    title: 'Post 6',
    description: 'This is post 6',
    image:
      'https://cdn.pixabay.com/photo/2019/03/05/12/51/blue-tailed-bee-eater-4036128_1280.jpg',
    author: {
      id: 6,
      name: 'Vlad',
      avatar:
        'https://www.shutterstock.com/shutterstock/photos/2482431259/display_1500/stock-vector-flat-illustration-of-young-boy-smiling-avatar-2482431259.jpg',
    },
  },

  {
    id: 7,
    title: 'Post 7',
    description: 'This is post 7',
    image:
      'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    author: {
      id: 7,
      name: 'Kate',
      avatar:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-1024.png',
    },
  },
];

const PostsScreen: FC<PostsScreenProps> = ({navigation, route}) => {
  // const [posts, setPosts] = useState<PostInfo[]>(DATA);

  const {posts} = useAppSelector(state => state.posts);

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedPostId, setSelectedPostId] = useState<null | number>(null);

  return (
    <View style={defaultStyles.outerContainer}>
      <Header title="Posts" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map(item => (
          <PostsListItem
            key={item.id.toString()}
            post={item}
            setModalVisible={setModalVisible}
            setSelectedPostId={setSelectedPostId}
          />
        ))}
      </ScrollView>

      <EditPostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        post={posts.find(post => post.id === selectedPostId)!}
      />

      {/* <FlatList
        keyExtractor={item => item.id.toString()}
        data={posts}
        renderItem={item => null}
      /> */}
    </View>
  );
};

export default PostsScreen;
