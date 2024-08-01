import React from "react";

import './PlaceList.css';
import Card from "../../shared/components/UIElements/Card";

const PlaceList = props => {
    if(props.items.length === 0){
        return <div className="place-list center">
            <Card>
                <h2>No Places Found. Start Exploring</h2>
                <button>Share a Place</button>
            </Card>
        </div>
    }

}

export default PlaceList