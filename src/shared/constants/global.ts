import { Dimensions, Platform } from 'react-native';

export const WINDOW = Dimensions.get('window');

export const MAX_DATE = new Date();
MAX_DATE.setFullYear(MAX_DATE.getFullYear() - 18);
