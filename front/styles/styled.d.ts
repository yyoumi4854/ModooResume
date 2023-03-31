import "styled-components";
import * as Theme from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Theme.colorsType;
    fontSizes: Theme.fontsType;
    device: Theme.deviceType;
    common: Theme.commonType;
  }
}
