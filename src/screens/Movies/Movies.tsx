import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {Icon} from 'react-native-elements';
import DarkIndicator from '../../components/DarkIndicator';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import {StackScreenProps} from '@react-navigation/stack';
import {StackList} from '../../routes/routes';
import {Movie} from '../../store/types';
import {
  StyledActiveIndicator,
  StyledHeaderLeft,
  StyledHeaderLeftText,
  StyledHeaderRight,
  StyledItemImage,
  StyledItemWrapper,
} from './styles';

type Props = StackScreenProps<StackList, 'Movies'>;

const MoviesScreen = ({navigation}: Props) => {
  const actions = useActions();
  const [page, setPage] = useState<number>(1);
  const {movies, isLoading} = useTypedSelector(state => state);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTitleStyle: {
        display: 'none',
      },
      headerLeft: () => (
        <StyledHeaderLeft>
          <StyledHeaderLeftText>Pop Movies</StyledHeaderLeftText>
        </StyledHeaderLeft>
      ),
      headerRight: () => (
        <StyledHeaderRight>
          <Icon type="material" color="white" name="more-vert" />
        </StyledHeaderRight>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    actions.getMovies({page: 1});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToDetails = (id: number) => {
    const selectedMovie = movies.results.find(x => x.id === id);
    if (selectedMovie) {
      navigation.navigate('Movie', {
        movie: selectedMovie,
      });
    }
  };

  const handleLoadMore = () => {
    if (!isLoading) {
      actions.getMovies({page: page + 1});
      setPage(page + 1);
    }
  };

  const renderFooter = () => {
    if (isLoading) {
      return null;
    }
    return <StyledActiveIndicator />;
  };

  return (
    <SafeAreaView>
      {movies.results && movies.results.length > 0 && (
        <FlatList
          data={movies.results}
          renderItem={({item}: {item: Movie}) => (
            <StyledItemWrapper
              onPress={() => goToDetails(item.id)}
              testID="movie-card">
              <StyledItemImage
                resizeMode="contain"
                source={{
                  uri: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
                }}
              />
            </StyledItemWrapper>
          )}
          numColumns={2}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0}
          onEndReached={handleLoadMore}
        />
      )}

      <DarkIndicator loading={isLoading} />
    </SafeAreaView>
  );
};

export default MoviesScreen;
