import React from "react";

export interface Score {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>
    handleAdd: (e: React.FormEvent) => void;
}

export interface ScoreItem {
    score: number;
    id: number;
    include: boolean;
}

export type Actions =
| {type: "add"; payload: number}
| {type: "remove"; payload: number}