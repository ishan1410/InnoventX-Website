 var data = {
     "id": 1,
     "name": "Why Robotics",
     "type": "Root",
     "description": "Why children should learn robotics in this Era",
     "children": [{
             "id": 2,
             "name": "Parents",
             "type": "Type",
             "description": "Reason Why Your Children Should Learn Robotics?",
             "children": [{
                     "id": 3,
                     "name": "Point 1",
                     "type": "Organism",
                     "description": "Robotics programs develop problem-solving skills and creativity",
                     "children": []
                 },
                 {
                     "id": 4,
                     "name": "Point 2",
                     "type": "Organism",
                     "description": "Robotics teaches science and math concepts",
                     "children": []
                 },
                 {
                     "id": 5,
                     "name": "Point 3",
                     "type": "Organism",
                     "description": "Robotics is fun",
                     "children": []
                 },
                 {
                     "id": 6,
                     "name": "Point 4",
                     "type": "Organism",
                     "description": "An Introduction to Programming",
                     "children": []
                 },
                 {
                     "id": 7,
                     "name": "Point 5",
                     "type": "Organism",
                     "description": "Robotics programming builds self-confidence",
                     "children": []
                 },
                 {
                     "id": 8,
                     "name": "Point 6",
                     "type": "Organism",
                     "description": "Guarantees your children’s employment when they grow up",
                     "children": []
                 }
             ]
         },
         {
             "id": 9,
             "name": "Schools",
             "type": "Type",
             "description": "Why it is important to teach robotics in schools? ",
             "children": [{
                     "id": 10,
                     "name": "Point 1",
                     "type": "Organism",
                     "description": "Creative thinking",
                     "children": []
                 },
                 {
                     "id": 11,
                     "name": "Point 2",
                     "type": "Organism",
                     "description": "Engagement",
                     "children": []
                 },
                 {
                     "id": 12,
                     "name": "Point 3",
                     "type": "Organism",
                     "description": "Preparedness",
                     "children": []
                 },
                 {
                     "id": 13,
                     "name": "Point 4",
                     "type": "Organism",
                     "description": "Programming skills",
                     "children": []
                 },
                 {
                     "id": 14,
                     "name": "Point 5",
                     "type": "Organism",
                     "description": "Perseverance",
                     "children": []
                 }
             ]
         },
         {
             "id": 15,
             "name": "Students",
             "type": "Type",
             "description": "Why learning robotics at a young age will benefit you? ",
             "children": [{
                     "id": 16,
                     "name": "Point 1",
                     "type": "Organism",
                     "description": "Engagement",
                     "children": []
                 },
                 {
                     "id": 17,
                     "name": "Point 2",
                     "type": "Organism",
                     "description": "Teamwork",
                     "children": []
                 },
                 {
                     "id": 18,
                     "name": "Point 3",
                     "type": "Organism",
                     "description": "Creative Thinking",
                     "children": []
                 },
                 {
                     "id": 19,
                     "name": "Point 4",
                     "type": "Organism",
                     "description": "Programming skills",
                     "children": []
                 },
                 {
                     "id": 20,
                     "name": "Point 5",
                     "type": "Organism",
                     "description": "Perseverance",
                     "children": []
                 },
                 {
                     "id": 21,
                     "name": "Point 6",
                     "type": "Organism",
                     "description": "Prepares You For Future",
                     "children": []
                 }
             ]
         }
     ]
 };

 var treePlugin = new d3.mitchTree.boxedTree()
     .setData(data)
     .setElement(document.getElementById("visualisation"))
     .setIdAccessor(function(data) {
         return data.id;
     })
     .setChildrenAccessor(function(data) {
         return data.children;
     })
     .setBodyDisplayTextAccessor(function(data) {
         return data.description;
     })
     .setTitleDisplayTextAccessor(function(data) {
         return data.name;
     })
     .initialize();