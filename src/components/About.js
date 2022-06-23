function About() {
  return (
    <section className="hero is-fullheight-with-navbar is-white">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-warning">
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
								We founded hackertrees with the intention of constantly improving how job seekers and employers are connected. In our actions, we attach great importance to personal and professional development and to continuously creating new solutions for our customers. It is also important to us to work together in a friendly and challenging environment and to have a great positive impact on our customers and users with our products.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="title is-1 has-text-centered has-text-black">
				Founders
      </p>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-third-desktop is-half-tablet is-half-mobile">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Dimitar Vidolov</p>
                  <p className="subtitle is-6">Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://ca.slack-edge.com/T0351JZQ0-U030QDNTHLN-a250fc6bc2e4-512" alt={"profiles"} />
              </figure>
            </div>
          </div>
        </div>

        <div className="column is-one-third-desktop is-half-tablet is-half-mobile">
          <div className="card">
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
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Dan Whittock</p>
                  <p className="subtitle is-6">Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://ca.slack-edge.com/T0351JZQ0-U02HVES554G-c7fff802c3b4-512" alt={"profiles"} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
