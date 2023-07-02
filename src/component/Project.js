import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Project() {
  const [projectData, setProjectData] = useState({});
  const [projectId, setProjectId] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const [option, setOption] = useState([]);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    loadpropertyname();
  }, []);

  const dropdownhandler = () => {
    setDropdown(!dropdown);
  };
  const selecthandler = (opt) => {
    setSelected(opt);
  };

  const onSubmit = () => {
    const id = selected.id;

    axios
      .get(`http://192.168.1.65:8080/project/get-project-by-id/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY4Nzg1NDkxMywiZXhwIjoxNjg4NzE4OTEzfQ.Y7NnrbgHmlCGK6l3Y0n7eolXKWUVegIZlhSqG2ZqFCAz2HpLPauz_vs3J5VNPoz46ffZJdAXANFc90O-jq0Wmw",
        },
      })
      .then((response) => {
        console.log(response.data);
        setProjectData((prevData) => ({ ...prevData, ...response.data }));
        console.log(projectData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onCreate = () => {
    axios
      .post(
        "http://192.168.1.65:8080/project/create",
        {
          name: projectData.name,
          location: projectData.location,
          size: projectData.size,
          amount: projectData.amount,
          description: projectData.description,
          availableBricks: projectData.availableBricks,
          noOfBricks: projectData.totalNoOfBricks,
          unitPricePerBrick: projectData.unitPricePerBrick,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY4Nzg1NDkxMywiZXhwIjoxNjg4NzE4OTEzfQ.Y7NnrbgHmlCGK6l3Y0n7eolXKWUVegIZlhSqG2ZqFCAz2HpLPauz_vs3J5VNPoz46ffZJdAXANFc90O-jq0Wmw",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadpropertyname = () => {
    axios
      .get("http://192.168.1.65:8080/project/get-all-projects")
      .then((response) => {
        console.log(response.data);
        const arr = response.data.map((res) => res);
        setOption(arr);
      });
  };
  const onUpdate = () => {
    console.log(selected);
    const id = selected.id;
    axios
      .put(
        `http://192.168.1.65:8080/project/update-project-by-id/${id}`,
        {
          name: projectData.name,
          location: projectData.location,
          size: projectData.size,
          amount: projectData.amount,
          description: projectData.description,
          availableBricks: projectData.availableBricks,
          noOfBricks: projectData.totalNoOfBricks,
          unitPricePerBrick: projectData.unitPricePerBrick,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY4Nzg1NDkxMywiZXhwIjoxNjg4NzE4OTEzfQ.Y7NnrbgHmlCGK6l3Y0n7eolXKWUVegIZlhSqG2ZqFCAz2HpLPauz_vs3J5VNPoz46ffZJdAXANFc90O-jq0Wmw",
          },
        }
      )
      .then((response) => {
        alert("Successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleId = (e) => {
    setProjectId(e.target.value);
  };

  const onChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setProjectData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <>
      <div className="container">
        <div class="row" style={{ justifyContent: "center", display: "flex" }}>
          <div style={{marginRight:'105px'}}>Project Name</div>
          {/* <input
            placeholder="select id"
            value={projectId || ""}
            onChange={handleId}
            style={{ width: "70px", marginLeft:'20px', marginRight:'20px' }}
          />{" "} */}
          <div className="dropdown" onClick={dropdownhandler}>
            {" "}
            {selected ? <div>{selected.name}</div> : <div>Default</div>}
            {dropdown && (
              <div>
                {option.map((opt, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => selecthandler(opt)}
                  >
                    {opt.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={onSubmit}>Get Data</button>
        </div>
        <br />
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <br />
          <button>Insert new data</button>
        </div>
        <hr />

        <h2> Property Investment Data</h2>

        <div class="row">
          <div class="propertyname">Property ID</div>
          <input
            placeholder="Property ID"
            name="id"
            value={projectData.id || ""}
            style={{ marginLeft: "55px" }}
            readOnly
          />
        </div>
        <div class="row">
          <div class="propertyname">Property Name</div>
          <input
            placeholder="Property Name"
            name="name"
            value={projectData.name}
            style={{ marginLeft: "55px" }}
            readOnly
          />
        </div>
        <div class="row">
          <div class="propertyname">Property Location</div>
          <input
            placeholder="Property Location"
            name="location"
            value={projectData.location || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div class="row">
          <div class="propertyname">Property Size</div>
          <input
            placeholder="Property Size"
            name="size"
            value={projectData.size || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div class="row">
          <div class="propertyname">Property Amount</div>
          <input
            placeholder="Property Amount"
            name="amount"
            value={projectData.amount || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div class="row">
          <div class="propertyname">Property Description</div>
          <input
            placeholder="Property Description"
            name="description"
            value={projectData.description || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div class="row">
          <div class="propertyname">Total No. of bricks</div>
          <input
            placeholder="Total No. of bricks"
            name="totalNoOfBricks"
            value={projectData.totalNoOfBricks || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div class="row">
          <div class="propertyname">Available Bricks</div>
          <input
            placeholder="Available Bricks"
            name="availableBricks"
            value={projectData.availableBricks || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div class="row">
          <div class="propertyname">Unit Price per Brick</div>
          <input
            placeholder="Unit Price per Brick"
            name="unitPricePerBrick"
            value={projectData.unitPricePerBrick || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div class="row">
          <div class="propertyname">Bidable</div>
          <input
            placeholder="Bidable"
            name="bidable"
            value={projectData.bidable || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div class="row">
          <div class="propertyname">Is Deleted</div>
          <input
            placeholder="Is Deleted"
            name="isDeleted"
            value={projectData.isDeleted || ""}
            onChange={onChangeInput}
            style={{ marginLeft: "55px" }}
          />
        </div>

        <div class="row">
          <button onClick={onUpdate}>Update Data</button>
        </div>
      </div>
    </>
  );
}
