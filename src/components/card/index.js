import React from 'react';
import { useHistory } from 'react-router-dom';

function Card({ id, title, image_url }) {
  const history = useHistory();

  function handleNavigateToDetail() {
    history.push(`/details/${id}`);
  }

  return (
    <article className="card">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={image_url} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 is-size-6-mobile">{title}</p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <span className="card-footer-item">
          <button
            type="button"
            className="button is-link"
            onClick={handleNavigateToDetail}
          >
            View
          </button>
        </span>
      </footer>
    </article>
  );
}

export default Card;
