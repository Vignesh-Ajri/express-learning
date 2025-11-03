exports.filterUsers = async (req, res, next, Model) => {
  try {
    // 1️ Copy query
    const queryObj = { ...req.query };

    // 2️ Exclude non-filter fields
    const excludeFields = ["sort", "limit", "page", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    // 3️ Advanced filtering (gte, gt, lte, lt)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    // 4️ Convert back to object and query
    let query = Model.find(JSON.parse(queryStr));

    // 5️ Execute query
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
