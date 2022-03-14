import "./pizzaitem.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const PizzaItem = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="item shadow p-3 mb-5 bg-white rounded">
        <div onClick={handleShow}>
          <h1 className="name">{pizza.name}</h1>
          <img src={pizza.image} className="img-fluid" />
        </div>
        <div className="flex-container">
          <div className="w-100">
            <p>Varients</p>
            <select
              className="form-control"
              value={varient}
              onChange={(e) => {
                setVarient(e.target.value);
              }}
            >
              {pizza.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div className="w-100">
            <p>Quantity </p>
            <select
              className="form-control"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex-container">
          <div className="mt-1">
            <h1>Price: ₹ {pizza.prices[0][varient] * quantity} </h1>
          </div>
          <div>
            <button className="btn mt-3">Add to cart</button>
          </div>
          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>{pizza.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img
                src={pizza.image}
                className="img-fluid"
                style={{
                  height: "300px",
                  width: "300px",
                }}
              />
              <p style={{ margin: "20px" }}>{pizza.description}</p>
            </Modal.Body>

            <Modal.Footer>
              <button className="btn" onClick={handleClose}>
                close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default PizzaItem;
