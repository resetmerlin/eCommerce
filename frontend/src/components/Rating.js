import React from "react";
import PropTypes from "prop-types";
const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : // if value is greater or same with 1, then show fas, fa-star

              value >= 0.5
              ? //else if value is greater or same with 0.5, fas fa-star-half-alt happen
                "fas fa-star-half-alt"
              : "far fa-star"
            //else, far, fa-star
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : // if value is greater or same with 1, then show fas, fa-star

              value >= 1.5
              ? //else if value is greater or same with 0.5, fas fa-star-half-alt happen
                "fas fa-star-half-alt"
              : "far fa-star"
            //else, far, fa-star
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star"
              : // if value is greater or same with 1, then show fas, fa-star

              value >= 2.5
              ? //else if value is greater or same with 0.5, fas fa-star-half-alt happen
                "fas fa-star-half-alt"
              : "far fa-star"
            //else, far, fa-star
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : // if value is greater or same with 1, then show fas, fa-star

              value >= 3.5
              ? //else if value is greater or same with 0.5, fas fa-star-half-alt happen
                "fas fa-star-half-alt"
              : "far fa-star"
            //else, far, fa-star
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : // if value is greater or same with 1, then show fas, fa-star

              value >= 4.5
              ? //else if value is greater or same with 0.5, fas fa-star-half-alt happen
                "fas fa-star-half-alt"
              : "far fa-star"
            //else, far, fa-star
          }
        ></i>
      </span>
      <span>{text && text}</span>
      {/* OK, so this just means if there's text, if that exists, then show it. */}
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};
Rating.propType = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,

  //OK, so what this will do is it'll type check our props.
  //for text. Which is supposed to be a string, if we passed in a number and I save that and I go back, we're not

  // going to see any difference here. But if we open up our console,
  //   But here it says invalid Propp text of type number supplied to rating and expected a string.
};
export default Rating;
