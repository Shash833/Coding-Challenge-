/* 
Blue Flag has an aerial drone which it uses to take photographs of billboards. Instructions are sent to the drone in a simple language that tells the drone which direction to move and when to take a photo. Moves are always exactly 1 km to the north (^), south (v), east (>) or west (<) or take a photograph (x).
Unfortunately, the instruction processor is not perfect yet so the drone may photograph the same billboard multiple times.
How many billboards are photographed at least once? (Note: The input to use to solve this is attached.)
For example:
- x^xv takes photos of 2 billboards and ends up back at the starting location
- x^^x>>xvvx<<x takes photos of 4 billboards, including 2 photos of the same billboard at the starting location
*/


//Drone instructions:
const droneData = "<^v^^<x^<v>x<v<^>^v^<v^^<v^>x>><v<<<x>x^^>v<x<<><vxxv<^>xx^>^^<xx^^x^>v^^^^>^xxx^vvx<vv^<>>>v^^^>^vv>>vv>v<^>x<>^xxxvxvx^vv^vxvx<x^<vx<vx><x<vx^>^xxx>><v<^v^<xv^^x>>>xxx<x<>xv<v^>>^v^>>v>vx^>>xx<<^v>xv<<vx>^>><<v>^<^v<vv^<^>v<x<x>vvxv^v<vx<>xx><^^xx>v<<v>v>^>^>v>^x<><<x^^vvx<<^^><^v>vx<v^vvv^v<^<>xv^<x<<x<xx>^<x^>><>v<>^^>v^<xv<v^vxx<<<<><v^x^>^vx^^x^>^x^^>^vx><^^xvv>^^<<^<>^<>^vxvx<xxx^^><^v^>^xv<>>x>^xx<<>><^^<>xv^^xvvv><<v^v^vv^xv<^vx^^v>v^>>vx<x^x>x<<vv^<>^v><^^x<v<^<^^<^<x^xv^x<vxvx^>><x>>xvv><vv<<>^v^^<^vvvx>><<v<<^xv<<vxv^v^v^<<^<>xv^x>x>>><<<xv>x^<<>x<xv^xv^^<xv<><v>^><<<^^x<^v>v<^x>>xvv<>>x^^^x>v^v<^xxvxv><^<vvx^>xxvx>^xx^<<^vv<>x^v<^x^x^<<xx^^x^>>^><<<^v>>x<>^^v^vxx><^>>>v<xv^<>>x<xvv^x<<>vxv>x>x<>x<<vx<vx>x>^>v<>vxv^<^v>xvvx^<<vxvv><<^v>>xvxv<x>x>^^<<>>v^><<>x^x><^xxx^v^<^<^x<>>xvx<xxvv><xv<vxvx>v<>xx^^x<>^v<^^v<^>x>^>x^vv^^vv><<vxx^<x>xx<<v^<^<vxxx^<<xv<v<>^v>v^vv^>^>><<vx>^<<^<v^xv>><v>^^>x>><vv<>><v<xvx>x>v>^^^^x>xx<>^^<^^x>>v^^<^^x<>v>xvv^v^xxvv>^vvxv><^^><xv^vx<xv^xv>^<xvx>^>^<v<>^<^^<>x>>><<x>^>v>xxx>>^vxv^>xv^<^^^>>x>x><>x^>>x>^>vx<^xx<x^x>^>^^xvx>x>v>^>^x<v>><<^v^>^<x^>v<v>><^<<x><>v<>vv<<^vx<x^v^>xx>xx>>^v^xvvx^>v^v^v<^>^<^>>><vvv^xv^x^xvxvv<<x^x<>><x^<xv<xvx<^vx>x^<v^v^xx>xx<^v^xv^><x<<><><<^v>^^v><>v^<vv<x>x^<^^>vx><^xxv<x>>>>x<v<xv>^<<>x^v^<<vx><<x>^^x>x><vv^<vx>xv<^^<>>x>^^vv>v<>v^<>v<xx<<x^><<<>>xvv^v^xvvvxx^^x<^>>v^vvx^xv<x^v^<xv^<^vxxv>x<vxx>>v<v^<xxv<>x>>^x><>>>><v>^x^^vxxvv^v^<v<x^>>>x<^>^<vxvx><><v>^x<><x>v>x<<^<xx^<x>^<><>x>x^xv^^x><xxx^v<vv^>>^x<xvx>>vvv^x><<xv>v^x>xx<x>v^vx>v<<><^x^<>>x<^<>^>v^><>xx<><x><v<^>x>><v>><v>^>>><<>v^^>vv<xvv>^>>><^vx>^>>^v><x<vv^^<vx^>vxx>xvvvx^>>v>>^>vx<xxv^v^x<>vv>x^x<><^vvx>^<>^v^^v>^^^^^>^<>>^<x><v<>><x^^xx^x^v^v>v>>><<>vv^^x><<<<<>v^<>vxx<>x^>>v^<x^<xx>^^x>>><v^^>xx^>>>vxv><vv<>x<^x><>v^^x<vx<<vvvx^^<<^v^v>^v<<>x<v>xv^^v^<xx^>vvxv<^<^>^x>x<x^^v>x^x>>><xvv<vx^<>x>^^<vx>v<>vx^x^>^v<^x>^>^xx<xxxv<<>>>vv>vv>v<<<vv<xv^v<<^x>^^v>v>^vv^v<<^v>>^^><>v<>xxv>v<<>>>><>xx^xv^v^<x>x<xv^vv<v>^<xx^v<x>><^vx<>^>xx^>x>x^^<><^vxvx><xx^><v<x<xv>vx<^x<^v<<>^vx<<>>vx^x>vv>xxvvx^>xx>vv^>v^><vx<^x>>x<v<^>^vxx>x>x^><^<vx^^v>>>x<<vv<^vvxx>^>>x>^^vvx>v><^^v><vv<<>x>vx>><>><<xx>>x^vxv^<<^x<v>^^v<>x^v<^><^><<>x<x^x^><xv>^^x<xxx<vxv><v>>xxv^<>><^<><xv><x>^^x>><vv^<>v>>>^<^v^v<vv>x^>^^v>x<^xv>>x^xx>vv>vx<<x><v>^x>x>v>xv>xvvv<>x><x<xxvx^xxv<<<^xxv>v><^<vv>v>>v^>v<<<>v^<^^v><^>v>x<v^vvv>>xv>>x<vx>v^^x>xv<<^xv^^<>xx>v^xv<^>>^<vvx>>><>v^xvxv<v>xxvxx<v^^x>>>>vv<xv^<v>v^xv^<<<<^<xv<^<v^<vxx<^<vx>v<^^v^<^^>xv^<<vv<<^^xv<v>x><vxvxxx^x>v^v^<>x>>x>>v<x^<<^<x>vv>xv^>v^x<^><^^<x^x<<vv^vxxvvx>v<xv<^<^>^<^vvvv>vvv<>^>xv^>^xxv<v^xvx^><vxx>^^v^^v<<vvxv>>x>>x>^^x^v<^^^^v<xv<^xv>v>^^^<><>v^xx^xxx<x^x^x>vv>vvvxv^^>v<>xvvx><>>xv><<>x<v>>v>x>>xvx^vx>v>>>^<<^vx>>>v<<>v>vx<^^^>xv<^^>>^<v^xv<v>xv^<^vvx<<^>vxv<x>>>>^xvvx>v><<vxx^x^v<<xv^x><v^^<xxxx<>^<^x<xx^v^v<>xv^xxv<>x>>>^x<>>v<<x^^xx^^><^<xv>>><<^>>xv^xx<v^>vx^xvvx^x^vv^v<<<>^<><>x>v^<><<xv><<>xx^x<^x>v<v><x<vxv>x^^<vv^x^^<><x>>xvx>>x^^<>>^v>x^^>^<<v<<>><<v<x<v<<>vxx>x>>vxvv^^v<>xxv^<>>>>x>x<x<>^<^x^vvx^<>^^<>>^>xx^>v^<v<>>x<<vv>vxx<^^v<x>^^^xxxv>xx>><<>^x>x<<>xxv<vx^>^><>v^<vv>xx^v>><>v>^>>^<^x^<>>>v<x<><<x^<>><<v>^x><>v<v^x<vv>v>^><><vxx>xxv^v<>^x^xx>xv^<x<<>>x>>vx<<>^v<<v<><^vx>v^vx^v<v>x>xvv>^x^>^<<><^^>x^vxv^><v^><>^><>vx^x^xvx^v>>x^<^xx>x<<<<x^vxvxx<vv^vxxvvv^><^<>>^xvv<xxvxv>x><x^x^<xvxx^xv^<vv^<xvv^><<v>^x<<x<vv^x<xxv^<<v^xv<xvxx<<^>^>>>^v>x>xv<xv><x>x><><vv>^^^><^>vvv<><xx<xx^vxvx<>xv>x>^<x>^^xxx<xxv^^^v<<><v<>v^^vv<vxx<v^v>^<vv^v>^v><v>xv<v<>vv><><>x^xvv^>^vvv<<^^>v><<<<vvxv>x<>xxvv>^>xvv^x>>x<x^<^<x^<x^^^xx>xxx^x>>><^^xx<v>v><>^v>^^x>x^>>^v>><x<x<^x<^<xx<^v>^<vx>>>^<vx><><^^x^vxv<v^xx<v>^xxvx^^v^^<^>>^>x><^x<xvv<<vvxx<x^xxx^<xx^vv^>vv^^v<<vvxx^v^xv^^><>^^^^><<^>vx^>>>^x>>^v^vxxx^vvx<vvvxx<x^^<<v^xv<xx<><>^x^<<x^<vxx^<^<vx^x<^v>xxx^^^<vx<vvxxv<<x^xx<>v^>^<<xx<x>>>vx<^v^x^^<x^v><xx<^>xv^^^xxxx<^x^^^<<^^<xx>^^vx^vvx>xv>x<x>x<<x^vv^<<^v>v>xx^x^>vx>x<^vv^xvxx>^><>v<><xx<>^>^^v^x^<><><<<x^^vxx>^xv<>x>^>x>vxxv><<<^<>^xv>vx<vv<v^v><<>vx<<<xx^^^v<<x<>xv>>v>v<<>>^v>x<<vv>v^<^x^<<><x^v>x<x<vx<>v<v>v<^v<<^>^>x<x<>v>>^>^v^v><<>><>^xvxx>xx<>>><>>vx<x<x<<x>xxv<x^v<>v>v<xvx><<vvxxxxvxx<xvx>xxx>>>^v^<x>>><<v^^^xv^^xvv<xx><v>>x>^^^^^vx><>vxv><vx<<<<vvxvx<v^>vv>>^<>v<><xvxx<xv>vvv^v^x>vx>x<^xv^>>xv><^^v<v^>x>>xx<^^^^^x^^v<v><<vvxvx>x>x>x>vxxxv>x^<>>xxv>vx>vx>>x<x<vvx>x^vx>x^<v>v^^^x>x><<^v^<<x^v<v^<v>>^x>x^vx>v^>xv^^v^vxx^<>v>v^^^>x<xv^xxvx^>>^><<<^^^>vxv>x^xx<^vxxv<v^xv^xx<<x^<x>x^v<x>v^^v^v^x<v^^^^>>>x<x><v^^v>x<<<^vx<xv><>v^^<vv>v><v^<<^^>vvx^<><^>v<x<^vx>>v<<^xv<<<>x^><xxx^v^>>><>x<v>^>x^x>xx<vxvv>v^^v><x<>>><x<<v<v^<x<>v>v<v<xxv<>x<<vx>^^v>>^^>^<v^v^xvxx^x<x>vv<<<v^x^xvvxvv<<v<>xx^xvxv>vx><v>>^vxx<<v^<^^xx>><x^vv>v>vv>^<>^vx>v<^^>^>^x^>x><><v<^^<v<^>vv<x>v<>x<<x^>v><x^^vx<v>x>v<<^<>vxxx^xx^<<^x>><xx<v^x>^^x<<vx^<>vv<x^^v><>>x>^>x^>^vvx<<x<<^vv<<vx<v>x^<v^^<^<<^x<^>>^^^<<>^^xxxv>v^vxvx^^^<v^<>v><>xv<<vx<<vx<^xv<x>v><>^<^^>^><^><x^<<><>v<<x^>^<x<x>>v^^<vv^<<<xvv^<><v<>>v<v>vv<v>v^v^<>>x^v^><>vv>x>>x^^v>vvv^v^><^^><>>v<^<vxx^>^vv<x<vv<vv^><<v>^>xxv<^vx>^<x^<>>^^xv>><^<xv<<>v^<<<^>><x<>^x^<^>>vv<x><^>vvv>x<x<^<x^><x^vxx>^>>v><x^>v<>^^>v>^x<>>vvv><x>v>^v>^x^vx>^<<vvvv<>>v<xv>vvvx^vv<x>x>x^^^>>>xvx<xx<^x><>^><>x<>v^xx<v<<>v^<x><^^vvxx<v<<>>xx><<vvv<><<x^^^vx^<^><x^vv<x^<v^v^vvvxvx<<^x>>>v^^><x<>xvv<vxxx<<<x<vvvx>v<>xxx^xv>>x><xv><^x<x>^>v<v<^v>v>^>^<<v<x>>xv>v><vx>><>vx>^vx^<<^<<^^<>x<xvv^>^^v<<vxv<^vxx>>^>v>^^v^^v^>^>>x<>vv^<^^v><<v^<v>x^^v^>^^><x>>^v>>x<v>^vx>x^^>>>^<^^xx^<^x><v^<<xvxx>^v><v^vx><v^<^^x^^>>><>xxxxv^v<v^v^x<vv>><^><xvxx^v>vx<<vv^v<v>v^>^<v>x><^^vvxxx>>>^xvxv<>xxx^x>x>vv^v<<^^xvx>xv>^>^>^<^<^^>x>>v^>v^>xv<vx<>^^>^<<^<^>>x^xxvxv^v^x>v>>vvv>vv<vv<vxv^^<<v<^>vx<x^<^<^^x^^vx^xv^^xxv^<^^vvxv<x<^x>>vxx><x>xxxvxx><>^^<>v^^v<<<x^x^vxx^>v^v<>v<^>^v>v^xx<<<>xx<^<<>>x^>x^x<v<xv>x<vvvx^^<><v>>^^^<>^^<v^vx>x^^<<vv^xv<v><>xxxxv>>v^v^v<x>v>^x>>v>^x<<x>^x>><<^^<>>x>vxx<v<v>v^x^^^>x>vx<<^x"


