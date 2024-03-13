import React, { useState } from "react";
import product from '../../utils/Products'
import { Input } from "reactstrap";


const CheckFilter = ({ setFilterList, options }) => {

  const data = product()




  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (value) => {
    const updatedSelection = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedSelection);

    if (updatedSelection.length === 0) {
      // If no options are selected, show all products
      setFilterList([]);
    } else {
      // Filter products based on selected options
      setFilterList(
        updatedSelection.reduce((filteredProducts, option) => {
          return filteredProducts.concat(
            data.filter((item) => item.category === option)
          );
        }, [])
      );
    }
  };

  return (
    <div>
      {(options || [{}]).map((option) => (
        <div key={option.value} >
          <label className="mx-0 text-muted mt-2"  style={{cursor: 'pointer'}}>
            <Input
              type="checkbox"
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleChange(option.value)}
              className="mx-3 text-muted"
           
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckFilter;
