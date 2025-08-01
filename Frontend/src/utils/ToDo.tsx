
import dayjs, { Dayjs } from "dayjs";

export interface ToDo {
    id: string;
    text: string;
    dueDate: string | null;
    status: boolean;
    finishedDate?: number;
    priority: number | null;
    createdDate: number;
}

