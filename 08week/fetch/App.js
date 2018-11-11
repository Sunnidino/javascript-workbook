import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import Button from '@material-ui/core/Button';

export default class HackerNews extends Component {
    state = {
        stories: []
    };
    componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
            .then(res => res.json())
            .then(
                (result) => {
                    result.slice(0,20).forEach((storyID, index) =>{
                        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`)
                            .then(res => res.json())
                            .then(
                                (story) => {
                                    const stories = this.state.stories.map(story => story);
                                    stories.push(story);
                                    this.setState({
                                        stories: stories
                                    });
                                },
                                // Note: it's important to handle errors here
                                // instead of a catch() block so that we don't swallow
                                // exceptions from actual bugs in components.
                                (error) => {
                                    this.setState({
                                        isLoaded: true,
                                        error
                                    });
                                }
                        )
                    });

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        return (
            <h3>Hacker News</h3>
        )
    }
}'use strict';
