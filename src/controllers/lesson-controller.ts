import { Request, Response } from "express";
import Lesson from "../models/lesson-model";
import { Op } from "sequelize";

export const getLessons = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string;
    const offset = (page - 1) * limit;

    const whereClause = search ? { title: { [Op.like]: `%${search}%` } } : {};

    const { count, rows } = await Lesson.findAndCountAll({
      where: whereClause,
      limit,
      offset,
    });
    
    res.json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving lessons", error });
  }
};
