import { Dimensions, PixelRatio, Platform } from 'react-native';

// Initial screen size
const { width, height } = Dimensions.get('window');

// Min screen size width, 320 for iphone 5s, iphone SE (2nd generation)
const minWidth = 375;

/**
 * Resizes the initial value with the current screen size
 * @param  {string} size - The initial value
 * @return {number} - The resized value
 */

export const resize = (size: number) => {
  const newSize = size * (width / minWidth);

  /**
   * Check for platform and resize accordingly
   * @return {number} - The resized value
   */
  
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

// use as resize(20) to get a responsive 20px
