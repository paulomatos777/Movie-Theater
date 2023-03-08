import "react-redux";
import { StoreState } from "src/store";

declare module "react-redux" {
  interface DefaultRootState extends StoreState {}
}
