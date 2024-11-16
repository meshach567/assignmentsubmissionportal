const express = require('express');
const router = express.Router();
const { getAssignmentsForAdmin, acceptAssignmentForAdmin, rejectAssignmentForAdmin } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Admin endpoints
router.get('/admin', authMiddleware, adminMiddleware, getAssignmentsForAdmin);
router.post('/admin/:id/accept', authMiddleware, adminMiddleware, acceptAssignmentForAdmin);
router.post('/admin/:id/reject', authMiddleware, adminMiddleware, rejectAssignmentForAdmin);

module.exports = router;
