//download react Onclick event
//download resume.md file



export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className="card">
        <h5>Skills Include</h5>
        <div className="row">
          <div className="col-md-6">
            <ul style={{ listStyleType: 'none' }}>
              <li><img src="https://img.icons8.com/?size=100&id=zRvbzAjx4VWY&format=png&color=000000" alt="HTML" /> HTML</li>
              <li><img src="https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000" alt="CSS" /> CSS</li>
              <li><img src="https://img.icons8.com/?size=100&id=Nkym0Ujb8VGI&format=png&color=000000" alt="JavaScript" /> JavaScript</li>
              <li><img src="https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000" alt="TypeScript" /> TypeScript</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul style={{ listStyleType: 'none' }}>
              <li><img src="https://nodejs.org/static/logos/nodejsDark.svg" alt="Node" /> Node</li>
              <li><img src="https://img.icons8.com/?size=100&id=t5K2CR8feVdX&format=png&color=000000" alt="React" /> React</li>
              <li><img src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" alt="Postgress SQL" /> Postgresql</li>
              <li><img src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" alt="Bootstrap" /> Bootstrap</li>
            </ul>
          </div>
        </div>
        <a className="d-grid gap-2" href="/assets/resume.txt" download>
        <button type="button" className="btn btn-primary btn-lg">Download Resume</button>
        </a>
      </div>
    </div>
  );
}
