import React from "react";

const CourseCard = ({ course }) => {
  const { name, img, instructor, info } = course;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6> {instructor} </h6>
            <p className="card-text">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
