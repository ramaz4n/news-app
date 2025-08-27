import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';

const LoaderWrapper = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const LoaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${APP_COLORS.light_grey};
`;

const StyledImage = styled.Image`
  width: 130px;
  height: 100px;
`;

export const AppLoader = ({ loadText, isImage }: { loadText?: string; isImage?: boolean }) => {
  return (
    <LoaderWrapper>
      {isImage && (
        <StyledImage source={require('../../../assets/images/loading.gif')}></StyledImage>
      )}
      <LoaderText>{loadText ?? 'Загрузка...'}</LoaderText>
    </LoaderWrapper>
  );
};
