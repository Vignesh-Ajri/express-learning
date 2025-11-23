exports.paginateResults = async (req, res, Model) => {
  try {
    // 1 Get page and limit from query or set defaults
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    // 2 Build query
    const query = Model.find().skip(skip).limit(limit);

    // 3 Execute query
    const docs = await query;

    // 4 Total count (for showing total pages)
    const totalDocs = await Model.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    res.status(200).json({
      status: "success",
      currentPage: page,
      totalPages,
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
