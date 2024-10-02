function App() {
  function toggleSearch(): void {
    throw new Error("Function not implemented.");
  }

    return (
      <div>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Library Management System</title>
          <link rel="stylesheet" href="homestyle.css" />
        </head>
  
        <body>
          <section className="home">
            <div className="home-text">
              <h1>
                <img
                  src="https://lib.cmb.ac.lk/wp-content/uploads/2016/09/logo-3.png"
                  width="300"
                  alt="University Logo"
                />
                <br />
                <br />
                <span>The Library</span>
                <br />
                University Of Colombo
                <br />
                Faculty Of Technology
              </h1>
  
              <h2>
                Reading is the gateway skill that makes all other learning
                possible..
                <br />
                -Barack Obama-
              </h2>
            </div>
          </section>
  
          <header>
            <div className="navbar">
              <a href="#about">About</a>
              <a href="#offers">Categories</a>
              <a href="guidelines.html">Guidelines</a>
              <a href="staff.html">Staff</a>
              <a href="#order">Profile</a>
              <a href="#order">Help</a>
              <div className="search-container">
                <input type="text" id="searchInput" placeholder="Search..." />
                <button type="button" onClick={() => toggleSearch()}>
                  Search
                </button>
              </div>
            </div>
          </header>
  
          <h2>About:</h2>
          <p>
            Faculty of Technology is one of the newest faculties being adjoined to
            the prestigious University of Colombo. With the establishment of the
            faculty, the Technology Library was started as a branch library to the
            Main Library of the university. The library was temporarily
            functioning on the Main Library premises until the faculty built its
            own structure that was officially opened in 2020. The faculty library,
            at present, is located on the ground floor of the ICT Department (or D
            Block). The total collection of the faculty library is around 215
            books, however, it has subscribed to 61 electronic books, too. Among
            many other Learning & Research Support Services (LRSS), the faculty
            library is committed to conduct information literacy series,
            orientation programs and to provide reference/referral services to
            students and staff. LRSS include training on Turnitin, Mendeley,
            Grammarly, and various applications related to learning and research
            activities of the library users. Technology Library has consisted of
            an academic staff member and two non-academic staff members to serve
            the user community of the faculty.
          </p>
  
          <div className="img-btn-container">
            <a href="kitchen.html" className="img-btn">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMzA2MjhfNzQg/MDAxNjg3OTU0MzMwMzQz.lmwUACSWNSp57Q8bsyw4whoilqisDLq4AMwlN8dJ410g.lJAmKXYq651zXeQfdbfORnRDv18erTZnCs1qNPtY8-Yg.PNG.sandhya/1687954284677.png?type=w800"
                alt="books"
              />
              <span className="img-text">BOOKS</span>
            </a>
            <a href="guidelines.html" className="img-btn">
              <img
                src="https://png.pngtree.com/png-vector/20220925/ourmid/pngtree-a-man-explains-list-of-rule-guidelines-png-image_6212795.png"
                alt="guidelines"
              />
              <span className="img-text">Guidelines</span>
            </a>
            <a href="staff.html" className="img-btn">
              <img
                src="https://img.freepik.com/premium-photo/librarian-cartoon-character-3d-animation-illustration-guide_1029473-45225.jpg?w=360"
                alt="staff"
              />
              <span className="img-text">Staff</span>
            </a>
            <a href="registration.html" className="img-btn">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/registration-confirmed-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sign-up-approval-validation-account-creation-enrollment-successful-approved-stamp-pack-seo-web-icons-8662343.png?f=webp"
                alt="registration"
              />
              <span className="img-text">Registration</span>
            </a>
          </div>
  
          <h2>Contact Details:</h2>
          <p>
            Faculty of Technology,
            <br />
            University of Colombo,
            <br />
            Mahenwatta, Pitipana,
            <br />
            Homagama,
            <br />
            Sri Lanka.
          </p><br /><br /><br /><br />
  
          <footer>
            <p>&copy; 2024 University Library Management System</p>
          </footer>
        </body>
      </div>
    );
  };
  
export default App
