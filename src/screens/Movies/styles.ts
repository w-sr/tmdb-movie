import styled from 'styled-components/native';

export const StyledWrapper = styled.SafeAreaView``;

export const StyledItemWrapper = styled.TouchableOpacity`
  width: 50%;
`;

export const StyledItemImage = styled.Image`
  width: 100%;
  aspect-ratio: 2 / 3;
`;

export const StyledHeaderLeft = styled.View`
  margin-left: 20px;
`;

export const StyledHeaderLeftText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const StyledHeaderRight = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const StyledActiveIndicator = styled.ActivityIndicator`
  color: #000;
`;
