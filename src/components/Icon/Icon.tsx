import React from 'react';
import {Pressable, PressableProps} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {BanIcon} from '../../assets/icons/BanIcon';
import {BriefcaseIcon} from '../../assets/icons/BriefcaseIcon';
import {CheckIcon} from '../../assets/icons/CheckIcon';
import {ChevronDownIcon} from '../../assets/icons/ChevronDownIcon';
import {ChevronRightIcon} from '../../assets/icons/ChevronRightIcon';
import {CircleAlertIcon} from '../../assets/icons/CircleAlertIcon';
import {CircleCheckBigIcon} from '../../assets/icons/CircleCheckBigIcon';
import {CircleCheckIcon} from '../../assets/icons/CircleCheckIcon';
import {CircleHelpIcon} from '../../assets/icons/CircleHelpIcon';
import {CircleUserIcon} from '../../assets/icons/CircleUserIcon';
import {ClipboardIcon} from '../../assets/icons/ClipboardIcon';
import {ClockIcon} from '../../assets/icons/ClockIcon';
import {CloseIcon} from '../../assets/icons/CloseIcon';
import {EyeIcon} from '../../assets/icons/EyeIcon';
import {LogoutIcon} from '../../assets/icons/LogoutIcon';
import {MenuIcon} from '../../assets/icons/MenuIcon';
import {PenlineIcon} from '../../assets/icons/PenlineIcon';
import {PlusIcon} from '../../assets/icons/PlusIcon';
import {TrashIcon} from '../../assets/icons/TrashIcon';
import {UploadIcon} from '../../assets/icons/UploadIcon';
import {UsersIcon} from '../../assets/icons/UsersIcon';
import {WrenchIcon} from '../../assets/icons/WrenchIcon';

export type BaseIconProps = {
  size?: number;
  color?: string;
};

export type IconProps = {
  size?: number;
  color?: ThemeColors;
  name: IconName;
  onPress?: PressableProps['onPress'];
};

export function Icon({
  size = 32,
  color = 'buttonPrimary',
  name,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    <Pressable onPress={onPress} hitSlop={10}>
      <SVGIcon size={size} color={colors[color]} />
    </Pressable>;
  }

  return <SVGIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  ban: BanIcon,
  briefcase: BriefcaseIcon,
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
  chevronRight: ChevronRightIcon,
  circleAlert: CircleAlertIcon,
  circleCheckBig: CircleCheckBigIcon,
  circleCheck: CircleCheckIcon,
  circleHelp: CircleHelpIcon,
  circleUser: CircleUserIcon,
  clipboard: ClipboardIcon,
  clock: ClockIcon,
  close: CloseIcon,
  eye: EyeIcon,
  logout: LogoutIcon,
  menu: MenuIcon,
  penline: PenlineIcon,
  plus: PlusIcon,
  trash: TrashIcon,
  upload: UploadIcon,
  users: UsersIcon,
  wrench: WrenchIcon,
};

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
