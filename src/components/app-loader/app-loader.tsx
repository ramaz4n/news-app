import { WINDOW } from '../../shared/constants/global';
import styled from 'styled-components/native';

const LoaderImage = styled.Image`
  width: ${WINDOW.width};
  height: ${WINDOW.height};
`;

export const AppLoader = () => <LoaderImage source={require('../../../assets/images/main.png')} />;
