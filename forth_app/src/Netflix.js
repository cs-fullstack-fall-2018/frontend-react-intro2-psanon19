import React, {Component} from "react";




class Netflix extends Component {
    render() {

        var DisplayMovies = this.props.movieInfo.map(
            eachItemTest => {

                var image = eachItemTest.src;
                var wikiLink = eachItemTest.wiki;

                return(
                    <div className="GradeArray">
                        <p> -Movie: {eachItemTest.movieName}</p>
                        <p> -Release Date: {eachItemTest.yearReleased}</p>
                        <p> -Genre: {eachItemTest.genre}</p>
                        <a href={wikiLink} target="_blank"> <img src={image}/></a>
                        <p> _____ </p>
                    </div>
                );
            }
        );

        return <div className="BankAccount">

            <h1>{DisplayMovies}</h1>
        </div>
    }
}

export default Netflix;