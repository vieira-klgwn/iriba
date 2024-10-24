import React, { useState } from 'react';
import axios from 'axios';

const PostCard = ({ gospel }) => {
  const [likes, setLikes] = useState(gospel.likes);
  const [comments, setComments] = useState(gospel.comments || []);

  const handleLike = async () => {
    try {
      await axios.put(`/api/gospels/${gospel._id}`, { likes: likes + 1 });
      setLikes(likes + 1);
    } catch (err) {
      console.log('Error updating likes', err);
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg m-10">
      <h3 className="text-xl font-bold">{gospel.day}</h3>
      <p>{gospel.content}</p>
      <div className="flex justify-between items-center mt-4">
        <span>By {gospel.author}</span>
        <div className="flex space-x-4">
          <button onClick={handleLike} className="text-pink-500">♥ {likes}</button>
          <button className="text-blue-500">+ Comment</button>
        </div>
      </div>
      {comments.length > 0 && (
        <div className="mt-2">
          {comments.map((comment, index) => (
            <div key={index} className="text-gray-400">{comment.user}: {comment.text}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
