import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaTwitter, FaPinterestP } from "react-icons/fa";

const category = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="" />
                <h3>
                    {props.name}
                    <small>
                        {props.job}
                    </small>
                </h3>
                <div className="icons">
                    <FaFacebookF className='icon icon1'/>
                    <FaInstagramSquare className='icon icon2'/>
                    <FaTwitter className='icon icon3'/>
                    <FaPinterestP className='icon icon4'/>
                </div>
            </div>
        </>
    )
}

export default category
