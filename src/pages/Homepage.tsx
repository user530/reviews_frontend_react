import React from 'react';
import { useFetch } from '../hooks';
import { ReviewCard } from '../components'
import { Review } from '../types';

const Homepage = () => {
    const { data, error, loading } = useFetch<Review>('http://localhost:1337/api/reviews');

    if (loading)
        return <p>Loading...</p>;

    if (error)
        return <p>Error...</p>;

    return <div>
        {data.map((review: Review) => (
            <ReviewCard key={review.id} {...review} />))}
    </div>
};

export default Homepage;