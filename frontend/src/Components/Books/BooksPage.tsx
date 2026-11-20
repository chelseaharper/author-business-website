import { useState, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import './BooksPage.css';
import { useBookGenre } from '../HomePage/BookGenreContext';

interface BookListingProps {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    purchaseUrl?: string;
    children: ReactNode;
}

function BookListing({ id, image, imageAlt, title, purchaseUrl, children }: BookListingProps) {
    return (
        <div id={id} className='book-container'>
            <div className='bookimage'>
                <img src={image} alt={imageAlt} />
            </div>
            <div className='booktext'>
                <h2>{title}</h2>
                {children}
            </div>
            {purchaseUrl && (
                <a
                    href={purchaseUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='purchase-link'
                >
                    Buy Now!
                </a>
            )}
        </div>
    );
}

function BooksPage() {
    const { genre } = useBookGenre();
    const isRomantasy = genre === 'romantasy';
    const [expandedSections, setExpandedSections] = useState({
        featured: true,
        otherGenres: true,
    });

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const location = useLocation();

useEffect(()=> {
    if(location.hash) {
        const el = document.getElementById(location.hash.slice(1));
        if(el) {
            setTimeout(() => {
                console.log("Scrolling to:", location.hash.slice(1));
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }, 100);
        }
    }
}, [location]);

    return (
        <>
            <section className='series-section'>
                <h2
                    onClick={() => toggleSection('featured')}
                    className='series-title'
                    role='button'
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            toggleSection('featured');
                        }
                    }}
                >
                    {isRomantasy ? 'Romantasy' : 'Artifice of Power Saga'} {expandedSections.featured ? '▼' : '▶'}
                </h2>
                {expandedSections.featured && (isRomantasy ? (
                    <BookListing
                        id='on-cursed-wings'
                        image='/Images/On Cursed Wings eBook.jpg'
                        imageAlt='Cover for On Cursèd Wings'
                        title='On Cursèd Wings'
                    >
                        <h3>A Beauty and the Beast retelling of love, magic, and a cursed forest.</h3>
                        <p>
                            Annelise was content to stay home in her sleepy village, helping at her father's
                            inn and keeping close to her childhood friend, Bastion. When her father falls into
                            a deadly dream, she braves the cursed woods to find a cure—and discovers Bastion
                            has been taken by the monster in the forgotten castle. Now she must risk everything
                            to save the people she loves.
                        </p>
                        <p><strong>Coming soon!</strong></p>
                    </BookListing>
                ) : (
                    <BookListing
                        id='wake-of-the-phoenix'
                        image='/Images/Wake of the Phoenix eBook.jpg'
                        imageAlt='Cover for Wake of the Phoenix'
                        title='Wake of the Phoenix'
                        purchaseUrl='https://www.amazon.com/Wake-Phoenix-Artifice-Power-Saga-ebook/dp/B097P48858'
                    >
                        <h3>War Hero. Thiefmaster's apprentice. Traitors.</h3>
                        <h3>Every title comes with a price.</h3>
                        <p>Arkaen is a gods-damned saint. He sacrificed his childhood innocence fighting
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
                    </BookListing>
                ))}
            </section>

            <section className='series-section'>
                <h2
                    onClick={() => toggleSection('otherGenres')}
                    className='series-title'
                    role='button'
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            toggleSection('otherGenres');
                        }
                    }}
                >
                    Other Genres {expandedSections.otherGenres ? '▼' : '▶'}
                </h2>
                {expandedSections.otherGenres && (isRomantasy ? (
                    <BookListing
                        id='wake-of-the-phoenix'
                        image='/Images/Wake of the Phoenix eBook.jpg'
                        imageAlt='Cover for Wake of the Phoenix'
                        title='Wake of the Phoenix'
                        purchaseUrl='https://www.amazon.com/Wake-Phoenix-Artifice-Power-Saga-ebook/dp/B097P48858'
                    >
                        <h3>War Hero. Thiefmaster's apprentice. Traitors.</h3>
                        <h3>Every title comes with a price.</h3>
                        <p>Arkaen is a gods-damned saint. He sacrificed his childhood innocence fighting
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
                    </BookListing>
                ) : (
                    <BookListing
                        id='on-cursed-wings'
                        image='/Images/On Cursed Wings eBook.jpg'
                        imageAlt='Cover for On Cursèd Wings'
                        title='On Cursèd Wings'
                    >
                        <h3>A Beauty and the Beast retelling of love, magic, and a cursed forest.</h3>
                        <p>
                            Annelise was content to stay home in her sleepy village, helping at her father's
                            inn and keeping close to her childhood friend, Bastion. When her father falls into
                            a deadly dream, she braves the cursed woods to find a cure—and discovers Bastion
                            has been taken by the monster in the forgotten castle. Now she must risk everything
                            to save the people she loves.
                        </p>
                        <p><strong>Coming soon!</strong></p>
                    </BookListing>
                ))}
            </section>
        </>
    );
}

export default BooksPage;