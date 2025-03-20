export function Footer() {
    return (
      <footer className="fixed-bottom bg-primary navbar navbar-expand-lg bg-dark justify-content-center">
        <div className="container-flex d-flex justify-content-center">
        © 2025 Brett McBryde
        <div className="mx-2">
          {/* link to github */}
          <a href="https://github.com/BMcBryde3">
          <img src="https://img.icons8.com/?size=50&id=467&format=png&color=000000" alt="GitHub" />
          </a>
        </div>
        <div className="mx-2">
          {/* link to linkedin */}
          <a href="https://www.linkedin.com/in/brettmcbryde">
          <img src="https://img.icons8.com/?size=50&id=446&format=png&color=000000" alt="LinkedIn" />
          </a>
        </div>
        </div>
      </footer>
    );
}