import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Player from 'react-player/lazy';
import Swal from 'sweetalert2';
import api from '../../services/api';
import CardList from '../../components/card-list';
import './styles.scss';

function Details() {
  const { id } = useParams();
  const history = useHistory();
  const [anime, setAnime] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const resAnime = await api.get(`/anime/${id}`);
        setAnime(resAnime.data);

        const resRecommendations = await api.get(
          `/anime/${id}/recommendations`
        );
        setRecommendations(resRecommendations.data.recommendations);

        setIsLoading(false);
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: "Couldn't fetch data from server...",
          footer: err.message,
        });
        history.push('/');
      }
    }
    loadData();

    return () => setIsLoading(true);
  }, [history, id]);

  return (
    <section className="section">
      {isLoading ? (
        <div className="container has-text-centered">
          <h1 className="title is-2">Loading...</h1>
          <span className="button is-text is-loading is-large" />
        </div>
      ) : (
        <article className="details box">
          <header className="details-header">
            <img
              src={anime.image_url}
              alt={anime.title}
              className="details-photo"
            />
            <div className="details-info">
              <hgroup className="details-info-titles">
                <h1 className="title is-1">{anime.title}</h1>
                <h2 className="subtitle is-4">{`${anime.title_english} / ${anime.title_japanese}`}</h2>
              </hgroup>
              <div className="details-info-data">
                <p>
                  Total Eps: <i>{anime.episodes}</i>
                </p>
                <p>
                  Status: &nbsp;
                  <span className="tag is-warning is-light is-normal">
                    {anime.status}
                  </span>
                </p>
                <div className="data-tags">
                  <p>Genres:</p>
                  <ul className="tags">
                    {anime.genres.map((genre) => (
                      <li key={genre.mal_id} className="tag is-info is-light">
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <section className="section">
            <h3 className="subtitle is-4">Synopsis</h3>
            <p className="has-text-justified">{anime.synopsis}</p>
          </section>
          <section className="details-trailer">
            <Player url={anime.trailer_url} controls />
          </section>
          <section className="box mt-6">
            <h3 className="subtitle is-4">Recommendations</h3>
            <CardList isInline list={recommendations} />
          </section>
        </article>
      )}
    </section>
  );
}

export default Details;
