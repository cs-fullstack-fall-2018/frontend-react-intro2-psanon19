import React, {Component} from "react";




class Netflix extends Component {

    constructor(props){
        super(props);
        this.state = {DisplayMovieInfo: [],
            gameTitle: "",
            ageRating: ""}
    }

    gameTitleChange = (event) => {
        this.setState({gameTitle: event.target.value})
    };

    ageRatingChange = (event) => {
        this.setState({ageRating: event.target.value})
    };

    submitFunction = (event) =>{
        console.log("Submitted Form.");
        alert(this.state.gameTitle);
        alert(this.state.ageRating);
        //This prevent the form from reloading
        event.preventDefault();
    };

    render() {

        // var dunkin = this.props.movieInfo.map(
        //     eachItemTest => {
        //
        //         var image = eachItemTest.src;
        //         var wikiLink = eachItemTest.wiki;
        //
        //         return(
        //             <div className="GradeArray">
        //                 <a href={wikiLink} target="_blank"> <img src={image}/></a>
        //                 <p> _____ </p>
        //             </div>
        //         );
        //     }
        // );


        var DisplayMovies = this.props.movieInfo.map(
            eachItemTest => {

                var image = eachItemTest.src;
                var wikiLink = eachItemTest.wiki;

                return(
                    <div className="GradeArray" key={eachItemTest.movieName}>
                        <p> -Movie: {eachItemTest.movieName}</p>
                        <p> -Release Date: {eachItemTest.yearReleased}</p>
                        <p> -Genre: {eachItemTest.genre}</p>
                        <a href={wikiLink} target="_blank"> <img alt={image} src={image}/></a>
                        <form onSubmit={this.submitFunction}>
                            <h1>Game</h1>
                            <label htmlFor="gameTitle">Game: </label>
                            <input name="Game_Title_Information" title="Input a Game Title" type="Text" id="gameTitle" placeholder="Number" value={this.state.gameTitle} onChange={this.gameTitleChange}/>
                            <input name="Game_Age_Rating" title="Input a Rating" type="Text" id="ageRating" placeholder="Rating" value={this.state.ageRating} onChange={this.ageRatingChange}/>
                            <button name="Game_Button" title="Submit Button">Submit</button>
                        </form>
                        <p> _____ </p>
                    </div>
                );
            }
        );

        return <div className="BankAccount">

            <h3>{DisplayMovies}</h3>
        </div>
    }
}

export default Netflix;