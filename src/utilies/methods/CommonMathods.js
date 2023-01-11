import { Dimensions, Platform } from 'react-native';

const {width, height}  = Dimensions.get("window")

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 760;
const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

export const getProportionalFontSize = (baseFont) => {
    const initialFontSize = baseFont || 14;

    var fontSizeToReturnModerate = moderateScale(initialFontSize);
    var fontSizeToReturnVertical = verticalScale(initialFontSize);

    return Platform.OS == 'ios' ? fontSizeToReturnModerate : fontSizeToReturnVertical;
}