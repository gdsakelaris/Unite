import { Card } from "react-bootstrap";

// Each card will need have a picture, title, and description.
const ProductCard = ({ picture, title, description }) => {
  return (
    <Card
      className="mb-3"
      style={{ border: "1px solid", borderColor: "var(--border-color)" }}
    >
      <Card.Img
        className="product-card-image"
        variant="top"
        src={
          picture !== null
            ? picture
            : "https://placehold.co/400?text=No+image+available"
        }
      />
      <Card.Body
        className="d-flex align-items-center justify-content-center overflow-auto"
        style={{ minHeight: "160px", maxHeight: "160px" }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-center">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
