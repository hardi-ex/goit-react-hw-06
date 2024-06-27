import css from "./SearchBox.module.css";

export const SearchBox = ({ searchList, setSearchList }) => {
  return (
    <div className={css.div}>
      <label htmlFor="find">Find contacts by name</label>
      <input
        type="text"
        value={searchList}
        id="find"
        onChange={(evt) => setSearchList(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
