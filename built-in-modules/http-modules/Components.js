const Navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-info">
<div class="container-fluid p-2">
  <a class="navbar-brand" href="#">Navbar</a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarTogglerDemo02"
    aria-controls="navbarTogglerDemo02"
    aria-expanded="false"
    aria-label="Toggle navigation"
  ></button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  </div>
</div>
</nav>`;

function getFooter(companyName) {
  const Footer = `
<footer
class="container-fluid bg-dark text-white mb-0 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
>
<p class="col-md-4 mb-0">&copy; 2021 Company, Inc <span>${companyName}</span></p>
<ul class="nav col-md-4 justify-content-end">
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-white">Home</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-white">Features</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-white">Pricing</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-white">FAQs</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-white">About</a>
  </li>
</ul>
</footer>`;

  return Footer;
}

const Link = `<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
crossorigin="anonymous"
/>
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
crossorigin="anonymous"
></script>`;

module.exports = { Navbar, getFooter, Link };
