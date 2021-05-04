const { Link } = ReactRouterDOM
import { getCurrencyIcon } from "../common/common.js";
import { LongTxt } from "../cmps/LongTxt.jsx";
import { ReviewAdd } from "../cmps/ReviewAdd.jsx";

export class BookDetails extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        this.loadBook();
    }

    loadBook() {
        const id = this.props.match.params.bookId;
        
    }

    getReading(pageCount) {
        if (pageCount > 500) return '(Long Reading)';
        if (pageCount > 200) return '(Decent Reading)';
        if (pageCount < 100) return '(Light Reading)';
        return '';
    }


    getPriceColor(price) {
        if (price > 150) {
            return 'red';
        } else if (price > 20) {
            return 'green';
        }
    }

    getBookAgeDesc(year) {
        let currYear = new Date().getFullYear()
        if (currYear - year > 10) {
            return '(Veteran Book)'
        } else if (currYear - year < 1) {
            return '(New)'
        }
    }

    onSetReview(review) {
        console.log(review);
    }

    render() {

        return (
            <div className="book-details">
                <img src={book.thumbnail} alt="" />
                <button className="exit-btn" onClick={goBack}>X</button>
                { book.listPrice.isOnSale &&
                    <React.Fragment>
                        <p className="on-sale">This book is on sale!</p>
                    </React.Fragment>}
                <p>Title - {book.title}</p>
                <p>Subtitle - {book.subtitle}</p>
                <p>Author - {book.authors.join(',')}</p>
                <p>Publish date - {book.publishedDate} {getBookAgeDesc(book.publishedDate)}</p>
                <LongTxt description={book.description} />
                <p>Page count - {book.pageCount} {getReading(book.pageCount)}</p>
                <p>Cathegories - {book.categories.join(',')}</p>
                <p>Language - {book.language}</p>
                <p>Price - <span className={getPriceColor(book.listPrice.amount)}>{book.listPrice.amount}{getCurrencyIcon(book.listPrice.currencyCode)}</span></p>
                <ReviewAdd onSetReview={onSetReview} />
            </div>
        )
    }
}

