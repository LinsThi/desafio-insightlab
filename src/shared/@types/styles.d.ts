import 'styled-components';

type ColorsProps = {
  BLACK: string;
  WHITE: string;
  ACTIVITY_INDICATOR: string;
  NAME_CITIZEN: string;
  FLOAT_BUTTON_BACKGROUND: string;
  FLOAT_BUTTON_COLOR: string;
  PRIMARY_BUTTON: string;
  SECONDARY_BUTTON: string;
  TEXT_ERROR: string;
  ICON_INPUT_COLOR: string;
  ICON_HEADER_COLOR: string;
  BACKGROUND_INPUT: string;
  BACKGROUND_PICKER_INPUT: string;
  ITEM_PICKER: string;
  ITEM_PICKER_DISABLED: string;
  DROPDOWN_PICKER_ICON: string;
};

type SizeProps = {
  ICON_BUTTON: number;
  ICON_HEADER_BUTTON: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorsProps;
    Sizes: SizeProps;
  }
}
