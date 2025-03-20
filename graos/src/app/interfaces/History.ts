import { State } from "./State";

export interface History
{
    state:  State;
    time:   number;
    type:   string;
    id:     string;
    name:   string;
}