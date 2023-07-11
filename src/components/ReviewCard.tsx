import React from 'react';
import { Link } from 'react-router-dom';
import { Review } from '../types';

interface IReviewCard extends Review { }

const ReviewCard: React.FC<IReviewCard> = ({ id, attributes: { rating, title, body } }: IReviewCard) => {

    return <div className='review-card'>
        <div className="rating">
            <p>
                {rating}
            </p>
        </div>

        <h2>{title}</h2>

        <small>tag list</small>

        <p>{body.substring(0, 200)}...</p>

        <Link to={`/details/${id}`}>Read more</Link>
    </div>
};

export default ReviewCard;

