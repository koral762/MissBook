const { Link } = ReactRouterDOM
import { getCurrencyIcon } from "../common/common.js";

export function BookPreview({ book }) {
    return <Link to={`/book/${book.id}`}> 
        <article className="book-preview">
            <img src={book.thumbnail} alt="" />
            <p>Title - {book.title}</p>
            <p>Price - {book.listPrice.amount}{getCurrencyIcon(book.listPrice.currencyCode)}</p>
        </article>
        </Link>

}

