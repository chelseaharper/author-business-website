import Books from './Books';
import NewsletterForm from './NewsletterForm';

function Homepage({books} : {books: {id: string, title: string, coverImage: string}[]}) {
    return(
    <>
        <Books books={books}/>
        {/* <NewsletterForm /> */}
    </>)
}

export default Homepage;