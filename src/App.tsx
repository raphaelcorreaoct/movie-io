import "./App.scss";
import "./styles/grid-view.scss";
import Header from "./components/header/header";

import cover from "./assets/one-peace-cover.png";
import avatar from "./assets/author-avatar.png";

import {
  AiFillStar,
  AiOutlineTwitter,
  AiFillHeart,
  AiFillLike,
} from "react-icons/ai";
import { BsFillBookmarkFill, BsFacebook } from "react-icons/bs";
import { CgEyeAlt } from "react-icons/cg";
import { FaCloudDownloadAlt, FaPlay } from "react-icons/fa";
import { BiMovie } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="wrapper">
          <div className="grid-view">
            <div className="cover-column">
              <img className="cover" src={cover} />
              <button className="big-button-base">
                <BiMovie />
                Trailer
              </button>

              <div className="reaction-button">
                <button>
                  <AiFillStar size={21} />
                  <span>Favorite</span>
                </button>
                <button>
                  <BsFillBookmarkFill size={21} />
                  <span>Watch Later</span>
                </button>
                <button>
                  <CgEyeAlt size={21} />
                  <span>Watched</span>
                </button>
              </div>
            </div>
            <article className="container-info">
              <div className="main-column">
                <div className="container-header">
                  <h1>One Piece Film : Red</h1>
                  <div className="action-button">
                    <button className="big-button-base primary-big-button">
                      <FaPlay size={22} /> Watch
                    </button>
                    <button className="big-button-base">
                      <FaCloudDownloadAlt size={32} /> Download
                    </button>
                  </div>
                </div>

                <div className="container-main">
                  <h4>STORYLINE</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Laoreet condimentum nec porttitor felis enim aliquet nibh.
                    Commodo fringilla accumsan, elit, elementum ullamcorper.
                    Tempus non, semper eget adipiscing aenean sit pharetra ipsum
                    cursus.
                  </p>

                  <table>
                    <tr>
                      <td>Rating</td>
                      <td>8.9</td>
                    </tr>
                    <tr>
                      <td>Release year</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>Genres</td>
                      <td>Adventure, Fantacy</td>
                    </tr>
                    <tr>
                      <td>Countries</td>
                      <td>Japan</td>
                    </tr>
                    <tr>
                      <td>Duration</td>
                      <td>2 hours +</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="author-column">
                <h4>Writen by</h4>
                <div className="author-card">
                  <img src={avatar} />

                  <div>
                    <strong>Eiichiro Oda</strong>
                    <small>Official Creator &amp; manga artist</small>
                  </div>
                </div>
              </div>

              <div className="footer">
                <button className="flex-center">
                  <AiOutlineTwitter size={31} />
                  <AiFillHeart color="#525252" size={26} />

                  <span>+1</span>
                </button>

                <button className="flex-center">
                  <BsFacebook size={31} />
                  <AiFillLike color="#525252" size={26} />

                  <span>+1</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
