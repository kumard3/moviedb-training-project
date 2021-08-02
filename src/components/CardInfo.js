import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/cardinfo.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import cross from "../assets/cross.png";


const CardInfo = ({ allData }) => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();
  const animeData = allData.filter((book) => book.id === parseInt(id));
  const anime = animeData[0];
  console.log(anime);
  if (anime) {
    return (
      <div className="cardinfo">
        <Modal
          className="cardinfo__modal"
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className="cardinfo__modelwrapper">
              <Link to="/">
              <img src={cross} className="cardinfo__button" type="button" onClick={handleClose}/>
       
              </Link>
              <iframe
              className="cardinfo__iframe"
                src={`https://fsapi.xyz/tmdb-movie/${anime.id}`}
                frameborder="0"
                scrolling="no"
                allowfullscreen="allowfullscreen"
              />

              <div className="cardinfo__wrapper">
              <h2 className="wrappertag" >{anime.title} </h2>
              <p  className="wrappertag" >{anime.overview}</p>
              </div>

            </div>
          </Fade>
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default CardInfo;
