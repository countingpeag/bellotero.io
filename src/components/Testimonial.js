import React, { Component } from 'react';
import './Testimonial.css';


class Testimonial extends Component {
    render() {
        return(
            <div>
                <div className="marquee">
                    <p className="text-customer"> Our customers love us </p>
                </div>
                <div className="centered-info">
                    <div>
                        <div>
                            <div className="text-name"> Pete Zaut </div>
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
        )
    }
}

export default Testimonial;