import { useEffect } from "react";
import ReusabloeHeading from "../components/ReusabloeHeading";

const Statistics = () => {
    useEffect(()=>{
        document.title = 'Statistics';
    },[])
    return (
        <div>
         <ReusabloeHeading title='Statistics' />
        </div>
    );
};

export default Statistics;