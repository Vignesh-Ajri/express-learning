exports.filterUsers = async (req, res, next, Model) => {
  try {
    // 1️ Make a copy of the query object
    const queryObj = { ...req.query };

    // 2️ Remove fields that are not filters (e.g. sort, page, etc.)
    const excludeFields = ["sort", "limit", "page", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    // 3️ Build the query
    let query = Model.find(queryObj);

    // 4️ Execute
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
