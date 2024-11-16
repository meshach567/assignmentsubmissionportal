const Admin = require('../models/Admin');

const uploadAssignmentForAdmin = async (req, res) => {
    const { task, admin } = req.body;

    try {
        const assignment = new Admin({ userId: req.user.id, task, admin})
        await assignment.save();
        res.status(201).json({ message: 'Assignment uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAssignmentForAdmin = async (req, res) => {
    try {
        const assignments = await Admin.find({ admin: req.user.id}).populate('userId', 'username');
        res.json(assignments);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const acceptAssignmentByAdmin = async (req, res) => {
    try {
        await Admin.findByIdAndUpdate(req.params.id, { status: 'Accepted' });
        res.json({ message: 'Assignment accepted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const rejectAssignmentByAdmin = async (req, res) => {
    try {
        await Assignment.findByIdAndUpdate(req.params.id, { status: 'Rejected' });
        res.json({ message: 'Assignment rejected' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    uploadAssignmentForAdmin,
    getAssignmentForAdmin,
    acceptAssignmentByAdmin,
    rejectAssignmentByAdmin
}

