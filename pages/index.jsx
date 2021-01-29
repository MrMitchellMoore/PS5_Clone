import Head from 'next/head';
// import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className="screen">
      <Head>
        <title>
          Playstation Offical Site: Consoles, Games, Accessories & More
        </title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header>
        <section className="media-nav">
          <a href="#" className="active">
            Games
          </a>
          <a href="#">
            Media
          </a>
        </section>
        <section className="settings">
          <span className="icon">
            <i className="fas fa-search" />
          </span>
          <span className="icon">
            <i className="fas fa-cog" />
          </span>
          <span className="icon">
            <img className="user" src="./fb_smiling.jpg" />
          </span>
          <span className="time">12:00 PM</span>
        </section>
      </header>
      <div className="container">
        <section className="game-nav">
          <div className="game active">
            <img src="/ps-store.png" />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://www.media.xoombs.com/2020/09/spider-man-miles-morales-ps5.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                transform: 'scale(1)',
              }} // style
            />
            <span className="game-title">Explore</span>
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://i0.wp.com/twinfinite.net/wp-content/uploads/2020/07/Godfall-1.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                transform: 'scale(1.5)',
              }} // style
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://images.pushsquare.com/a1ae724377bac/marvels-avengers-cover.cover_large.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                transform: 'scale(1.2)',
              }} // style
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://static.raru.co.za/cover/2020/09/01/8254296-l.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                transform: 'scale(1.3)',
              }} // style
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://cdn.vox-cdn.com/thumbor/4m-VlVB7wu3wj7H6Vx8OY8O0-X4=/0x0:1080x1350/1200x800/filters:focal(440x514:612x686)/cdn.vox-cdn.com/uploads/chorus_image/image/66940798/AP20168466993895.0.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                transform: 'scale(1.4)',
              }} // style
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255399_sd.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                transform: 'scale(1.4)',
              }} // style
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5358/5358600_sd.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                transform: 'scale(1.4)',
              }} // style
            />
          </div>
        </section>
        <section className="info">
          <span className="sub-title">
            Official news from Playstation | 12/02/2020
          </span>
          <h1>Ready for a PS5 Adventure?</h1>
          <p>
            ASTRO's PLAYROOM is pre-loaded and waiting for you!
            explore the new capabilities of PS5 and feel the world..
          </p>
        </section>
      </div>
      <section id="video-trailers">
        <div className="trailer">
          <img
            className="img"
            src="https://cdn.images.express.co.uk/img/dynamic/143/750x445/1126109.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fas fa-play" />
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="img"
            src="https://img.youtube.com/vi/B0BNl9E4wds/hqdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fas fa-play" />
            </div>
            <span className="title">GODFALL</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="img"
            src="https://static.raru.co.za/cover/2020/09/01/8254296-l.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fas fa-play" />
            </div>
            <span className="title">Assassins Creed Valhalla</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="img"
            src="https://www.jeuxactu.com/datas/jeux/m/a/marvel-s-spider-man-miles-morales/vn/marvel-s-spider-man-mil-5f36467ea6a43.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fas fa-play" />
            </div>
            <span className="title">Spider-Man Miles Morales</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="img"
            src="https://2.bp.blogspot.com/--ED6IwTrQck/WtU6VVA0PnI/AAAAAAAAAAQ/q7_uDRTN7o0QZ_15-xN6_GwgfO3bNONRgCLcBGAs/s1600/god-of-war-4-pc-download.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fas fa-play" />
            </div>
            <span className="title">GOD of War 4</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="img"
            src="https://static.tvtropes.org/pmwiki/pub/images/malefemale_v_0.png"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fas fa-play" />
            </div>
            <span className="title">Cyberpunk 2077</span>
          </div>
        </div>
      </section>
    </div>
  ); // return
} // export default function home()
