import React, { Component } from 'react';
import Carousel from './carousel/Carousel';

export class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}



/*
import Carousel from './carousel/Carousel';
//import Pagination from './pagination/Pagination';
//import ParallaxImage from './parallaximage/ParallaxImage';
//import { getInputRangeFromIndexes } from './utils/animations';

export default Carousel;
//export { Carousel as default, Pagination, ParallaxImage, getInputRangeFromIndexes };
*/