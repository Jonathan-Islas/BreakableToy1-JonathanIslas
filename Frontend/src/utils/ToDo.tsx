
import dayjs, { Dayjs } from "dayjs";

export interface ToDo {
    id: string;
    text: string;
    dueDate: string | null;
    isFinished: boolean;
    finishedDate?: number;
    priority: number | null;
    createdDate: number;
}

