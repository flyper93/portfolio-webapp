import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const citiesItems = ["London", "Lisbon", "New York"];

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-4">
            <ListGroup items={citiesItems} headline="Cities" />
          </div>
        </div>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-3 d-flex justify-content-center">
              <Button onClick={() => setAlertVisible(true)}>MyButton</Button>
            </div>
          </div>
        </div>
        {alertVisible && (
          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-6 d-flex justify-content-center">
                <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
