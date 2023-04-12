import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./Buttons.scss";

function ArrowButton({ text, path }) {
  return (
    <div className="btn">
      <Link to={`${path}`}>{text}</Link>
      <BsArrowRight />
    </div>
  );
}

ArrowButton.defaultProps = {
  text: "Test btn",
  path: "/",
};

const ActionButton = ({ children, clickFunc }) => {
  return (
    <div className="btn_container">
      <button
        onClick={() => {
          clickFunc();
        }}
      >
        <span>{children}</span>
      </button>
    </div>
  );
};

ActionButton.defaultProps = {
  children: "Test button",
  clickFunc: console.log("clicked"),
};

export { ArrowButton, ActionButton };
