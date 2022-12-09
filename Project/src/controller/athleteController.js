const athleteModel = require("../models/athleteModel");
const teamModel = require("../models/teamModel");
const messageModel = require("../models/messageModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const script = require("./scripts");

const createAtlhete = async (req, res) => {
    try {
        const {
            username,
            pronouns,
            password,
            email,
            sports
        } = req.body;
        const missingInfo = []
        if (!username) missingInfo.push("username");
        if (!password) missingInfo.push("password");
        if (!email) missingInfo.push("email");
        if (!sports) missingInfo.push("sports");
        if (missingInfo.length > 0) return res.status(400).json ({ msg: "Please add the following informations:", missingInfo });
        const passwordHashed = bcrypt.hashSync(password, 10);
        const newAtlhete = new athleteModel({
            username,
            pronouns,
            password: passwordHashed,
            email,
            sports
        });
        const savedAthlete = await newAtlhete.save();
        res.status(201).json({ msg: "New atlhete created:", savedAthlete });
    } catch (error) {
        res.status(500).json(error.message);
    };
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username) return res.status(400).json("Please enter an Username");
        const athleteExists = await athleteModel.findOne({ username: username });
        if (!athleteExists) return res.status(404).json({ msg: `${username} not found` });
        const isPasswordValid = bcrypt.compareSync(password, athleteExists.password);
        if (!isPasswordValid) return res.status(401).json({ msg: "Username or password incorrect" });
        const token = jwt.sign({ username: username }, SECRET);
        return res.status(200).send({ token });
    } catch (error) {
        res.status(500).json(error.message);
    };
};

const allAtlhetes = async (req, res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const atlheteAll = await athleteModel.find({}, ["username", "sports", "teams"])
        res.status(200).json({ atlheteAll });
    } catch (error) {
        res.status(500).json(error.message);
    };
};

const updateAtlhete = async (req, res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const {
            username,
            pronouns,
            email,
            sports
        } = req.body;
        if (username) {
            const isUsernameTaken = await athleteModel.findOne({ username: username }, "username");
            if (isUsernameTaken) return res.status(400).json({ msg: "Username already in use by another athlete" });
        };
        if (email) {
            const isEmailTaken = await athleteModel.findOne({ email: email }, "email");
            if (isEmailTaken) return res.status(400).json({ msg: "Email already in use by another athlete" });
        };
        const { id } = req.params;
        const athleteExists = await athleteModel.findByIdAndUpdate(id, {
            username,
            pronouns,
            email,
            sports
        });
        if (!athleteExists) return res.status(404).json({ msg: "No athlete found" });
        const updatedAthlete = await athleteModel.findById(athleteExists.id, ["username", "email", "sports"]);
        res.status(200).json({ msg: "Athlete updated successfully", updatedAthlete });
    } catch (error) {
        res.status(500).json(error.message);
    };
};

const findAthleteById = async (req, res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        if (!id) return res.status(400).send("Please enter an ID");
        const athleteExists = await athleteModel.findById(id, ["-password", "-_id", "-__v"]);
        if (!athleteExists) return res.status(404).json({ msg: `No athlete found with ID` });
        return res.status(200).json({ athleteExists });
    } catch (error) {
        res.status(500).json(error.message);
    };
};

const findAthleteByQuery = async (req, res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { name, sport, team } = req.query;
        if (name) {
            const allAtlhetes = await athleteModel.find({}, ["-__v", "-password"]);
            const findAthletes = [];
            allAtlhetes.forEach(athlete => {
                if (athlete.username.toLowerCase().includes(name.toLowerCase())) findAthletes.push(athlete);
            });
            if (findAthletes.length == 0) return res.status(404).json({ msg: `No athletes with the name ${name} found` });
            return res.status(200).json({ findAthletes });
        };
        if (team) {
            const allAtlhetes = await athleteModel.find({}, ["username", "teams"]).populate();
            const findAthletes = []
            allAtlhetes.forEach(athlete => {
                for (let index = 0; index < athlete.teams.length; index++) {
                    if (userTeam.name == team) {
                        findAthletes.push(athlete);
                        break;
                    };
                };
            });
            if (findTeams.length == 0) return res.status(404).send("No team found");
            return res.status(200).send(findTeams);
        }
        if (sport) {
            const athleteExists = await athleteModel.find({ sports: sport }, ["username", "sports", "teams"]);
            if (!athleteExists) return res.status(404).send("No athletes found");
            return res.status(200).send(athleteExists);
        };
        res.status(400).send("Please enter a name, team or sport");
    } catch (error) {
        res.status(500).json(error.message);
    };
};

