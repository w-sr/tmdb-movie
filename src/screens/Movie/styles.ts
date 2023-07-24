import styled from 'styled-components/native';

export const StyledWrapper = styled.SafeAreaView``;

export const StyledMovieTitleWrap = styled.View`
  background: #746a64;
  padding: 16px;
`;

export const StyledMovieTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledMovieContentWrap = styled.View`
  padding: 24px;
`;

export const StyledMovieContent = styled.View`
  flex-direction: row;
`;

export const StyledMovieImage = styled.Image`
  width: 120px;
  aspect-ratio: 2 / 3;
`;

export const StyledMovieRateWrap = styled.View`
  padding-left: 24px;
  flex: 1;
  justify-content: space-between;
`;

export const StyledReleaseDate = styled.Text`
  color: #212121;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const StyledRate = styled.Text`
  color: #212121;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const StyledAddButtonWrap = styled.Pressable`
  width: 100%;
  border-radius: 2px;
  background: #746a64;
  padding: 16px;
`;

export const StyledAddButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledDescription = styled.Text`
  margin-top: 24px;
  color: #757575;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledHeaderLeft = styled.View`
  flex-direction: row;
  margin-left: 20px;
`;

export const StyledHeaderLeftText = styled.Text`
  margin-left: 8px;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const StyledHeaderRight = styled.TouchableOpacity`
  margin-right: 20px;
`;
