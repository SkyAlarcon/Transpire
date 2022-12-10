const request = require("supertest");
const app = require("../app");

let athleteID1;
let athleteID2;
let athleteID3;
let athleteID4;
let athleteID5;
let athleteID6;
let athleteID7;
let athleteID8;
let athleteID9;
let athleteID10;
let athleteID11;
let athleteID12;
let athleteID13;
let athleteID14;
let athleteID15;
let athleteID16;
let athleteID17;
let athleteID18;
let athleteID19;
let athleteID20;
let dummyID;

let teamID1;
let teamID2;
let teamID3;
let teamID4;
let teamID5;
let teamID6;
let teamID7;
let teamID8;
let teamID9;
let teamID10;
let teamID11;
let teamDummy

let postID1
let postID2
let postID3
let postID4
let postID5
let postID6
let postID7
let postID8
let postID9
let postID10

let token = "bearer ";

describe("Create 20 athletes + Test Dummy", () => {
    test("Athlete 1", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete1",
            password: "athlete1",
            pronouns: ["she", "her"],
            email: "athlete1@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID1 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 2", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete2",
            password: "athlete2",
            pronouns: ["she", "her"],
            email: "athlete2@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID2 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 3", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete3",
            password: "athlete3",
            pronouns: ["she", "her"],
            email: "athlete3@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID3 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 4", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete4",
            password: "athlete4",
            pronouns: ["she", "her"],
            email: "athlete4@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID4 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 5", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete5",
            password: "athlete5",
            pronouns: ["she", "her"],
            email: "athlete5@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID5 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 6", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete6",
            password: "athlete6",
            pronouns: ["she", "her"],
            email: "athlete6@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID6 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 7", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete7",
            password: "athlete7",
            pronouns: ["she", "her"],
            email: "athlete7@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID7 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 8", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete8",
            password: "athlete8",
            pronouns: ["she", "her"],
            email: "athlete8@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID8 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 9", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete9",
            password: "athlete9",
            pronouns: ["she", "her"],
            email: "athlete9@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID9 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 10", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete10",
            password: "athlete10",
            pronouns: ["she", "her"],
            email: "athlete10@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID10 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 11", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete11",
            password: "athlete11",
            pronouns: ["she", "her"],
            email: "athlete11@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID11 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 12", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete12",
            password: "athlete12",
            pronouns: ["she", "her"],
            email: "athlete12@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID12 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 13", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete13",
            password: "athlete13",
            pronouns: ["she", "her"],
            email: "athlete13@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID13 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 14", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete14",
            password: "athlete14",
            pronouns: ["she", "her"],
            email: "athlete14@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID14 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 15", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete15",
            password: "athlete15",
            pronouns: ["she", "her"],
            email: "athlete15@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID15 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 16", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete16",
            password: "athlete16",
            pronouns: ["she", "her"],
            email: "athlete16@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID16 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 17", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete17",
            password: "athlete17",
            pronouns: ["she", "her"],
            email: "athlete17@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID17 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 18", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete18",
            password: "athlete18",
            pronouns: ["she", "her"],
            email: "athlete18@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID18 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 19", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete19",
            password: "athlete19",
            pronouns: ["she", "her"],
            email: "athlete19@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID19 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 20", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Athlete20",
            password: "athlete20",
            pronouns: ["she", "her"],
            email: "athlete20@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            athleteID20 = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
    test("Test Dummy", (done) => {
        request(app)
        .post("/athletes/new")
        .send({
            username: "Test Dummy",
            password: "testdummy",
            pronouns: ["she", "her"],
            email: "testdummy@transpire.com",
            sports: ["Cycling"]
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err,res) => {
            dummyID = res.body.savedAthlete._id
            if (err) return done(err);
            return done();
        });
    });
});

describe("Create Errors", () => {
    test("No username, password, email and sports", (done) => {
        request(app)
        .post("/athletes/new")
        .expect(400)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.missingInfo).toEqual(["username", "password", "email", "sports"]);
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
});

describe("Login for token", () => {
    test("Login", (done) => {
        request(app)
        .post(`/athletes/login`)
        .send({
            username: "Test Dummy",
            password: "testdummy"
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err,res) => {
            token += res.body.token;
            if (err) return done(err);
            return done();
        });
    });
});

describe("Update athletes info (error tests)", () => {
    test("Test Dummy - no token", (done) => {
        request(app)
        .patch(`/athletes/update/${dummyID}`)
        .send({
            username: "Athlete1",
            pronouns: ["he", "him", "they", "them"],
            sports: ["Bouldering", "Parkour"]
        })
        .expect(401)
        .expect("Content-Type", /html/)
        .expect(res => {
            expect(res.text).toBe("Invalid header, please contact support")
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    test("Test Dummy - used username", (done) => {
        request(app)
        .patch(`/athletes/update/${dummyID}`)
        .set("Authorization", token)
        .send({
            username: "Athlete1",
            pronouns: ["he", "him", "they", "them"],
            sports: ["Bouldering", "Parkour"]
        })
        .expect(400)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("Username already in use by another athlete")
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    test("Test Dummy - used email", (done) => {
        request(app)
        .patch(`/athletes/update/${dummyID}`)
        .set("Authorization", token)
        .send({
            email: "athlete1@transpire.com",
            pronouns: ["he", "him", "they", "them"],
            sports: ["Bouldering", "Parkour"]
        })
        .expect(400)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("Email already in use by another athlete")
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    test("Test Dummy - wrong ID", (done) => {
        request(app)
        .patch(`/athletes/update/6386abc4bfa4b645cc2e340e`)
        .set("Authorization", token)
        .send({
            pronouns: ["he", "him", "they", "them"],
            sports: ["Bouldering", "Parkour"]
        })
        .expect(404)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("No athlete found")
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    test("Test Dummy - Update Complete", (done) => {
        request(app)
        .patch(`/athletes/update/${dummyID}`)
        .set("Authorization", token)
        .send({
            username: "Test Dummy 2.0",
            email: "testdummy2.0@transpire.com",
            pronouns: ["he", "him", "they", "them"],
            sports: ["Bouldering", "Parkour"]
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("Athlete updated successfully")
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
});

describe("GET Methods (/find, /?query)", () => {
    test("Find Dummy by ID - no token", (done) => {
        request(app)
        .get(`/athletes/find/${dummyID}`)
        .expect(401)
        .expect("Content-Type", /html/)
        .expect(res => {
            expect(res.text).toBe("Invalid header, please contact support")
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    test("Find Dummy by ID - wrong ID", (done) => {
        request(app)
        .get(`/athletes/find/6386abc4bfa4b645cc2e340e`)
        .set("Authorization", token)
        .expect(404)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("No athlete found with ID")
        })
        .end((err,res) => {
            if (err) return done (err);
            return done();
        })
    });
    test("Find Dummy by ID - Find complete", (done) => {
        request(app)
        .get(`/athletes/find/${dummyID}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.athleteExists).toEqual({
                username: "Test Dummy 2.0",
                email: "testdummy2.0@transpire.com",
                pronouns: ["he", "him", "they", "them"],
                sports: ["Bouldering", "Parkour"],
                followers: [],
                following: [],
                teams: [],
                inbox: [],
                teamPosts: []
            })
        })
        .end((err,res) => {
            if (err) return done (err);
            return done();
        })
    });
});

describe("Test Dummy - Create team", () => {
    test("No name", (done) => {
        request(app)
        .post("/teams/new")
        .set("Authorization", token)
        .send({
            sports: ["Climbing"],
            adm: dummyID,
            friendlyOrExclusive: "exclusive"
        })
        .expect(500)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("Create no errors", (done) => {
        request(app)
        .post("/teams/new")
        .set("Authorization", token)
        .send({
            name: "Dummy Team",
            sports: ["Climbing"],
            adm: dummyID,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamDummy = res.body.savedTeam._id
            done();
        });
    });
});

describe("Athlete 1 ~ 20 - join Dummy Team", () => {
    test("A1", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID1
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A2", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID2
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A3", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID3
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A4", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID4
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A5", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID5
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A6", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID6
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A7", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID7
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A8", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID8
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A9", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID9
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A10", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID10
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A11", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID11
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A12", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID12
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A13", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID13
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A14", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID14
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A15", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID15
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A16", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID16
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A17", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID17
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A18", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID18
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A19", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID19
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A20", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID20
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe ("Athlete 11 ~ 20 - leave Dummy Team", () => {
    test("A11", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID11
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A12", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID12
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A13", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID13
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A14", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID14
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A15", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID15
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A16", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID16
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A17", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID17
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A18", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID18
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A19", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID19
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A20", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamDummy}`)
        .set("Authorization", token)
        .send({
            athleteID: athleteID20
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe("You left the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("Delete Dummy Team", () => {
    test("No ADM", (done) => {
        request(app)
        .delete(`/teams/delete/${teamDummy}`)
        .set("Authorization", token)
        .expect(403)
        .expect("Content-Type", /html/)
        .expect(res => {
            expect(res.text).toBe("You need to be an administrator do delete the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("Delete successful", (done) => {
        request(app)
        .delete(`/teams/delete/${teamDummy}`)
        .set("Authorization", token)
        .send({
            adm: dummyID
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("Team Dummy Team deleted")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("Create 10 teams with athlete 1", () => {
    test("Team 1", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 1",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID1 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 2", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 2",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID2 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 3", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 3",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID3 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 4", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 4",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID4 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 5", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 5",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID5 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 6", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 6",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID6 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 7", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 7",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID7 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 8", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 8",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID8 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 9", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 9",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID9 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 10", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 10",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID10 = res.body.savedTeam._id;
            done();
        });
    });
    test("Team 11 - error too much teams", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 1",
            sports: ["bike"],
            adm: athleteID1,
            friendlyOrExclusive: "exclusive"
        })
        .expect(403)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("Team 11", (done) => {
        request(app)
        .post('/teams/new')
        .set("Authorization", token)
        .send({
            name: "team 11",
            sports: ["bike"],
            adm: athleteID11,
            friendlyOrExclusive: "exclusive"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            teamID11 = res.body.savedTeam._id;
            done();
        });
    });
});

describe("Enter more than 10 teams", () => {
    test("T1", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T2", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID2}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T3", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID3}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T4", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID4}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T5", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID5}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T6", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID6}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T7", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID7}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T8", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID8}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T9", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID9}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T10", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID10}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T11", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID11}`)
        .send({athleteID: athleteID2})
        .set("Authorization", token)
        .expect(400)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("every1 joins T1 A3~A19", () => {
    test("A3", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID3})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A4", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID4})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A5", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID5})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A6", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID6})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A7", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID7})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A8", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID8})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A9", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID9})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A10", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID10})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A11", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID11})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A12", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID12})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A13", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID13})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A14", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID14})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A15", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID15})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A16", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID16})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A17", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID17})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A18", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID18})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A19", (done) => {
        request(app)
        .patch(`/teams/enterLeave/${teamID1}`)
        .set("Authorization", token)
        .send({athleteID: athleteID19})
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("You joined the team")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("Post in teams", () => {
    test("Post A 1", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID1,
            msg: "Athlete 1"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID1 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 2", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID2,
            msg: "Athlete 2"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID2 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 3", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID3,
            msg: "Athlete 3"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID3 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 4", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID4,
            msg: "Athlete 4"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID4 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 5", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID5,
            msg: "Athlete 5"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID5 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 6", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID6,
            msg: "Athlete 6"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID6 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 7", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID7,
            msg: "Athlete 7"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID7 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 8", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID8,
            msg: "Athlete 8"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID8 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 9", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID9,
            msg: "Athlete 9"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID9 = res.body.savedPost._id;
            done();
        });
    });
    test("Post A 10", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID10,
            msg: "Athlete 10"
        })
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            postID10 = res.body.savedPost._id;
            done();
        });
    });
    test("not in the team - A20", (done) => {
        request(app)
        .post(`/post/new/${teamID1}`)
        .set("Authorization", token)
        .send({
            opID: athleteID20,
            msg: "Athlete 20"
        })
        .expect(403)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("How many posts are in the team", () => {
    test("team Feed - 10 posts", (done) => {
        request(app)
        .get(`/teams/feed/${teamID1}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.posts.length).toBe(10)
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("ADM delete 5 posts [1~5]", () => {
    test("A1 delete post 1", (done) => {
        request(app)
        .delete(`/post/delete/${postID1}`)
        .set("Authorization", token)
        .send({
            admID: athleteID1,
            teamID: teamID1
        })
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A1 delete post 2", (done) => {
        request(app)
        .delete(`/post/delete/${postID2}`)
        .set("Authorization", token)
        .send({
            admID: athleteID1,
            teamID: teamID1
        })
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A1 delete post3", (done) => {
        request(app)
        .delete(`/post/delete/${postID3}`)
        .set("Authorization", token)
        .send({
            admID: athleteID1,
            teamID: teamID1
        })
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A1 delete post4", (done) => {
        request(app)
        .delete(`/post/delete/${postID4}`)
        .set("Authorization", token)
        .send({
            admID: athleteID1,
            teamID: teamID1
        })
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A1 delete post5", (done) => {
        request(app)
        .delete(`/post/delete/${postID5}`)
        .set("Authorization", token)
        .send({
            admID: athleteID1,
            teamID: teamID1
        })
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A2 delete post5 - error not adm", (done) => {
        request(app)
        .delete(`/post/delete/${postID6}`)
        .set("Authorization", token)
        .send({
            admID: athleteID2,
            teamID: teamID1
        })
        .expect(403)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("Update: How many posts are in the team", () => {
    test("team Feed - 5 posts", (done) => {
        request(app)
        .get(`/teams/feed/${teamID1}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.posts.length).toBe(5)
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("Update post and find by ID", () => {
    test("complete update", (done) => {
        request(app)
        .patch(`/post/edit/${postID6}`)
        .set("Authorization", token)
        .send({
            opID: athleteID6,
            msg: "updated post"
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msg).toBe("Post updated successfully")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("error update - not op", (done) => {
        request(app)
        .patch(`/post/edit/${postID6}`)
        .set("Authorization", token)
        .send({
            opID: athleteID7,
            msg: "not op"
        })
        .expect(403)
        .expect("Content-Type", /html/)
        .expect(res => {
            expect(res.text).toBe("Only the original poster can edit the post")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("Find post by ID", (done) => {
        request(app)
        .get(`/post/find/${postID6}`)
        .set("Authorization", token)
        .expect(200)
        .expect(res => {
            expect(res.body.postExists.message).toBe("updated post")
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("Delete post By OP", () => {
    test("A6 - P6", (done) => {
        request(app)
        .delete(`/post/delete/${postID6}`)
        .set("Authorization", token)
        .send({opID: athleteID6})
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A7 - P7", (done) => {
        request(app)
        .delete(`/post/delete/${postID7}`)
        .set("Authorization", token)
        .send({opID: athleteID7})
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A8 - P8", (done) => {
        request(app)
        .delete(`/post/delete/${postID8}`)
        .set("Authorization", token)
        .send({opID: athleteID8})
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A9 - P9", (done) => {
        request(app)
        .delete(`/post/delete/${postID9}`)
        .set("Authorization", token)
        .send({opID: athleteID9})
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A10 - P10", (done) => {
        request(app)
        .delete(`/post/delete/${postID10}`)
        .set("Authorization", token)
        .send({opID: athleteID10})
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("All posts deleted", () => {
    test("team Feed - 0 posts", (done) => {
        request(app)
        .get(`/teams/feed/${teamID1}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.posts.length).toBe(0)
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("send Private messages", () => {
    test("A1 -> A2", (done) => {
        request(app)
        .patch(`/athletes/message/${athleteID2}`)
        .send({
            senderID: athleteID1,
            msg: "A1 tp A2"
        })
        .set("Authorization", token)
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A1 -> A3", (done) => {
        request(app)
        .patch(`/athletes/message/${athleteID3}`)
        .send({
            senderID: athleteID1,
            msg: "A1 to A3"
        })
        .expect(200)
        .set("Authorization", token)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("A1 -> A4", (done) => {
        request(app)
        .patch(`/athletes/message/${athleteID4}`)
        .send({
            senderID: athleteID1,
            msg: "A1 to A4"
        })
        .expect(200)
        .set("Authorization", token)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("View messages", () => {
    test("A4 view A1 chat", (done) => {
        request(app)
        .get(`/athletes/message/${athleteID1}`)
        .send({senderID: athleteID4})
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(res => {
            expect(res.body.msgHistory.length).toBe(1)
        })
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("Team cleanup", () => {
    test("T1 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID1}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T2 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID2}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T3 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID3}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T4 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID4}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T5 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID5}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T6 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID6}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T7 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID7}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T8 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID8}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T9 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID9}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T10 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID10}`)
        .set("Authorization", token)
        .send({adm: athleteID1})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
    test("T11 delete", (done) => {
        request(app)
        .delete(`/teams/delete/${teamID11}`)
        .set("Authorization", token)
        .send({adm: athleteID11})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe("Athlete cleanup", () => {
    test("Athlete 1", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID1}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete1 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 2", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID2}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete2 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 3", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID3}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete3 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 4", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID4}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete4 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 5", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID5}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete5 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 6", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID6}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete6 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 7", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID7}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete7 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 8", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID8}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete8 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 9", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID9}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete9 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 10", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID10}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete10 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 11", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID11}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete11 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 12", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID12}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete12 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 13", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID13}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete13 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 14", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID14}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete14 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 15", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID15}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete15 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 16", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID16}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete16 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 17", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID17}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete17 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 18", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID18}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete18 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 19", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID19}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete19 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Athlete 20", (done) => {
        request(app)
        .delete(`/athletes/delete/${athleteID20}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Athlete20 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
    test("Test Dummy", (done) => {
        request(app)
        .delete(`/athletes/delete/${dummyID}`)
        .set("Authorization", token)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.msg).toBe(`Athlete Test Dummy 2.0 deleted`)
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
});

/*
describe("Test Model", () => {
    test("description", (done) => {
        request(app)

        .set("Authorization", token)
        .end((err,res) => {
            if (err) return done(err);
            done();
        });
    });
});
*/