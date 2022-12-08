import "./Homepage.scss";
import React from "react";
import { Button } from "@mui/material";
import firstpicture from "../../assets/template.png";
import inspi1 from "../../assets/inspi1.jpg";
import inspi2 from "../../assets/inspi2.jpg";
import inspi3 from "../../assets/inspi3.jpg";
import inspi4 from "../../assets/inspi4.jpg";
import inspi5 from "../../assets/inspi5.jpg";
import inspi6 from "../../assets/inspi6.jpg";
import plan from "../../assets/plan.png";
import tabouret from "../../assets/tabouret.jpg";
import chaise from "../../assets/chaise.jpg";
import bureau from "../../assets/bureau.jpg";
import armoire from "../../assets/armoire.jpg";
import solution from "../../assets/solution.png";

const Homepage = () => {
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: name === "cgu" ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(values, event);
    this.setState({ showMessage: !this.state.showMessage });
  };

  return (
    <div className="body">
      <div className="container--first">
        <img src={firstpicture} alt="inspiration" />
        <div className="text">
          <h3>Aménager, plus besoin de rêver, c’est une réalité.</h3>
          <p>
            Utilisez notre outil prêt à l’emploi et aménager vos espaces
            d’intérieurs à l’aide d’une projection 3D
          </p>
          <Button variant="contained" disableElevation className="button">
            Je découvre
          </Button>
        </div>
      </div>
      <div className="container--second">
        <img src={plan} alt="plan" />

        <div className="text">
          <h3>Vos plans 2D</h3>
          <p>
            Réalisez vos plans 2D en un instant pour organiser votre espace de
            vie en quelques clics. Partez de zéro ou réaménagez un espace déjà
            meublé et laissez cours à vos envies.
          </p>
          <Button variant="contained" disableElevation className="button">
            Je découvre
          </Button>
        </div>
      </div>
      <div className="container--inspiration">
        <div className="picture--inspiration">
          <img src={inspi1} alt="inspiration" />
          <img src={inspi2} alt="inspiration" />
        </div>
        <div className="picture--inspiration">
          <h2>Nos Inspirations</h2>
          <img src={inspi3} alt="inspiration" />
          <img src={inspi4} alt="inspiration" />
        </div>
        <div className="picture--inspiration">
          <img src={inspi5} alt="inspiration" />
          <img src={inspi6} alt="inspiration" />
        </div>
      </div>
      <div className="container--solution">
        <div className="text">
          <h3>Notre solution</h3>
          <p>
            Notre solution offre à nos utilisateurs une expérience plus
            immersive lors de votre aménagement d’intérieur. Il sera possible de
            projeter un modèle 3D d’un meuble dans votre espace grâce à votre
            téléphone, cette expérience immersive vous confortera dans vos choix
            d’achats.
          </p>
          <Button
            href="https://www.figma.com/proto/qOStdCM8NOA7ZPrF1usCxv/Amenha?node-id=124%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=130%3A25&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            disableElevation
            className="button"
          >
            En savoir plus
          </Button>
        </div>
        <img src={solution} alt="visualisation de la solution" />
      </div>
      <div className="container--meuble">
        <h2>Découvrez nos meubles grâce à la 3D </h2>
        <div className="picture--meubles">
          <div className="meuble">
            <img src={bureau} alt="meubles" />
            <div className="text">Bureau</div>
          </div>
          <div className="meuble">
            <img src={chaise} alt="meubles" />
            <div className="text">Chaise</div>
          </div>
          <div className="meuble">
            <img src={armoire} alt="meubles" />
            <div className="text">Armoire</div>
          </div>
          <div className="meuble">
            <img src={tabouret} alt="meubles" />
            <div className="text">Tabouret</div>
          </div>
        </div>
      </div>
      {/* <div className="youtube--embed">
        <iframe
          width="720"
          height="405"
          src=""
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div> */}
      <div className="newsletter">
        <form onSubmit={() => handleSubmit}>
          <label>Inscrivez vous à notre newsletter ?</label>
          <input
            type="email"
            name="email"
            placeholder="votre email"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            disableElevation
            className="button"
            onClick={handleSubmit}
          >
            {"Je m'inscris"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
