<div className="home-container">

      <Container className="col-md-4" >
        <div className="post-header background_0">
          <h2 className="lora-font">About us</h2>
          <p className="lora-font">
            We are 2 Students from WBS Coding School, and we were happy to work
            together on this React Project using the knowledge we have gained
            throughout the Bootcamp to create our final Full Stack Web
            Application.
          </p>
          <br />
          <br />
          <iframe
            className="youtube-container"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/61HJ8AuERto"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <br />
          <br />

          <div className="images">
            <div className="">
              <img src={kimsandra} alt="Kimsandra" className="thumbnail" />
              <p className="names">Sandra</p>
            </div>
            <div className="">
              <img src={Gabriela} alt="Gabriela" className="thumbnail" />
              <p className="names">Gabriela</p>
            </div>
          </div>
          <h4 className="mt-3 text-start lora-font">
            In respect to our Brothers and Sisters in Turkey:
          </h4>
          <div className="row">
            <div className="col-md-4">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title className="card-title">
                    Experience Our Community{" "}
                  </Card.Title>
                  <Card.Text>
                    Always stay connected through our community tab and talk to
                    people that were in your shoes before
                  </Card.Text>
                  <Button variant="primary">Add checkList</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="custom card">
                <Card.Body>
                  <Card.Title className="card-title">
                    Explore Our Blog Post
                  </Card.Title>
                  <Card.Text>
                    Explore our bite-sized articles about living abroad with
                    some of the most important information
                  </Card.Text>
                  <Button className="card-button" variant="primary">
                    Add checkList
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div />
        </div>
      </Container>
    </div>
  );
}

export default About;
