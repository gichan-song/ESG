import React from 'react';

class CompanyWebsite extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to XYZ Distribution Company</h1>
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
            <h2>Our Services</h2>
            <ul>
              <li>Product sourcing and procurement</li>
              <li>Inventory management</li>
              <li>Warehousing and storage</li>
              <li>Order fulfillment and shipping</li>
              <li>Supply chain optimization</li>
            </ul>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>
              We'd love to hear from you! Feel free to reach out to us via the
              following methods:
            </p>
            <ul>
              <li>Email: info@xyzdistribution.com</li>
              <li>Phone: +1-123-456-7890</li>
              <li>Address: 123 Main Street, City, State, ZIP</li>
            </ul>
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
