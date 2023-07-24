// import { Wrapper } from "@googlemaps/react-wrapper";
// import { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react";
// import { fetchShops } from "../../store/shops";
// import { getShops } from "../../store/shops";
// import './map.css'

// const MeltMap = ({ mapOpt }) => {
//   const [map, setMap] = useState(null);

//   const mapRef = useRef(null);

//   const markersRef = useRef(null);

//   const dispatch = useDispatch();
//   const shops = useSelector(getShops);
//   useEffect(() => {
//     dispatch(fetchShops());
//   }, []);

//   useEffect(() => {
//     if (!map) {
//       const defaultMapOpt = {
//         zoom: 12,
//         center: { lat: 0, lng: 0 },
//       };
//       const mergedOptions = { ...defaultMapOpt, ...mapOpt };
//       const newMap = new window.google.maps.Map(mapRef.current, mergedOptions);
//       setMap(newMap);
//     }
//   }, [map, mapOpt]);

//   useEffect(() => {
//     const removeMarkers = (shopIds) => {
//       for (const shopId in markersRef.current) {
//         if (!shopIds.includes(shopId)) {
//           markersRef.current[shopId].setMap(null);
//           delete markersRef.current[shopId];
//         }
//       }
//     };

//     const createMarker = (shop) => {
//       const position = new window.google.maps.LatLng(
//         shop.latitude,
//         shop.longitude
//       );
//       const marker = new window.google.maps.Marker({ position });
//       markersRef.current[shop.id] = marker;
//     };

//     const shopIds = shops.map((shop) => shop.id);

//     removeMarkers(shopIds);

//     shops.forEach((shop) => {
//       if (!markersRef.current[shop.id]) {
//         createMarker(shop);
//       }
//     });
//   }, [shops]);

//   return (
//     <div ref={mapRef} className="melt-map">
//       Map
//     </div>
//   );
// };

// const MeltMapWrapper = () => {
//   return (
//     <div className="map">
//     <Wrapper apiKey={process.env.GOOGLE_MAPS_KEY}>
//       <MeltMap></MeltMap>
//     </Wrapper>
//     </div>
//   );
// };

// export default MeltMapWrapper;

import React, { useRef, useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBusiness } from '../../store/businessReducer';
import './Map.css';

const MapWrapper = () => {
    const { shopId } = useParams();
    const shop = useSelector(getBusiness(shopId));
    const lat = shop.latitude;
    const lng = shop.longitude;
    const key = process.env.REACT_APP_MAPS_API_KEY;
    const center = { lat: lat, lng: lng };
    const zoom = 15;

    return (
        <div id="map">
          <Wrapper apiKey={key}>
            <Map zoom={zoom} center={center}></Map>
          </Wrapper>
        </div>
      );
};
    


const Map = ({center, zoom}) => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center,
            zoom
        })

        const marker = new window.google.maps.Marker({position: center, map: map})
        
        // markerRef.current = marker

    }, [center, zoom])

    return (
        <div style={{ width: '300px', height: '200px' }} ref={mapRef}></div>
    );
    
};

export default MapWrapper;
