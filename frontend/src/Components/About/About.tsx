import './About.css';

const books = [
    "Wake of the Phoenix, Book one of the Artifice of Power Saga",
]
function About()  {
    return (
        <div className="about-container">
            <h2>Who Is EmberFyre?</h2>
            <p>I'm Chelsea Harper, the author of the epic fantasy series the <em>Artifice of Power Saga</em>,
                and EmberFyre Books is the publishing arm of my writing. I've been writing fantasy
                since I was a young girl, and I'm dedicated to producing quality novels for readers
                who love the more traditional roots of the fantasy genre. After releasing my first
                novel in 2021 and discovering the gap in the modern publishing industry for writers
                dedicated to storycraft above marketing, I took a break from producing novels to plan
                the direction of my publishing efforts. EmberFyre Books is my re-entry into
                publishing the stories I can't put down.
            </p>
            <h2>What do I write?</h2>
            <p>
                While epic fantasy is my first passion and the strongest call in most of my books,
                I have been experimenting with other genres in expanding my skills as an author. I
                plan to release at least one romantasy trilogy and potentially some other projects as
                I build my backlist over the next few years.
            </p>
            {/* <h2>
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
            </p> */}
        </div>
    )
}

export default About;