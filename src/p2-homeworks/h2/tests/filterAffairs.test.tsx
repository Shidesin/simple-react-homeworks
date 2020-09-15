import React from 'react';
import {AffairType, filterAffairs} from "../HW2";

let initialState: AffairType[];

beforeEach(() => {
    initialState = [
        {_id: 1, name: "React", priority: "high"},
        {_id: 2, name: "anime", priority: "low"},
        {_id: 3, name: "games", priority: "low"},
        {_id: 4, name: "work", priority: "high"},
        {_id: 5, name: "html & css", priority: "middle"},
        {_id: 6, name: "porn", priority: "low"},
    ]
});

test.skip("filter by all", () => {
    const newState = filterAffairs(initialState, "all");
    expect(newState.length).toBe(6);
});
test.skip("filter by high", () => {
    const newState = filterAffairs(initialState, "high");
    expect(newState.length).toBe(2);
});
test.skip("filter by middle", () => {
    const newState = filterAffairs(initialState, "middle");
    expect(newState.length).toBe(1);
});
test.skip("filter by low", () => {
    const newState = filterAffairs(initialState, "low");
    expect(newState.length).toBe(3);
});
