import { ElementType } from "react";

export interface Route {
  title: Capitalize<string>;
  icon?: ElementType;
  readonly link: string;
}

export interface Routes {
  header: Capitalize<string>;
  icon?: ElementType;
  readonly links: Route[];
}
