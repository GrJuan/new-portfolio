import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsAll = [
    {
      title: "System WI-FI",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Interface PS5",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Weather System",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "HomePage U. Nacional",
      description: "Design & Development Clone",
      imgUrl: projImg4,
    },
    {
      title: "Insurance Quoter System",
      description: "Development",
      imgUrl: projImg5,
    },
    {
      title: "Quote Cryptocurrencies",
      description: "Development",
      imgUrl: projImg6,
    },
    {
      title: "Theme VSCODE",
      description: "Development",
      imgUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlzdWFsJTIwc3R1ZGlvJTIwY29kZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      title: "REST API TYPEORM",
      description: "Development",
      imgUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--4hd3euvn--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zj3vgdi71wk764hqccmt.png',
    },
    {
      title: "REST API LOGIN JWT",
      description: "Development",
      imgUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--73vM8jVz--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5hvvgf0ja5e5k8vqen9i.png',
    },
    {
      title: "REST API AGENDA CARTEL",
      description: "Development - work done in solucionsoft",
      imgUrl: 'https://cartelurbano.com/manifesto-imgs/cartelurbano.jpg',
    },
    {
      title: "Wordpress",
      description: "Development of custom themes, plugins and backend",
      imgUrl: 'http://webtegrity.wpengine.com/wp-content/uploads/2014/06/Classic_2560x1440.jpg',
    }
  ];

  const projectsFront = [

    {
      title: "Interface PS5",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Weather System",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "HomePage U. Nacional",
      description: "Design & Development Clone",
      imgUrl: projImg4,
    },
    {
      title: "Insurance Quoter System",
      description: "Development",
      imgUrl: projImg5,
    },
    {
      title: "Quote Cryptocurrencies",
      description: "Development",
      imgUrl: projImg6,
    },
  ];

  const projectsBack = [
    {
      title: "System WI-FI",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Theme VSCODE",
      description: "Development",
      imgUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlzdWFsJTIwc3R1ZGlvJTIwY29kZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      title: "REST API TYPEORM",
      description: "Development",
      imgUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--4hd3euvn--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zj3vgdi71wk764hqccmt.png',
    },
    {
      title: "REST API LOGIN JWT",
      description: "Development",
      imgUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--73vM8jVz--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5hvvgf0ja5e5k8vqen9i.png',
    },
    {
      title: "REST API AGENDA CARTEL",
      description: "Development - work done in solucionsoft",
      imgUrl: 'https://cartelurbano.com/manifesto-imgs/cartelurbano.jpg',
    },
    {
      title: "Wordpress",
      description: "Development of custom themes, plugins and backend",
      imgUrl: 'http://webtegrity.wpengine.com/wp-content/uploads/2014/06/Classic_2560x1440.jpg',
    }
  ];

  const style = {
    display: "flex",
    justifyContent: "center",
  }
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of my work done</p>
                <h3 style={style}>These projects are hosted on my github</h3>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">FrontEnd</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">BackEnd</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsAll.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsFront.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectsBack.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
