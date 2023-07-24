import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import theme from '../../theme';
import {StyledBackground, StyledWrapper} from './styles';
import {Props} from './types';

const DarkIndicator: FC<Props> = ({loading}) =>
  loading ? (
    <StyledWrapper>
      <StyledBackground />
      <ActivityIndicator color={theme.colors.white.hex} />
    </StyledWrapper>
  ) : (
    <></>
  );

export default DarkIndicator;
