exports.limitFields = async (req, res, Model) => {
  try {
    // 1 Base query
    let query = Model.find();

    // 2 Apply field limiting if requested
    if (req.query.fields) {
      // Example: ?fields=name,email
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      // Default: exclude internal fields
      query = query.select("-__v");
    }

    // 3 Execute query
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
