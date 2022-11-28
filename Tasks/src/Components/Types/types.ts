export type TDate = { 
  date: Date;
  setDate: Function
}


export type TTask = {
  id: string,
  status: string,
  dateCreated: string,
  deadline: string,
  description: string
}

export type TypeTask = {
  task: TTask,
  changeStatus: Function,
  removeTask: Function
}

export type TTarefas = {
  id: string,
  date: string,
  tasks: TTask[]
}