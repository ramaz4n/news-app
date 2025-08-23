import { MainScreen } from '../../screens/main/main-screen.tsx';
import { NewsScreen } from '../../screens/news/news-screen.tsx';
import { Screens } from '../types/screens.ts';

export const ROUTES = [
  {
    name: Screens.MainScreen,
    component: MainScreen,
  },
  {
    name: Screens.NewsScreen,
    component: NewsScreen,
  },
];
