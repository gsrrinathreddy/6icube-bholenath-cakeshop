import { Button } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import { ordered, restocked } from '../../Features/Cakes/cakeSlice';
export default function Cakes(){
    let noOfCakes = useSelector((state)=>state.cake.noOfCakes);
    let noOfFreeCakesGiven=useSelector((state)=>state.cake.noOfFreeCakesGiven);
    let dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(ordered(1));
    }
    const handleClick2 =() =>{
        dispatch(restocked(2));
    }
    return(
        <>
        This is Cakes page
        <hr/>
        no of cakes = {noOfCakes}
        <hr/>
        noOfFreeCakesGiven={noOfFreeCakesGiven}
        <hr/>
        <Button variant="contained" color="success" onClick={handleClick}>
            order Icecreams
        </Button>
        <hr/>
        <Button variant="outlined" color="secondary" onClick={handleClick2}>
            Restock Icecreams
        </Button>
        <hr/>
        </>
    )
}