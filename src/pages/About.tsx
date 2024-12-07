import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
        <NavBar />
        <header>
        <div className="container">
            <div className="header_holder">
                <div className="headline">
                    <h2>Your Space to Share Freely, Without Boundaries</h2>
                    <p>Freedom Board lets you express your thoughts anonymously, effortlessly, and for free.</p>
                </div>
            </div>
        </div>
    </header>
    
    <section className="mission">
        <div className="container">
            <h3>Our Mission</h3>
            <p>At Freedom Board, our mission is simple: provide a free, open space where anyone can express their thoughts without fear of judgment, boundaries, or identity. Whether you have an idea to share, a story to tell, or a thought to release, Freedom Board is here for you.</p>
        </div>
    </section>
    
    <section className="our_story">
        <div className="container">
            <h3>Our Story</h3>
            <p>Freedom Board was created with a single goal: to give people the freedom to share their thoughts anonymously and without restrictions. It’s a space where words flow freely, without the constraints of profiles, followers, or algorithms.</p>
            <p>This platform is the brainchild of <strong>Rael Estate</strong>, a dedicated web developer with a vision for simplicity and freedom in online expression. Drawing on years of experience in crafting digital solutions, Rael built Freedom Board to be a refuge for unfiltered and authentic thought-sharing.</p>
        </div>
    </section>
    
    <section className="features">
        <div className="container">
            <h3>What We Offer</h3>
            <ul>
                <li>A completely free platform with no sign-ups or fees.</li>
                <li>A simple and intuitive interface for posting thoughts.</li>
                <li>Guaranteed anonymity—your voice, your terms.</li>
                <li>No algorithms, no distractions—just pure expression.</li>
            </ul>
        </div>
    </section>
    
    <section className="creator">
        <div className="container">
            <h3>Meet the Creator</h3>
            <p><strong>Rael Estate</strong></p>
            <p>With a passion for web development and creating spaces for simplicity, Rael Estate designed Freedom Board to be a haven for anonymous expression. Rael’s commitment to privacy and user empowerment is at the heart of this platform.</p>
            <p>Check out Rael’s other projects on <a href="https://github.com/raelestate" target="_blank">GitHub</a>.</p>
        </div>
    </section>
    
    <section className="cta">
        <div className="container">
            <h3>Set Your Thoughts Free</h3>
            <p>Post anonymously, express without limits, and leave your mark.</p>
            <a href="#" className="cta-button">Start Posting Now</a>
        </div>
    </section>
        <Footer />
    </>

  )
}

export default About;