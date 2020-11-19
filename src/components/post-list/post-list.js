import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({posts, deletePost, onToggleImportant, onToggleLike}) => {
    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        return(
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    deletePost={() => deletePost(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)}
                />
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
        
    )
}

export default PostList;