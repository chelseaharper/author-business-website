import Books from './Books';
import NewsletterForm from './NewsletterForm';

function Homepage({books} : {books: {id: string, title: string, coverImage: string}[]}) {
    return(
    <>
        <Books books={books}/>
        <p>Advertisement for book 1 re-release</p>
        <p>Progress on book 2 meter</p>
        <p>Appearnaces at any conferences I plan to attend where fans might be</p>
        <p>Newsletter Widget on the side or something</p>
        <p>My favorite recent read</p>
        {/* <NewsletterForm /> */}
    </>)
}

export default Homepage;