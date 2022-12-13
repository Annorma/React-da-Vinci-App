import React, { useState } from "react";
import Card from "react-bootstrap/Card";

export default function PaintingsList(props) {
  const [paintings, setPaintings] = useState(props.paintings);

  const nameRef = React.createRef();
  const yearRef = React.createRef();

  const addPainting = (e) => {
    e.preventDefault();

    const newPainting = {
      name: nameRef.current.value,
      year: yearRef.current.value
    };

    // ...spread operator
    setPaintings([...paintings, newPainting]);
  };
  const clearPaintings = () => {
    //products = [];
    setPaintings([]);
  };

  return (
    <>
      {paintings.map((p) => (
        <Card style={{ marginTop: "20px" }}>
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>Year: {p.year}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>

    //   <h1>Paintigs List</h1>

    //   <form>
    //     <lable>
    //       <span> Name: </span>
    //       <input type="text" ref={nameRef} />
    //     </lable>
    //     <lable>
    //       <span> Year: </span>
    //       <input type="number" min="0" ref={yearRef} />
    //     </lable>
    //   </form>

    //   <ul className="product-list">
    //     {paintings.map((p, index) => (
    //       <li key={index}>
    //         {p.name} : {p.price}$
    //       </li>
    //     ))}
    //   </ul>
    //   <button onClick={clearPaintings}>Clear Product</button>
    // </>
  );
}
