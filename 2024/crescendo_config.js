var config_data = `
{
  "dataFormat": "tsv",
  "title": "FRC TEAM 818 SCOUTING",
  "page_title": "818/9558 Scouting",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Test",
      "code": "e",
      "type": "event",
      "defaultValue": "testtest",
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "HopperPreScout",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Notes Attempted",
      "code": "aaa",
      "type": "counter"
    },
     { "name": "Amp Notes Scored",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Notes Attempted",
      "code": "asa",
      "type": "counter"
    },
     { "name": "Speaker Notes Scored",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Auton Note Location",
      "code": "anl",
      "type": "clickable_image",
      "filename": "2024/AutonSelection.png",
      "dimensions": "5 5",
      "clickRestriction": "onePerBox",
      "allowableResponses": "1 3 5 6 8 10 11 13 15 18 23",
      "shape": "circle 5 black red true"
    },
    { "name": "Auton Note Score",
      "code": "anlconfirm",
      "type": "clickable_image",
      "filename": "2024/AutonSelection.png",
      "dimensions": "5 5",
      "clickRestriction": "onePerBox",
      "allowableResponses": "1 3 5 6 8 10 11 13 15 18 23",
      "shape": "circle 5 black green true"
    }
  ],
  "teleop": [
   { "name": "Amp Notes Attempted",
      "code": "taa",
      "type": "counter"
    },
    { "name": "Amp Notes Scored",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Notes Attempted",
      "code": "tsa",
      "type": "counter"
    },
    { "name": "Speaker Notes Scored",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Times Amplified",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Primarily Passing Notes",
      "code": "tpn",
      "type": "bool"
    },
    { "name": "Notes Passed",
      "code": "tns",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Stage Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Notes (>2)",
      "code": "dn",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
