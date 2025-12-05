import './About.css';

const books = [
    "Wake of the Phoenix, Book one of the Artifice of Power Saga",
]
function About()  {
    return (
        <div className="about-container">
            <h2>
            Who We Are
            </h2>
            <p>EmberFyre Books, LLC, is an independent publishing imprint dedicated to bringing 
                character-driven, emotionally rich fantasy stories to readers who crave expansive 
                worlds, complex characters, and powerful arcs. Founded in 2025, EmberFyre Books 
                is the home for the founder Chelsea Harper's fantasy worlds and is growing toward
                supporting other emerging fantasy authors navigating the tangled web of modern
                publishing.</p>
            <h3>
                What We Publish
            </h3>
            <p>
                EmberFyre Books specializes in character-driven fantasy that speaks to the origins of
                high fantasy in the traditions of Tolkien, McCaffrey, Weis, and Jordan. While our
                catalog is small, we are constantly growing and looking for more ways to speak to more
                readers, especially those who feel overlooked by the current market trends. Some of
                our current titles include:

            </p>
            <ul>
        {books.map((title) => (
          <li key={title}>{title}</li>
        ))}
            </ul>
            <h3>
                About the Founder
            </h3>
            <p>
                Chelsea Harper is a self-published author of epic fantasy dedicated to the pursuit
                of high quality books featuring deeply human characters and stories that speak to
                the heart and the mind. Though she's been writing fantasy novels from a very young age,
                she published her first novel, <em>Wake of the Phoenix</em>, in 2021. After release, she
                quickly discovered the gap in existing publishing options for authors who love their
                stories but don't have the time or skills to handle getting their books in front of the
                readers who will love them. Her goal is to turn EmberFyre Books into an imprint that helps
                bring more stories to life, and builds dreams for the authors it supports.
            </p>
        </div>
    )
}

export default About;