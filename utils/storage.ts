import type { Task } from "@/types/task"

const STORAGE_KEY = "taskeasy-tasks"

export const loadTasks = (): Task[] => {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []

    const tasks = JSON.parse(stored)
    return tasks.map((task: any) => ({
      ...task,
      createdAt: new Date(task.createdAt),
      updatedAt: new Date(task.updatedAt),
    }))
  } catch (error) {
    console.error("Error loading tasks:", error)
    return []
  }
}

export const saveTasks = (tasks: Task[]): void => {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch (error) {
    console.error("Error saving tasks:", error)
  }
}

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
