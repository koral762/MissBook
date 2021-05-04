const { Link } = ReactRouterDOM


export function Home() {
    return <section className="Home-page">
        <h1>Welcome to Miss Book</h1>
        <p>Best books! Unbeatable prices!</p>
        <img className="home-img" src="https://i.pinimg.com/originals/13/11/0d/13110d355db07e8e55b729fb38d1343c.png"></img>
        <br></br>
        <Link className="gallery" to="/book">📚Gallery</Link>
    </section>
}