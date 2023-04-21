
import { useDispatch, useSelector } from "react-redux";
import { strets } from "../constant/data";
import { setStreetsSlise } from "../store/redusers/streetsSlice";
const useStreets = () => {
    const dispatch = useDispatch()
    const fetchStreets = () =>{
     dispatch(setStreetsSlise(strets));
    }
    const streets = useSelector((state)=>state.streets.value);

  return {fetchStreets,streets};
};
export default useStreets;
