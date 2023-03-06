import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

import "./App.css";

function App() {
  const [data, setData] = useState({});

  const quotesURL = "https://api.quotable.io/random";

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(quotesURL);
  }, []);

  const handleClick = () => {
    fetchData(quotesURL);
  };

  return (
    <Card>
      <Card.Header>Clever Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{data.content}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{data.author}</cite>
          </footer>
        </blockquote>
        <Button className="primary" onClick={handleClick}>
          Nue Quote
        </Button>
      </Card.Body>
    </Card>
  );
}

export default App;
