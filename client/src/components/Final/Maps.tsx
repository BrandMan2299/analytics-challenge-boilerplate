import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerClusterer, } from '@react-google-maps/api';
import { Event } from '../../models/event';
import axios from 'axios';

const containerStyle = {
    width: '600px',
    height: '400px'
};

const center = {
    lat: 0,
    lng: 0
};

const Map: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:3001/events/all')
            setEvents(data)
        })();
    }, [])

    return (
        <div>
            <LoadScript googleMapsApiKey="AIzaSyB85Q7kNvvvOjxZwV6JgUwlu9imMuMKsrA">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={1.5}
                >
                    <MarkerClusterer averageCenter gridSize={80}>
                        {(clusterer) =>
                            events.map(event => {
                                return (
                                    <Marker
                                        key={event._id}
                                        position={event.geolocation.location}
                                        clusterer={clusterer}
                                    />
                                )
                            })}
                    </MarkerClusterer>
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map;