import React from 'react';
import './Events.css';

function Card() {
  return (
    <div className="card">
      <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3017/1083017-v-4ab3c2456f2a" className="card-img" alt="Movie Poster" />
      <div className="card-body">
        <h2 className="name">Movie Name</h2>
        <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
        <button className="watchlist-btn">Add to Watchlist</button>
      </div>
    </div>
  );
}

export default Card;
