export type TDate = { 
  date: Date;
  setDate: Function
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


export type TUser = {
  id: number,
  days: TDay[]
}

export type TDay = {
  date: string,
  tasks?: TTask[]
}



export type TTask = {
  id: number,
  date: string,
  status: string,
  dateCreated: string,
  dateCompleted: string,
  deadline: string,
  description: string
}

