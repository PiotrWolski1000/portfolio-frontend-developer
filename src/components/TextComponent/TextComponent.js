import React, { Component } from 'react';
import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'
import './TextComponent.css';

const ViewStyle = props => (
  <div className={ props.componentStyle } data-aos={ props.aos }>
    <p>{ props.text }</p>
  </div>
);
export default Watch(
  class TextComponent extends React.Component {
    componentDidMount() {
      this.aos = AOS;
      this.aos.init({
        duration: 2000
      });
    }
    componentDidUpdate() {
      this.aos.refresh();
    }
    render() {
      const aosClass = classNames({
        "aos-init": true,
        "viewport-purple": !this.props.isInViewport,
        "aos-animate viewport-blue": this.props.isInViewport
      });
      
      return(
        <span>
          { this.props.isInViewport ? (
            <ViewStyle
              aos="fade-up"
              componentStyle={ aosClass }
              text="I'm a component that uses data-aos='fade-up'"
            />
          ) : (
            <ViewStyle
              aos="fade-down"
              componentStyle={ aosClass }
              text="I don't matter because you will never see me on the screen, as I am never in the viewport! But you can see me if you inspect me!"
            />
          )}
          { this.props.children }
        </span>
      );
    }
  }
);