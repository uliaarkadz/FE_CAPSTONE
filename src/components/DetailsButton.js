import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faPlus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export const DetailsButton = () => {
  return (
    <Button type="submit" className="btn bg-transparent">
      <FontAwesomeIcon icon={faCircleInfo} />
    </Button>
  );
};

export const AddButton = ({ data }) => {
  return (
    <Button type="submit" className="btn bg-transparent">
      <FontAwesomeIcon icon={faPlus} size="2xl" style={{ color: "#115641" }} />
    </Button>
  );
};

export const DeleteButton = ({ data }) => {
  return (
    <Button type="submit" className=" btn btn-primary">
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
};

export const EditButton = ({ data, value }) => {
  console.log(value);
  return (
    <Button type="submit" form={value} className="btn btn-primary">
      <FontAwesomeIcon icon={faPenToSquare} />
    </Button>
  );
};
