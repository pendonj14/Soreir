import { MenuItem } from "../models/menu.models.js";

const createMenu = async (req, res, next) => {
    try {
        const { name, description, price, category } = req.body;
        const menuItem = new MenuItem({ name, description, price, category });
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        next(error);
    }
}

const getMenuItems = async (req, res, next) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        next(error);
    }
}

const updateMenuItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedMenuItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }
        res.status(200).json(updatedMenuItem);
    } catch (error) {
        next(error);
    }
}

const deleteMenuItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedMenuItem = await MenuItem.findByIdAndDelete(id);
        if (!deletedMenuItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }
        res.status(200).json({ message: "Menu item deleted successfully" });
    } catch (error) {
        next(error);
    }
}

export { createMenu, getMenuItems, updateMenuItem, deleteMenuItem };

