document.addEventListener('DOMContentLoaded', () => {
    displayReviews();
    attachFormSubmitHandler();
});

const reviewData = window.reviewData;

function createReviewCard(reviewData) {
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h3');
    name.textContent = reviewData.name;
    card.appendChild(name);

    const date = document.createElement('p');
    date.textContent = `Date: ${reviewData.date}`;
    card.appendChild(date);

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${reviewData.rating} / 5`;
    card.appendChild(rating);

    const review = document.createElement('p');
    review.textContent = reviewData.review;
    card.appendChild(review);

    return card;
}

function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');

    window.reviewData.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });
}

function attachFormSubmitHandler() {
    const form = document.getElementById('review-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const text = document.getElementById('text').value;

        const today = new Date();
        const date = today.toISOString().split('T')[0];

        const newReview = {
            name,
            date,
            rating,
            review: text,
        };

        reviewData.push(newReview);

        const reviewCard = createReviewCard(newReview);
        const reviewsContainer = document.getElementById('reviews-container');
        reviewsContainer.appendChild(reviewCard);

        form.reset();
    });
}
