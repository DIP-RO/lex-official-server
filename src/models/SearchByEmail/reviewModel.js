const reviews = [
    {
      userName: "John Doe",
      userEmail: "john.doe@example.com",
      lawyerId: "12345",
      rating: 4,
      comment: "Great service from the lawyer.",
      createdAt: "2023-10-15T10:00:00Z",
    },
    {
      userName: "Alice Smith",
      userEmail: "alice.smith@example.com",
      lawyerId: "67890",
      rating: 5,
      comment: "I highly recommend this lawyer!",
      createdAt: "2023-10-16T14:30:00Z",
    },
    {
      userName: "Bob Johnson",
      userEmail: "bob.johnson@example.com",
      lawyerId: "54321",
      rating: 3,
      comment: "Good but could improve in some areas.",
      createdAt: "2023-10-17T16:45:00Z",
    },
  ];
  
  const getAllReviews = () => reviews;
  
  const getReviewsByUserEmail = (userEmail) =>
    reviews.filter((review) => review.userEmail === userEmail);
  
  module.exports = {
    getAllReviews,
    getReviewsByUserEmail,
  };
  