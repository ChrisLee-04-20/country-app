import { useEffect, useState } from "react";

const Filter = ({handleFilterByRegion, allRegion}) => {

    const [isRenderAllRegion, setIsRenderAllRegion] = useState(false);

    const renderAllRegion = () => {
        return allRegion != null ? setIsRenderAllRegion(true) : setIsRenderAllRegion(false);
    };

    useEffect(() => {
        renderAllRegion();
    }, [allRegion])

    return (
        <select onClick={handleFilterByRegion} >
            <option value="" key="">Filter by region</option>
           { 
            isRenderAllRegion && Array.from(allRegion).map(region => <option value={region} key={region}>{region}</option>)
           }
        </select>
    );

}

export default Filter; 