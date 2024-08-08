-- Product and Feedback table to store feedback for product and fetech the average  rating product wise

SELECT * FROM Products;
SELECT * FROM Feedback;

SELECT p.ProductName, AVG(f.Rating) as AverageRating
FROM Products p
JOIN Feedback f ON p.ProductID = f.ProductID
GROUP BY p.ProductName;
