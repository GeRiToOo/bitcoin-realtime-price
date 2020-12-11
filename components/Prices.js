import React, { useState } from 'react';

const Prices = (props) => {
  const [currency, setCurrency] = useState('GBP');

  return (
    <div>
      <ul className="list-group">
        {currency === 'GBP' ? (
          <li className="list-group-item">
            Bitcoin rate for {props.bpi.GBP.description} :{' '}
            <span className="badge badge-primary">{props.bpi.GBP.code} </span>{' '}
            <strong>{props.bpi.GBP.rate}</strong>
          </li>
        ) : currency === 'USD' ? (
          <li className="list-group-item">
            Bitcoin rate for {props.bpi.USD.description} :{' '}
            <span className="badge badge-primary">{props.bpi.USD.code} </span>{' '}
            <strong>{props.bpi.USD.rate}</strong>
          </li>
        ) : currency === 'EUR' ? (
          <li className="list-group-item">
            Bitcoin rate for {props.bpi.EUR.description} :{' '}
            <span className="badge badge-primary">{props.bpi.EUR.code} </span>{' '}
            <strong>{props.bpi.EUR.rate}</strong>
          </li>
        ) : (
          ''
        )}
      </ul>

      <select
        onChange={(e) => setCurrency(e.target.value)}
        className="form-control mt-3"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Prices;
