import Books from './Books';
import './Homepage.css';
import NewsletterForm from './NewsletterForm';
import ProgressWidget from './ProgressWidget';

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
            <ProgressWidget
                projectTitle='Artifice of Power Saga: Rise of the Moirai'
                drafting={95}
                selfEdit={80}
                proEdit={50}
                releasePrep={25}
            />
            
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
            <h2><em>Wake of the Phoenix</em> extended edition release!</h2>
            <div className="release-columns">
                <img 
                    src="/Images/Wake of the Phoenix eBook.jpg" 
                    alt="Cover for Wake of the Phoenix" 
                    className="release-image" 
                />
                <div className="release-text">
                    <p>A new, extended version of the first book in the Artifice of Power Saga,
                        <em>Wake of the Phoenix</em>, is set to be released on March 2, 2026.
                        This new edition features:
                    </p>
                    <ul>
                        <li>New, Updated Cover!</li>
                        <li>Additional Chapters!</li>
                        <li>A brand new epilogue!</li>
                        <li>A teaser of Book 2 after the main content!</li>
                    </ul>
                    <p>
                        The rebellion is over, but for the war hero prince of Sentar Province,
                        the troubles are just beginning. Caught between his duty to his people
                        and his duty to the omnicient prophet he met--and learned to love--while
                        fighting for justice against his corrupt leaders, he's the most powerful pawn
                        the Laisian empire has ever seen. The thief whose very presence derails his
                        lover's plans wants nothing to do with wither of them. But when did the poor
                        ever get what<em> they </em> want? Together, they might find a way to heal
                        the damage done by a brutal tyrant already dead. Or they might tear this
                        province apart.
                    </p>
                    <p><strong>Preorder your copy of the extended edition today.</strong></p>
                </div>
            </div>
          </div>

          {/* <div className="main-card">
            <h2>Upcoming Appearances</h2>
            <p>No Current Events</p>
          </div> */}

          <div className="main-card">
            <h2>News & Updates</h2>
            <p>
                The Kickstarter for the limited edition of <em>Wake of the Phoenix</em>, a hardback with
                foil embossed dust jacket featuring the last release of the original cover,
                is nearing final fulfillment! This project was funded back in mid-April and e-books
                have already been sent to backers. The physical proof was received in late November
                and approved early December, with orders already placed for final fulfillment. If you
                missed this Kickstarter and are looking for another shot, keep an eye on our 
                <a href="/kickstarter"> Kickstarters page</a> page for updates and upcoming campaigns.
            </p>
          </div>
        </main>

      </div>
    </>)
}

export default Homepage;