import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Lesson = sequelize.define(
  "Lesson",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "lessons",
    timestamps: true,
  }
);

export default Lesson;