import React, { Component } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import InfiniteScroll from 'react-infinite-scroll-component';

let i;
let images = [];

for(i=1;i<=5;i++) {
    images.push("https://picsum.photos/" + Math.floor((Math.random() * 200) + 100) + "/" + Math.floor((Math.random() * 300) + 100) + "?image=" + Math.floor((Math.random() * 500) + 1));
}

function  RenderMasonry({images}) {
    return (
        <Masonry gutter="15" columnsCount={4}>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
    );
}


class Masonnry extends Component {
    state = {
        items: images,

    }

    fetchMoreData = () => {
        for(i=1;i<=5;i++) {
            images.push("https://picsum.photos/200/300?image=" + Math.floor((Math.random() * 500) + 1));
        }
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(images)
            })  
        }, 2500);
        
    }
    render() {
        return (
            
                <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
                    
                    <RenderMasonry images={this.state.items}/>
                </InfiniteScroll>
        );
    }
}

export default Masonnry;