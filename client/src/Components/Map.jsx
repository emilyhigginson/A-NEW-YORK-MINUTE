import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'

import React from 'react';
import { formatRelative } from "date-fns"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css"
import mapstyles from './mapstyles';

const libraries = ["places"]
const mapContainerStyle = {
    width: '100vw',
    height: '100vh',

};

const center = {
    lat: 40.7411,
    lng: -73.9897,
};

const options = {
    styles: mapstyles,
    disableDefaultUI: true,
};

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 
        libraries,
    });

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
        <div>
            <h1 className='mapHeader'> A NEW YORK MINUTE </h1>
            <Search panTo={panTo} />
            <GoogleMap mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
                onLoad={onMapLoad}
                // onClick={setLng}
            >
                {/* options={options}  */}
            </GoogleMap>
        </div>
    )
}

function Search({ panTo }) {
    const { ready, value, suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 40.7411, lng: () => -73.9897 },
            radius: 200000
        },
    });
    return (
        <div className='search'>
            <Combobox
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();
                    try {
                        const results = await getGeocode({ address });
                        const { lat, lng } = await getLatLng(results[0])
                        panTo({ lat, lng })
                    } catch (error) {
                        console.log("Error!")
                    }
                }}
            >

                <ComboboxInput
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    disabled={!ready}
                    placeholder="Enter an address"
                />
                <ComboboxPopover>
                    {status === "OK" && data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}