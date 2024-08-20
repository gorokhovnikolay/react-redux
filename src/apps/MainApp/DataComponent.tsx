import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks/hooks";
import { asyncGetContactsAction, asyncGetGroupsAction } from "../store/actions";

export const DataComponent: React.FC<{
  children: React.ReactElement | null;
}> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncGetContactsAction());
    dispatch(asyncGetGroupsAction());
  }, [dispatch]);
  return children;
};
