import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/location">Location</a>
          </li>
          <li>
            <a href="/vision">Vision</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class CompanyWebsite extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to XYZ Distribution Company</h1>
          <NavBar />
        </header>
        <main>
          <section>
            <h2>About Us</h2>
            <p>
              We are a leading distribution company specializing in delivering
              high-quality products to customers worldwide. With years of
              experience in the industry, we have established a strong network
              and supply chain to ensure efficient and reliable distribution
              services.
            </p>
          </section>
          <section>
            <h2>Location</h2>
            <p>
              Our company is located in a strategic location that allows us to
              reach our customers quickly and efficiently. We have warehouses
              and distribution centers in major cities to ensure prompt delivery
              of products.
            </p>
          </section>
          <section>
            <h2>Vision</h2>
            <p>
              Our vision is to be the preferred distribution partner for
              businesses around the world. We aim to provide exceptional
              services, build long-term relationships, and contribute to the
              growth and success of our clients.
            </p>
          </section>
        </main>
        <footer>
          <p>© {new Date().getFullYear()} XYZ Distribution Company. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default CompanyWebsite;
