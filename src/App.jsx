// hooks imports
import { useEffect, useState } from "react";

// component imports
import { Button, Card, Spinner, Stack } from "react-bootstrap";

// whatsapp share capabilities
import { WhatsappShareButton } from "react-share";

// react icon
import { IoLogoWhatsapp } from "react-icons/io";

// external stylesheet
import "./App.css";

function App() {
  // url variable declarations
  const quotesURL = "https://api.quotable.io/random";
  const imageURL = "https://picsum.photos/300/200";

  // set state declaraions:

  // Random quote variable
  const [data, setData] = useState({});

  // Random Image variable
  const [image, setImage] = useState("");
  // const imgSrc = "https://picsum.photos/seed/300/200";

  // set the loading variables
  const [loadingData, setLoadingData] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  // set Error variables
  const [dataError, setDataError] = useState(false);
  const [imageError, setImageError] = useState(false);

  // asynchronous fetch functions with async/await and try-catch

  // fetch random quotes
  const fetchData = async (url) => {
    setLoadingData(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log(err);
      setDataError(true);
    }
    setLoadingData(false);
  };

  // fetch random image
  const fetchImage = async (url) => {
    setLoadingImage(true);
    try {
      const response = await fetch(url);
      const imageURL = response.url;
      setImage(imageURL);
    } catch (err) {
      console.log(err);
      setImageError(true);
    }
    setLoadingImage(false);
  };

  // useEffect
  useEffect(() => {
    fetchData(quotesURL);
    fetchImage(imageURL);
  }, []);

  // handlerfunction
  const handleNewQuote = () => {
    fetchData(quotesURL);
    fetchImage(imageURL);
  };

  const date = new Date();
  const shareTime = date.toLocaleString();

  return (
    <Card>
      <Card.Header>Clever Quotes</Card.Header>
      {loadingImage ? (
        <>
          <Spinner animation="border" variant="primary" role="status" />
          <p>Loading quote...</p>
        </>
      ) : (
        <Card.Img src={image} alt="random image for a random quote" />
      )}

      <Card.Body>
        <blockquote className="blockquote mb-3">
          {loadingData ? (
            <>
              <Spinner variant="primary" animation="grow" role="status" />
              <p>Loading quote...</p>
            </>
          ) : (
            <p>{data.content}</p>
          )}

          <footer className="blockquote-footer mt-3">
            <cite title={data.title}>{data.author}</cite>
          </footer>
        </blockquote>
      </Card.Body>
      <Card.Footer>
        <Stack
          className="col mx-auto justify-content-evenly"
          // in-line styling
          gap={4}
          direction="horizontal"
        >
          <Button className="primary" onClick={handleNewQuote}>
            Neu Quote
          </Button>
          <WhatsappShareButton
            url={"https://clever-quotes-app.netlify.app/"}
            // in-line styling
            size={32}
            title={`"${data.content}" ${"\n"} ~ ${
              data.author
            } ${"\n"} Share Date: ${shareTime}`}
          >
            <IoLogoWhatsapp className="whatsapp" />
          </WhatsappShareButton>
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default App;
