
//////////  user form check midleware//////
exports.checkFormValid = async (req, res, next) => {
  try {
    const { fullname, email, phone, service } = req.body;

    // Check if any missing feilds
    if (!fullname || !email || !phone || !service) {
      return res.status(400).json({
        status: 'fail',
        message: 'Missing Feilds'
      });
    }
    next();
  } catch (error) {
    console.error('Error in validation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

