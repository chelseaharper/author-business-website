import Books from './Books';
import './Homepage.css';
import NewsletterForm from './NewsletterForm';

function Homepage({books} : {books: {id: string, title: string, coverImage: string}[]}) {
    return(
        <>
        <Books books={books}/>
    <div className="homepage-layout">

        <aside className="homepage-sidebar">
          <div className="sidebar-card">
            <NewsletterForm></NewsletterForm>
          </div>

          <div className="sidebar-card">
            <h2>Current Project</h2>
            <p>Book 2 Progress: 48% (example)</p>
          </div>

          <div className="sidebar-card">
            <h2>Recent Reads</h2>
            <p>Currently I'm reading Martin's <em>A Game of Thrones</em> for the first time...
                yes, I'm a political epic fantasy author who had never read <em>A Game of Thrones</em>.
                I also greatly enjoyed reading the first few books in Sanderson's Stormlight Archives recently.
            </p>
          </div>
        </aside>

        <main className="homepage-main">
          <div className="main-card">
            <h2>Book 1 Re-Release</h2>
            <p>Big announcement text goes here…</p>
          </div>

          <div className="main-card">
            <h2>Upcoming Appearances</h2>
            <p>List any conferences, signings, etc.</p>
          </div>

          <div className="main-card">
            <h2>News & Updates</h2>
            <p>General updates, writing notes, etc.</p>
          </div>
        </main>

      </div>
    </>)
}

export default Homepage;