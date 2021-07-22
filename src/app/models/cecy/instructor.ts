import { Catalogue } from "../app/catalogue";
import { User } from "../auth/user";



export interface Instructor{
    id?: number;
    user_id?: User;
    responsible_id?: User;
    type_instructor_id?: Catalogue;
    deleted_at: null;
    created_at: string;
    update_at: string;
}