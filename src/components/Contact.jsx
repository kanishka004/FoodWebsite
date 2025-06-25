import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-head">
                    <h1>Have Question In Mind? </h1>
                    <h1>Let Us Help You</h1>
                </div>
                <div className="input-field">
                <input className='input' type="text" placeholder='yourmail@gmail.com' />
                <button className='input-btn' type='submit'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Contact