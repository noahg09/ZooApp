import React,{useState} from "react";
import "./map.css"
import {ComposableMap,
Geographies,
Geography,
Marker,
Annotation,
ZoomGroup} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
function Map(){
    return(
        <div className={"map-main"}>
            <h1>lets build maps</h1>
            <div>
                <ComposableMap data-tip={""}>
                    <Geographies>
                        
                    </Geographies>
                </ComposableMap>
            </div>
        </div>
    );
}
export default Map