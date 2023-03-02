import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br/>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src='https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png' alt="node-js image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src='https://www.mementotech.in/assets/images/icons/express.png' alt="express-js image" />
                                <h5>Express JS</h5>
                            </div>
                            <div className="item">
                                <img src='https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png' alt="typescript image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src='https://cdn-icons-png.flaticon.com/512/5969/5969059.png' alt="docker image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src='https://user-images.githubusercontent.com/62142146/208088732-e168fd64-3e48-4f48-b14d-9d91fa7d99f6.svg' alt="typeorm image" />
                                <h5>TypeORM</h5>
                            </div>
                            <div className="item">
                                <img src='https://miro.medium.com/max/800/1*CIolkR8u5UuZp5aJRPVzBg.png' alt="aws-s3 image" />
                                <h5>AWS S3</h5>
                            </div>
                            <div className="item">
                                <img src='https://cdn.jsdelivr.net/gh/mkevenaar/chocolatey-packages@8855d884e1b0fbe873de697d8f004dcea104c920/icons/bitvise-ssh-server.png' alt="ssh image" />
                                <h5>SSH - FTP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
