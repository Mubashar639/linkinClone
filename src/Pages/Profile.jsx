import React, { useEffect, useState } from "react";
import { Row, Col, Jumbotron, Container, Image } from "react-bootstrap";
import ProfileMiddleware from "../Store/Middleware/ProfileMiddleware";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { USERNAME } from "../Services/constAPI";

const Home = () => {
  const dispatch = useDispatch();
  const { profiles } = useSelector(state => ({
    profiles: state.ProfileReducer.profiles
  }));

  useEffect(() => {
    dispatch(ProfileMiddleware.getOneProfile(USERNAME));
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <Container>
          <Row>
            <Col md={6}>
              <Image src={profiles.imageUrl} alt="profile" roundedCircle />
            </Col>
            <Col md={6}>
              <h1>{profiles.firstname + " " + profiles.surname}</h1>
              <h4>{profiles.title}</h4>
              <h5>{profiles.area}</h5>
              <p>{profiles.email}</p>
              <p>{profiles.bio}</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

Home.propTypes = {
  profiles: PropTypes.number
};

export default Home;
