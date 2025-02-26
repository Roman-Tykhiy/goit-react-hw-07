import { useDispatch, useSelector } from "react-redux";
import s from "./SerchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice";

const SerchBox = () => {
  const searchTerm = useSelector((state) => state.filters.filters.name);
  const dispatch = useDispatch();

  const handleSearchChange = (evt) => {
    dispatch(changeFilter(evt.target.value.trim() || ""));
  };
  return (
    
      <div className={s.container}>
      <p className={s.text}>Find contacts by name</p>
        <input className={s.input}
          value={searchTerm}
          name="name"
          onChange={handleSearchChange} />
      </div>
      
    
    
  )

}
export default SerchBox;