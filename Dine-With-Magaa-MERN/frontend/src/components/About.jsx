import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              In a world where time is valuable and experiences matter, Foody
              Fresh was created to simplify the way people discover and book
              restaurants. Whether you're planning a romantic dinner, catching
              up with friends, or organizing a family meal, our app helps you
              find the perfect spot and reserve a table in just a few seconds.
              We understand the frustration of waiting in line, calling multiple
              restaurants, or showing up only to find no tables available.
              That’s why we built a platform that puts real-time restaurant
              availability, instant booking, and personalized suggestions at
              your fingertips. Foody Fresh is designed with the modern diner in
              mind. With a clean interface and powerful features, we ensure that
              your journey from craving to table is smooth, fast, and enjoyable.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
