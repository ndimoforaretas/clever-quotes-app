import Card from "react-bootstrap/Card";

const QuotesCard = ({ content, author, image }) => {
  return (
    <Card className="text-white">
      <Card.Img src={image} alt="Quote image" />

      <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
        <div className="overlay">
          <Card.Title className="py-3">Quote of the day</Card.Title>
          <Card.Text className="px-2">{content}</Card.Text>
          <Card.Text className="pb-1">~ {author} ~</Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};
export default QuotesCard;
