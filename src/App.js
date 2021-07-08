import { useState } from "react";
import SimpleModal from "./simpleModal/SimpleModal";
import Modal from "./Modal/Modal";

const modal = {
  width: "500px",
  height: "600px",
  margin: "auto",
  borderRadius: "8px",
  backgroundColor: "white",
  padding: "20px"
}

const header = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "2rem"
};

const body = {

};


function App() {
  const [state, setstate] = useState(false)
  const options = {
    showModal: state,
    showButtonContent: "Show modal bro!",
    headerContent: "Heading",
    modalStyle: {
      modal, header, body
    }
  }

  return (
    <div>
      <SimpleModal options={options} >
        <Modal></Modal>  
        <button onClick={()=>setstate(!state)}>close</button>    
      </SimpleModal>
    </div>
  );
}

export default App;
