import React from "react";
import ReactDOM from 'react-dom';
import {Header} from './header.jsx';
import {Footer} from './footer.jsx';
// import {Content} from './content.jsx';
import Slider from "react-slick";

// import Kebab1 from '../../images/kebab-wolowina.png';
// import Kebab2 from '../../images/falafel.jpg';
// import Kebab3 from '../../images/kebs.jpg';

export class Template extends React.Component {
  render(){
    return (
    <section className="main">
      <Header />
      <Footer />
    </section>
    )
  }
}
