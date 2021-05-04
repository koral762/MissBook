export class ReviewAdd extends React.Component {

    state = {
        review: {
            fullName: 'Books Reader',
            Rat: 0,
            ReadAt: '1/1/21',
            text: 'good book'
        }
    }

    inputRef = React.createRef()

    componentDidMount() {
        // We dont use dqs in react, instead use Ref
        // document.querySelector('input')
        console.log(this.inputRef);
        this.inputRef.current.focus()
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState(({ review }) => ({
            filterBy: { ...review, [field]: value }
        }), () => {
        })
    }

    onReview = (ev) => {
        ev.preventDefault()
        this.props.onSetReview(this.state.review)
    }

    render() {
        const { fullName, Rat, ReadAt, text } = this.state.review
        return (

            <form className="book-review" onSubmit={this.onReview}>
                <label className="review" htmlFor="review">Review this book</label>
                <br/>
                <label htmlFor="full-name">Full name:</label>
                <input type="text" id="full-name" ref={this.inputRef} name="fullName" value={fullName} onChange={this.handleChange} />
                <br/>

                <label htmlFor="Rat">Ret:</label>
                <input type="range" min="0" max="5"  id="Rat" ref={this.inputRef} name="Rat" value={Rat} onChange={this.handleChange} />
                <br/>

                <label htmlFor="ReadAt">ReadAt:</label>
                <input type="date" id="ReadAt" ref={this.inputRef} name="ReadAt" value={ReadAt} onChange={this.handleChange} />
                <br/>
          
                <label htmlFor="text">ReadAt:</label>
                <input type="text" id="text" ref={this.inputRef} name="text" value={text} onChange={this.handleChange} />

                <button>Save review</button>

            </form>
        )
    }
}