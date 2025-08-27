import styled from 'styled-components/native';
import { APP_COLORS } from '../../shared/constants/app-colors.ts';
import { WINDOW } from '../../shared/constants/global.ts';

const Wrapper = styled.View`
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
`;

const NewsItemFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

type NewsItemProps = {
  title: string;
  urlToImage: string;
  sourceName: string;
  publishedAt: string;
};

export const NewsItem = ({ title, publishedAt, sourceName, urlToImage }: NewsItemProps) => {
  return (
    <Wrapper>
      <NewsImage
        source={urlToImage ? { uri: urlToImage } : require('../../../assets/images/main.png')}
      />
      <Title>{title}</Title>

      <NewsItemFooter>
        <TextBlock>Источник: {sourceName}</TextBlock>
        <TextBlock>Дата: {publishedAt}</TextBlock>
      </NewsItemFooter>
    </Wrapper>
  );
};
