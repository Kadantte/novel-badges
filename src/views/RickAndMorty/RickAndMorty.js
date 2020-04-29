import React from 'react';
import './rickAndMorty.scss';
// Dependencies
import InfiniteScroll from 'react-infinite-scroll-component';
// Components
import BadgeHero from 'components/BadgeHero';
import Loader from 'components/Loader';

const CharacterCard = (props) => {
  const { character } = props;
  let status;

  if (character.status === 'Alive') {
    status = <div className="title title--alive">{character.status}</div>;
  } else if (character.status === 'Dead') {
    status = <div className="title title--dead">{character.status}</div>;
  } else {
    status = <div className="title title--unknown">{character.status}</div>;
  }

  return (
    <React.Fragment>
      <div className="character-card">
        <h2 className="name">{character.name}</h2>
        {status}
        <div className="desc">Origen: {character.origin.name}</div>
        <img src={character.image} alt={character.name} />
        <div className="actions">
          <button className="actions__trade">{character.species}</button>
          <button className="actions__cancel">{character.gender}</button>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoaderBottom = () => {
  return (
    <React.Fragment>
      <h4 className="loader-text">Cargando...</h4>
    </React.Fragment>
  );
};

class RickAndMorty extends React.Component {
  state = {
    nextPage: 1,
    loading: false,
    hasMore: false,
    error: null,
    data: {
      info: {},
      results: [],
    },
  };
  _isMounted = true;

  componentDidMount() {
    this._isMounted = true;
    this.fetchCharacters();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`,
      );
      const data = await response.json();

      if (this._isMounted) {
        this.setState({
          loading: false,
          data: {
            info: data.info,
            results: [].concat(this.state.data.results, data.results),
          },
          nextPage: this.state.nextPage + 1,
        });

        if (this.state.data.info.next !== '') {
          this.setState({ hasMore: true });
        } else {
          this.setState({ hasMore: false });
        }
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return `Error:${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <BadgeHero title="Rick y Morty" />
        <InfiniteScroll
          dataLength={this.state.data.results.length}
          next={this.fetchCharacters}
          hasMore={this.state.hasMore}
          loader={<LoaderBottom />}>
          <div className="container">
            <div className="row">
              {this.state.data.results.map((character) => (
                <div className="col-md-4 col-lg-3" key={character.id}>
                  <CharacterCard character={character} />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>

        {this.state.loading && <Loader />}
      </React.Fragment>
    );
  }
}

export default RickAndMorty;
