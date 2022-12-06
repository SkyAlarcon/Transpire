const atlheteModel = require("../models/athleteModel");
const teamModel = require("../models/teamModel");
const postModel = require("../models/postModel");

const script = require("./scripts");

const newPost = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const { opId, msg } = req.body;
        const teamExists = await teamModel.findById(id,["athletes", "posts"]);
        if (!teamExists) return res.status(404).json({ msg: "No team found to post" });
        const athleteExists = await atlheteModel.findById(opId, ["teams", "teamPosts"]);
        if(!athleteExists) return res.status(404).json({ msg: "No athlete found" });
        let athleteJoinedTeam = false;
        for (let teamIdIndex = 0; teamIdIndex < athleteExists.teams.length; teamIdIndex++){
            if (athleteExists.teams[teamIdIndex] == id){
                athleteJoinedTeam = true;
                break;
            };
        };
        if (!athleteJoinedTeam) return res.status(403).json({ msg: "You need to join the team before posting" });
        if (!msg) return res.status(400).json({ msg: "The post can't be empty" });
        const newPost = new postModel({
            athleteOpID: opId,
            teamID: id,
            message: msg
        });
        const savedPost = await newPost.save();
        teamExists.posts.push(savedPost.id);
        await teamModel.findByIdAndUpdate(id, {posts: teamExists.posts});
        athleteExists.teamPosts.push(savedPost.id);
        await atlheteModel.findByIdAndUpdate(opId, {teamPosts: athleteExists.teamPosts});
        res.status(201).json({ msg: "New post created", savedPost});
    } catch(error) {
        res.status(500).json(error.message);
    };
};

const deletePost = async (req,res) => {
    try {
        const authHeader = req.get("Authorization");
        const BlockAccess = script.TokenVerifier(authHeader);
        if (BlockAccess) return res.status(401).send("Invalid header, please contact support");
        const { id } = req.params;
        const postExists = await postModel.findById(id);
        if (!postExists) return res.status(404).send("Post not found");
        const { admID, opID, teamID } = req.body;
        if (opID){
            const athleteOP = await atlheteModel.findById(opID, "teamPosts");
            if (!athleteOP) return res.status(404).send("No original poster found");
            if (postExists.athleteOpID != opID) return res.status(403).send("Only the original poster or an administrator from the team where it was posted can delete the post");
            const team = await teamModel.findById(postExists.teamID, "posts");
            team.posts = script.RemoveIdByIndex(id, team.posts);
            await teamModel.findByIdAndUpdate(postExists.teamID, {posts: team.posts});
            athleteOP.teamPosts = script.RemoveIdByIndex(id, athleteOP.teamPosts);
            await atlheteModel.findByIdAndUpdate(opID, {teamPosts: athleteOP.teamPosts});
            await postModel.findByIdAndDelete(id);
            return res.status(200).send("Deleted post successfully");
        };
        if (teamID){
            const teamExists = await teamModel.findById(teamID, ["adm", "posts"]);
            if (!teamExists) return res.status(404).send("No team found")
            if (!teamExists.adm.toString().includes(admID)) return res.status(403).send("Only administrators or the original poster can delete a post");
            if (teamID != postExists.teamID) return res.status(403).send("Can only delete posts on teams you administrate");
            teamExists.post = script.RemoveIdByIndex(id, teamExists.posts);
            await teamModel.findByIdAndUpdate(id, {posts: team.posts});
            const athleteOP = await atlheteModel.findById(postExists.athleteOpID, "teamPosts");
            athleteOP.teamPosts = script.RemoveIdByIndex(id, athleteOP.teamPosts);
            await atlheteModel.findByIdAndUpdate(postExists.athleteOpID, {teamPosts: athleteOP.teamPosts});
            await postModel.findByIdAndDelete(id);
            return res.status(200).send("Deleted post successfully");
        };
        res.status(400).send("Please insert an opID or teamID+admID to delete a post");
    } catch(error) {
        res.status(500).json(error.message);
    };
};

module.exports = {
    newPost,
    deletePost
}