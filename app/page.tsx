"use client"

import { useState, useEffect } from "react"
import type { Task, TaskFormData } from "@/types/task"
import { loadTasks, saveTasks, generateId } from "@/utils/storage"
import { TaskForm } from "@/components/task-form"
import { TaskList } from "@/components/task-list"
import { TaskStats } from "@/components/task-stats"
import { Button } from "@/components/ui/button"
import { CheckSquare, Plus, X } from "lucide-react"

export default function TaskEasyApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadedTasks = loadTasks()
    setTasks(loadedTasks)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      saveTasks(tasks)
    }
  }, [tasks, isLoading])

  const createTask = (data: TaskFormData) => {
    const newTask: Task = {
      id: generateId(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setTasks((prev) => [...prev, newTask])
    setShowForm(false)
  }

  const updateTask = (id: string, data: TaskFormData) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, ...data, updatedAt: new Date() } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-600 text-lg">Memuat TaskEasy...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
              <CheckSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TaskEasy
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Kelola task tim Anda dengan mudah dan efisien</p>

          <Button
            onClick={() => setShowForm(!showForm)}
            className={`mt-6 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              showForm
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            }`}
          >
            {showForm ? (
              <>
                <X className="h-5 w-5 mr-2" />
                Tutup Form
              </>
            ) : (
              <>
                <Plus className="h-5 w-5 mr-2" />
                Buat Task Baru
              </>
            )}
          </Button>
        </div>

        {/* Statistics */}
        <TaskStats tasks={tasks} />

        {/* Task Form */}
        {showForm && (
          <div className="mb-8">
            <TaskForm onSubmit={createTask} onCancel={() => setShowForm(false)} />
          </div>
        )}

        {/* Task List */}
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">TaskEasy - Dibuat dengan ❤️ menggunakan React & TypeScript</p>
        </div>
      </div>
    </div>
  )
}
