import React from 'react';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

export type TextProps = {
  bold?: boolean;
} & SRTextProps;

export function Text({children, bold, ...props}: TextProps) {
  return (
    <SRText fontFamily={bold ? 'Lato Bold' : undefined} {...props}>
      {children}
    </SRText>
  );
}
