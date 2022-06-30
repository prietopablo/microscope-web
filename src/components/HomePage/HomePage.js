/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePageLinks from "./HomePageLinks/HomePageLinks";
import ScrollDown from "../../assets/ScrollDown.svg";
import { actionLogout } from "../../actions/loginActions";
import { requestGameId } from "requests";
import { clearGame } from "actions/gameActions";
import { useEffect } from "react";
import "./HomePage.css";
import shadow from "../../assets/parallax/Shadow.svg";
import space from "../../assets/parallax/space2.svg";
// import moon from "../../assets/parallax/Moon.svg";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.userId);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isConnected = useSelector((state) => state.user.isConnected);
  // const gameId = useSelector((state) => state.game.gameId);

  //parallax
  useEffect(() => {
    (function () {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      const elem = document.querySelector(".home");
      // Magic happens here
      function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * -0.01}% ${
          50 - (_mouseY - _h) * -0.01
        }%`;
        let _depth2 = `${30 - (_mouseX - _w) * 0.01}% ${
          30 - (_mouseY - _h) * 0.01
        }%`;
        let _depth3 = `${30 - (_mouseX - _w) * 0.02}% ${
          30 - (_mouseY - _h) * 0.02
        }%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        // console.log(x);
        elem.style.backgroundPosition = x;
      }
    })();
  }, []);

  const handleCreatelobby = async () => {
    dispatch(clearGame());

    const result = await requestGameId(userId);

    console.log(result);
    if (result.gameId) {
      dispatch({
        type: "GAME_ID",
        payload: {
          id: result.gameId,
        },
      });
      navigate(isConnected ? `/lobby/${result.gameId}` : "/login");
      console.log("ID DE LA GAME", result.gameId);
    }
  };

  return (
    <div className="home">
      <div className="page">
        {isDesktop && (
          <HomePageLinks
            handleLogout={() => {
              console.log("handleLogout");
              dispatch(actionLogout());
            }}
          />
        )}
        <Header />
        {isMobile && (
          <div className="buttons-mobile">
            <Button
              className="button-mobile"
              inverted
              onClick={() => navigate(isConnected ? "/lobby" : "/login")}
            >
              Créer une partie
            </Button>
            <Button
              className="button-mobile"
              inverted
              onClick={() => navigate("/archived")}
            >
              Parties archivées
            </Button>
            <Button
              className="button-mobile"
              inverted
              onClick={() => navigate("/login")}
            >
              Se connecter
            </Button>
            <Button
              className="button-mobile"
              inverted
              onClick={() => navigate("/signup")}
            >
              Inscription
            </Button>
            <img
              src={ScrollDown}
              className="scroll bounce"
              alt="scroll-down arrow"
            />
          </div>
        )}
        {isDesktop && (
          <div className="buttons-desktop">
            <Button
              className="menu-button"
              inverted
              onClick={handleCreatelobby}
            >
              Créer une partie
            </Button>
            <Button
              className="menu-button"
              inverted
              onClick={() => navigate("/archived")}
            >
              Parties archivées
            </Button>
            <img
              src={ScrollDown}
              className="scroll bounce"
              alt="scroll-down arrow"
            />
          </div>
        )}
        {/* <img className="homepage--moon" src={moon} /> */}
        <img className="homepage--shadow" src={shadow} />
        <img className="homepage--bg" src={space} />
      </div>

      <div className="rules">
        <h2 className="rules--main">Règles du jeu</h2>
        <h3 className="rules--sub">
          Bienvenue sur l’application microscope web. Cette dernière vise à
          adapter Microscope, un jeu d’écriture collaboratif publié pour la
          première fois en 2011 aux Etats-Unis.
        </h3>
        <p className="rules--text">
          Ce jeu a pour objectif, grâce à un système de carte, de permettre
          l’écriture d’un récit de manière non-linéaire.
          <br />
          <br /> Ainsi, le premier joueur pourrait s'intéresser à la conclusion
          de l’histoire et le suivant pourrait se concentrer sur une période
          antérieure.
          <br />
          <br /> Le premier objectif d’une partie est d’incarner un simple
          spectateur lors du tour des autres joueurs, puis de devenir l’auteur
          d’une partie de l’histoire quand vient son tour, sans l’influence des
          autres participants.
          <br />
          <br /> Grâce à sa structure morcelée, les parties sont capables de
          générer des coups de théâtres et autres rebonds transformant une
          simple anecdotes en instant narratif majeur.
          <br />
          <br />
        </p>
        <h3 className="rules--sub">Plus de détails :</h3>
        <ul className="rules--text">
          Une partie a besoin de quatre élément pour démarrer:
          <li className="rules--text">
            Une <strong>Vue d’Ensemble</strong>
          </li>
          <p className="spacing">
            <i>
              - Exemple :<br /> Un Empire tyrannique chute grâce à la un
              mouvement rebelle
            </i>
          </p>
          <li className="rules--text">
            Le <strong>Début</strong> et la <strong>Fin</strong> de l’histoire
            jouée
          </li>
          <p className="spacing">
            <i>
              - Exemples :<br /> L’Empire met au point une station pouvant
              détruire des planètes entières.
              <br />
              L’Empereur est vaincu et ses soldats fuient à travers la galaxie.
            </i>
          </p>
          <li className="rules--text">
            Une <strong>Palette</strong> réunissant des thématiques à faire
            figurées ou à proscrire de la partie
          </li>
          <p className="spacing">
            <i>
              - Exemples :<br /> <strong>OUI :</strong> Ordre de chevalier,
              Magie
              <br />
              <strong>NON :</strong> Espace Réaliste
            </i>
          </p>
          <li className="rules--text">
            Une <strong>Première Passe</strong> de cartes{" "}
            <strong>Périodes</strong> et <strong>Evénements</strong>
          </li>
          <p className="spacing">
            <i>
              - Exemples :<br /> Carte Période, Le seigneur Vador tend un piège
              à la Résistance sur la planète Bespin
              <br />
              Carte Période, La Résistance planifie et détruit l'Etoile Noire
              <br />
              Carte Événement, Le jeune fermier Luke trouve un contrebandier
              pour échapper au blocus de la planète Tatooine
              <br />
            </i>
          </p>
        </ul>
        <h3 className="rules--sub">
          Il existe trois échelles narratives dans le jeu :
        </h3>
        <p className="spacing">
          Des <strong>Périodes</strong> définissant les grands arcs narratifs
          <br />
          <i>
            - Exemple : un jeune fermier rejoint la résistance et en devient le
            héros.
            <br />
          </i>
          <br />
          Des <strong>Evénements</strong> ponctuant les périodes en cours
          <br />
          <i>
            - Exemple : un vaisseau transportant des informations critiques à
            l’existence de la résistance est poursuivi par l’empire.
            <br />
          </i>
          <br />
          Et enfin les <strong>Scènes</strong> (qui ne sont pas permises pour la{" "}
          <strong>Première Passe</strong>) qui permettent de questionner et de
          résoudre le déroulement des événements
          <br />
          <i>
            - Exemple : la jeune diplomate, secrètement membre de la résistance,
            arrivera-t-elle à fuir son vaisseau ?
            <br />
          </i>
          <br />
          Notre application permet également de produire des cartes
          <strong> Focus</strong> !
          <br />
          <br />
          Elles permettent de définir une thématique ou un point d’intérêt pour
          le tour de table.
          <br />
          <i>
            - Exemples: le côté obscur de la force, le personnage du jeune
            fermier, les voyages à travers les étoiles, etc.…
            <br />
          </i>
          D’autres fonctionnalités seront ajoutées à notre application pour
          s’adapter à la vision de son auteur Ben Robbins. :)
          <br />
          <br />
          Nous avons prévu d’ajouter les cartes Héritages, mais surtout la
          régulation des tours de jeu afin de permettre aux joueurs de se
          concentrer sur l’aspect créatif. Pour le moment, le livre Microscope
          est nécessaire pour mener à bien une partie, mais l’objectif serait de
          faire évoluer l’application vers un modèle complètement indépendant.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
