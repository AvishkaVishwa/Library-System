export type User = {
    _id: string;
    type: "ADMIN" | "USER" | "PATRON"; 
    firstName: string;
    lastName: string;
    email: string;
    }

export interface loginUserPayload {
    email: string;
    password: string;
}