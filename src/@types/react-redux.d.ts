import "react-redux";
import { StoreState } from "../store";

declare module "react-redux" {
  interface DefaultRootState extends StoreState {}
}
