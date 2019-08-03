import React from "react";
import { useContext } from "react";
import { roomContext, RoomContext } from "../context";
import Title from "../components/Title";
// get all unique values
const getUnique = (items, value) => {
  // passing string(value) what kind of value you have on type if it is not in the set it will be added!
  // (set will get all new value not the old value)
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //   getting unique types
  let types = getUnique(rooms, "type");

  // add all
  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  //   getting people capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* select Guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end select Guest */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            Room Price <strong>${price}</strong>
          </label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="orm-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end ofsize */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomFilter;
