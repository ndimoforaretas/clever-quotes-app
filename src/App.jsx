// hooks imports
import { useEffect, useState } from "react";

// component imports
import { Button, Card, Stack } from "react-bootstrap";

// whatsapp share capabilities
import { WhatsappShareButton } from "react-share";

// react icon
import { IoLogoWhatsapp } from "react-icons/io";

// external stylesheet
import "./App.css";

function App() {
  // state declaraion
  const [data, setData] = useState({});
  // Random Image
  const imgSrc = `https://picsum.photos/seed/${data.length}/300/200`;

  // url variable declaration
  const quotesURL = "https://api.quotable.io/random";

  // asynchronous fetch function with async/await and try-catch
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect
  useEffect(() => {
    fetchData(quotesURL);
  }, []);

  // handlerfunction
  const handleNewQuote = () => {
    fetchData(quotesURL);
  };

  return (
    <Card>
      <Card.Header>Clever Quotes</Card.Header>
      <Card.Img src={imgSrc} />

      <Card.Body>
        <blockquote className="blockquote mb-3">
          <p>{data.content}</p>
          <footer className="blockquote-footer mt-3">
            <cite title={data.title}>{data.author}</cite>
          </footer>
        </blockquote>
      </Card.Body>
      <Card.Footer>
        <Stack
          className="col-md-5 mx-auto justify-content-evenly"
          // in-line styling
          gap={4}
          direction="horizontal"
        >
          <Button className="primary" onClick={handleNewQuote}>
            Neu Quote
          </Button>
          <WhatsappShareButton
            url={"https://aretas-quotes-app.netlify.app/"}
            // in-line styling
            size={32}
            title={`"${imgSrc}" ${"\n"} "${data.content}" ${"\n"} ~${
              data.author
            }`}
          >
            <IoLogoWhatsapp className="whatsapp" />
          </WhatsappShareButton>
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default App;
