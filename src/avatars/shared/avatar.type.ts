interface ILightDark {
  light: string;
  dark: string;
}

export interface IAvatarConfig {
  name: string;

  bg: ILightDark;
  borderColor: ILightDark;
  textColor: ILightDark;
  titleColor: ILightDark;

  imageSrc?: string;
  fontFamily?: string;
}
