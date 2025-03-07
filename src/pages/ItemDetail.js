import React from "react";
import { useParams } from "react-router-dom";

const items = [
  { id: "1", name: "Item 1", description: "This is Item 1 description" },
  { id: "2", name: "Item 2", description: "This is Item 2 description" },
  { id: "3", name: "Item 3", description: "This is Item 3 description" },
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
