import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';

import { WINDOW } from '../../shared/constants/global.ts';
import { $news } from '../../shared/models/news-model.ts';
import { useUnit } from 'effector-react';

import { Header } from '../../components/header/header.tsx';
import { Row } from '../../containers/row/row.tsx';
import { Icon } from '../../shared/ui/icon/icon.tsx';
import { handleGoBack } from '../../shared/utils/navigation.ts';
import { Linking } from 'react-native';
import { $flashApi } from '../../shared/models/flash-message-model.ts';

const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexGrow: 1,
  },
})`
  width: 100%;
  height: ${WINDOW.height};
  background-color: ${APP_COLORS.black};
`;

const NewsWrapper = styled.View`
  margin-top: 15px;
  border-radius: 20px;
  width: ${WINDOW.width};
  background-color: ${APP_COLORS.white};
  gap: 15px;
  padding: 8px 10px;
`;

const Title = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: ${APP_COLORS.black};
`;

const FooterText = styled.Text`
  font-size: 13px;
  color: ${APP_COLORS.red};
`;

const InfoText = styled.Text`
  font-size: 22px;
  color: ${APP_COLORS.blue};
`;

const WhiteText = styled.Text`
  font-size: 22px;
  color: ${APP_COLORS.white};
`;

const NewsImage = styled.Image`
  width: 98%;
  height: 300px;
  border-radius: 15px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${APP_COLORS.blue};
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  padding: 7px 15px;
`;

export const NewsScreen = () => {
  const [newsStore] = useUnit([$news]);

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      $flashApi.show({ message: 'Invalid URL', duration: 15_000 });
    }
  };

  return (
    <Wrapper>
      <Header goBack={true} title={'Просмотр новости'} />

      <NewsWrapper>
        <NewsImage
          source={
            newsStore.urlToImage
              ? { uri: newsStore.urlToImage }
              : require('../../../assets/images/main.png')
          }
        />
        <Title>{newsStore.description}</Title>
        <InfoText>{newsStore.content}</InfoText>
        <Row jc={'flex-start'} style={{ marginTop: 15, flexDirection: 'column' }} ai={'flex-start'}>
          <FooterText>Источник: {newsStore.source.name}</FooterText>
          <FooterText>Автор: {newsStore.author}</FooterText>
          <FooterText>Дата: {newsStore.publishedAt.split('T')[0]}</FooterText>
        </Row>
        c
        <Row jc={newsStore.url ? 'space-between' : 'flex-end'} style={{ marginTop: 15 }}>
          {newsStore.url && (
            <StyledButton onPress={() => openLink(newsStore.url)}>
              <WhiteText>Открыть в браузере</WhiteText>
            </StyledButton>
          )}

          <StyledButton onPress={() => handleGoBack()}>
            <Icon name={'chevron_left'} />
            <WhiteText>Назад</WhiteText>
          </StyledButton>
        </Row>
      </NewsWrapper>
    </Wrapper>
  );
};
