import { useState } from 'react';
import './BooksPage.css';

function BooksPage() {
    const [expandedSeries, setExpandedSeries] = useState({
        artifice: true,
        tales: true,
    })

    const toggleSeries = (seriesKey) => {
        setExpandedSeries((prev) => ({
            ...prev,
            [seriesKey]: !prev[seriesKey],
        }))
    }

    return (
        <>
        <div className='series-section'>
            <h2 onClick={() => toggleSeries('artifice')} className='series-title'>
                Artifice of Power Saga {expandedSeries.artifice ? '▼' : '▶'}
            </h2>
            {expandedSeries.artifice && (
            <div id="book1" className='book-container'>
                <div className='bookimage'>
                    <img src="/Images/wakeofthephoenix_ebook.png" alt="Cover for Wake of the Phoenix" />
                </div>
                <div className='booktext'>
                    <h2>Wake of the Phoenix</h2>
                    <h3>War Hero. Thiefmaster's apprentice. Traitors. Every title comes with a price.</h3>
                    <p> Arkaen is a gods-damned saint. He sacrificed his childhood innocence fighting 
                        for the beleaguered rebellion in a civil war and relinquished a comfortable life 
                        with the man he loves to reclaim his place as high lord from corrupt nobles. Now, 
                        a hidden enemy is manipulating his lower lords into talk of rebellion, including 
                        the powerful Rogue Baron who is slowly swaying the city into questioning every move 
                        Arkaen makes. With the help of his near-omniscient lover's gift of foresight, Arkaen 
                        finds a potential ally in Niamsha, a reluctant thief trying to pay for her brother’s 
                        education. But Niamsha owes an insurmountable debt to the mysterious leader of her 
                        thieves guild and failing to pay means death—for her entire family. When her guild 
                        leader demands she join forces with the Rogue Baron himself, she finds herself caught 
                        in a political battle beyond her skills. Torn between protecting her family and following 
                        her conscience, Niamsha doesn't know who to trust. If Arkaen can win Niamsha's loyalty, 
                        he might just prevent a second civil war and the destruction of everything he fought to 
                        protect. Or he might get them all killed.</p>
                </div>
                <a 
                href='https://www.amazon.com/Wake-Phoenix-Artifice-Power-Saga-ebook/dp/B097P48858' 
                target='_blank'
                className='purchase-link'
                >
                    Buy Now!
                </a>
            </div>
        )}
        </div>
        <div className='series-section'>
        <h2 onClick={() => toggleSeries('tales')} className='series-title'>
                Tales of the Laisian Empire {expandedSeries.tales ? '▼' : '▶'}
            </h2>
            {expandedSeries.tales && (
            <div id="book2" className='book-container'>
                <div className='bookimage'>
                    <img src="/Images/Tales_of_the_Laisian_Empire_eBook.png" alt="Cover for Wake of the Phoenix" />
                </div>
                <div className='booktext'>
                    <h2>Tales of the Laisian Empire</h2>
                    <p>Book description...</p>
                </div>
                <p>Coming Soon!</p>
            </div>)}
        </div>
</>
    )
}

export default BooksPage;