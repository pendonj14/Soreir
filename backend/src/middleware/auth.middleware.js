import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
    // Token is sent as: "Bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // attach user info to the request
        next();             // allow the request to continue
    } catch (error) {
        return res.status(401).json({ message: "Token is invalid or expired" });
    }
};

export { protect };