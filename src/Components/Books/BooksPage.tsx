import './BooksPage.css';

function BooksPage() {
    console.log("book page reached");
    return (
        <>
            <div id="book1" className='book-container'>
                <div className='bookimage'>
                    <img src="/Images/wakeofthephoenix_ebook.png" alt="Cover for Wake of the Phoenix" />
                </div>
                <div className='booktext'>
                    <h2>Wake of the Phoenix</h2>
                    <p>Book description...</p>
                </div>
            </div>
            <div id="book2" className='book-container'>
                <div className='bookimage'>
                    <img src="/Images/Tales_of_the_Laisian_Empire_eBook.png" alt="Cover for Wake of the Phoenix" />
                </div>
                <div className='booktext'>
                    <h2>Tales of the Laisian Empire</h2>
                    <p>Book description...</p>
                </div>
            </div>
</>
    )
}

export default BooksPage;