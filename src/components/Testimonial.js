import React, { Component } from 'react';
import axios from 'axios';
import './Testimonial.css';

class Testimonial extends Component {

    constructor (props) {
        super(props);
        this.state = {
            testimonials: [],
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/page1.json')
            .then(res => {
                this.setState({ testimonials: res.data })
            })
    }

    render() {
        console.log(this.state.testimonials);
        const { testimonials } = this.state;
        return(
            <div>
            
                <div className="marquee">
                    {testimonials.slider!==undefined?testimonial.slider.title}
                    <p className="text-customer"> Our customers </p>
                </div>
                <div className="centered-info">
                    <div>
                        <div>
                            <div className="text-name"> Pete zaut </div>
                            <div className="text-position"> Position </div>
                        </div>
                        <div className="inside">
                            “It's funny what memory does, isn't it? 
                            My favorite holiday tradition might not 
                            have happened more than once or twice. 
                            But because it is such a good memory, 
                            so encapsulating of everything I love 
                            about the holidays, in my mind it happened 
                            every year. Without fail"
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Testimonial;
