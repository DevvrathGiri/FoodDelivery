import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./appStore";

// Typed dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed selector
export const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector;
