# Coding Challenge

## Scenario:
Blue Flag has an aerial drone which it uses to take photographs of billboards. Instructions are sent to the drone in a simple language that tells the drone which direction to move and when to take a photo. Moves are always exactly 1 km to the north (^), south (v), east (>) or west (<) or take a photograph (x).
Unfortunately, the instruction processor is not perfect yet so the drone may photograph the same billboard multiple times.
How many billboards are photographed at least once?
For example:
- x^xv takes photos of 2 billboards and ends up back at the starting location
- x^^x>>xvvx<<x takes photos of 4 billboards, including 2 photos of the same billboard at the starting location
