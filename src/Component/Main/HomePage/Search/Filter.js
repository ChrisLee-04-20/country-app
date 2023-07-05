import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../../App.js"


const Filter = ({handleFilterByRegion, allRegion}) => {
    const [isRenderAllRegion, setIsRenderAllRegion] = useState(false);
    const darkMode = useContext(DarkModeContext);

    const renderAllRegion = () => {
        return allRegion != null ? setIsRenderAllRegion(true) : setIsRenderAllRegion(false);
    };

    useEffect(() => {
        renderAllRegion();
    }, [allRegion])

    return (
        <select className={"region-filter " + darkMode} onChange={handleFilterByRegion} >
            <option className={"region-filter-option " + darkMode} value="" key="">Filter by region</option>
           { 
            isRenderAllRegion && Array.from(allRegion).map(region => <option className={"region-filter-option " + darkMode} value={region} key={region}>{region}</option>)
           }
        </select>
    );

}

export default Filter; 