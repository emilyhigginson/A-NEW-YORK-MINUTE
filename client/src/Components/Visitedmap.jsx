import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'

import React, {useState}  from 'react';
import "@reach/combobox/styles.css"
import mapstyles from './mapstyles';

const libraries = ["places"]

const mapContainerStyle = {
    width: '40vw',
    height: '60vh',
};

const options = {
    styles: mapstyles,
    disableDefaultUI: true,
};

// const MY_KEY = "AIzaSyAK_6JoeZNYhqwGPwLNmmqImmiWzl4lM8E"

export default function Visitedmap({ lat, lng , name}) {
const [selected, setSelected] = useState(null);

    const center = {
        lat: 40.7411,
        lng: -73.9897,
    };
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAK_6JoeZNYhqwGPwLNmmqImmiWzl4lM8E",
        libraries,

    });
// const image = './marker.png'
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, [])
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <>
            <div>
                <GoogleMap mapContainerStyle={mapContainerStyle}
                    zoom={14.5}
                    center={center}
                    onLoad={onMapLoad}
                    options={options}
                >
                    <Marker key={lat} position={center} 
                    // icon={image}
                    
                   
                    //   onClick = { () => { setSelected(center)}}
                      
                    />
                     {markers.map(marker => <Marker key={marker.lat} position={{lat: marker.lat, lng: marker.lng}}/>)}
                   {/* { selected ? <InfoWindow position={{lat: selected.lat, lng: selected.lng}}> 
                       <div>
                           <p>{name}</p>
                       </div>
                   </InfoWindow> : null} */}
                </GoogleMap>
            </div>

        </>
    )
}
