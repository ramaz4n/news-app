import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';

const Wrapper = styled.View`
  height: 50px;
  width: 100%;
  background-color: ${APP_COLORS.blue};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${APP_COLORS.white};
`;

export const Header = ({ title }: { title?: string }) => {
  return (
    <Wrapper>
      <Title>{title ?? 'Новости'}</Title>
    </Wrapper>
  );
};
