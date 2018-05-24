import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Tryng to view movie")
    // console.log(this.props.movie.title);
    const url = "https://www.themoviedb.org/movie/"+this.props.movie.id
    // window.location.href = url
    window.open(url)
  }
    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src ={this.props.movie.poster_src}/>
            </td>
            <td>
              {this.props.movie.title}
              <p>{this.props.movie.overview}</p>
              <input type="button" onClick ={this.viewMovie.bind(this)} value="view"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow