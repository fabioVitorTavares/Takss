export type TDate = { 
  date: Date;
  setDate: Function
}


export type TTask = {
  id: string,
  status: string,
  dateCreated: string,
  dateCompleted: string,
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

export type TModal = {
  description: string,
  confirm: Function  
}