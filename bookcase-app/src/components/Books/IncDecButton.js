import React, {useState} from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

const IncDecButton = () => {
    const [quantity, setQuantity] = useState(4);

    const removeFromCart = () => {};
    const increaseCartQuantity = () => {};
    const decreaseCartQuantity = () => {};
    let id = 0;
  return (
    <div
    className="d-flex align-items-center flex-column"
    style={{ gap: ".5rem" }}
  >
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ gap: ".5rem" }}
    >
      <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
      <div>
        <span className="fs-3">{quantity}</span>
      </div>
      <Button onClick={() => increaseCartQuantity(id)}>+</Button>
    </div>
    <Button
      onClick={() => removeFromCart(id)}
      variant="danger"
      size="sm"
    >
      Remove
    </Button>
  </div>
  )
}

export default IncDecButton