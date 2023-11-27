import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';

const Map = ({ ubicacion, zoom }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBJMwJ_1KdlLq9nRW6_mb8_42GPjdZlw-8',
        libraries: ['places']
    });

    const [map, setMap] = useState(null);
    const [placesService, setPlacesService] = useState(null);
    // const [center, setCenter] = useState({ lat: -34.6464, lng: -58.3866 }); // Arranca siendo Barracas
    const [barrios, setBarrios] = useState({
        belgrano: { lat: -34.5621, lng: -58.4567 },
        almagro: { lat: -34.6037, lng: -58.4208 },
        balvanera: { lat: -34.6091, lng: -58.4059 },
        once: { lat: -34.6049, lng: -58.4051 },
        parquePatricios: { lat: -34.6374, lng: -58.4002 },
        barracas: { lat: -34.6496, lng: -58.3869 },
        caballito: { lat: -34.6209, lng: -58.4429 },
        villaCrespo: { lat: -34.5984, lng: -58.4465 },
        constitucion: { lat: -34.6209, lng: -58.3861 },
        abasto: { lat: -34.6037, lng: -58.4208 },
        recoleta: { lat: -34.5895, lng: -58.3974 },
        microcentro: { lat: -34.6037, lng: -58.3816 },
        montserrat: { lat: -34.6158, lng: -58.3829 },
        sanNicolas: { lat: -34.6037, lng: -58.3804 }
    });



    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    };

    // useEffect(() => {
    //     if (ubicacion === 'palermo') {
    //         setPalermo({ lat: -34.5883, lng: -58.4305 });
    //     } else if (ubicacion === 'belgrano') {

    //     }
    // }, [ubicacion]);

    useEffect(() => {
        if (isLoaded && !loadError && map) {
            setPlacesService(new window.google.maps.places.PlacesService(map));
        }
    }, [isLoaded, loadError, map, ubicacion]);

    useEffect(() => {
        if (isLoaded && !loadError && map && placesService) {
            placesService.nearbySearch(
                {
                    location: barrios[ubicacion],
                    radius: 200,
                    type: 'hair_care'
                },
                (results, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        results.forEach(result => {
                            new window.google.maps.Marker({
                                position: result.geometry.location,
                                map: map,
                                label: {
                                    text: result.name,
                                    color: 'black',
                                    fontSize: '10px',
                                    fontWeight: 'bold'
                                }
                            });
                        });
                    }
                }
            );
        }
    }, [isLoaded, loadError, map, placesService, ubicacion, barrios]);

    const handleLoad = loadedMap => {
        setMap(loadedMap);
    };

    if (loadError) {
        return <div>Error al cargar el mapa</div>;
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={barrios[ubicacion]}
                    zoom={13}
                    onLoad={handleLoad}
                >
                    <Marker position={barrios[ubicacion]} />
                </GoogleMap>
            )}
        </div>
    );
};

export default Map;
