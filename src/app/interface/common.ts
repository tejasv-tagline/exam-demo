export interface showAllData {
  status: string;
  _id: string;
  name: string;
  email: string;
}

export interface StudentProfile {
  email: string;
  name: string;
  role: string;
  id: string;
}
export interface IStudentData {
  count: number;
  data: showAllData[];
  message: string;
  statusCode: number;
}

// Signup Component Interfaces starts

export interface SignupData {
  email: string;
  name: string;
  password: string;
  role: string;
}
export interface SignupDataResponse {
  data: SignupData[];
  message: string;
  statusCode: number;
}
// Signup Component Interfaces ends

// Login Component Interfaces starts
export interface LoginData {
  email: string;
  name: string;
  role: string;
  token: string;
}
export interface LoginDataResponse {
  data: LoginData;
  message: string;
  statusCode: string;
}

// Login Component Interfaces ends

// View all exam interface starts
export interface ViewAllExam {
  email: string;
  notes: string[];
  subjectName: string;
  __v: string;
  _id: string;
}

// View all exam interface ends