//SOLUTION: 

//Split drone data into an array of strings
const splitDrone = droneData.split("")

//Empty array to store photographed locations (coordinates)
let locations = []

//Starting coordinates for drone locations; [lat, long]
let spot = [0, 0]

//Function check if coordinates have already been photographed, if not add to array of locations: 
function addLocation(newLocation) {
    for (j = 0; j < locations.length + 1; j++) {
        //Check for matching coordinates, break array if a match is found
        if (JSON.stringify(locations[j]) === JSON.stringify(newLocation)) {
            break;
        }
        //If end of array has been reached with no matching coordinates, add 'newLocation'
        if (j == locations.length) {
            locations.push(newLocation)
            break;
        }
    }
}

//Function to find photographed coordinates and update coordinates according to symbols
//When 'x', push location coordinates to locations array
function findLocation() {
    for (i = 0; i < splitDrone.length + 1; i++) {
        //Update longitude 
        if (splitDrone[i] === "^") {
            spot[0] = spot[0] + 1
        }
        if (splitDrone[i] === "v") {
            spot[0] = spot[0] - 1
        }
        //Update latitude
        if (splitDrone[i] === ">") {
            spot[1] = spot[1] + 1
        }
        if (splitDrone[i] === "<") {
            spot[1] = spot[1] - 1
        }
        //Check coordinates at 'x' 
        if (splitDrone[i] === "x") {
            let newLocation = [parseInt(spot[0]), parseInt(spot[1])]
            addLocation(newLocation)
        }
        //Console.log array of photographed coordinates
        //Console.log number of locations photographed at least once
        if (i === splitDrone.length) {
            console.log("Photographed billboard locations:", locations)
            console.log("Number of billboards photographed at least once: ", locations.length)
            break
        }
    }
}

findLocation()