const follow_Unfollow = async (req, res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const { followerID } = req.body;
        const athleteExists = await athleteModel.findById(id, ["username", "followers"]);
        if (!athleteExists) return res.status(404).send("No athlete found");
        const followerExists = await athleteModel.findById(followerID, ["following"]);
        if (!followerExists) return res.status(404).send("No follower found");
        let unfollowed = false
        for (let indexAthlete = 0; indexAthlete < athleteExists.followers.length; indexAthlete++) {
            if (athleteExists.followers[indexAthlete] == followerID) {
                athleteExists.followers.splice(indexAthlete, 1);
                await athleteModel.findByIdAndUpdate(id, { followers: athleteExists.followers });
                unfollowed = true;
                break;
            };
        };
        if (!unfollowed) {
            athleteExists.followers.push(followerID);
            await athleteModel.findByIdAndUpdate(id, { followers: athleteExists.followers });
            followerExists.following.push(id);
            await athleteModel.findByIdAndUpdate(followerID, { following: followerExists.following });
            return res.status(200).json({ msg: `Followed ${athleteExists.username}` })
        };
        for (let indexFollower = 0; indexFollower < followerExists.following.length; indexFollower++) {
            if (followerExists.following[indexFollower] == id) {
                followerExists.following.splice(indexFollower, 1);
                await athleteModel.findByIdAndUpdate(followerID, { following: followerExists.following });
                return res.status(200).json({ msg: `Unfollowed ${athleteExists.username}` });
            };
        };
        res.status(400).json({ msg: "We don't know what went wrong, please contact support for help" })
    } catch (error) {
        res.status(500).json(error.message);
    };
};

const deleteAthlete = async (req, res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const athleteExists = await athleteModel.findById(id, ['teams', 'followers', 'following', 'inbox']);
        if (!athleteExists) return res.status(404).send("No athlete found");
        const teamOnylOwner = []
        athleteExists.teams.forEach(async teamID => {
            const team = await teamModel.findById(teamID, ["name", "adm"]);
            if (team.adm.length == 1 && team.adm[0] == id) teamOnylOwner.push[team.name];
        });
        if (teamOnylOwner.length > 0) return res.status(400).json({ msg: "Please add another administrator or delete the following teams to proceed:", teamOnylOwner });
        athleteExists.teams.forEach(async teamID => {
            const team = await teamModel.findById(teamID, ["adm", "athletes"]);
            team.adm = script.RemoveIdByIndex(id, team.adm);
            team.athletes = script.RemoveIdByIndex(id, team.athletes);
            await teamModel.findByIdAndUpdate(teamID, { adm: team.adm, athletes: team.athletes });
        });
        athleteExists.followers.forEach(async followerID => {
            const follower = await athleteModel.findById(followerID, ["following"]);
            follower.following = script.RemoveIdByIndex(id, follower.following);
            await athleteModel.findByIdAndUpdate(followerID, { following: follower.following });
        });
        athleteExists.following.forEach(async followingID => {
            const following = await athleteModel.findById(followingID, ["followers"]);
            following.followers = script.RemoveIdByIndex(id, following.follower);
            await athleteModel.findByIdAndUpdate(followingID, { followers: following.followers });
        });

        athleteExists.inbox.forEach(async msgID => {
            const msgExists = await messageModel.findById(msgID, "athleteIDs");
            
        })

        const deletedAthlete = await athleteModel.findByIdAndDelete(id);
        res.status(200).json({ msg: `Athlete ${deletedAthlete.username} deleted` });
    } catch (error) {
        res.status(500).json(error.message);
    };
}; //TO ADD MESSAGE DELETION

const athleteFeed = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const athleteExists = await athleteModel.findById(id, "teamPosts");
        if (!athleteExists) return res.status(404).send("No athlete found");
        res.status(200).json({ feed: athleteExists.teamPosts });
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const sendMessage = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const recieverExists = await athleteModel.findById(id, ["username", "inbox"]);
        if (!recieverExists) return res.status(404).send("No reciever found");
        const { senderID, msg } = req.body;
        const senderExists = await athleteModel.findById(senderID, ["username", "inbox"]);
        if (!senderExists) return res.status(404).send("No sender found");
        const messageExists = await messageModel.find({athleteID: id, athleteID: senderID});
        const trimmedMsg = msg.trim();
        const newDM = [`${senderExists}\n`+ trimmedMsg];
        if (!messageExists) {
            const newMessage = new messageModel({
                athleteIDs: [senderID, id],
                message: newDM 
            });
            const savedMessage = await newMessage.save();
            recieverExists.inbox.push(savedMessage.id);
            await athleteModel.findByIdAndUpdate(id, {inbox: recieverExists.inbox});
            senderExists.inbox.push(savedMessage.id);
            await athleteModel.findByIdAndUpdate(senderID, {inbox: senderExists.inbox});
        };
        if (messageExists) {
            messageExists.messages.push(newDM);
            await messageModel.findByIdAndUpdate(messageExists.id, {messages: newDM});
        };
        res.status(200).json({ msg: `Message sent to ${recieverExists.username}`});
    } catch(error) {
        res.status(500).json(error.message);
    };
};

module.exports = {
    createAtlhete,
    login,
    allAtlhetes,
    updateAtlhete,
    findAthleteById,
    findAthleteByQuery,
    follow_Unfollow,
    deleteAthlete,
    athleteFeed,
    sendMessage
}