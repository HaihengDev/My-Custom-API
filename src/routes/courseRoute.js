import express from 'express';
import {getAllCourses, getCourseByCode} from '../controllers/courseController.js';

const router = express.Router();
router.get('/', getAllCourses);
router.get('/:code', getCourseByCode);

export default router;