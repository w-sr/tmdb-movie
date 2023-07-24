import {StackScreenProps} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {StackList} from '../../routes/routes';
import {
  StyledAddButtonText,
  StyledAddButtonWrap,
  StyledDescription,
  StyledHeaderLeft,
  StyledHeaderLeftText,
  StyledHeaderRight,
  StyledMovieContent,
  StyledMovieContentWrap,
  StyledMovieImage,
  StyledMovieRateWrap,
  StyledMovieTitle,
  StyledMovieTitleWrap,
  StyledRate,
  StyledReleaseDate,
  StyledWrapper,
} from './styles';

type Props = StackScreenProps<StackList, 'Movie'>;

const MovieScreen: React.FC<Props> = ({route, navigation}) => {
  const {movie} = route.params;

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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon type="material" color="white" name="arrow-back" />
          </TouchableOpacity>
          <StyledHeaderLeftText>Movie Details</StyledHeaderLeftText>
        </StyledHeaderLeft>
      ),
      headerRight: () => (
        <StyledHeaderRight>
          <Icon type="material" color="white" name="more-vert" />
        </StyledHeaderRight>
      ),
    });
  }, [navigation]);

  return (
    <StyledWrapper>
      <StyledMovieTitleWrap>
        <StyledMovieTitle>{movie.original_title}</StyledMovieTitle>
      </StyledMovieTitleWrap>

      <StyledMovieContentWrap>
        <StyledMovieContent>
          <StyledMovieImage
            source={{
              uri: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
            }}
          />
          <StyledMovieRateWrap>
            <StyledReleaseDate>{movie.release_date}</StyledReleaseDate>
            <StyledRate>{movie.vote_average} / 10</StyledRate>
            <StyledAddButtonWrap>
              <StyledAddButtonText>Add To Favorite</StyledAddButtonText>
            </StyledAddButtonWrap>
          </StyledMovieRateWrap>
        </StyledMovieContent>
        <StyledDescription>{movie.overview}</StyledDescription>
      </StyledMovieContentWrap>
    </StyledWrapper>
  );
};

export default MovieScreen;
