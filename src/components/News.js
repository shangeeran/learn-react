import { Component } from "react";

class News extends Component {
    render() {
        return <h1>Message : {this.props.messagecontent}</h1>
    }
}

export default News;