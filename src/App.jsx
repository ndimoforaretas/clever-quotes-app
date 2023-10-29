// hooks imports
import { useEffect, useState } from "react";

// component imports
import { Alert, Button, Card, Spinner, Stack } from "react-bootstrap";

// whatsapp share capabilities
import { WhatsappShareButton } from "react-share";

// react icon
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRandom } from "react-icons/fa";

// external stylesheet
import "./App.css";
import QuotesCard from "./components/QuotesCard";

function App() {
  // url variable declarations
  const quotesURL = "https://api.quotable.io/random";
  const imageURL = "https://picsum.photos/300/500";

  // set state declaraions:

  // Random quote variable
  const [data, setData] = useState({});

  // Random Image variable
  const [image, setImage] = useState("");
  // const imgSrc = "https://picsum.photos/seed/300/200";

  // set the loading variables
  const [loadingData, setLoadingData] = useState(false);

  // set Error variables
  const [dataError, setDataError] = useState(false);

  const fetchData = async () => {
    setLoadingData(true);
    setDataError(false);

    try {
      // fetch random quotes
      const quoteContent = await fetch(quotesURL);
      if (!quoteContent) {
        throw new Error("quote not found");
      }
      const data = await quoteContent.json();

      // set quote data
      setData(data);

      // fetch random image
      const imageContent = await fetch(imageURL);
      if (!imageContent) {
        throw new Error("image not found");
      }
      const image = imageContent.url;
      setImage(image);
    } catch (err) {
      setDataError(true);
    }
    setLoadingData(false);
  };
  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // handlerfunction
  const handleNewQuote = () => {
    fetchData();
  };

  const date = new Date();
  const shareDate = date.toDateString();
  console.log(shareDate);
  return (
    <>
      <Card>
        <Card.Header>Clever Quotes</Card.Header>

        <Card.Body>
          {dataError && (
            <Alert variant="danger">
              Something went wrong while getting the quote. <br /> Please try
              again. <hr />
              Beim Abrufen des Zitats ist ein Fehler aufgetreten. <br /> Bitte
              versuchen Sie es erneut.
            </Alert>
          )}
          {loadingData ? (
            <>
              <Spinner variant="primary" animation="grow" role="status" />
              <p>Loading quote...</p>
            </>
          ) : (
            <QuotesCard
              image={image}
              content={data.content}
              author={data.author}
            />
          )}
        </Card.Body>
        <Card.Footer>
          <Stack
            className="col mx-auto justify-content-evenly"
            // in-line styling
            gap={4}
            direction="horizontal">
            <Button variant="outline-primary" onClick={handleNewQuote}>
              <FaRandom />
            </Button>
            <WhatsappShareButton
              url={"https://clever-quotes-app.netlify.app/"}
              // in-line styling
              size={32}
              title={`${"\n"} "${data.content}" ${"\n"} 😌  ${"\n"} ~ ${
                data.author
              }`}>
              <IoLogoWhatsapp className="whatsapp" />
            </WhatsappShareButton>
          </Stack>
        </Card.Footer>
      </Card>
    </>
  );
}

export default App;
