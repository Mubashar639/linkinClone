import React, { useEffect, useState } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ExperiencesMiddleware } from "../../Store/Middleware";
import { USERNAME } from "../../Services/constAPI";

const Experiences = () => {
  const dispatch = useDispatch();
  const { experiences } = useSelector(state => ({
    experiences: state.ExperiencesReducer.experiences
  }));

  console.log("My Exp", experiences.profileExperiences);

  useEffect(() => {
    dispatch(ExperiencesMiddleware.getAllExperiencesProfile(USERNAME));
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>Experience</h1>

        {experiences.profileExperiences &&
          experiences.profileExperiences
            .map(P => P.experience)
            .flat()
            .map((E, k) => (
              <Row key={k}>
                <ul>
                  <li>{E.role}</li>
                </ul>
              </Row>
            ))}
      </Container>
    </>
  );
};

export default Experiences;
