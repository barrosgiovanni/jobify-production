import React from 'react';

function FormRowSelect({ value, name, labelText, handleChange, list }) {

  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        { labelText || name }
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>{itemValue}</option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect;
