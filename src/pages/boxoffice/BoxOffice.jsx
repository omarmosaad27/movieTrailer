import React from 'react'
import { useSelector } from 'react-redux'
import './boxoffice.css'
const BoxOffice = () => {
    const {movies } = useSelector(state => state.boxoffice)
    return (
        <section className="box-office">
            <h1>top box office (us)</h1>
            <div className="box-movies">
                <ul>
                    <li>movie poster</li>
                    <li>movie title</li>
                    <li>weekend</li>
                    <li>gross</li>
                    <li>weeks</li>
                </ul>
                <div className="movies">
                    {movies.map((movie) => {
                        const {id,title,image,gross,weekend,weeks} = movie
                        return (
                            <div className="box-movie" key={id}>
                                <div className="img">
                                    <img src={image} alt={title} />
                                </div>
                                    <div className="title">
                                        {title}
                                    </div>
                                    <div className="weekend">
                                        {weekend}
                                    </div>
                                    <div className="gross">
                                        {gross}
                                    </div>
                                    <div className="weeks">
                                        {weeks}
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </section>
    )
}

export default BoxOffice