import { Catalogue } from "../app/catalogue";
import { User } from "../auth/user";


export interface Authority{
    id?: number;
    user_id?: User;
    position_id?: Catalogue;
    status_id?: Catalogue;
    functions?: string;
    start_date?: string;
    end_date?: string;
    deleted_at: null;
    created_at: string;
    update_at: string;
}