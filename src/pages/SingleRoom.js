import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    console.log(this.context);
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No Such Room Found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to room
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="description">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <ul className="list-unstyled">
                <li>
                  <strong>Price:</strong> ${price}
                </li>
                <li>
                  <strong>Size:</strong> {size}SQFT
                </li>
                <li>
                  <strong>Max Capacity: </strong>
                  {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </li>
                <li>
                  <strong>{pets ? "Pets allowed" : "No pets allowed"}</strong>
                </li>
                <li>
                  <strong />
                </li>
              </ul>
              <h5 className="text-capitalize text-success">
                <strong>{breakfast && "free breakfast included"}</strong>
              </h5>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
