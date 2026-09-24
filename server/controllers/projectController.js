import Project from '../models/Project.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getProjects = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const filter = {};

  if (req.query.tech) filter.tech = req.query.tech;

  const [projects, total] = await Promise.all([
    Project.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit),
    Project.countDocuments(filter),
  ]);

  res.json({
    data: projects,
    page,
    totalPages: Math.ceil(total / limit),
    totalResults: total,
  });
});

export const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }
  res.json(project);
});

export const createProject = asyncHandler(async (req, res) => {
  const { title, description, tech, link, featured } = req.body;

  const project = await Project.create({
    title,
    description,
    tech: Array.isArray(tech) ? tech : tech?.split(',').map((t) => t.trim()),
    link,
    featured,
    owner: req.user._id,
    image: req.file ? `/uploads/${req.file.filename}` : undefined,
  });

  res.status(201).json(project);
});

export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  Object.assign(project, req.body);
  if (req.file) project.image = `/uploads/${req.file.filename}`;

  const updated = await project.save();
  res.json(updated);
});

export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }
  await project.deleteOne();
  res.json({ message: 'Project deleted' });
});