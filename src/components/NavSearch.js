import { useDispatch } from "react-redux";
import { searchActions } from "../store/searchSlice";

const NavSearch = () => {
  const dispatch = useDispatch();
  const productSearchHandler = (e) => {
    dispatch(searchActions.setSearch(e.target.value));
  };

  return (
    <input
      onKeyDown={productSearchHandler}
      type="text"
      placeholder="Search..."
    />
  );
};

export default NavSearch;
