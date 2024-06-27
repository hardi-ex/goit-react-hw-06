import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useId } from "react";

export const SearchBox = ({ searchList }) => {
  const dispatch = useDispatch();
  const idSearch = useId();
  return (
    <div className={css.div}>
      <label htmlFor={idSearch}>Find contacts by name</label>
      <input
        type="text"
        value={searchList}
        id={idSearch}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

export default SearchBox;
