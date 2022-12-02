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
let teamID12;
let teamID13;
let teamID14;
let teamID15;

let token = "bearer ";

describe("Create 20 athletes + Test Dummy", () => {
    test("Athlete 1", (done) => {
        request(app)
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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
        .post("/transpire/athletes/new")
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

describe("Login for token", () => {
    test("Login", (done) => {
        request(app)
        .post(`/transpire/athletes/login`)
        .send({
            username: "Athlete1",
            password: "athlete1"
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
        .patch(`/transpire/athletes/update/${dummyID}`)
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
        .patch(`/transpire/athletes/update/${dummyID}`)
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
        .patch(`/transpire/athletes/update/${dummyID}`)
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
        .patch(`/transpire/athletes/update/6386abc4bfa4b645cc2e340e`)
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
        .patch(`/transpire/athletes/update/${dummyID}`)
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
        .get(`/transpire/athletes/find/${dummyID}`)
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
        .get(`/transpire/athletes/find/6386abc4bfa4b645cc2e340e`)
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
        .get(`/transpire/athletes/find/${dummyID}`)
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
                teams: []
            })
        })
        .end((err,res) => {
            if (err) return done (err);
            return done();
        })
    });
})

describe("DB cleanup", () => {
    test("Athlete 1", (done) => {
        request(app)
        .delete(`/transpire/athletes/delete/${athleteID1}`)
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
        .delete(`/transpire/athletes/delete/${athleteID2}`)
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
        .delete(`/transpire/athletes/delete/${athleteID3}`)
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
        .delete(`/transpire/athletes/delete/${athleteID4}`)
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
        .delete(`/transpire/athletes/delete/${athleteID5}`)
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
        .delete(`/transpire/athletes/delete/${athleteID6}`)
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
        .delete(`/transpire/athletes/delete/${athleteID7}`)
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
        .delete(`/transpire/athletes/delete/${athleteID8}`)
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
        .delete(`/transpire/athletes/delete/${athleteID9}`)
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
        .delete(`/transpire/athletes/delete/${athleteID10}`)
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
        .delete(`/transpire/athletes/delete/${athleteID11}`)
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
        .delete(`/transpire/athletes/delete/${athleteID12}`)
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
        .delete(`/transpire/athletes/delete/${athleteID13}`)
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
        .delete(`/transpire/athletes/delete/${athleteID14}`)
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
        .delete(`/transpire/athletes/delete/${athleteID15}`)
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
        .delete(`/transpire/athletes/delete/${athleteID16}`)
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
        .delete(`/transpire/athletes/delete/${athleteID17}`)
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
        .delete(`/transpire/athletes/delete/${athleteID18}`)
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
        .delete(`/transpire/athletes/delete/${athleteID19}`)
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
        .delete(`/transpire/athletes/delete/${athleteID20}`)
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
        .delete(`/transpire/athletes/delete/${dummyID}`)
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