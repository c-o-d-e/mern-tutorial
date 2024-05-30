// @desc Register new user
// @route POST /api/users
// @access Private
const registerUser = (req, res) => {
    res.json({ message: "Register User" });
};

module.exports = {
    registerUser,
};
