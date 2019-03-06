import React, { Component } from 'react';
import points from './points.js';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: true };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.point.name !== this.props.point.name) {
      this.setState({ isOpened: true });
    }
  }

  handleChange = (event) => {
    const point = points.find(item => item.name === event.target.value);
    this.props.setPoint(point);
    this.setState({ isOpened: true });
  };

  handleClose = () => {
    this.setState({ isOpened: false });
  };

  render() {
    return (
      <div className={`widget${this.state.isOpened ? '' : ' closed'}`}>
        <div className="widget-head">
          <div className="select-wrapper">
            <select className="widget-select" value={this.props.point.name} onChange={this.handleChange}>
              {points.map(point => (
                <option key={point.name} value={point.name}>
                  {point.title}
                </option>
              ))}
            </select>
          </div>

          <button type="button" className="close-widget" onClick={this.handleClose} />
        </div>
        <div className="widgetBody">
          {points.map(point => (
            <div
              key={point.name}
              className={`city-block${point.name === this.props.point.name ? ' selected-city' : ''}`}
            >
              <section className="group">
                {(point.organizations || []).map(org => (
                  <dl className="city" key={org.title}>
                    <dt>{org.title}</dt>
                    <dd>
                      {org.site && (
                        <span>
                          <a href={org.site.url} target="_blank">{org.site.title}</a>
                          <br />
                        </span>
                      )}
                      Адрес: {org.address}
                      <br />
                      Тел.:{' '}
                      {org.phones.map(phone => (
                        <span key={phone}>{phone}</span>
                      ))}
                    </dd>
                  </dl>
                ))}
              </section>
              <section className="widget-news">
                {(point.news || []).map(item => (
                  <div key={item.title} className="news-item">
                    <a className="news-link" href={item.url} target="_blank">
                      <img className="news-image" alt="" src={item.image} />
                      <h3 className="news-title">{item.title}</h3>
                    </a>
                  </div>
                ))}
              </section>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Info;
