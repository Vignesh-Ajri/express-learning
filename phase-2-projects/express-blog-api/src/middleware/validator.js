exports.validatePost = (req, res, next) => {
    const { title, content } = req.body;

    if (!title || title.trim().length === 0) {
        return res.status(400).json({ message: 'Title is required' });
    }

    if (!content || content.trim().length === 0) {
        return res.status(400).json({ message: 'Content is required' });
    }

    next();
};
  
exports.validateComment = (req, res, next) => {
    const { content } = req.body;

    if (!content || content.trim().length === 0) {
        return res.status(400).json({ message: 'Comment content is required' });
    }

    next();
};