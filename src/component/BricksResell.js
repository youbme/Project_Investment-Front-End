import React, { useState } from "react";
import ReactDropdown from "react-dropdown";

export default function BricksResell() {
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const sort1 = [
    { value: "price", label: "Price" },
    { value: "bricks", label: "Bricks" },
  ];

  const sort2 = [
    { value: "ascending", label: "Ascending" },
    { value: "descending", label: "Descending" },
  ];

  const menu1handler = (sort) => {
    setShowMenu1(!showMenu1);
  };
  const option1handler = (sort) => {
    setSelectedOption1(sort);
  };
  const menu2handler = () => {
    setShowMenu2(!showMenu2);
  };
  const option2handler = (sort) => {
    setSelectedOption2(sort);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Brick Resell</h1>
        </div>
        <div className="row">
            <div className="col-6">
                Price:
                <div className="row" style={{justifyContent:'flex-start'}}>
                    <input className="field" placeholder="min"/>
                    <br/>
                    <input className="field" placeholder="max"/>
                </div>
            </div>
            <div className="col-6">
          Sort By:
          <div>
            <div className="dropdown" onClick={menu1handler}>
              {selectedOption1 ? (
                <div>{selectedOption1.label}</div>
              ) : (
                <div>Default</div>
              )}

              {showMenu1 && (
                <div>
                  {" "}
                  {sort1.map((sort) => (
                    <div
                      key={sort.value}
                      className="dropdown-item"
                      onClick={() => option1handler(sort)}
                    >
                      {" "}
                      {sort.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div style={{ marginLeft: "85px" }}>
            <div className="dropdown" onClick={menu2handler}>
            {selectedOption2 ? (
                <div>{selectedOption2.label}</div>
              ) : (
                <div>Default</div>
              )}
              {showMenu2 && (
                <div>
                  {" "}
                  {sort2.map((sort) => (
                    <div key={sort.value} className="dropdown-item"   onClick={() => option2handler(sort)}>
                      {" "}
                      {sort.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          </div>
        </div>

        <div className="row" style={{backgroundColor:'grey'}}>
            <div className="col-12">
               <div className="row"> <img alt="propertyphoto"></img></div>
               <div className="row"> <div className="propertyname">Original Price: </div> <input className="field" placeholder="Original Price"/></div>
               <div className="row"> <div className="propertyname">Resell Price: </div> <input className="field" placeholder="Resell Price"/> </div>
               <div className="row"> <div className="propertyname">Available: </div> <input className="field" placeholder="Available"/></div>
               <br/>
               <div className="row"> <div className="propertyname" >Resell: </div> <button>Owner</button> <button style={{marginLeft:'15px'}}>User</button></div>
            </div>
        </div>
      </div>
    </>
  );
}
