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
  data: SignupData;
  message: string;
  statusCode: number;
}
// Signup Component Interfaces ends

// Login Component Interfaces starts
export interface loginForm {
  email: string;
  password: string;
}
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

// Teacher Module interfaces starts
export interface ViewAllExam {
  email: string;
  notes: string[];
  subjectName: string;
  __v: string;
  _id: string;
}

export interface TeacherLinks {
  name: string;
  email: string;
  button: string;
  routerPath: string;
}

// Teacher Module interfaces ends

export interface AllQuestionBunch {
  question: string;
  answer: string;
  options: string[];
}

//Student Profile interface starts
export interface ProfileData {
  email: string;
  name: string;
  role: string;
  _id: string;
}

export interface ProfileResponse {
  data: ProfileData;
  message: string;
  statusCode: number;
}

//Student Profile interface ends

//Verified students interface starts
export interface VerifiedStudentsData {
  email: string;
  name: string;
  status: string;
  _id: string;
}
export interface VerifiedStudentsDataResponse {
  statusCode: number;
  count: number;
  data: VerifiedStudentsData[];
  message: string;
  messageCode: number;
}
//Verified students interface ends

//view students exam list interface starts
export interface ViewAllExams{
Result: string[],
email: string,
notes: string[],
subjectName: string,
_id: string
}
//view students exam list interface ends

//View exam paper interface starts
export interface viewExamData{
  options:string[],
  _id:string,
  question:string
}
export interface ViewExamPaperResponse{
  statusCode:number,
  data:viewExamData[],
  message:string
}
