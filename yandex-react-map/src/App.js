import React, { Component } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import './App.css';
import Info from './Info';
import points from './points.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { point: points[0] };
  }

  setPoint = (point) => {
    this.setState({ point });
  };

  render() {
    return (
      <div className="map">
        <Info point={this.state.point} setPoint={this.setPoint} />
        <YMaps>
          <div>
            <Map
              width="100%"
              height="600px"
              defaultState={{ center: this.state.point.point, zoom: 4 }}
              state={{ center: this.state.point.point, zoom: 4 }}
            >
              {points.map(point => (
                <Placemark
                  key={point.name}
                  modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                  defaultGeometry={point.point}
                  properties={{
                    hintContent: point.title,
                    //balloonContent: 'Это красивая метка',
                  }}
                  options={{
                    preset: point.name === this.state.point.name ? 'islands#redDotIcon' : 'islands#redCircleDotIcon'
                  }}
                  onClick={() => this.setPoint(point)}
                />
                )
              )}
              <ZoomControl
                options={{
                  float: 'none',
                  position: {
                    right: 30,
                    top: 30
                  }
                }}
              />
            </Map>
          </div>
        </YMaps>
      </div>
    );
  }
}

export default App;
