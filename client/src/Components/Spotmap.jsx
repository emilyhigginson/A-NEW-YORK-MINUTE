import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'

import React, { useState } from 'react';
import "@reach/combobox/styles.css"
import mapstyles from './mapstyles';
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

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

export default function Map({ lat, lng, name }) {
    const [selected, setSelected] = useState(null);

    const center = {
        lat: lat,
        lng: lng,
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
    const panTo = React.useCallback(({ lat, lng }) => {
        console.log(lat, lng)
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(20);
    }, []);

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


                        onClick={() => { setSelected(center) }}

                    />
                    {selected ? <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}>
                        <div>
                            <p>{name}</p>
                        </div>
                    </InfoWindow> : null}
                </GoogleMap>
            </div>

        </>
    )
}
