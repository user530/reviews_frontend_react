import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';
import { Review } from '../types';

const ReviewDetails = () => {
    const { id } = useParams();
    const { data, error, loading } = useFetch<Review>('http://localhost:1337/api/reviews/' + id);

    if (loading)
        return <p>Loading...</p>;

    if (error)
        return <p>Error...</p>;

    const { attributes: { body, rating, title } } = data[0];

    return (
        <main className='page-main'>
            <div className="container">
                <div className='review-card'>
                    <div className="rating">
                        <p>{rating}</p>
                    </div>

                    <h2>{title}</h2>

                    <small>tag list</small>

                    <p>{body}</p>
                </div>
            </div>
        </main>)
};

export default ReviewDetails;

