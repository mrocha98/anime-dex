import React from 'react';
import NotFoundImage from '../../assets/not-found.png';
import { useHistory } from 'react-router-dom';
import './styles.scss';

function NotFound() {
  const history = useHistory();

  function handleBackToAkibahara() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <div className="card">
        <header className="card-header">
          <h2 className="card-header-title title is-1">Page Not Found</h2>
        </header>
        <div className="card-image">
          <img src={NotFoundImage} alt="Page not found" />
        </div>
        <footer className="card-footer">
          <span className="card-footer-item">
            <button
              className="button is-link is-medium"
              type="button"
              onClick={handleBackToAkibahara}
            >
              Back to Akihabara
            </button>
          </span>
        </footer>
      </div>
    </section>
  );
}

export default NotFound;
