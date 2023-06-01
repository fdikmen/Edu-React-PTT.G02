//Created by rfc snippet
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { createMovie } from './movieSlice';
import { useNavigate } from 'react-router-dom';

export default function MovieAdd() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmitHandler = (e) => {
        e.preventDefault(); //prevent page refresh
        //console.log(e.target.title.value);
        const _formData = new FormData(e.target);
        //console.log(_formData.get("title"));
        const movie = {
            title: _formData.get("title"),
            avatar: _formData.get("avatar"),
            type: _formData.get("type"),
        }
        // dispatch({type:"movie/createMovie",payload:_formData});
        dispatch(createMovie(movie));
        navigate("/movie/list");
    }
    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Field>
                <label>Title</label>
                <input placeholder='Type ...' name='title' />
            </Form.Field>
            <Form.Field>
                <label>Cover Image URL</label>
                <input placeholder='Type ...' name='avatar' />
            </Form.Field>
            <Form.Field>
                <label>Type</label>
                <input placeholder='Type ...' name='type' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}