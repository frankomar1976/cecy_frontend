
import { Institution } from "../app/institution";
import { Authority } from "./authority";


export interface Institutions{
    id?: number;
    institution_id?: Institution;
    authority_id?: Authority;
    ruc?: string;
    logo?: string;
    name?: string;
    slogan?: string;
    code?: string;
    deleted_at: null;
    created_at: string;
    update_at: string;
}