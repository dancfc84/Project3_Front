function About() {
  return (
    <section className="hero is-fullheight-with-navbar is-white">
      
      <p className="title is-1 has-text-centered has-text-black">
				Developers
      </p>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-third-desktop is-half-tablet is-half-mobile">
          <div className="card mx-4 my-4">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <h4 className="title is-3">Dimitar Vidolov</h4>
                  <p className="subtitle is-4">Developer</p>
                  <p>Developed Posts and Comments for the site, both frontend and backend, making sure posts render immediately without waiting for the backend.
                    Frontend login panel and worked on improving backend.</p>
                </div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image">
                <img src="https://ca.slack-edge.com/T0351JZQ0-U030QDNTHLN-a250fc6bc2e4-512" alt={"profiles"} />
              </figure>
            </div>
          </div>
        </div>

        <div className="column is-one-third-desktop is-half-tablet is-half-mobile">
          <div className="card mx-4 my-4">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Cody Shan</p>
                  <p className="subtitle is-6">Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://ca.slack-edge.com/T0351JZQ0-U02SXV937DG-a8cbe049b288-512" alt={"profiles"} />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-one-third-desktop is-half-tablet is-half-mobile">
          <div className="card mx-4 my-4">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-3">Dan Whittock</p>
                  <p className="subtitle is-4">Developer</p>
                  <p>Developed Jobs for the site, both frontend and backend, making sure posts render immediately without waiting for the backend.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image">
                <img src="https://ca.slack-edge.com/T0351JZQ0-U02HVES554G-c7fff802c3b4-512" alt={"profiles"} />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src="https://potomac.edu/wp-content/uploads/2020/10/list-of-jobs-that-use-coding-e1603873567655.jpg" alt={"about_image"} />
              </figure>
            </div>
            <div className="column is-half">
              <p className="title is-1 has-text-centered has-text-black">
								Why Hackertrees?
              </p>
              <p className="title is-6 has-text-black">
								We founded hackertrees with the intention of constantly improving how job seekers and employers are connected. In our actions, we attach great importance to personal and professional development and to continuously creating new solutions for our customers.
                It is also important to us to work together in a friendly and challenging environment and to have a great positive impact on our customers and users with our products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
