const request = require("supertest");
const app = require("../app");

let athleteID1;
let athleteID2;
let athleteID3;

let teamID1;
let teamID2;

let token = "bearer ";

console.log ("----------------API TEST----------------")
describe("First Athlete - create, login, getAll, Find [ID]", () => {
    test("Post /athletes/new", (done) => {
        request(app)
        .post("/transpire/athletes/new")
        .send({
            username: "Sky",
            password: "sky",
            pronouns: ["she", "her"],
            email: "sky@doceu.com",
            sports: ["Cycling", "Parkour"]
        })
        .expect(201)
        .end((err, res) => {
            if(err) return done(err);
            athleteID1 = res.body.savedAthlete._id;
            return done();
        });
    });
    test("Post /athletes/login", (done) => {
        request(app)
        .post("/transpire/athletes/login")
        .expect("Content-Type", /json/)
        .send({
            username: "Sky",
            password: "sky"
        })
        .expect(200)
        .end((err, res) => {
            if(err) return done(err);
            token += res.body.token;
            return done();
        });
    });
    test("Get /athletes/all", (done) => {
        request(app)
        .get("/transpire/athletes/all")
        .set("Authorization", token )
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.lenght).not.toBe(0);
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    test("Get /athletes/find/:id", (done) => {
        request(app)
        .get(`/transpire/athletes/find/${athleteID1}`)
        .set("Authorization", token )
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.findAthlete).toEqual({"email": "sky@doceu.com", "followers": [], "following": [], "pronouns": ["she", "her"], "sports": ["Cycling", "Parkour"], "teams": [], "username": "Sky"})
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
});

describe("Second athlete - Create, Update, Find [Query]", () => {
    test("Post /athletes/new", (done) => {
        request(app)
        .post("/transpire/athletes/new")
        .send({
            username: "Test",
            password: "test",
            pronouns: ["he", "him"],
            email: "test@doceu.com",
            sports: ["Cycling", "Bouldering"]
        })
        .expect(201)
        .end((err, res) => {
            if(err) return done(err);
            athleteID2 = res.body.savedAthlete._id;
            return done();
        });
    });
    test ("Patch /athletes/update - 400", (done) => {
        request(app)
        .patch(`/transpire/athletes/update/${athleteID2}`)
        .set("Authorization", token )
        .send({
            username: "Sky",
            sports: ["Swimming", "Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(400)
        .expect((res) => {
            expect(res.body.msg).toBe("Username already in use by another athlete")
        })
        .end((err, res) => {
            if(err) return done(err);
            return done();
        });
    });
    test ("Patch /athletes/update - 200", (done) => {
        request(app)
        .patch(`/transpire/athletes/update/${athleteID2}`)
        .set("Authorization", token )
        .send({
            username: "Test Updated",
            sports: ["Swimming", "Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.updatedAthlete).toEqual({
                "_id": athleteID2,
                "email": "test@doceu.com",
                "sports": ["Swimming", "Cycling"],
                "username": "Test Updated"
            })
        })
        .end((err, res) => {
            if(err) return done(err);
            return done();
        });
    });
    
});

describe("Third athlete - Create", () => {
    test("Post /athletes/new", (done) => {
        request(app)
        .post("/transpire/athletes/new")
        .send({
            username: "Sky3",
            password: "sky3",
            pronouns: ["they", "them"],
            email: "sky3@doceu.com",
            sports: ["Swimming", "Walking"]
        })
        .expect(201)
        .end((err, res) => {
            if(err) return done(err);
            athleteID3 = res.body.savedAthlete._id;
            return done();
        });
    });
    test("Get /athletes/query[name]", (done) => {
        request(app)
        .get(`/transpire/athletes/?name=Sky`)
        .set("Authorization", token )
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.findAthletes).toEqual([
                {
                  _id: athleteID1,
                  username: 'Sky',
                  pronouns: [ 'she', 'her' ],
                  email: 'sky@doceu.com',
                  sports: [ 'Cycling', 'Parkour' ],
                  teams: [],
                  following: [],
                  followers: []
                },
                {
                  _id: athleteID3,
                  username: 'Sky3',
                  pronouns: [ 'they', 'them' ],
                  email: 'sky3@doceu.com',
                  sports: [ 'Swimming', 'Walking' ],
                  teams: [],
                  following: [],
                  followers: []
                }
              ])
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
});

describe("First team - Create, Find, Enter/Leave team, Update", () => {
    test("CREATE Team 1 /teams/new", (done) => {
        request(app)
        .post(`/transpire/teams/new`)
        .set("Authorization", token)
        .expect("Content-Type", /json/)
        .send({
            name: "Team Testing",
            sports: ["Cycling"],
            description: "First team to be created",
            socials: ["insta", "tiktok"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if(err) return done(err);
            teamID1 = res.body.savedTeam._id
            return done();
        });
    });
    test("GET all /teams/all", (done) => {
        request(app)
        .get("/transpire/teams/all")
        .set("Authorization", token)
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual([
                {
                    "_id": teamID1,
                    "name": "Team Testing",
                    "sports": [
                        "Cycling"
                    ],
                    "description": "First team to be created"
                }
            ]);
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("PATCH Update info /teams/update/:id", (done) => {
        request(app)
        .patch(`/transpire/teams/update/${teamID1}`)
        .set("Authorization", token)
        .send({
            name: "Team updated",
            sports: ["Cycling", "Climbing"],
            description: "Team updated info",
            adm: athleteID1
        })
        .expect(200)
        .expect((res) => {
            expect(res.body).toBe("Team updated successfully");
        })
        .end((err,res) => {
            if(err) return done(err);
            return done();
        });
    });
    test("GET Find ID Team 1 /teams/find/:id", (done) => {
        request(app)
        .get(`/transpire/teams/find/${teamID1}`)
        .set("Authorization", token)
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.findTeam).toEqual({
                "_id": teamID1,
                "name": "Team updated",
                "sports": ["Cycling", "Climbing"],
                "description": "Team updated info",
                "athletes": [athleteID1],
                "friendlyOrExclusive": "exclusive"
            });
        })
        .end ((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
});

describe("DELETE Teams and Athletes", () => {
    test("DELETE Team 1 /teams/delete/:id", (done) => {
        request(app)
        .delete(`/transpire/teams/delete/${teamID1}`)
        .set("Authorization", token)
        .send({"adm": athleteID1})
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.msg).toBe("Team Team updated deleted")
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Delete ATLETA 1 /athletes/delete/:id", (done) => {
        request(app)
        .delete(`/transpire/athletes/delete/${athleteID1}`)
        .set("Authorization", token)
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.msg).toBe("Athlete Sky deleted");        
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Delete ATLETA 2 /athletes/delete/:id", (done) => {
        request(app)
        .delete(`/transpire/athletes/delete/${athleteID2}`)
        .set("Authorization", token)
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.msg).toBe("Athlete Test Updated deleted");        
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Delete ATLETA 3 /athletes/delete/:id", (done) => {
        request(app)
        .delete(`/transpire/athletes/delete/${athleteID3}`)
        .set("Authorization", token)
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.msg).toBe("Athlete Sky3 deleted");        
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
});