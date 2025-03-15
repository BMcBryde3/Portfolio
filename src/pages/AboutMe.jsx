export default function AboutMe() {
  return (
    <div className="card-flex mb-3">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img 
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRwMDN4d3F0bTV4ZnU1MDBqdWJjbWl1bWE2bWp5NzZleXFoemE5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKaFqGAKqCiuNi3qlq/giphy.gif" 
            className="img-fluid rounded-start" 
            alt="..." 
            style={{ maxHeight: '800px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-center">
          <div className="card-body">
            <h1 className="card-title">About Me</h1>
            <p className="card-text">
              Hi, Im Brett McBryde, a passionate full-stack developer eager to build dynamic and user-friendly web applications. With a strong foundation in front-end and back-end technologies, I enjoy crafting seamless digital experiences that blend functionality with great design.
              I thrive on problem-solving, continuous learning, and bringing ideas to life through code. Whether it&apos;s developing responsive UIs, optimizing databases, or integrating APIs, I&apos;m always up for a challenge.
              Let&apos;s connect and build something amazing together! 🚀
            </p>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
