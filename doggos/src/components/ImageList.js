
class ImageList extends React.Component {
    render() {
        return (<div>
            {
                this.props.dogImages.map(image=> {
                    return <img key={image} width="300" src={image}/>
                })
            }
        </div>);
    }
}

export default ImageList;