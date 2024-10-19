// const SelectBox = ({ genre, genreFilterItem, setItem }) => {
//   const handleGenreChange = (e) => {
//     setItem(e.target.value);
//   };

//   return (
//     <>
//       <select
//         className="form-select"
//         aria-label="Select by genre"
//         onChange={handleGenreChange}
//       >
//         <option value="">Select by genre</option>
//         {genre.map((genre, index) => (
//           <option key={index} value={genre}>
//             {genre}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// };

// export default SelectBox;

import React, { useEffect, useRef, useState } from "react";
import "./SelectBox.css";

const SelectBox = ({ genre, genreFilterItem, setItem }) => {
  const [isVisible, setisVisible] = useState(false);

  const [selectIndex, setselectIndex] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="custom-dropdown">
      <label className="form-control" onClick={(e) => setisVisible(!isVisible)}>
        {selectIndex != null ? genre[selectIndex] : "Select Item"}
      </label>

      <span className="arrow-icon"></span>
      {isVisible ? (
        <ul id="myOptions" className="options-list">
          {genre.map((item, index) => {
            return (
              <option
                key={index}
                onClick={(e) => {
                  setselectIndex(index);
                  setisVisible(false);
                  genreFilterItem(item);
                }}
              >
                {item}
              </option>
              // <select
              //   className="form-select"
              //   aria-label="Select by genre"
              //   onChange={handleGenreChange}
              // >
              //   <option value="">Select by genre</option>
              //   {genre.map((genre, index) => (
              //     <option key={index} value={genre}>
              //       {genre}
              //     </option>
              //   ))}
              // </select>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SelectBox;
