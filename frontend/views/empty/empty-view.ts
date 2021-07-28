import { customElement, html } from 'lit-element';
import { View } from '../../views/view';
import * as Leaflet from 'leaflet';

@customElement('empty-view')
export class EmptyView extends View {
  render() {
    return html`<div id="map"></div>`;
  }

  firstUpdated() {
    const mapContainer = this.renderRoot.querySelector('#map') as HTMLElement;
    const map = Leaflet.map(mapContainer, {
      center: [60.43, 22.08],
      zoom: 8,
    });

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }
}
