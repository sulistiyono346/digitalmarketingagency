import React from "react";
import { Container } from "react-bootstrap";
import { CardTeam, H4 } from "Components";
// import person1 from "Assets/Images/person1.svg";
// import person2 from "Assets/Images/person2.svg";
// import person3 from "Assets/Images/person3.svg";
// import person4 from "Assets/Images/person4.svg";
// import person5 from "Assets/Images/person5.svg";
// import person6 from "Assets/Images/person6.svg";
// import person7 from "Assets/Images/person7.svg";
// import person8 from "Assets/Images/person8.svg";

import "./styles.scss";

export default function OurTeams({ users }) {
  // const person = [
  //   {
  //     icon: person1,
  //     name: "Sarah Gilbert",
  //     position: "CEO & Founder DigiXine",
  //     alt: "ceo",
  //   },
  //   {
  //     icon: person2,
  //     name: "Stephen Joe",
  //     position: "Social Media Manager",
  //     alt: "social-media",
  //   },
  //   {
  //     icon: person3,
  //     name: "Amanda Johnson",
  //     position: "Senior Content Writer",
  //     alt: "content-writer",
  //   },
  //   {
  //     icon: person4,
  //     name: "Danie Rogue",
  //     position: "Senior UX Writer",
  //     alt: "ux",
  //   },
  //   {
  //     icon: person5,
  //     name: "Joana Marie",
  //     position: "Frontend Engineer",
  //     alt: "fe",
  //   },
  //   {
  //     icon: person6,
  //     name: "Larry Sam",
  //     position: "Backend Engineer",
  //     alt: "be",
  //   },
  //   {
  //     icon: person7,
  //     name: "Jessica Law",
  //     position: "Ads & Promotion Expert",
  //     alt: "ads",
  //   },
  //   {
  //     icon: person8,
  //     name: "Risa Watson",
  //     position: "Senior SEO Specialist",
  //     alt: "seo",
  //   },
  // ];
  return (
    <Container className="s-our-team justify-content-center align-items-center">
      <H4 weight={700}>Our Teams</H4>
      <div className="card-container">
        {users.map((val, key) => (
          <CardTeam
            key={key}
            icon={val.image}
            name={`${val.firstName} ${val.lastName}`}
            position={val.company.title}
            alt={val.firstName}
          />
        ))}
      </div>
    </Container>
  );
}
