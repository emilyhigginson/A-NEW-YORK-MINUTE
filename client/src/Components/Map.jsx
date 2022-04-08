import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'

import React, {useState} from 'react';
import Select from 'react-select'
import ReviewForm from './ReviewForm'
import NewSpotForm from './NewSpotForm';
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
    width: '50vw',
    height: '80vh',
};

const center = {
    lat: 40.7411,
    lng: -73.9897,
};

const options = {
    styles: mapstyles,
    disableDefaultUI: true,
};

// const MY_KEY = "AIzaSyAK_6JoeZNYhqwGPwLNmmqImmiWzl4lM8E"

export default function Map({setLat, setLng, lat, lng}) {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey : "AIzaSyAK_6JoeZNYhqwGPwLNmmqImmiWzl4lM8E",
        libraries,
        
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, [])

    const [markers, setMarkers] = React.useState([])

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
            <Search panTo={panTo} />
            {/* <NewSpotForm/> */}

            <GoogleMap mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
                onLoad={onMapLoad}
                options={options}
                onClick={(event) => {
                    setMarkers(current => [ {
                        lat: event.latLng.lat(), 
                        lng: event.latLng.lng(),
                    }] ); 
                    setLat(event.latLng.lat());
                    setLng(event.latLng.lng())
                }
            // onClick={() => {setIsClicked(); handleClick()}}
            }
            >
                {markers.map(marker => <Marker key={marker.lat} position={{lat: marker.lat, lng: marker.lng}}/>)}
                {/* options={options}  */}
            </GoogleMap>
        </div>
        
        </>
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
                id='searchBox'
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
    