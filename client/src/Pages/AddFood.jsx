import React, { useState } from "react";
import axios from "axios";

export default function AddFood() {
  const [image, setImage] = useState();
  const handleChange = (e) => {
    const fileReader = new FileReader();
    e.preventDefault();
    // var pic = e.target.files[0];
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
    // fileReader.onload = function (e) {
    //   setImage(e.target.result);
    //   console.log(e.target.result);
    // };
    // fileReader.readAsDataURL(pic);
  };

  const handleSubmit = async (e) => {
    console.log("Submitting")
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    // fetch("http://localhost:8000/predict_api", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    const response = await axios.post("http://127.0.0.1:8000/predict_api", formData);
    console.log(response);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>FOOD CLASSIFICATION</h1>
        </div>
        <div>
          <div className="col-lg-12">
            {/* <form
              className="form-inline"
              action="/predict"
              method="post"
              enctype="multipart/form-data"
            > */}
            <input
              type="file"
              p="1.5"
              accept="image/*"
              name="image"
              onChange={handleChange}
            />
            <br />
            <input type="submit" className="btn btn-success" value="Predict" onClick={handleSubmit}/>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
