import React, {useState, useEffect} from "react";
import people from "./data";

function App() {
    const [index,
        setIndex] = useState(0)

    const showPreviews = () => {
        index === 0
            ? setIndex(people.length - 1)
            : setIndex((index) => {
                return index - 1;
            })
    }
    const showNext = () => {
        //console.log(index)
        index === people.length - 1
            ? setIndex(0)
            : setIndex(index + 1)
    }
    console.log("Outside " + index)

    useEffect(() => {
        const interval = setInterval(() => {
            //console.log('This will run every 3 second!');
            //console.log(index);
            showNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    const {id, image, name, title, quote} = people[index];

    return (
        <main>
            <h2 className="title">
                <span>/</span>
                Reviews</h2>
            <section className="reviews-container">
                <button className="btn" onClick={showPreviews}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <article key={id}>
                    <img src={image} alt="name"></img>
                    <h4 className="name">{name}</h4>
                    <p className="title">{title}</p>
                    <p className="quote">{quote}</p>
                    <i className="fas fa-quote-right"></i>
                </article>
                <button className="btn" onClick={showNext}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </section>
        </main>
    );
}

export default App;
