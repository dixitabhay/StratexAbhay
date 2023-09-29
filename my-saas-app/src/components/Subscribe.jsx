import React, { useState } from 'react'

export default function Subscribe(props) {
    const [email, setEmail] = useState('');
    const receivedData = props.propData;
    const handleSubmit = (event) => {
        event.preventDefault();
        if(handleSubmit){
            setEmail('')
        }
        alert('Email Submitted', email);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{receivedData}</h3>
                <div className="input-group mb-3">
                    <input type="email"
                        className="form-control"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
            </form></>
    )
}
