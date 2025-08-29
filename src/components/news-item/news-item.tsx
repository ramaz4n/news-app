import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { WINDOW } from '../../shared/constants/global.ts';
import { News } from '../../shared/types/api/news.ts';
import { useUnit } from 'effector-react';
import { setNews } from '../../shared/models/news-model.ts';
import { Navigation } from '../../shared/utils/navigation.ts';

const PressableWrapper = styled.Pressable`
  margin-top: 15px;
  border-radius: 20px;
  width: ${WINDOW.width};
  gap: 10px;
  background-color: ${APP_COLORS.white};
  align-items: start;
  padding: 8px 10px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${APP_COLORS.black};
`;

const TextBlock = styled.Text`
  font-size: 12px;
  color: ${APP_COLORS.red};
`;

const NewsImage = styled.Image`
  width: 50%;
  height: 150px;
  border-radius: 15px;
  object-fit: cover;
`;

const NewsItemFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewsItem = ({ item }: { item: News }) => {
  const setNewsStore = useUnit(setNews);

  const onNewsPress = (item: News) => {
    setNewsStore(item);
    Navigation.navigate('NewsScreen', { state: item });
  };

  return (
    <PressableWrapper onPress={() => onNewsPress(item)}>
      <NewsImage
        source={
          item.urlToImage ? { uri: item.urlToImage } : require('../../../assets/images/main.png')
        }
      />
      <Title>{item.title}</Title>

      <NewsItemFooter>
        <TextBlock>Источник: {item.source.name}</TextBlock>
        <TextBlock>Дата: {item.publishedAt.split('T')[0]}</TextBlock>
      </NewsItemFooter>
    </PressableWrapper>
  );
};
