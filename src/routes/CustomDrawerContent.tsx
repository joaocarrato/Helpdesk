import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {useAppTheme} from '@hooks';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {colors, textVariants} = useAppTheme();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <DrawerItem
        label="MENU"
        onPress={() => {}}
        labelStyle={{
          color: colors.inputText,
          fontWeight: '600',
          ...textVariants.textXs,
          marginLeft: -10,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
