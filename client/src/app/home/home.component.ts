import { Component, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1Ijoicm9oaXRycCIsImEiOiJjam5vejdtYmYyMG1tM3FzNXA1YnVib3JiIn0.5x5lvYoSAxmmc3EQAg19og');

    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/navigation-guidance-night-v4',
      center: [72.914294, 19.130722],
      zoom: 16
    });

    var marker = new mapboxgl.Marker()
      .setLngLat([72.914294, 19.130722])
      .addTo(map);

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    }));
  }

}
