exports.sortResults = async (req, res, Model) => {
  try {
    // 1️ Base query
    let query = Model.find();

    // 2️ Apply sorting if requested
    if (req.query.sort) {
      // Example: ?sort=name or ?sort=-createdAt
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      // Default sort (latest first)
      query = query.sort("-createdAt");
    }

    // 3️ Execute
    const docs = await query;

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: docs,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
