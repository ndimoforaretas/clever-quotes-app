import { Button, Card } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Card>
      <Card.Header>Clever Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
            dignissimos placeat dolorem esse et error reiciendis nulla ratione.
            Quas ad totam aspernatur, saepe cumque deserunt impedit autem quo
            blanditiis reiciendis.
          </p>
          <footer className="blockquote-footer">
            Someone famous <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        <Button className="primary">Nue Quote</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
