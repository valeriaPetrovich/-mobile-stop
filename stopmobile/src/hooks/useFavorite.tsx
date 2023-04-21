
import { useSelector, useDispatch} from "react-redux";
import { setFavoriteSlise } from "../store/redusers/favoriteSlice";
const useFavorite = () => {
    const streets = useSelector((state)=>state.streets.value);
    const dispatch = useDispatch();
    const fetchFavorite = () =>{
        const filtFavorites = streets.filter((e)=>{
            return e.favorite===true
        })
        dispatch(setFavoriteSlise(filtFavorites))
    }
    
    const favorites = useSelector((state)=>state.favoritesStreets.value);
  return {fetchFavorite,favorites};
};
export default useFavorite;
