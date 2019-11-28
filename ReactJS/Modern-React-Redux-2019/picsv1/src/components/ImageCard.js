import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    //NoteToSelf: any time the image downloads the content from
    //internet or filesystem, it emmits the 'load' event to which
    //we can listen to and perform post load activities as shown here.
  }

  setSpans = () => {
    const height = this.imageRef.current.height;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular}></img>
      </div>
    );
  }
}

export default ImageCard;
