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
        console.log(testimonials);
        return(
            <div>
            
                <div className="marquee">
                    {testimonials.slider!==undefined?testimonials.slider.title:'Hi'}
                    <p className="text-customer"> Our customers </p>
                </div>
                <div className="centered-info">
                    <div>
                        {testimonials.slider!==undefined?testimonials.slider.reviews.map( review => (
                        <div>
                            <div>Name:{review.name}</div>
                            <div>Position:{review.position}</div>
                            <div>comment:{review.comment}</div>
                        </div>
                        )):'Hi'}
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Testimonial;

