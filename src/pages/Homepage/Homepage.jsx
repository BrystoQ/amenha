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
import solution from "../../assets/solution.png";
import artisan from "../../assets/artisan.png";
import solution2 from "../../assets/solution2.png";
import Newsletter from "../../components/Newsletter/Newsletter";

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
            Utilisez notre outil prêt à l’emploi pour aménager vos espaces
            d’intérieurs à l’aide d’une projection sur votre smartphone.
          </p>
          <Button variant="contained" disableElevation className="button">
            Je découvre
          </Button>
        </div>
      </div>

      <div className="container--solution">
        <div className="text">
          <h3>Notre solution</h3>
          <p>
            Notre solution offre à nos utilisateurs une expérience plus
            immersive lors de votre aménagement d’intérieur. Il sera possible de
            changer l’ambiance de votre espace de vie, grâce à notre application
            en quelques clics. Changer la couleur de votre mur à votre guise et
            laissez nous faire le reste, on vous proposera des meubles avec une
            ambiance sans faute de goût garantie.
          </p>
          <Button
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

      <div className="container--second">
        <img src={artisan} alt="artisan" />
        <div className="text">
          <h3>Nos artisans</h3>
          <p>
            Nos artisans partenaires certifiés “Maître artisan ébèniste” mettent
            à profit leur savoir-faire pour confectioner des meubles de grande
            qualité. Découvrez les différentes références publiées chaque jour
            par nos artisans agréés.
          </p>
          <Button variant="contained" disableElevation className="button">
            En savoir plus
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

      <div className="solution2">
        <h3>Notre solution</h3>
        <div className="before-after">
          <img src={solution2} alt="visualisation de la solution" />
          <h3 className="text-before">Avant</h3>
          <h3 className="text-after">Après</h3>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Homepage;
