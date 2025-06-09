"use client"

import type { Task } from "@/types/task"
import { TaskCard } from "./task-card"
import { sortTasksByPriority } from "@/utils/taskUtils"
import { ListTodo } from "lucide-react"

interface TaskListProps {
  tasks: Task[]
  onUpdate: (id: string, data: any) => void
  onDelete: (id: string) => void
}

export function TaskList({ tasks, onUpdate, onDelete }: TaskListProps) {
  const sortedTasks = sortTasksByPriority(tasks)

  if (tasks.length === 0) {
    return (
      <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
        <ListTodo className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <div className="text-gray-400 text-xl mb-2 font-semibold">Belum ada task</div>
        <div className="text-gray-500 text-sm">Buat task pertama Anda untuk memulai!</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800">📋 Daftar Task</h2>
        <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
          {tasks.length} task{tasks.length !== 1 ? "s" : ""} (diurutkan berdasarkan prioritas)
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedTasks.map((task) => (
          <TaskCard key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}
