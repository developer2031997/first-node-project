const User = require("../models/index");

const handleGetJsonData = async (req, res) => {
  const allUser = await User.find({});
  return res.json(allUser);
};

const handleCreateUser = async (req, res) => {
  const body = req.body;
  const result = await User.create({
    fullName: body.full_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  return res.status(201).json({ message: "success", id: result._id });
};

const handleViewHtml = async (req, res) => {
  const allUser = await User.find({});
  const html = `
        <ul>
        ${allUser
          .map(
            (user) =>
              `<li>Name : ${user.fullName}</li><li>Email : ${user.email}</li><li>Gender : ${user.gender}</li><li>Job Title : ${user.jobTitle}</li><hr>`
          )
          .join("")}
        </ul>
        `;

  return res.send(html);
};

const handleGetDetailById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const handleUpdate = async (req, res) => {
  console.log(req.body.job_title);
  await User.findByIdAndUpdate(req.params.id, {
    [req.body.job_title]: "CHANGED",
  });
  return res.json({ status: "sucessfully Updated !!", id: req.params.id });
};

const handleDelete = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "sucessfully Deleted !!", id: req.params.id });
};

const handleAbout = (req, res) => {
  return res.send(`hello from about page - ${req.query.name}`);
};

module.exports = {
  handleGetJsonData,
  handleCreateUser,
  handleViewHtml,
  handleGetDetailById,
  handleUpdate,
  handleDelete,
  handleAbout,
};
