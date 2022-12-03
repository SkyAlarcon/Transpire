# ATHLETES
## createAtlhete
- Create Athlete with:
  >Username
  >Password
  >Email
  >Pronouns
  >Sports of interest

## login
- Login Athlete to recieve access token

## allAtlhetes
- Get a list of ALL Athletes
  - Recieved info:
    >Username
    >Sports of interest
    >Joined teams

## updateAtlhete
- Update athlete's personal info:
  >Username
  >Email
  >Pronouns
  >Sports of interest

## findAthleteById
- Find an Athlete via ID
  - Recieved info:
    >Username
    >Email
    >Pronouns
    >Sports of interest
    >Joined teams
    >Followers
    >Following

## findAthleteByQuery
- Find an Athlete via query
  - Find by username
  - Find by Sports of interest

## follow_Unfollow
- Follow another athlete
- Unfollow already followed athlete

## deleteAthlete
- Delete Athlete's account
  - Remove athlete's ID from teams
  - Remove athlete's ID from "following" data from other athletes

# TEAMS
## createTeam
- Create Team with:
  >Name
  >Sports practiced
  >If the group is friendly or exclusive to trans people
  >Description
  >Adm list
  >Athletes list
  >Socials for messaging

## allTeams
- Get a list of ALL team
  - Recieved info:
    >Name
    >Sport practiced
    >Description

## updateTeam
- Update team's info:
  >Name
  >Description
  >Social
  >Sports of interest

## addRemoveAdministrator
- Add/Remove Admin
- Connection:
  - If you going to add an admin they MUST be in team

## findTeamById
- Find an team via ID
  - Recieved info:
    >Name
    >Athletes
    >Description
    >Sports practiced
    >If the is friendly or exclusive to trans people

## findTeamByQuery
- Find an team via query
  - Find by name
  - Find by Sports practiced
  - Find by trans friendliness or exclusiveness

## removeAthleteFromTeam
- Remove athlete from team
  - Remove team from Athlete's teams list
  - Remove athlete from team's athletes

## enter_LeaveTeam
- Enter or leave a team
  - If entering, athlete's ID is inserted at team's athletes list
  - If leaving, athlete's ID is removed from team's athletes list

## deleteTeam
- Delete team
  - Remove the team from ALL athletes' teams list


# End of developed methods

[Go back to README](https://github.com/SkyAlarcon/Transpire#readme)