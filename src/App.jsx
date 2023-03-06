import { useEffect, useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { WhatsappShareButton } from "react-share";
import { IoLogoWhatsapp } from "react-icons/io";

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
        <Stack
          className="col-md-5 mx-auto justify-content-evenly"
          gap={4}
          direction="horizontal"
        >
          <Button className="primary" onClick={handleClick}>
            Neu Quote
          </Button>{" "}
          <WhatsappShareButton
            url={"https://aretas-quotes-app.netlify.app/"}
            size={32}
            title={`"${data.content}", by: ${data.author}`}
          >
            <IoLogoWhatsapp className="whatsapp" />
          </WhatsappShareButton>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default App;
