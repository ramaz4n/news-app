import { useEffect } from 'react';

import { Portal } from '@gorhom/portal';
import { useUnit } from 'effector-react';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

import { Row } from '../../../containers/row/row';
import { APP_COLORS } from '../../constants/app-colors';
import { $flashApi, $flashMessage } from '../../models/flash-message-model.ts';
import { Icon } from '../icon/icon';
import styled from 'styled-components/native';

export const FLASH_DELAY = 4000;
let timeout: NodeJS.Timeout;

const AnimatedView = styled(Animated.View)`
  position: absolute;
  left: 20px;
  right: 20px;
  top: 60px;
  z-index: 1000;
`;

const Wrapper = styled.View`
  padding: 15px 15px 15px 30px;
  background-color: white;
  border-radius: 8px;
`;

const MessageText = styled.Text`
  color: ${APP_COLORS.red};
  font-size: 14px;
`;

export const FlashMessage = () => {
  const flashMessage = useUnit($flashMessage);

  const hideFlash = () => $flashApi.hide();

  useEffect(() => {
    if (flashMessage) {
      timeout = setTimeout(() => {
        hideFlash();
      }, flashMessage?.duration ?? FLASH_DELAY);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [flashMessage]);

  return (
    <Portal name='flash'>
      {flashMessage && (
        <AnimatedView entering={FadeInUp} exiting={FadeOutUp}>
          <Wrapper>
            <Row jc='space-between'>
              <MessageText>{flashMessage?.message}</MessageText>

              <TouchableOpacity onPress={hideFlash}>
                <Icon name='close' size={15} />
              </TouchableOpacity>
            </Row>
          </Wrapper>
        </AnimatedView>
      )}
    </Portal>
  );
};
