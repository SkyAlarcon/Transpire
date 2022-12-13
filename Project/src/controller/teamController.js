const atlheteModel = require("../models/athleteModel");
const teamModel = require("../models/teamModel");
const postModel = require("../models/postModel");

const script = require("./scripts");

const createTeam = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { 
            name,
            sports,
            description,
            socials,
            adm,
            friendlyOrExclusive
        } = req.body;
        const athleteExists = await atlheteModel.findById(adm, ["teams"])
        if (!athleteExists) return res.status(404).send("No Athlete found to be the first administrator of the team");
        if (athleteExists.teams.length > 9) return res.status(403).json({ msg: "Cannot enter or create another team" });
        const newTeam = new teamModel({
            name,
            sports,
            description,
            socials,
            adm: [adm],
            athletes: [adm],
            friendlyOrExclusive
        });
        const savedTeam = await newTeam.save();
        athleteExists.teams.push(savedTeam.id);
        await atlheteModel.findByIdAndUpdate(adm, {teams: athleteExists.teams});
        res.status(201).json({ msg: "New team created:", savedTeam });
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const allTeams = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const allTeamsList = await teamModel.find({}, ["name", "sports", "description", "athletes"]);
        res.status(200).json(allTeamsList);
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const updateTeam = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const { name, sports, description, socials, adm } = req.body
        const findTeam = await teamModel.findById(id, ["name","adm"]);
        if (!findTeam) return res.status(404).send("No team found with ID");
        if (!findTeam.adm.toString().includes(adm)) res.status(403).send(`Please contact an administrator from ${findTeam.name} to update the information`);
        await teamModel.findByIdAndUpdate(id, { name, sports, description, socials });
        res.status(200).json({ msg: "Team updated successfully" });
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const addRemoveAdministrator = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const teamExists = await teamModel.findById(id, ["adm", "athletes"]);
        if(!teamExists) return res.status(404).send(`No team found with ID ${id}`);
        const { adm, newAdmID } = req.body;
        if (!teamExists.adm.toString().includes(adm)) return res.status(403).send("Please contact a team Administrator to add or remove administrators");
        const newAdm = await atlheteModel.findById(newAdmID, ["_id", "username"]);
        if (!newAdm) return res.status(404).json({ msg: "No athlete found to remove or add as administrator"});
        if (!teamExists.athletes.toString().includes(newAdmID)) return res.status(400).json({ msg: "Can't add an athlete that is not in the team" });
        let isAdm = false
        let msg = "Could not add nor remove an administrator";
        for (let index = 0; index < teamExists.adm.length; index++){
            if (teamExists.adm[index] == newAdmID) {
                teamExists.adm.splice(index, 1);
                isAdm = true;
                msg = `Administrator ${newAdm.username} removed`;
            };
        };
        if (!isAdm) {
            teamExists.adm.push(newAdmID);
            msg = `Administrator ${newAdm.username} added`;
        };
        await teamModel.findByIdAndUpdate(id, {adm: teamExists.adm});
        res.status(200).json({ msg: msg });
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const findTeamById = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const findTeam = await teamModel.findById(id, ["id", "athletes", "name", "description", "sports", "friendlyOrExclusive"]);
        if(!findTeam) return res.status(404).send(`No team found with ID ${id}`);
        res.status(200).json({findTeam});
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const findTeamByQuery = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { name, sports, trans } = req.query;
        if (name){
            const allTeams = await teamModel.find({},["name", "sports", "description", "friendlyOrExclusive"]);
            const findTeams = [];
            allTeams.forEach(team => {
                if (team.name.toLowerCase().includes(name.toLowerCase())) findTeams.push(team);
            });
            if (findTeams.length == 0) return res.status(404).json({msg: "No team found"});
            return res.status(200).json({findTeams});
        };
        if (sports){
            const findTeams = await teamModel.find({sports: sports}, ["name", "sports", "friendlyOrExclusive", "description"]);
            if(findTeams.length == 0) return res.status(404).json({msg: "No team found"});
            return res.status(200).json({findTeams});
        };
        if (trans){
            const findTeams = await teamModel.find({friendlyOrExclusive: trans}, ["name", "sports", "friendlyOrExclusive", "description"]);
            if(findTeams.length == 0) return res.status(404).json({msg: "No team found"});
            return res.status(200).json({findTeams});
        };
        res.status(400).send("Please enter a name, sport or inclusiveness");
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const removeAthleteFromTeam = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const teamExists = await teamModel.findById(id, ["adm", "athletes"]);
        if(!teamExists) return res.status(404).send("No team found");
        const { adm, athleteID } = req.body;
        if (!teamExists.adm.toString().includes(adm)) return res.status(403).send(`Only an administrator can remove athletes`);
        if (!teamExists.athletes.toString().includes(athleteID)) return res.status(404).send("Athlete not found in the team");
        if (teamExists.adm.toString().includes(athleteID)) teamExists.adm = script.RemoveIdByIndex(athleteID, teamExists.adm);
        teamExists.athletes = script.RemoveIdByIndex(athleteID, teamExists.athletes);
        await teamModel.findByIdAndUpdate(id, {athletes: teamExists.athletes, adm: teamExists.adm});
        res.status(200).json({ msg: "Athlete removed from the team" });
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const enter_LeaveTeam = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const teamExists = await teamModel.findById(id, ["athletes", "adm"]);
        if(!teamExists) return res.status(404).send("No team found");
        const { athleteID } = req.body;
        const athleteExists = await atlheteModel.findById(athleteID, ["_id", "teams"])
        if (!athleteExists) return res.status(404).json ( { msg: "No athlete found" } )
        let msg = "Can not enter more than 10 teams";
        let joinedTeam = false;
        athleteExists.teams.forEach(teamID => {
            if (teamID == id) joinedTeam = true;
        });
        if (!joinedTeam && athleteExists.teams.length < 10){
            teamExists.athletes.push(athleteID);
            await teamModel.findByIdAndUpdate(id, {athletes: teamExists.athletes});
            athleteExists.teams.push(id);
            await atlheteModel.findByIdAndUpdate(athleteID, { teams: athleteExists.teams });
            msg = "You joined the team";
            return res.status(200).json({ msg: msg });
        };
        if (joinedTeam){
            athleteExists.teams = script.RemoveIdByIndex(id, athleteExists.teams);
            await atlheteModel.findByIdAndUpdate(athleteID, {teams: athleteExists.teams })
            teamExists.athletes = script.RemoveIdByIndex(athleteID, teamExists.athletes);
            teamExists.adm = script.RemoveIdByIndex(id, teamExists.adm);
            await teamModel.findByIdAndUpdate(id, {athletes: teamExists.athletes, adm: teamExists.adm});
            msg = "You left the team";
            return res.status(200).json({ msg: msg });
        };
        res.status(400).json({msg:msg});  
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const deleteTeam = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const teamExists = await teamModel.findById(id, ["adm","athletes", "name", "posts"]);
        if (!teamExists) return res.status(404).send("Team not found");
        const { adm } = req.body;
        if (!teamExists.adm.toString().includes(adm)) return res.status(403).send("You need to be an administrator do delete the team");
        for (let athleteIndex = 0; athleteIndex < teamExists.athletes.length; athleteIndex++) {
            const athlete = await atlheteModel.findById(teamExists.athletes[athleteIndex], ["teams", "teamPosts"]);
            athlete.teams = script.RemoveIdByIndex(id, athlete.teams);
            const postsIdToDelete = await postModel.find({teamID: id, athleteOpID: athlete.id},"id");
            postsIdToDelete.forEach(idToDelete => {
                athlete.teamPosts = script.RemoveIdByIndex(idToDelete.id, athlete.teamPosts);
            });
            await atlheteModel.findByIdAndUpdate(athlete.id, {"teams": athlete.teams,"teamPosts": athlete.teamPosts});
        };
        teamExists.posts.forEach(async postID => await postModel.findByIdAndDelete(postID))
        await teamModel.findByIdAndDelete(id)
        res.status(200).json({ msg: `Team ${teamExists.name} deleted` })
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const teamFeed = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const teamExists = await teamModel.findById(id, ["posts"]);
        if (!teamExists) return res.status(404).send("Team not found");
        const teamFeed = await postModel.find({teamID: id});
        res.status(200).json({ posts: teamFeed });
    } catch(error) {
        res.status(500).json(error.message);
    };
};

module.exports = {
    createTeam,
    allTeams,
    updateTeam,
    addRemoveAdministrator,
    findTeamById,
    findTeamByQuery,
    deleteTeam,
    removeAthleteFromTeam,
    enter_LeaveTeam,
    teamFeed
};