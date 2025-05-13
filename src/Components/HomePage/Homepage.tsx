import Books from './Books';
import NewsletterForm from './NewsletterForm';

function Homepage({images} : {images: string[]}) {
    return(
    <>
        <Books images={images}/>
        <NewsletterForm />
    </>)
}

export default Homepage;