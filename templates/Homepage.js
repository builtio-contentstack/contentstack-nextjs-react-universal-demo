/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from "react";
import Layout from "../components/layout";

class Homepage extends React.Component {
  render() {
    const herobanner = this.props.page.hero_banner.map((item, index) => (
      <div key={index}>
        <ul>
          <li>
            <img className="fullwidth" src={item.image.url} />
            <div className="bannerContent">
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
            </div>
          </li>
        </ul>
      </div>
    ));
    const section_heading = this.props.page.section_heading.heading.map(
      (heading, index) => (
        <div key={index} className="portBx clearfix">
          <div className="image">
            <i
              className={`fa ${heading.fontawesome_icon}`}
              aria-hidden="true"
            />
          </div>
          <div className="pxDesc">
            <h3>{heading.title}</h3>
            <p>{heading.description}</p>
          </div>
        </div>
      ),
    );
    return (
      <Layout
        header={this.props.page.reference_header[0]}
        footer={this.props.page.reference_footer[0]}
      >
        <div className="wrapper">
          <div>
            <div id="">
              <div className="heroBanner" id="">
                {herobanner}
              </div>
              <div className="portpolio clearfix">
                <div className="container clearfix">
                  <h1>{this.props.page.section_heading.title}</h1>
                  <h2>{this.props.page.section_heading.description}</h2>
                  {section_heading}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Homepage;
