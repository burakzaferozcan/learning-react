import React from "react";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;

  return (
 
      <div className="course">
        <img src={image} width={250} className="course-img"/>
        <h4 className="course-title">{title}</h4>
        <p className="course-desc">{description}</p>
        <h3 className="course-price">{price}₺</h3>

        <a href={link} className="course-link">satın almak için tıklayın</a>



      </div>

  );
}

export default Course;
