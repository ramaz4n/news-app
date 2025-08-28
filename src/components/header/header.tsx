import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { Icon } from '../../shared/ui/icon/icon.tsx';
import { handleGoBack } from '../../shared/utils/navigation.ts';
import { WINDOW } from '../../shared/constants/global.ts';

const Wrapper = styled.View`
  height: 50px;
  width: ${WINDOW.width};
  background-color: ${APP_COLORS.blue};
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border-radius: 20px;
`;

const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${APP_COLORS.white};
`;

const PressableIcon = styled.Pressable`
  border: 1px solid ${APP_COLORS.white};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
`;

type HeaderProps = {
  title?: string;
  goBack?: boolean;
};

export const Header = ({ title, goBack }: HeaderProps) => {
  return (
    <Wrapper>
      {goBack && (
        <PressableIcon onPress={() => handleGoBack()}>
          {' '}
          <Icon name={'chevron_left'} />{' '}
        </PressableIcon>
      )}
      <Title>{title ?? 'Новости'}</Title>
    </Wrapper>
  );
};
