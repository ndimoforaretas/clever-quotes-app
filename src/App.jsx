import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { WhatsappShareButton } from "react-share";
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
        <blockquote className="blockquote mb-3">
          <p>{data.content}</p>
          <footer className="blockquote-footer mt-3">
            <cite title={data.title}>{data.author}</cite>
          </footer>
        </blockquote>
        <Button className="primary" onClick={handleClick}>
          Nue Quote
        </Button>{" "}
        <WhatsappShareButton
          url={quotesURL}
          size={32}
          round={true}
          title="Share Quote"
          children={data.content}
        >
          WhatsApp
        </WhatsappShareButton>
      </Card.Body>
    </Card>
  );
}

export default App;
