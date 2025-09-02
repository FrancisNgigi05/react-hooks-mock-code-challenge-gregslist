import React, { useState } from 'react'
import { API_URL } from './api';

function Form( {onAddItem} ) {
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            description: formData.description,
            image: formData.image,
            location: formData.location
        };

        fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then(r => r.json())
            .then(data => onAddItem(data))
        //reset form
        setFormData({
            description: "",
            image: "",
            location: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Description:
                <input
                    type="text"
                    name='description'
                    required
                    value={formData.description}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="">
                Image:
                <input
                    type="text"
                    name='image'
                    required
                    value={formData.image}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="">
                Location:
                <input
                    type="text"
                    name='location'
                    required
                    value={formData.location}
                    onChange={handleChange}
                />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;
