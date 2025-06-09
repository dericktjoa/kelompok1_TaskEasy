"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Task } from "@/types/task"
import { CheckCircle, Clock, AlertCircle, ListTodo } from "lucide-react"

interface TaskStatsProps {
  tasks: Task[]
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const stats = {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === "todo").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    done: tasks.filter((t) => t.status === "done").length,
  }

  const statCards = [
    {
      title: "Total Task",
      value: stats.total,
      icon: ListTodo,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
    },
    {
      title: "To Do",
      value: stats.todo,
      icon: Clock,
      color: "from-gray-500 to-gray-600",
      textColor: "text-gray-600",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: AlertCircle,
      color: "from-yellow-500 to-yellow-600",
      textColor: "text-yellow-600",
    },
    {
      title: "Selesai",
      value: stats.done,
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
      textColor: "text-green-600",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {statCards.map((stat) => (
        <Card key={stat.title} className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className={`bg-gradient-to-r ${stat.color} p-4 text-white`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.title}</div>
                </div>
                <stat.icon className="h-8 w-8 opacity-80" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
