const athleteModel = require("../models/athleteModel");
const teamModel = require("../models/teamModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET

const script = require("./scripts");

const createAtlhete = async (req,res) => {
    try {
        const {
            username,
            pronouns,
            password,
            email,
            sports
        } = req.body;
        const passwordHashed = bcrypt.hashSync(password, 10);
        const newAtlhete = new athleteModel({
            username,
            pronouns,
            password: passwordHashed,
            email,
            sports
        });
        const savedAthlete = await newAtlhete.save();
        res.status(201).json({ msg: "New atlhete created:", savedAthlete});
    } catch (error){
        res.status(500).json(error.message);
    };
};

const login = async (req,res) => {
    try {
        const { username, password } = req.body;
        if(!username) return res.status(400).json("Please enter an Username");
        const athleteExists = await athleteModel.findOne({ username: username });
        if(!athleteExists) return res.status(404).json({ msg: `${username} not found` });
        const isPasswordValid = bcrypt.compareSync(password, athleteExists.password);
        if (!isPasswordValid) return res.status(401).json({ msg: "Username or password incorrect" });
        const token = jwt.sign({ username: username }, SECRET);
        return res.status(200).send({token});
    } catch(error){
        res.status(500).json(error.message);
    };
};

const allAtlhetes = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader, SECRET);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const atlheteAll = await athleteModel.find({}, ["username", "sports", "teams"])
        res.status(200).json({atlheteAll});
    } catch(error){
        res.status(500).json(error.message);
    };
};

const updateAtlhete = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader, SECRET);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const {
            username,
            pronouns,
            email,
            sports
        } = req.body;
        if (username){
            const isUsernameTaken = await athleteModel.findOne({ username: username }, "username");
            if(isUsernameTaken) return res.status(400).json({ msg: "Username already in use by another athlete" });
        };
        if(email){
            const isEmailTaken = await athleteModel.findOne({ email: email }, "email");
            if(isEmailTaken) return res.status(400).json({ msg: "Email already in use by another athlete" });
        };
        const { id } = req.params;
        const athleteExists = await athleteModel.findByIdAndUpdate(id, {
            username,
            pronouns,
            email,
            sports
        });
        if(!athleteExists) return res.status(404).json({ msg: "No athlete found" });
        const updatedAthlete = await athleteModel.findById(athleteExists.id, ["username", "email", "sports"]);
        res.status(200).json({ msg: "Athlete updated successfully", updatedAthlete});
    } catch(error){
        res.status(500).json(error.message);
    };
};

const findAthleteById = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader, SECRET);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        if (!id) return res.status(400).send("Please enter an ID");
        const athleteExists = await athleteModel.findById(id, ["-password", "-_id", "-__v"]);
        if (!athleteExists) return res.status(404).json({ msg: `No athlete found with ID`});
        return res.status(200).json({athleteExists});
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const findAthleteByQuery = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader, SECRET);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { name, sport, team } = req.query;
        if (name){
            const allAtlhetes = await athleteModel.find({}, ["-__v", "-password"]);
            const findAthletes = [];
            allAtlhetes.forEach(athlete => {
                if (athlete.username.toLowerCase().includes(name.toLowerCase())) findAthletes.push(athlete);
            });
            if (findAthletes.length == 0) return res.status(404).json({ msg: `No athletes with the name ${name} found`});
            return res.status(200).json({findAthletes}); 
        };
        if(team){
            const allAtlhetes = await athleteModel.find({}, ["username", "teams"]).populate();
            const findAthletes = []
            allAtlhetes.forEach(athlete => {
                for (let index = 0; index < athlete.teams.length; index++){
                    if (userTeam.name == team) {
                        findAthletes.push(athlete);
                        break;
                    };
                };
            });
            if(findTeams.length == 0) return res.status(404).send("No team found");
            return res.status(200).send(findTeams);
        }
        if(sport){
            const athleteExists = await athleteModel.find({sports: sport}, ["username", "sports", "teams"]);
            if (!athleteExists) return res.status(404).send("No athletes found");
            return res.status(200).send(athleteExists);
        };
        res.status(400).send("Please enter a name, team or sport");
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const deleteAthlete = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader, SECRET);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const athleteExists = await athleteModel.findById(id);
        if(!athleteExists) return res.status(404).send("No athlete found");
        const teamOwner = []
        athleteExists.teams.forEach(team => {
            if (team.adm.length == 1 && team.adm[0] == id) teamOwner.push(team);
        });
        if (teamOwner.length > 0) return res.status(400).send("Please assign another Administrator to the following teams:", teamOwner);
        athleteExists.teams.forEach(async team => {
            const athletesList = await teamModel.findById(team._id, ["athletes"])
            for (let index = 0; index < athletesList.length; index++){
                if (athletesList[index].toString().includes(id)){
                    athletesList.splice(index, 1);
                    break;
                };
            };
        });
        const deletedAthlete = await athleteModel.findByIdAndDelete(id);
        res.status(200).json({ msg: `Athlete ${deletedAthlete.username} deleted` });
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
    deleteAthlete
}